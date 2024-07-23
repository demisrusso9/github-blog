import { Profile } from '@/components/Profile'
import { SearchForm } from '@/components/SearchForm'
import { Cards } from '@/components/Cards'
import { BlogProvider } from '@/contexts/BlogContext'

export function Blog() {
  return (
    <BlogProvider>
      <Profile />
      <SearchForm />
      <Cards />
    </BlogProvider>
  )
}
