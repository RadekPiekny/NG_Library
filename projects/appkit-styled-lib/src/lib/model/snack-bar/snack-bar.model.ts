import { ComponentRef } from "@angular/core";

export interface ISnackBar {
    display?: boolean;
    message?: string;
    type?: ISnackBarType;
    duration?: number; // -1 as infinity
    maxCount?: number; // -1 as infinity //TODO//
    id?: number; // counter in service
    time: Date;
    duplicate?: number;
    timer?: any;
    close?: Function;
    position?: number;
    ref?: ComponentRef<any>;
}

export enum ISnackBarType {
    Success = 'Success',
    Error = 'Error',
    Warning = 'Warning'
}

export const defaultSuccessSnackBar: ISnackBar  = {
    display: true,
    message: "message",
    type: ISnackBarType.Success,
    duration: 5000,
    id: + new Date().getMilliseconds(),
    time: new Date()
}

export const defaultErrorSnackBar: ISnackBar  = {
    display: true,
    message: "There was en error",
    type: ISnackBarType.Error,
    duration: 60000,
    id: + new Date().getMilliseconds(),
    time: new Date()
}

export const defaultWarningSnackBar: ISnackBar  = {
    display: true,
    message: "There was en error",
    type: ISnackBarType.Warning,
    duration: 15000,
    id: + new Date().getMilliseconds(),
    time: new Date()
}

export interface IConfirmBar {
    message: string;
    action: any; // function
}