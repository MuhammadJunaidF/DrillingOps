import { Component, OnInit } from '@angular/core';
import { AddEventComponent } from '../add-event/add-event/add-event.component';
import { BehaviorSubject } from 'rxjs';
import { AddEventDetailDto, EventService } from 'src/app/shared/services/nswag/service-proxies';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  eventList: any;
  _item = new BehaviorSubject<any>('');
  _modelTitle = new BehaviorSubject<any>('');
  isVisible: boolean = false;

  constructor(private dataapiSerivce: EventService,private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void{
    this.dataapiSerivce.getEvents()
    .subscribe((result) => {
      this.eventList = result;
    })
  }

  showModal(): void {
    this._modelTitle.next('Add');
    let payload = {
      item: {},
      isEditmode: false,
    };
    this._item.next(payload);
    this.isVisible = true;
  }

  onUpdate(item: AddEventDetailDto): void {
    this._modelTitle.next('Update');
    let payload = {
      item: item,
      isEditmode: true,
    };
    this._item.next(payload);
    this.isVisible = true;
  }

 
  showDialog(event: any){
    this.showCreateOrEditDrillDialog(event).then(result => {
      if(result != undefined){
        this.ngOnInit();
      }
    })
  }

  showCreateOrEditDrillDialog(event: any): Promise<any> {
    let createOrEditDrillDialog;
    if (!event) {
      createOrEditDrillDialog = this._modalService.open(AddEventComponent, { size: 'xs' });
      
    }
    else {
      createOrEditDrillDialog = this._modalService.open(AddEventComponent, { size: 'xs' });
      createOrEditDrillDialog.componentInstance.item = event;
    }
    return createOrEditDrillDialog.result;
  }

  deleteConfirmation( title: string | undefined | null = null,
    message: string | undefined | null = null,
    btnOkText: string | undefined | null = null,
    btnCancelText: string | undefined | null = null,
    isDelete: true | false = false,
    dialogSize: 'sm' | 'lg' | 'md' = 'md') :  Promise<boolean>{

      const options: NgbModalOptions = dialogSize
      ? {
        size: dialogSize,
        
      }
      : {
       
      };
    
    const modalRef = this._modalService.open(ConfirmationDialogComponent, options);
    modalRef.componentInstance.title = title === undefined || title === null ? 'Are you sure?' : title;
    modalRef.componentInstance.message = message === undefined || message === null
      ? 'The action can\'t be undone. Do you wish to continue?' : message;
    modalRef.componentInstance.btnOkText = btnOkText === undefined || btnOkText === null ? 'Confirm' : btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText === undefined || btnCancelText === null ? 'Cancel' : btnCancelText;
    modalRef.componentInstance.btnOkClass = !isDelete ? 'btn-primary text-capitalize' : 'btn-danger text-capitalize';
    //modalRef.componentInstance.btnOkClass = 'btn-danger text-capitalize';
    modalRef.componentInstance.headerClass = !isDelete ? 'primary' : 'danger';
    modalRef.componentInstance.isDelete = isDelete;

    return modalRef.result;
  }

  deleteEvent(event: any){
    this.deleteConfirmation().then(result => {
      if(result){
        this.dataapiSerivce.delete(event.id).subscribe(result => {
          if(result){
            this.ngOnInit();
          }
        });
      }
    });
    
  }
}
