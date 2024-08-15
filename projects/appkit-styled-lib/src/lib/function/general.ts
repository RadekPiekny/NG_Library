export function clone(obj: any): Object | undefined {
  if (typeof obj === 'object') {
    return cloneObject(obj);
  }
  if (Array.isArray(obj)) {
    return cloneArray(obj);
  }
  return undefined
}

function cloneObject(obj: Object) {
  let result: any;
  const fileList: Object = cloneObjCheckFile(obj);
  result = JSON.parse(JSON.stringify(obj));
  for (const property in fileList) {
    (result as any)[property] = (fileList as any)[property];
  }
  return result;
}

function cloneArray(arr: any[]) {
  let result: any[];
  result = JSON.parse(JSON.stringify(arr));
  result.forEach((item) => {
    if (typeof item === 'object') {
      item = cloneObject(item);
    }
  });
  return result;
}

function cloneObjCheckFile(obj: any): Object {
  const fileList: Object = {};
  if (typeof obj === 'object') {
    for (const property in obj) {
      if (obj[property] instanceof File || obj[property] instanceof Blob) {
        (fileList as any)[property] = obj[property];
      }
    }
  }
  return fileList;
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function dataURItoBlob(dataURI: string): Blob {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  let mimeString: string;
  if (dataURI.startsWith('data:')) {
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }
    // separate out the mime component
    mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  } else {
    byteString = unescape(dataURI);
    mimeString = 'image/png';
  }

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

export function createFile(
  cleanDataString: string,
  mimeType: string,
  name: string
) {
  const bstr = atob(cleanDataString);
  let n: number = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], name, { type: mimeType });
}

export function blobToFile(theBlob: Blob, fileName: string): File {
  const b: any = theBlob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;

  //Cast to a File() type
  return <File>theBlob;
}

export function imageStringToBlob(data: string, imageFuckery = true): File {
  let adjustedData: string = data;
  if (imageFuckery) {
    if (!data.startsWith('data:')) {
      adjustedData = 'data:image/png;base64,' + data;
    }
  }
  const blob = dataURItoBlob(adjustedData);
  const result: File = blobToFile(blob, 'image');
  return result;
}

export function imageFromStringFuckery(data: string, fuckery = true): string {
  //backend for some reson does not return data:image/png etc...hence fuckery
  let adjustedData: string = data;
  if (fuckery) {
    adjustedData = 'data:image/png;base64,' + data;
  }
  return adjustedData;
}

export const generateRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export function extractImageFromFile(
  file: File
): Promise<string | ArrayBuffer> {
  if (!file) {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  }
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      if (fr.result) {
        resolve(fr.result);
      }
    };
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });
}

export function createImageFromBlob(image: Blob): Promise<any> {
  const fr = new FileReader();
  if (image) {
    fr.readAsDataURL(image);
  }
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(image);
  });
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function downloadFile(file: File): void {
  const url = window.URL.createObjectURL(new Blob([file]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${file.name}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function generateUniqueId(): string {
  const timestamp: number = new Date().getTime();
  const randomAdjust: number = Math.floor(Math.random() * 10000);
  const id: string = (timestamp + randomAdjust).toString();
  return id;
}

export function dateConvert(v: Date | string): Date {
  let result: Date;
  if (typeof v === 'string') {
    result = new Date(v);
  } else {
    result = v;
  }
  return result;
};