export interface BlogIssueDTO {
  title: string
  repository_url: string
  created_at: string
  comments: number
  body: string
  html_url: string
  user: {
    login: string
  }
}
