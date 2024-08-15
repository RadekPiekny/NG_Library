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

import { ReusableComponent } from '../models/reusable-component';
import { ReusableComponentGroup } from '../models/reusable-component-group';
import { WebBlocksComponent } from '../models/web-blocks-component';

@Injectable({
  providedIn: 'root',
})
export class ComponentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiComponentIdGet
   */
  static readonly ApiComponentIdGetPath = '/api/Component/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WebBlocksComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentIdGetPath, 'get');
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
        return r as StrictHttpResponse<WebBlocksComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<WebBlocksComponent> {

    return this.apiComponentIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WebBlocksComponent>) => r.body as WebBlocksComponent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<WebBlocksComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentIdGetPath, 'get');
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
        return r as StrictHttpResponse<WebBlocksComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<WebBlocksComponent> {

    return this.apiComponentIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WebBlocksComponent>) => r.body as WebBlocksComponent)
    );
  }

  /**
   * Path part for operation apiComponentIdDelete
   */
  static readonly ApiComponentIdDeletePath = '/api/Component/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdDelete$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WebBlocksComponent>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<Array<WebBlocksComponent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdDelete$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<WebBlocksComponent>> {

    return this.apiComponentIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WebBlocksComponent>>) => r.body as Array<WebBlocksComponent>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdDelete$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WebBlocksComponent>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<Array<WebBlocksComponent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentIdDelete$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<WebBlocksComponent>> {

    return this.apiComponentIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WebBlocksComponent>>) => r.body as Array<WebBlocksComponent>)
    );
  }

  /**
   * Path part for operation apiComponentPost
   */
  static readonly ApiComponentPostPath = '/api/Component';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentPost$Plain$Response(params?: {
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiComponentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentPost$Plain(params?: {
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<number> {

    return this.apiComponentPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentPost$Json$Response(params?: {
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiComponentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentPost$Json(params?: {
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<number> {

    return this.apiComponentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiComponentSkeletonPost
   */
  static readonly ApiComponentSkeletonPostPath = '/api/Component/Skeleton';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentSkeletonPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentSkeletonPost$Plain$Response(params?: {
    ReusableComponentId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentSkeletonPostPath, 'post');
    if (params) {
      rb.query('ReusableComponentId', params.ReusableComponentId, {"style":"form"});
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
   * To access the full response (for headers, for example), `apiComponentSkeletonPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentSkeletonPost$Plain(params?: {
    ReusableComponentId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<number> {

    return this.apiComponentSkeletonPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentSkeletonPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentSkeletonPost$Json$Response(params?: {
    ReusableComponentId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentSkeletonPostPath, 'post');
    if (params) {
      rb.query('ReusableComponentId', params.ReusableComponentId, {"style":"form"});
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
   * To access the full response (for headers, for example), `apiComponentSkeletonPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentSkeletonPost$Json(params?: {
    ReusableComponentId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<number> {

    return this.apiComponentSkeletonPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiComponentUpdateSkeletonPost
   */
  static readonly ApiComponentUpdateSkeletonPostPath = '/api/Component/UpdateSkeleton';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentUpdateSkeletonPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateSkeletonPost$Plain$Response(params?: {
    ReusableComponentId?: number;
    originalSkeletonId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<StrictHttpResponse<WebBlocksComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentUpdateSkeletonPostPath, 'post');
    if (params) {
      rb.query('ReusableComponentId', params.ReusableComponentId, {"style":"form"});
      rb.query('originalSkeletonId', params.originalSkeletonId, {"style":"form"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WebBlocksComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentUpdateSkeletonPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateSkeletonPost$Plain(params?: {
    ReusableComponentId?: number;
    originalSkeletonId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<WebBlocksComponent> {

    return this.apiComponentUpdateSkeletonPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<WebBlocksComponent>) => r.body as WebBlocksComponent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentUpdateSkeletonPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateSkeletonPost$Json$Response(params?: {
    ReusableComponentId?: number;
    originalSkeletonId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<StrictHttpResponse<WebBlocksComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentUpdateSkeletonPostPath, 'post');
    if (params) {
      rb.query('ReusableComponentId', params.ReusableComponentId, {"style":"form"});
      rb.query('originalSkeletonId', params.originalSkeletonId, {"style":"form"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<WebBlocksComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentUpdateSkeletonPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateSkeletonPost$Json(params?: {
    ReusableComponentId?: number;
    originalSkeletonId?: number;
    context?: HttpContext
    body?: WebBlocksComponent
  }
): Observable<WebBlocksComponent> {

    return this.apiComponentUpdateSkeletonPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<WebBlocksComponent>) => r.body as WebBlocksComponent)
    );
  }

  /**
   * Path part for operation apiComponentEditorComponentGet
   */
  static readonly ApiComponentEditorComponentGetPath = '/api/Component/EditorComponent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ReusableComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ReusableComponent> {

    return this.apiComponentEditorComponentGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponent>) => r.body as ReusableComponent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ReusableComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ReusableComponent> {

    return this.apiComponentEditorComponentGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponent>) => r.body as ReusableComponent)
    );
  }

  /**
   * Path part for operation apiComponentEditorComponentPost
   */
  static readonly ApiComponentEditorComponentPostPath = '/api/Component/EditorComponent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<StrictHttpResponse<ReusableComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentPostPath, 'post');
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
        return r as StrictHttpResponse<ReusableComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentPost$Plain(params?: {
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<ReusableComponent> {

    return this.apiComponentEditorComponentPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponent>) => r.body as ReusableComponent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentPost$Json$Response(params?: {
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<StrictHttpResponse<ReusableComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentPostPath, 'post');
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
        return r as StrictHttpResponse<ReusableComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentPost$Json(params?: {
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<ReusableComponent> {

    return this.apiComponentEditorComponentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponent>) => r.body as ReusableComponent)
    );
  }

  /**
   * Path part for operation apiComponentUpdateEditorComponentPost
   */
  static readonly ApiComponentUpdateEditorComponentPostPath = '/api/Component/UpdateEditorComponent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentUpdateEditorComponentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateEditorComponentPost$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<StrictHttpResponse<ReusableComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentUpdateEditorComponentPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentUpdateEditorComponentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateEditorComponentPost$Plain(params?: {
    id?: number;
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<ReusableComponent> {

    return this.apiComponentUpdateEditorComponentPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponent>) => r.body as ReusableComponent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentUpdateEditorComponentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateEditorComponentPost$Json$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<StrictHttpResponse<ReusableComponent>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentUpdateEditorComponentPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentUpdateEditorComponentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentUpdateEditorComponentPost$Json(params?: {
    id?: number;
    context?: HttpContext
    body?: ReusableComponent
  }
): Observable<ReusableComponent> {

    return this.apiComponentUpdateEditorComponentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponent>) => r.body as ReusableComponent)
    );
  }

  /**
   * Path part for operation apiComponentEditorComponentGroupGet
   */
  static readonly ApiComponentEditorComponentGroupGetPath = '/api/Component/EditorComponentGroup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupGet$Plain$Response(params?: {
    id?: number;
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ReusableComponentGroup>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
      rb.query('includeComponents', params.includeComponents, {"style":"form"});
      rb.query('skeleton', params.skeleton, {"style":"form"});
      rb.query('type', params.type, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponentGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupGet$Plain(params?: {
    id?: number;
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<ReusableComponentGroup> {

    return this.apiComponentEditorComponentGroupGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponentGroup>) => r.body as ReusableComponentGroup)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupGet$Json$Response(params?: {
    id?: number;
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ReusableComponentGroup>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
      rb.query('includeComponents', params.includeComponents, {"style":"form"});
      rb.query('skeleton', params.skeleton, {"style":"form"});
      rb.query('type', params.type, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponentGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupGet$Json(params?: {
    id?: number;
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<ReusableComponentGroup> {

    return this.apiComponentEditorComponentGroupGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponentGroup>) => r.body as ReusableComponentGroup)
    );
  }

  /**
   * Path part for operation apiComponentEditorComponentGroupPost
   */
  static readonly ApiComponentEditorComponentGroupPostPath = '/api/Component/EditorComponentGroup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentGroupPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ReusableComponentGroup
  }
): Observable<StrictHttpResponse<ReusableComponentGroup>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupPostPath, 'post');
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
        return r as StrictHttpResponse<ReusableComponentGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentGroupPost$Plain(params?: {
    context?: HttpContext
    body?: ReusableComponentGroup
  }
): Observable<ReusableComponentGroup> {

    return this.apiComponentEditorComponentGroupPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponentGroup>) => r.body as ReusableComponentGroup)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentGroupPost$Json$Response(params?: {
    context?: HttpContext
    body?: ReusableComponentGroup
  }
): Observable<StrictHttpResponse<ReusableComponentGroup>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupPostPath, 'post');
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
        return r as StrictHttpResponse<ReusableComponentGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiComponentEditorComponentGroupPost$Json(params?: {
    context?: HttpContext
    body?: ReusableComponentGroup
  }
): Observable<ReusableComponentGroup> {

    return this.apiComponentEditorComponentGroupPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponentGroup>) => r.body as ReusableComponentGroup)
    );
  }

  /**
   * Path part for operation apiComponentEditorComponentGroupDelete
   */
  static readonly ApiComponentEditorComponentGroupDeletePath = '/api/Component/EditorComponentGroup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupDelete$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ReusableComponentGroup>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponentGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupDelete$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ReusableComponentGroup> {

    return this.apiComponentEditorComponentGroupDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponentGroup>) => r.body as ReusableComponentGroup)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupDelete$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ReusableComponentGroup>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ReusableComponentGroup>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupDelete$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ReusableComponentGroup> {

    return this.apiComponentEditorComponentGroupDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ReusableComponentGroup>) => r.body as ReusableComponentGroup)
    );
  }

  /**
   * Path part for operation apiComponentEditorComponentGroupsGet
   */
  static readonly ApiComponentEditorComponentGroupsGetPath = '/api/Component/EditorComponentGroups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupsGet$Plain$Response(params?: {
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ReusableComponentGroup>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupsGetPath, 'get');
    if (params) {
      rb.query('includeComponents', params.includeComponents, {"style":"form"});
      rb.query('skeleton', params.skeleton, {"style":"form"});
      rb.query('type', params.type, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReusableComponentGroup>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupsGet$Plain(params?: {
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<Array<ReusableComponentGroup>> {

    return this.apiComponentEditorComponentGroupsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReusableComponentGroup>>) => r.body as Array<ReusableComponentGroup>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentEditorComponentGroupsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupsGet$Json$Response(params?: {
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ReusableComponentGroup>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentEditorComponentGroupsGetPath, 'get');
    if (params) {
      rb.query('includeComponents', params.includeComponents, {"style":"form"});
      rb.query('skeleton', params.skeleton, {"style":"form"});
      rb.query('type', params.type, {"style":"form"});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReusableComponentGroup>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentEditorComponentGroupsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentEditorComponentGroupsGet$Json(params?: {
    includeComponents?: boolean;
    skeleton?: boolean;
    type?: string;
    context?: HttpContext
  }
): Observable<Array<ReusableComponentGroup>> {

    return this.apiComponentEditorComponentGroupsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReusableComponentGroup>>) => r.body as Array<ReusableComponentGroup>)
    );
  }

  /**
   * Path part for operation apiComponentReusableIdDelete
   */
  static readonly ApiComponentReusableIdDeletePath = '/api/Component/Reusable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentReusableIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableIdDelete$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WebBlocksComponent>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentReusableIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<Array<WebBlocksComponent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentReusableIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableIdDelete$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<WebBlocksComponent>> {

    return this.apiComponentReusableIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WebBlocksComponent>>) => r.body as Array<WebBlocksComponent>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentReusableIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableIdDelete$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<WebBlocksComponent>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentReusableIdDeletePath, 'delete');
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
        return r as StrictHttpResponse<Array<WebBlocksComponent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentReusableIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableIdDelete$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Array<WebBlocksComponent>> {

    return this.apiComponentReusableIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<WebBlocksComponent>>) => r.body as Array<WebBlocksComponent>)
    );
  }

  /**
   * Path part for operation apiComponentReusableComponentSkeletonsGet
   */
  static readonly ApiComponentReusableComponentSkeletonsGetPath = '/api/Component/ReusableComponentSkeletons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentReusableComponentSkeletonsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableComponentSkeletonsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ReusableComponent>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentReusableComponentSkeletonsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReusableComponent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentReusableComponentSkeletonsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableComponentSkeletonsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ReusableComponent>> {

    return this.apiComponentReusableComponentSkeletonsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReusableComponent>>) => r.body as Array<ReusableComponent>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiComponentReusableComponentSkeletonsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableComponentSkeletonsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ReusableComponent>>> {

    const rb = new RequestBuilder(this.rootUrl, ComponentService.ApiComponentReusableComponentSkeletonsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ReusableComponent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiComponentReusableComponentSkeletonsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiComponentReusableComponentSkeletonsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ReusableComponent>> {

    return this.apiComponentReusableComponentSkeletonsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ReusableComponent>>) => r.body as Array<ReusableComponent>)
    );
  }

}
