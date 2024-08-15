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

import { CssGroupFamily } from '../models/css-group-family';

@Injectable({
  providedIn: 'root',
})
export class CssGroupFamilyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCssGroupFamilyPost
   */
  static readonly ApiCssGroupFamilyPostPath = '/api/CssGroupFamily';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupFamilyPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CssGroupFamily
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCssGroupFamilyPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupFamilyPost$Plain(params?: {
    context?: HttpContext
    body?: CssGroupFamily
  }
): Observable<number> {

    return this.apiCssGroupFamilyPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupFamilyPost$Json$Response(params?: {
    context?: HttpContext
    body?: CssGroupFamily
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCssGroupFamilyPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupFamilyPost$Json(params?: {
    context?: HttpContext
    body?: CssGroupFamily
  }
): Observable<number> {

    return this.apiCssGroupFamilyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCssGroupFamilyIdGet
   */
  static readonly ApiCssGroupFamilyIdGetPath = '/api/CssGroupFamily/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CssGroupFamily>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyIdGetPath, 'get');
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
        return r as StrictHttpResponse<CssGroupFamily>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupFamilyIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CssGroupFamily> {

    return this.apiCssGroupFamilyIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CssGroupFamily>) => r.body as CssGroupFamily)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CssGroupFamily>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyIdGetPath, 'get');
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
        return r as StrictHttpResponse<CssGroupFamily>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupFamilyIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CssGroupFamily> {

    return this.apiCssGroupFamilyIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CssGroupFamily>) => r.body as CssGroupFamily)
    );
  }

  /**
   * Path part for operation apiCssGroupFamilyIdDelete
   */
  static readonly ApiCssGroupFamilyIdDeletePath = '/api/CssGroupFamily/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCssGroupFamilyIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiCssGroupFamilyIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCssGroupFamilyAllGet
   */
  static readonly ApiCssGroupFamilyAllGetPath = '/api/CssGroupFamily/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyAllGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CssGroupFamily>>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CssGroupFamily>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupFamilyAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyAllGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<CssGroupFamily>> {

    return this.apiCssGroupFamilyAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CssGroupFamily>>) => r.body as Array<CssGroupFamily>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyAllGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CssGroupFamily>>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CssGroupFamily>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssGroupFamilyAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssGroupFamilyAllGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<CssGroupFamily>> {

    return this.apiCssGroupFamilyAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CssGroupFamily>>) => r.body as Array<CssGroupFamily>)
    );
  }

  /**
   * Path part for operation apiCssGroupFamilyUpdatePost
   */
  static readonly ApiCssGroupFamilyUpdatePostPath = '/api/CssGroupFamily/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssGroupFamilyUpdatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupFamilyUpdatePost$Response(params?: {
    context?: HttpContext
    body?: CssGroupFamily
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CssGroupFamilyService.ApiCssGroupFamilyUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCssGroupFamilyUpdatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssGroupFamilyUpdatePost(params?: {
    context?: HttpContext
    body?: CssGroupFamily
  }
): Observable<void> {

    return this.apiCssGroupFamilyUpdatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
