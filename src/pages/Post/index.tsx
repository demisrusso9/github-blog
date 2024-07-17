import { Header } from '@/components/Header'
import { PostInfo } from '@/components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <div>
      <Header />

      <PostContainer>
        <PostInfo />
      </PostContainer>
    </div>
  )
}
