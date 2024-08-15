export interface FileGuideForm {
    label: string,
    uploadInstruction: string,
    accept: string,
    multiple: boolean,
    icon: fwwfe,
    size: 's' | 'xs' | 'm' | 'auto',
    disabled: boolean
}

export interface fwwfe {
    icon: boolean,
    iconEnabled: string | 'default', 
    iconDisabled: string
}