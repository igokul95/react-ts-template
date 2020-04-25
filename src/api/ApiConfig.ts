import { AjaxRequestBuilder } from "./AjaxBuilder";

const getConfigurationBuilder: (url: string) => AjaxRequestBuilder = (
  url: string
) =>
  new AjaxRequestBuilder()
    .headers({
      "Content-Type": "application/json"
    })
    .method("GET")
    .url(url);

export const getConfigWithoutToken = (url: string) => {
  return getConfigurationBuilder(url).build();
};

export const getConfig = (url: string, token: string) =>
  getConfigurationBuilder(url)
    .appendAuthToken(token)
    .build();

    export const getConfigWithBody = (url: string, body:any, token: string) =>
    getConfigurationBuilder(url)
      .appendAuthToken(token)
      .body(body)
      .build();

const postConfigurationBuilder: (
  url: string,
  body: any
) => AjaxRequestBuilder = (url: string, body: any) =>
  new AjaxRequestBuilder()
    .method("POST")
    .headers({
      "Content-Type": "application/json"
    })
    .url(url)
    .body(body);
// .headers(sampleHeader);

export const postConfigurationWithJson = (
  url: string,
  body: any
) => {
  return postConfigurationBuilder(url, body)
    .build();
};


const postConfigurationBuilderFormData: (
  url: string,
  body: FormData
) => AjaxRequestBuilder = (url: string, body: FormData) =>
  new AjaxRequestBuilder()
    .method("POST")
    .url(url)
    .body(body);

export const postConfigurationWithoutToken = (url: string, body: any) => {
  return postConfigurationBuilder(url, body).build();
};

export const postConfig = (url: string, body: any, token: string) => {
  return postConfigurationBuilder(url, body)
    .appendAuthToken(token)
    .build();
};

export const postConfigFormData = (url: string, body: FormData, token: string) => {
  return postConfigurationBuilderFormData(url, body)
    .appendAuthToken(token)
    .build();
};

const patchConfigurationBuilder: (
  url: string,
  body: any
) => AjaxRequestBuilder = (url: string, body: any) =>
  new AjaxRequestBuilder()
    .headers({
      "Content-Type": "application/json"
    })
    .method("PATCH")
    .body(body)
    .url(url);

export const patchConfig = (url: string, body: any, token: string) => {
  return patchConfigurationBuilder(url, body)
    .appendAuthToken(token)
    .build();
};
