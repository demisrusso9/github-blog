import { useGitHubBlog } from '@/hooks/useGithubBlog'
import {
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostHeader,
  PostTitle
} from './styles'
import { formatDate } from '@/utils/formatDate'

export function Post() {
  const { posts } = useGitHubBlog()

  function limitCharacters(text: string, limit: number) {
    if (text?.length > limit) {
      return text.slice(0, limit) + '...'
    }
  }

  return (
    <PostContainer>
      {posts.items &&
        posts.items.map(post => (
          <PostContent key={post.url}>
            <PostHeader>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{formatDate(post.created_at)}</PostDate>
            </PostHeader>

            <PostDescription>{limitCharacters(post.body, 200)}</PostDescription>
          </PostContent>
        ))}
    </PostContainer>
  )
}
