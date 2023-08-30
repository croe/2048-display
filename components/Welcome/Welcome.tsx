'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import {
  Text, Blockquote, Button, useMantineColorScheme, Avatar } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './Welcome.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ScrollPromotion } from '@/components/ScrollPromotion/ScrollPromotion'
import { ModalIPMS } from '@/components/ModalIPMS/ModalIPMS'
import { ModalRDC } from '@/components/ModalRDC/ModalRDC'
import { ModalOWLS } from '@/components/ModalOWLS/ModalOWLS'
import { ModalSHEEPS } from '@/components/ModalSHEEPS/ModalSHEEPS'
import { CustomCursor } from '@/components/CustomCursor/CustomCursor'
import OpenseaImg from './opensea.png'
import IbkitImg from './ibkit.png'
import Ruedechat from './ruedechat.png'
import Step1 from './owls1.png'
import Step2 from './owls2.png'
import Step3 from './owls3.png'
import ReactPlayer from 'react-player'

export const Welcome = () => {
  const { setColorScheme } = useMantineColorScheme()
  const [openedRDC, {open: openRDC, close: closeRDC}] = useDisclosure(false)
  const [openedIPMS, {open: openIPMS, close: closeIPMS}] = useDisclosure(false)
  const [openedOWLS, {open: openOWLS, close: closeOWLS}] = useDisclosure(false)
  const [openedSHEEPS, {open: openSHEEPS, close: closeSHEEPS}] = useDisclosure(false)
  useEffect(() => {
    setColorScheme('dark')
    AOS.init({
      debounceDelay: 50, // ウィンドウのサイズ変更時に使用するデバウンスの遅延時間（上級者向け)
      throttleDelay: 99, // ページをスクロールする際のスロットルの遅延時間 (上級者向け)


      // `data-aos-*` 属性で要素ごとにオーバーライドできる設定です。
      offset: 200, // 元のトリガーポイントからのオフセット(px単位)
      delay: 300, // 0から3000までの値を、50msステップで設定
      duration: 1000, // 0～3000の値を、50msステップで設定
      easing: 'ease-in-out', // AOSアニメーションのデフォルトイージング
      once: false, // - スクロールダウン中に、アニメーションを一度だけ行うかどうか
      mirror: false, // スクロール中に要素をアニメーションさせるかどうか
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <div>
      <div className={classes.title_wrap}>
        <Text className={classes.title} ta="center" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>2048</Text>
        <Text className={classes.subline} ta="center" variant="gradient" gradient={{ from: 'blue', to: 'yellow' }}>IPMS × RUE DE CHAT</Text>
        <div className={classes.scroll}>
          <ScrollPromotion />
        </div>
      </div>
      <div className={classes.storyline}>
        <p data-aos="fade-up">未来予知型AI「SHEEP」によって紛争や事件が起こる前に予知されるようになった未来。AIを頂点として超集権国家「<Button variant="subtle" onClick={openSHEEPS}>SHEEPS</Button>」がつくられ、人々は安全安心を求めてこの社会にやってくる。</p>
        <p data-aos="fade-up">しばらくして若者を中心に一つの動きが広がっていった。「何かがあるわけじゃない、ただ疑問なだけだ」</p>
        <p data-aos="fade-up">自由で自律分散な社会を求めた彼らは自分たちを<br/>「<Button variant="subtle" onClick={openOWLS}>OWLS</Button>」と呼び、互いを明かさないままに団結を<br/>示そうとしている。</p>
        <p data-aos="fade-up">ある日、OWLSたちの集会が開催されることになり一つのメッセージが公開された。</p>
        <br/>
        <Blockquote data-aos="fade-up" className={classes.blockquote} color="gray" mt="xl">
          <p>今回のOWLS集会では<Button variant="subtle" onClick={openIPMS}>IPMS</Button>で作る<Button variant="subtle" onClick={openRDC}>RUE DE CHAT</Button>のドレスか、フクロウの仮面がドレスコードだ。参加したいメンバーは次のリンクからNFTを取得しそれらを製作してくるように。</p>
          <p>集会へは製作する過程で自然と辿り着けるようになっている。</p>
        </Blockquote>
      </div>
      <div className={classes.steps}>
        <Image data-aos="fade-up" data-aos-delay="300" src={Step1} alt="owls1" />
        <Image data-aos="fade-up" data-aos-delay="300" src={Step2} alt="owls2" />
        <Image data-aos="fade-up" data-aos-delay="300" src={Step3} alt="owls3" />
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" className={classes.opensea}>
        <Image src={OpenseaImg} alt="opensea" />
      </div>
      <hr/>
      <div className={classes.storyline}>
        <Button variant="transparent" onClick={openRDC}>RDC</Button>
        member
        member
      </div>
      <ModalIPMS opened={openedIPMS} close={closeIPMS} />
      <ModalRDC opened={openedRDC} close={closeRDC} />
      <ModalOWLS opened={openedOWLS} close={closeOWLS} />
      <ModalSHEEPS opened={openedSHEEPS} close={closeSHEEPS} />
      <CustomCursor />
    </div>
  )
}
