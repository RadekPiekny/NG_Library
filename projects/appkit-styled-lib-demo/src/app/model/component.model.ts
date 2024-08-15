export interface IComponentDemo {
    html?: string;
    ts?: string;
    module?: string;
    active?: boolean;
    name: string;
    listCodeType: string[];
}

export interface IComponentType {
    name: string;
    options: IComponentDemo[];
}

export interface IComponentForm {
    types: IComponentType[];
}

export interface IComponentTexts {
    heading: string;
    items: string[];
}

export interface IComponentData {
    componentForm?: IComponentForm;
    accessibility: IComponentTexts;
    use: IComponentTexts;
    useNot: IComponentTexts;
}

export interface IComponentCode {
    code: fwefewfew, 
    label: string,
    active: boolean
}

export interface fwefewfew {
    text: string,
    languages: ('html' | 'ts' | 'js')[],
    lineNumbers: boolean // if there is more than 5 lines
}