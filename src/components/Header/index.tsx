import { HeaderContainer, HeaderContent, NewTransectionButton } from './styled'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Logo.svg'
import { NewTransectionModal } from '../NewTransectionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransectionButton>Nova transação</NewTransectionButton>
          </Dialog.Trigger>

          <NewTransectionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
