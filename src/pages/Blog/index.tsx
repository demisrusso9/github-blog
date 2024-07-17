import { Header } from '@/components/Header'
import { Profile } from '@/components/Profile'
import { SearchForm } from '@/components/SearchForm'
import { BlogContainer } from './styles'
import { Post } from '@/components/Post'
import { BlogProvider } from '@/contexts/BlogContext'

export function Blog() {
  return (
    <div>
      <Header />

      <BlogProvider>
        <BlogContainer>
          <Profile />

          <SearchForm />

          <Post />
        </BlogContainer>
      </BlogProvider>
    </div>
  )
}
