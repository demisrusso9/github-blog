import { useState } from 'react'

import { useGitHubBlog } from '@/contexts/BlogContext'

import { SelectRepository } from '../SelectRepository'
import { SearchFormContainer, SearchFormInput } from './styles'

export function SearchForm() {
  const { posts, repository, fetchGithubIssues } = useGitHubBlog()
  const [inputValue, setInputValue] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (inputValue.length >= 3) {
      await fetchGithubIssues(inputValue, 1)
    }

    return
  }

  return (
    <SearchFormContainer>
      <div>
        <p>Publicações</p>

        {posts.length > 0 && (
          <span>
            {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <SelectRepository />

        <SearchFormInput
          type='text'
          placeholder='Buscar conteúdo'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          disabled={!repository}
        />
      </form>
    </SearchFormContainer>
  )
}
