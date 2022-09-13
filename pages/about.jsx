import Meta from "../components/Meta";
import Container from "../components/Container";
import Hero from "../components/Hero";
import PostBody from "../components/PostBody";
import Contact from "../components/Contact";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "../components/TwoColumn";
import Accordion from "../components/Accordion";
import Image from "next/image";
import eyecatch from "../images/Ayuret.jpg";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="About"
        pageDesc="自己紹介"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
        />
      </figure>
      <PostBody>
        {/* <p>
          Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
        </p>
        <h2>モノづくりで目指していること</h2>
        <p>
          モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
        </p> */}
        <h3>自己紹介</h3>
        <p>
          また今度書くね〜
          <br></br>
          
        </p>
        <h3>対応スキル</h3>
        <p>
          ・Ruby on Rails
          <br></br>
          ・Next.js
          <br></br>
          ・WordPress
        </p>
        <h3>開発実績</h3>
        <p>
          ・Ruby on Railsを用いたECサイト、動画アプリ(API/管理画面)、ワークシェアリングアプリ、プログラミング学習サービスなど
          ・WordPressを用いたコーポレートサイト、医療施設のHP、在宅介護向けコンテンツメディアなど
        </p>

          {/* <h2>FAQ</h2>
          <Accordion heading="プログラミングのポイントについて">
            <p>
            プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
            </p>
          </Accordion> */}
        </PostBody>
    </Container>
  )
}