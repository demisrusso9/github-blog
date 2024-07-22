import { useGitHubBlog } from '@/hooks/useGithubBlog'
import * as Select from '@radix-ui/react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Item, Trigger } from './styles'

export function SelectRepository() {
  const { repositories, selectRepository } = useGitHubBlog()

  return (
    <Select.Root
      onValueChange={repository => selectRepository(repository)}
      disabled={repositories.length === 0}
    >
      <Trigger>
        <Select.Value placeholder='Escolha o repositório' />

        <Select.Icon>
          <FontAwesomeIcon icon={faCaretDown} />
        </Select.Icon>
      </Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />

          <Select.Viewport>
            {repositories.map(repo => (
              <Item value={repo.name} key={repo.name}>
                <Select.ItemText>{repo.name}</Select.ItemText>
                <Select.ItemIndicator />
              </Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}