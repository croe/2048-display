import { Modal, Divider, Blockquote } from '@mantine/core'
import classes from './ModalIPMS.module.css'
import Image from 'next/image'
import IPMSImage from './ipms.png'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export const ModalIPMS = ({opened, close}:{opened: boolean, close: () => void}) => {
  return (
    <Modal
      title="InterPlanetary Manufacturing System"
      opened={opened}
      onClose={close}
      size="100%"
    >
      <div className={classes.container}>
        <p>IPMSとは、以下の3つの役割に分けられるユーザーが物理的な製造（調達）の各工程を分散的に担うことで、互いを信用せず、個人情報を一切渡さないまま、一連の製造（調達）工程を達成可能なシステムである。</p>
        <p>製品の設計図、原型のモデルを開発する「Sculptor」<br/>
          原型からパーツを製造・複製し、秘匿した場所を暗号化NFTで共有する「Duplicator」<br/>
          最終的に全てのパーツを入手して組み合わせる「Assembler」</p>
        <p>全ての役割は独立して動くことができ、非同期で各工程が進んでいく。<br/>
          費用は「Assembler」が支払い、「Sculptor」「Duplicator」は「Assembler」の完了報告によって報酬を得る。システム利用者の拡大に従って分散性が高まり、物理的な調達距離を小さくすることができる。</p>
        <div className={classes.image_wrap}>
          <TransformWrapper initialScale={1}>
            <TransformComponent>
              <Image src={IPMSImage} alt="IPMS" />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div>
          <Blockquote color="gray" mt="xl">
            <p>オンラインでの直接取引を可能にしたブロックチェーンが徐々に社会を変え始めているが、未だ価値が幻想のままにある理由は物理世界への直接的な影響を与えないからではないだろうか。</p>
            <p>もし分散的なプラットフォームであるブロックチェーンの上に国を描くとしたら、他の国から独立するために匿名・分散的に物理世界へ影響を与える仕組みが必要だろう。</p>
            <p>IPMSは幻想であるブロックチェーンに実効的な暴力装置の礎を与える試みである。この試みは半分はすでに実装され、半分はフィクションのままである。</p>
            <p>そしてこの延長にあるオルタナティブな国の提案は、現在の国というシステムに対してのハッキングであり、テロであり、ストーリーテリングとなる。</p>
            <p>物理的に直接的影響を与える仕組みは、ブロックチェーンと同じだけの匿名性・ロバスト性を持つ必要があると考える。<br/>なぜなら他の国に規制されて止まってしまうような国では独立した国と呼べないからだ。</p>
            <p>物理的に暴力が実行されるまでには大まかに「製造（調達）→移動（設置）→実行（使用）」の段階があると考えた。<br/>そしてこれらそれぞれの段階がブロックチェーンの思想に従った性質を持つ必要がある。</p>
            <p>今回はまず「製造」ステップの提案を行う。<br/>もしこのシステムが完全に実現したら、現在の国は労働力を奪われ、ブロックチェーンが直接君に銃口を突きつけることになるだろう。</p>
          </Blockquote>
        </div>
      </div>
    </Modal>
  )
}
