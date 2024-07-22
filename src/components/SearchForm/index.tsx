import { useState } from 'react'
// import * as Select from '@radix-ui/react-select'
import { useGitHubBlog } from '@/hooks/useGithubBlog'
import { SearchFormContainer, SearchFormInput } from './styles'
import { SelectRepository } from '../SelectRepository'

export function SearchForm() {
  const { posts, fetchGithubIssues } = useGitHubBlog()
  const [inputValue, setInputValue] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetchGithubIssues(inputValue)
  }

  return (
    <SearchFormContainer>
      <div>
        <p>Publicações</p>

        <span>{posts.total} publicações</span>
      </div>

      <form onSubmit={handleSubmit}>
        <SelectRepository />

        <SearchFormInput
          type='text'
          placeholder='Buscar conteúdo'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </SearchFormContainer>
  )
}
