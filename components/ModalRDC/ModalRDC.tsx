import { Modal } from '@mantine/core'


export const ModalRDC = ({opened, close}) => {
  return (
    <Modal opened={opened} onClose={close}>
      <div>
        ModalRDC
      </div>
    </Modal>
  )
}
