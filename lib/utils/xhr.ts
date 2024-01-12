import axios, { AxiosRequestConfig } from 'axios'

interface XhrOptions extends AxiosRequestConfig {
  url: string
}

export const xhr = ({
  url,
  method,
  data,
  params,
  headers = {},
  withCredentials = true,
  ...otherAttributes
}: XhrOptions) => {
  return axios(url, {
    headers,
    method,
    data,
    params,
    withCredentials,
    ...otherAttributes,
  })
}
