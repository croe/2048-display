import { Modal } from '@mantine/core'

export const ModalIPMS = ({opened, close}) => {
  return (
    <Modal opened={opened} onClose={close}>
      <div>
        modal IPMS
      </div>
    </Modal>
  )
}
