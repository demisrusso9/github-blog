import { Profile } from '@/components/Profile'
import { SearchForm } from '@/components/SearchForm'
import { BlogContainer } from './styles'
import { Cards } from '@/components/Cards'
import { BlogProvider } from '@/contexts/BlogContext'

export function Blog() {
  return (
    <BlogProvider>
      <BlogContainer>
        <Profile />

        <SearchForm />

        <Cards />
      </BlogContainer>
    </BlogProvider>
  )
}
