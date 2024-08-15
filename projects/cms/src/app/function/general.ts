export function extractAngularClassName(className: string): string {
    let result: string;
    const editPosition: number = className.indexOf('Edit');
    if (editPosition > -1) {
        result = className.slice(0, editPosition);
        return result
    }
    return className.replace('Component','');
}