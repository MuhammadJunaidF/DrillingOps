import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {EventService} from 'src/app/shared/services/nswag/service-proxies';
import { EventHandlerServiceService } from '../../../Helpers/event-handler-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventForm!: UntypedFormGroup;
  isEditMode: boolean = false;
  private itemid: number = 0;
  @Output() newItemEvent = new EventEmitter();
  @Input() item :any;

  submitForm(): void {
    if (this.eventForm.valid) {
      let formValue = this.eventForm.value;
      if (this.isEditMode) {
        formValue['id'] = this.itemid;
        formValue.id = this.dataapiSerivce.addEventDetail(formValue).subscribe((e) => {
         this.ok(true);
          //this.aftersubmission();
          
        });
      } else {
        this.dataapiSerivce.addEventDetail(formValue).subscribe((e) => {
          //this.aftersubmission();
          this.ok(true);
        });
      }
    }
  }
  private aftersubmission() {
    this.eventForm.reset();
    this.newItemEvent.emit();
  }
  constructor(
    private fb: UntypedFormBuilder,
    private dataapiSerivce: EventService,
    private evenhdlerSrv: EventHandlerServiceService,
    private _modalActive: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventId: [null, [Validators.required]],
      start: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      end: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
    //this.subscriptions();
    if(this.item){
      this.eventForm.reset();
      this.eventForm.patchValue(this.item);
      this.itemid = this.item.id;
      this.isEditMode = true;
    }
   
    // this.item.subscribe((e) => {
    //   this.eventForm.reset();
    //   this.eventForm.patchValue(e.item);
    //   this.itemid = e.isEditmode ? e.item.id : 0;
    //   this.isEditMode = e.isEditmode;
    // });
  }

  private subscriptions(): void {
    this.evenhdlerSrv._formSaved.subscribe((e) => {
      this.submitForm();
    });
  }

  
  ok(result: any): void {
    this._modalActive.close(result);
  }

  close() {
    this._modalActive.dismiss();
  }
}

