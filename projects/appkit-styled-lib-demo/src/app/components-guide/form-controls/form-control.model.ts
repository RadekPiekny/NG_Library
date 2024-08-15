import { FormControl, FormGroup } from "@angular/forms";
import { ControlsOf } from 'rp_custom_library/src/lib/model/ng-form-type/ng-form-type.model';

export interface FormControlModel {
    general: ff;
}

export interface ff {
    state: FormControlState | null;
}

export function defaultState() {
    return new FormControl(FormControlStateBase.Default as FormControlState)
}

export function createNewFormControlState(): {general: FormGroup<ControlsOf<ff>>} {
    return {
        general: new FormGroup({
            state: defaultState()
        })
    }
}

export enum FormControlStateBase {
    Default = 'default',
    Disabled = 'disabled',
}

export function codeState(v: FormControlState, space: boolean = true): string {
    if (v === FormControlStateBase.Default) {
        return "";
    }
    return `${space ? ' ': ''}[${v}]="true"`
}
export function stateBuildInHTML(state: FormControlStateBase | FormControlStateErr | FormControlStateReadonly): string {
    switch (state) {
        case FormControlStateBase.Default:
            return ``
            break;
        case FormControlStateBase.Disabled:
            return ` [disabled]="true"`
            break;
        case FormControlStateReadonly.Readonly:
            return ` [readonly]="true"`
            break;
        case FormControlStateErr.Invalid:
            return ` [error]="true"`
            break;
    }
}

export function buildTailwindImports(componentName: string, type: 'component' | 'service' | 'directive' | 'pipe' = 'component') {
    let input: string = '';
    if (componentName.includes('input')) {
        input = `
    "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-form-field-floating-label.mjs",
    "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-form-field-form-field-base.mjs",
    "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-form-field-form-field.mjs"`
    }
    return `/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('./node_modules/@rp_custom_library/appkit-styled-lib/assets/tailwind-config/rp-brand-colors-tailwind-config')
  ],
  content: [
    "./src/**/*.{html,js,ts}",${input}
    "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-${type}-${componentName}.mjs",
  ],
}`
}

export function buildTailwindMultipleImports(componentName: string[], type: 'component' | 'service' | 'directive' | 'pipe' = 'component') {
    let componentImports: string[] = [];
    let input: string = '';
    componentName.forEach(component => {
        if(component.includes('input')) {
            input = `
            "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-form-field-floating-label.mjs",
            "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-form-field-form-field-base.mjs",
            "./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-component-form-field-form-field.mjs"`
        }
            componentImports.push(`"./node_modules/@rp_custom_library/appkit-styled-lib/fesm2022/rp-appkit-styled-lib-src-lib-${type}-${component}.mjs"\n\t`)
    })

    return `/** @type {import('tailwindcss').Config} */
        module.exports = {
            presets: [
            require('./node_modules/@rp_custom_library/appkit-styled-lib/assets/tailwind-config/rp-brand-colors-tailwind-config')
            ],
        content: [
            "./src/**/*.{html,js,ts}",${input},
            ${componentImports}
    ]`
}

export function propBuildInHTML(o: Object): string {
    let props = "";
    Object.entries(o).forEach(entry => {
        const [key, value] = entry;
        if (value) {
            if (key === "general") {
                const x = stateBuildInHTML(value.state);
                props += `${x}`;
                return;
            }
            if (key === "icon" && value === true) {
                props += `icon`;
                return;
            }
            if (key === "icon" && value === false) {
                return;
            }
            switch (typeof value) {
                case 'object':
                    if(value instanceof Date) {
                        let _disableFrom = `'${value.getMonth()}/${value.getDate()}/${value.getFullYear()}'`
                        props += ` [${key}]="${_disableFrom}"`
                    }
                    else if (Array.isArray(value)) {
                        const x = JSON.stringify(value);
                        props += ` [${key}]='${x}'`
                    } else {
                        const x = propBuildInHTML(value);
                        props += ` ${x}`
                    }
                    break;
                case 'boolean':
                    props += ` [${key}]="${value}"`
                    break;
                case 'number':
                    props += ` [${key}]="${value}"`
                    break;
                case 'bigint':
                    props += ` [${key}]="${value}"`
                    break;
                default:
                    props += ` ${key}="${value}"`
                    break;
            }
        }
    });
    return props
}

export function htmlBuild(o: Object, name: string):string {
    const props = propBuildInHTML(o);
    let result = `<${name}${props}></${name}>`
    return result;
}

export function htmlButtonBuild(o: Object, name: string):string {
    let html = htmlBuild(o,name);
    html = removeTextAttribute(html);
    return html
}

export function htmlButtonSingleText(html:string,text:string,newLine: boolean = false) {
    let htmlResult;
    if (newLine) {
        htmlResult = html.replace('><',`>\n${text}\n<`); // \t is tab
    } else {
        htmlResult = html.replace('><',`>${text}<`);
    }
    return htmlResult;
}

export function removeTextAttribute(text) {
    // Use a regular expression to find and remove the 'text="Variable"' attribute
    const newText = text.replace(/ text="[^"]*"/, '');
    return newText;
}

export function extractTextValue(text) {
    // Use a regular expression to match the 'text' attribute and extract its value
    const match = text.match(/text="([^"]*)"/);
    if (match && match[1]) {
      return match[1];
    } else {
      return null; // Return null if 'text' attribute is not found
    }
}

export function htmlInsertNewEl(parentEl: string, o?: Object, newElName?:string, text?:string): string {
    const isNested = parentEl.includes('\n');
    const lastIndex = parentEl.lastIndexOf('</');

    let firstPartPair;
    let lastPartPair;
    if (isNested) {
        firstPartPair = parentEl.substring(0, lastIndex - 1);
        lastPartPair = parentEl.substring(lastIndex - 1);
    } else {
        firstPartPair = parentEl.substring(0, lastIndex);
        lastPartPair = parentEl.substring(lastIndex);
    }
    const lastIndexX = firstPartPair.lastIndexOf('>');

    if (lastIndexX) {
        let newEl;
        if (o && newElName) {
            newEl = htmlBuild(o,newElName);
        } else {
            newEl = text;
        }
        let newText: string;
        if (isNested) {
            newText = `${firstPartPair}\n\t${newEl}${lastPartPair}`;
        } else {
            newText = `${firstPartPair}\n\t${newEl}\n${lastPartPair}`;
        }
        return newText;
    } else {
        throw "parent el does not contain ending '/<' and one '<' before that"
    }
}

export function insertHTMLElement(parentEl: string, newEl: string) {
    const isNested = parentEl.includes('\n');
    const lastIndex = parentEl.lastIndexOf('</');

    let firstPartPair;
    let lastPartPair;
    if (isNested) {
        firstPartPair = parentEl.substring(0, lastIndex - 1);
        lastPartPair = parentEl.substring(lastIndex - 1);
    } else {
        firstPartPair = parentEl.substring(0, lastIndex);
        lastPartPair = parentEl.substring(lastIndex);
    }
    const lastIndexX = firstPartPair.lastIndexOf('>');

    if (lastIndexX) {
        let newText: string;
        if (isNested) {
            newText = `${firstPartPair}\n\t${newEl}${lastPartPair}`;
        } else {
            newText = `${firstPartPair}\n\t${newEl}\n${lastPartPair}`;
        }
        return newText;
    } else {
        throw "parent el does not contain ending '/<' and one '<' before that"
    }
}

export function htmlSelectOptionBuild(v: string) {
    let result: string;
    result = v.replace('/ngx-select>','');
    const option1 = '<ngx-option>option 1</ngx-option>';
    const option2 = '<ngx-option>option 2</ngx-option>';
    result = result.replace('><',`>\n\t${option1}`);
    result = result.replace('</ngx-option>',`</ngx-option>\n\t${option2}`);
    result += '\n</ngx-select>'
    return result
}

export enum FormControlStateReadonly {
    Readonly = 'readonly',
}

export enum FormControlStateErr {
    Invalid = 'invalid'
}

export type FormControlState = FormControlStateBase | FormControlStateErr | FormControlStateReadonly;


type TFormControlStateBase = typeof FormControlStateBase[keyof typeof FormControlStateBase];

export const formControlStates: TFormControlStateBase[] = Object.values(FormControlStateBase);
export const formControlStatesErr: FormControlState[] = [
    ... Object.values(FormControlStateBase),
    ... Object.values(FormControlStateErr)
];
export const formControlStatesFull: FormControlState[] = [
    ... Object.values(FormControlStateBase),
    ... Object.values(FormControlStateReadonly),
    ... Object.values(FormControlStateErr)
];