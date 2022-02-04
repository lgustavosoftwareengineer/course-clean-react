export type HttpPostParams = {
  url: string
}

// INTERFACE SEGREGATION PRINCIPLE
export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<void>
}
