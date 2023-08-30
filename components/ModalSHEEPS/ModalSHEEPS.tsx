import { Modal } from '@mantine/core'
import Image from 'next/image'
import SheepsImg from './sheeps.png'


export const ModalSHEEPS = ({opened, close}:{opened: boolean, close: () => void}) => {
  return (
    <Modal
      title="SHEEPS"
      opened={opened}
      onClose={close}
      size="100%"
    >
      <div>
        <Image src={SheepsImg} alt="sheeps" />
      </div>
    </Modal>
  )
}
