import { useGitHubBlog } from '@/hooks/useGithubBlog'
import { SearchFormContainer, SearchFormInput } from './styles'
import { useState } from 'react'

export function SearchForm() {
  const { posts, fetchGithubIssues } = useGitHubBlog()
  const [inputValue, setInputValue] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    fetchGithubIssues(inputValue)
  }

  return (
    <SearchFormContainer>
      <div>
        <p>Publicações</p>

        <span>{posts.total} publicações</span>
      </div>

      <form onSubmit={handleSubmit}>
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
