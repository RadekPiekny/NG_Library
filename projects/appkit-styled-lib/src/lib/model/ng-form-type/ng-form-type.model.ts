import { FormControl, FormGroup, FormArray } from "@angular/forms";

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? T[K] extends any[]
      ? FormArray
      : FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

export type ToFormGroup<T> = {
  [P in keyof T]: T[P] extends any[]
    ? FormArray
    : FormControl<T[P]>;
};