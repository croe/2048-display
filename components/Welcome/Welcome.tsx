'use client'

import { Text, Title, Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './Welcome.module.css'
import { ScrollPromotion } from '@/components/ScrollPromotion/ScrollPromotion'
import { ModalIPMS } from '@/components/ModalIPMS/ModalIPMS'
import { ModalRDC } from '@/components/ModalRDC/ModalRDC'

export const Welcome = () => {
  const [openedRDC, {open: openRDC, close: closeRDC}] = useDisclosure(false)
  const [openedIPMS, {open: openIPMS, close: closeIPMS}] = useDisclosure(false)


  return (
    <>
      <div className={classes.title_wrap}>
        <Text className={classes.title} ta="center" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
          2048
        </Text>
        <Text className={classes.subline} ta="center" variant="gradient" gradient={{ from: 'blue', to: 'yellow' }}>
          IPMS × RUE DE CHAT
        </Text>
        <div className={classes.scroll}>
          <ScrollPromotion />
        </div>
      </div>
      <div className={classes.storyline}>
        <p>未来予知型AI「SHEEP」によって紛争や事件が起こる前に予知されるようになった未来。</p>
        <p>AIを頂点として超集権国家「SHEEPS」がつくられ、人々は安全安心を求めてこの社会にやってくる。</p>
        <p>それがしばらく続いた後、若者を中心に一つの動きが広がっていった。「何かがあるわけじゃない、ただ疑問なだけだ」</p>
        <p>自由で自律分散な社会を求めた彼らは自分たちを「OWLS」と呼び、互いに個人を明かさずに団結を示そうとしている。</p>
        <p>そんな世界のストーリー。</p>
        <Button size="xl" onClick={openIPMS}>MORE</Button>
        <Button size="xl" onClick={openRDC}>MORE</Button>
      </div>
      <div className={classes.storyline}>
        <Title order={2}>IPMS</Title>
        <p>IPMSとは、以下の3つの役割に分けられるユーザーが物理的な製造（調達）の各工程を分散的に担うことで、互いを信用せず、個人情報を一切渡さないまま、一連の製造（調達）工程を達成可能なシステムである。</p>
        <p>製品の設計図、原型のモデルを開発する「Sculptor」<br/>
          原型からパーツを製造・複製し、秘匿した場所を暗号化NFTで共有する「Duplicator」<br/>
          最終的に全てのパーツを入手して組み合わせる「Assembler」</p>
        <p>全ての役割は独立して動くことができ、非同期で各工程が進んでいく。
          費用は「Assembler」が支払い、「Sculptor」「Duplicator」は「Assembler」の完了報告によって報酬を得る。システム利用者の拡大に従って分散性が高まり、物理的な調達距離を小さくすることができる。</p>
        <Title order={2}>RUE DE CHAT</Title>
        <p>Web3時代の新しいファッションをつくる「RUE DE CHAT」は、メタバースで着用するデジタルファッションと、それらのビジュアルや思想をダイレクトに投影させたフィジカルファッションを作製して現実の世界でも着用する、というファッションの新しい楽しさを追求したブランド</p>
        <Button size="xl">MORE</Button>
      </div>
      <ModalIPMS opened={openedIPMS} close={closeIPMS} />
      <ModalRDC opened={openedRDC} close={closeRDC} />
    </>
  )
}
