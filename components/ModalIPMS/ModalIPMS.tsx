import { Modal } from '@mantine/core'

export const ModalIPMS = ({opened, close}:{opened: boolean, close: () => void}) => {
  return (
    <Modal opened={opened} onClose={close}>
      <div>
        modal IPMS
      </div>
    </Modal>
  )
}
