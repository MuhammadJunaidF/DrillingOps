/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.15.5.0 (NJsonSchema v10.6.6.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

import * as moment from 'moment';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class EventService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getEvents(): Observable<EventResponseDto> {
        let url_ = this.baseUrl + "/api/Event/GetEvents";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetEvents(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetEvents(<any>response_);
                } catch (e) {
                    return <Observable<EventResponseDto>><any>_observableThrow(e);
                }
            } else
                return <Observable<EventResponseDto>><any>_observableThrow(response_);
        }));
    }

    protected processGetEvents(response: HttpResponseBase): Observable<EventResponseDto> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = EventResponseDto.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    addEventDetail(body: AddEventDetailDto | undefined): Observable<BooleanResponse> {
        let url_ = this.baseUrl + "/api/Event/AddEventDetail";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json-patch+json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddEventDetail(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddEventDetail(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResponse>><any>_observableThrow(response_);
        }));
    }

    protected processAddEventDetail(response: HttpResponseBase): Observable<BooleanResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(<any>null);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    delete(id: number | undefined): Observable<BooleanResponse> {
        let url_ = this.baseUrl + "/api/Event/Delete?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<BooleanResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<BooleanResponse>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<BooleanResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BooleanResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(<any>null);
    }

    /**
     * @return Success
     */
    getChart(): Observable<BarchartDataDTO[]> {
        let url_ = this.baseUrl + "/api/Event/GetChart";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetChart(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetChart(<any>response_);
                } catch (e) {
                    return <Observable<BarchartDataDTO[]>><any>_observableThrow(e);
                }
            } else
                return <Observable<BarchartDataDTO[]>><any>_observableThrow(response_);
        }));
    }

    protected processGetChart(response: HttpResponseBase): Observable<BarchartDataDTO[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(BarchartDataDTO.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(<any>null);
    }
}

export class EventDto implements IEventDto {
    id!: number;
    start!: number;
    end!: number;
    eventId!: number;
    eventName!: string | undefined;

    constructor(data?: IEventDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.start = _data["start"];
            this.end = _data["end"];
            this.eventId = _data["eventId"];
            this.eventName = _data["eventName"];
        }
    }

    static fromJS(data: any): EventDto {
        data = typeof data === 'object' ? data : {};
        let result = new EventDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["start"] = this.start;
        data["end"] = this.end;
        data["eventId"] = this.eventId;
        data["eventName"] = this.eventName;
        return data;
    }
}

export interface IEventDto {
    id: number;
    start: number;
    end: number;
    eventId: number;
    eventName: string | undefined;
}

export class EventResponseDto implements IEventResponseDto {
    items!: EventDto[] | undefined;
    totalCount!: number;
    successful!: boolean;
    message!: string | undefined;

    constructor(data?: IEventResponseDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(EventDto.fromJS(item));
            }
            this.totalCount = _data["totalCount"];
            this.successful = _data["successful"];
            this.message = _data["message"];
        }
    }

    static fromJS(data: any): EventResponseDto {
        data = typeof data === 'object' ? data : {};
        let result = new EventResponseDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["totalCount"] = this.totalCount;
        data["successful"] = this.successful;
        data["message"] = this.message;
        return data;
    }
}

export interface IEventResponseDto {
    items: EventDto[] | undefined;
    totalCount: number;
    successful: boolean;
    message: string | undefined;
}

export class AddEventDetailDto implements IAddEventDetailDto {
    id!: number;
    start!: number;
    end!: number;
    eventId!: number;

    constructor(data?: IAddEventDetailDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.start = _data["start"];
            this.end = _data["end"];
            this.eventId = _data["eventId"];
        }
    }

    static fromJS(data: any): AddEventDetailDto {
        data = typeof data === 'object' ? data : {};
        let result = new AddEventDetailDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["start"] = this.start;
        data["end"] = this.end;
        data["eventId"] = this.eventId;
        return data;
    }
}

export interface IAddEventDetailDto {
    id: number;
    start: number;
    end: number;
    eventId: number;
}

export class BooleanResponse implements IBooleanResponse {
    success!: boolean | undefined;
    message!: string | undefined;
    errors!: string[] | undefined;
    data!: boolean;

    constructor(data?: IBooleanResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.success = _data["success"];
            this.message = _data["message"];
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(item);
            }
            this.data = _data["data"];
        }
    }

    static fromJS(data: any): BooleanResponse {
        data = typeof data === 'object' ? data : {};
        let result = new BooleanResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["success"] = this.success;
        data["message"] = this.message;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item);
        }
        data["data"] = this.data;
        return data;
    }
}

export interface IBooleanResponse {
    success: boolean | undefined;
    message: string | undefined;
    errors: string[] | undefined;
    data: boolean;
}

export class BarchartDataDTO implements IBarchartDataDTO {
    data!: number[] | undefined;
    label!: string | undefined;
    stack!: string | undefined;
    backgroundColor!: string[] | undefined;

    constructor(data?: IBarchartDataDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(item);
            }
            this.label = _data["label"];
            this.stack = _data["stack"];
            if (Array.isArray(_data["backgroundColor"])) {
                this.backgroundColor = [] as any;
                for (let item of _data["backgroundColor"])
                    this.backgroundColor!.push(item);
            }
        }
    }

    static fromJS(data: any): BarchartDataDTO {
        data = typeof data === 'object' ? data : {};
        let result = new BarchartDataDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item);
        }
        data["label"] = this.label;
        data["stack"] = this.stack;
        if (Array.isArray(this.backgroundColor)) {
            data["backgroundColor"] = [];
            for (let item of this.backgroundColor)
                data["backgroundColor"].push(item);
        }
        return data;
    }
}

export interface IBarchartDataDTO {
    data: number[] | undefined;
    label: string | undefined;
    stack: string | undefined;
    backgroundColor: string[] | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}