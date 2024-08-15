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

import { CssClass } from '../models/css-class';

@Injectable({
  providedIn: 'root',
})
export class CssClassService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCssClassPost
   */
  static readonly ApiCssClassPostPath = '/api/CssClass';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssClassPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssClassPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CssClass
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CssClassService.ApiCssClassPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCssClassPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssClassPost$Plain(params?: {
    context?: HttpContext
    body?: CssClass
  }
): Observable<number> {

    return this.apiCssClassPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssClassPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssClassPost$Json$Response(params?: {
    context?: HttpContext
    body?: CssClass
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, CssClassService.ApiCssClassPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCssClassPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssClassPost$Json(params?: {
    context?: HttpContext
    body?: CssClass
  }
): Observable<number> {

    return this.apiCssClassPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiCssClassIdGet
   */
  static readonly ApiCssClassIdGetPath = '/api/CssClass/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssClassIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssClassIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CssClass>> {

    const rb = new RequestBuilder(this.rootUrl, CssClassService.ApiCssClassIdGetPath, 'get');
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
        return r as StrictHttpResponse<CssClass>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssClassIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssClassIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CssClass> {

    return this.apiCssClassIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CssClass>) => r.body as CssClass)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssClassIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssClassIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CssClass>> {

    const rb = new RequestBuilder(this.rootUrl, CssClassService.ApiCssClassIdGetPath, 'get');
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
        return r as StrictHttpResponse<CssClass>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCssClassIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssClassIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<CssClass> {

    return this.apiCssClassIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CssClass>) => r.body as CssClass)
    );
  }

  /**
   * Path part for operation apiCssClassIdDelete
   */
  static readonly ApiCssClassIdDeletePath = '/api/CssClass/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssClassIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssClassIdDelete$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CssClassService.ApiCssClassIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCssClassIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCssClassIdDelete(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiCssClassIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCssClassUpdatePost
   */
  static readonly ApiCssClassUpdatePostPath = '/api/CssClass/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCssClassUpdatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssClassUpdatePost$Response(params?: {
    context?: HttpContext
    body?: CssClass
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CssClassService.ApiCssClassUpdatePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCssClassUpdatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCssClassUpdatePost(params?: {
    context?: HttpContext
    body?: CssClass
  }
): Observable<void> {

    return this.apiCssClassUpdatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
