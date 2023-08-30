import { Modal } from '@mantine/core'
import Image from 'next/image'
import OwlsImg from './owls.png'

export const ModalOWLS = ({opened, close}:{opened: boolean, close: () => void}) => {
  return (
    <Modal
      title="OWLS"
      opened={opened}
      onClose={close}
      size="100%"
    >
      <div>
        <Image src={OwlsImg} alt="OWLS" />
      </div>
    </Modal>
  )
}
