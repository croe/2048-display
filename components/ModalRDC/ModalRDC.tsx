import { Modal } from '@mantine/core'
import ReactPlayer from 'react-player'
import classes from './ModalRDC.module.css'

const paths = ['/RDC-1.mp4', '/RDC-2.mp4']

export const ModalRDC = ({opened, close}:{opened: boolean, close: () => void}) => {
  const random = Math.floor(Math.random() * 2)
  return (
    <Modal
      title="RUE DE CHAT"
      opened={opened}
      onClose={close}
      size="100%"
    >
      <div className={classes.container}>
        <ReactPlayer
          width="100%"
          height="100%"
          loop
          playsinline
          url={paths[random]}
          playing={true}
        />
        <div>
          <p>RUE DE CHAT（RDC)とはファッション、アート、アニメ、音楽、それぞれのもつ楽しい、面白い、先進的、感覚的、社会的な要素をMixし、直感的にすくい取って様々なモノに詰め込む作業を行うスペシャリストの集団です。</p>
          <p>ル・ド・シャット RUE DE CHAT（仏語） 英語でCat Street ストリートに根ずくカルチャーやライフスタイルを謳歌する人たちの情景から名付けました。</p>
          <p>プロジェクト考案者のmuraXXXはアパレルでパタンナー、企画として勤務。アパレル3DCAD黎明期である2008年からLSXを使ったモノつくりをスタートし独立後、CLO、Blender等を駆使して新しいファッションの研究、開発を行っています。</p>
          <p>RDCプロジェクトは、WEB3時代のファッションのシステムの未来を想像、予測して現在に創出し組み立て、未来に向けて継続させる新しいクリエイタービジネスモデルを作ります。NFTで購入してメタバースで着用するデジタルファッションと、それらのビジュアルや思想をダイレクトに投影させたフィジカルファッションを作製して現実の世界でも着用する、というファッションの新しい楽しさを追求したブランドをフルアイテムで構成。</p>
          <p>自律分散型による組織で運営し、アナログ×デジタル、ファッション×ブロックチェーン、コミュニティによるエコシステムの設計などあらゆる可能性に挑戦、ファッションを媒体としたイノベーションを起こすことを目的とします。またクリエイション以外にも、自由、ウェルビーイング、多様性を認める社会の実現をこのプロジェクトを通して訴え、我々が社会に果たす価値、役割を提示していきたいと思っています。</p>
        </div>
        <ReactPlayer
          width="100%"
          height="100%"
          loop
          playsinline
          url={'/RDC.mp4'}
          playing={true}
        />
      </div>
    </Modal>
  )
}
