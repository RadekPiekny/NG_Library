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

import { CssGroup } from '../models/css-group';

@Injectable({
  providedIn: 'root',
})
export class CssGroupService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCssGroupPost
   */
  static readonly ApiCssGroupPostPath = '/api/CssGroup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CssGroup
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupPost$Plain(params?: {
    context?: HttpContext
    body?: CssGroup
  }
): Observable<number> {

    return this.apiCssGroupPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupPost$Json$Response(params?: {
    context?: HttpContext
    body?: CssGroup
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupPost$Json(params?: {
    context?: HttpContext
    body?: CssGroup
  }
): Observable<number> {

    return this.apiCssGroupPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCssGroupIdGet
   */
  static readonly ApiCssGroupIdGetPath = '/api/CssGroup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CssGroup>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CssGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CssGroup> {

    return this.apiCssGroupIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CssGroup>) => r.body as CssGroup)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CssGroup>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CssGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CssGroup> {

    return this.apiCssGroupIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CssGroup>) => r.body as CssGroup)
    );
  }

  /**
   * Path part for operation apiCssGroupIdDelete
   */
  static readonly ApiCssGroupIdDeletePath = '/api/CssGroup/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiCssGroupIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiCssGroupIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCssGroupAllGet
   */
  static readonly ApiCssGroupAllGetPath = '/api/CssGroup/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupAllGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CssGroup>>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CssGroup>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupAllGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<CssGroup>> {

    return this.apiCssGroupAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CssGroup>>) => r.body as Array<CssGroup>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupAllGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CssGroup>>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CssGroup>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupAllGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<CssGroup>> {

    return this.apiCssGroupAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CssGroup>>) => r.body as Array<CssGroup>)
    );
  }

  /**
   * Path part for operation apiCssGroupUpdatePost
   */
  static readonly ApiCssGroupUpdatePostPath = '/api/CssGroup/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupUpdatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupUpdatePost$Response(params?: {
    context?: HttpContext
    body?: CssGroup
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupService.ApiCssGroupUpdatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiCssGroupUpdatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupUpdatePost(params?: {
    context?: HttpContext
    body?: CssGroup
  }
): Observable<void> {

    return this.apiCssGroupUpdatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
