import { Modal } from '@mantine/core'


export const ModalRDC = ({opened, close}:{opened: boolean, close: () => void}) => {
  return (
    <Modal opened={opened} onClose={close}>
      <div>
        ModalRDC
      </div>
    </Modal>
  )
}
