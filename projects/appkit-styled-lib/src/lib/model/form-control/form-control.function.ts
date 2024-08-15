import { FormControlSize } from "./form-control.model"

export function getTailwindHeightForFormControl(v: FormControlSize): string {
    switch (v) {
        case 'xs':
            return 'h-6'
        case 's':
            return 'h-8'
        case 'sm':
            return 'h-10'
        case 'm':
            return 'h-12'
        case 'auto':
            return 'h-auto'
      }
}