export type HttpPostParams = {
  url: string
  body?: object
}

// INTERFACE SEGREGATION PRINCIPLE
export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<void>
}
