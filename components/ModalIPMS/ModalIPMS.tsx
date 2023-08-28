import { Modal, CloseButton } from '@mantine/core'
import classes from './ModalIPMS.module.css'
import Image from 'next/image'
import IPMSImage from './ipms.png'


export const ModalIPMS = ({opened, close}:{opened: boolean, close: () => void}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      size="100%"
      withCloseButton={false}
    >
      <CloseButton size="xl" />
      <div className={classes.image_wrap}>
        <Image src={IPMSImage} alt="IPMS" />
      </div>
    </Modal>
  )
}
