export enum APIUrls {
    sampleAPI = '/sampleAPI',
}

export const ConstructURL = (...params: string[]) => {
    return params.join("");
  };