// INTERFACE SEGREGATION PRINCIPLE
export interface HttpPostClient {
  post: (url: string) => Promise<void>
}
