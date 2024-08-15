/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FileModel } from '../models/file-model';

@Injectable({
  providedIn: 'root',
})
export class FileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFileUploadPost
   */
  static readonly ApiFileUploadPostPath = '/api/File/upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileUploadPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Plain$Response(params?: {
    context?: HttpContext
    body?: {
'file'?: Blob;
}
  }
): Observable<StrictHttpResponse<FileModel>> {

    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFileUploadPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Plain(params?: {
    context?: HttpContext
    body?: {
'file'?: Blob;
}
  }
): Observable<FileModel> {

    return this.apiFileUploadPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<FileModel>) => r.body as FileModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileUploadPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Json$Response(params?: {
    context?: HttpContext
    body?: {
'file'?: Blob;
}
  }
): Observable<StrictHttpResponse<FileModel>> {

    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFileUploadPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUploadPost$Json(params?: {
    context?: HttpContext
    body?: {
'file'?: Blob;
}
  }
): Observable<FileModel> {

    return this.apiFileUploadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<FileModel>) => r.body as FileModel)
    );
  }

  /**
   * Path part for operation apiFileGetGet
   */
  static readonly ApiFileGetGetPath = '/api/File/get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileGetGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileGetGet$Response(params?: {
    name?: string;
    mime?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileGetGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {"style":"form"});
      rb.query('mime', params.mime, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFileGetGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileGetGet(params?: {
    name?: string;
    mime?: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiFileGetGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
