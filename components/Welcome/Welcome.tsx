import { Title, Text, Anchor } from '@mantine/core'
import classes from './Welcome.module.css'

export const Welcome = () => {
  return (
    <>
      {/*<Title ta="center" mt={100}>*/}
      {/*  Welcome to{' '}*/}
      {/*</Title>*/}
      <div className={classes.title_wrap}>
        <Text className={classes.title} ta="center" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
          2048
        </Text>
      </div>
      <Text className={classes.storyline} color="dimmed" ta="center" size="xl" maw={900} mx="auto">
        未来予知型AI「SHEEP」によって紛争や事件が起こる前に予知されるようになった世界。
        AIを頂点として超監視・集権社会国家「SHEEPS」がつくられ、人々は安全安心を求めて巨大都市化していった。しばらく経った頃、若者を中心に一つの動きが広がっていった。「何かがあるわけじゃない、ただ疑問があるだけだ」自由で自律分散な社会を求めた彼らは自分たちを「OWLS」と呼び、互いに身分を明かさずに団結を示そうとした。
        <Anchor href="https://mantine.dev/guides/next/" inherit>
          this guide
        </Anchor>
      </Text>
    </>
  )
}
