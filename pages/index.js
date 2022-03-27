import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <main>
          <section class="menu">
            <div>
                <div class="topBar">
                    <a class="menuName">MiniMania.app</a>
                </div><hr>
            </div>
            <div>
                <div class="content" style="height:200px;"><br><br>
                    <h2 id="msg">EM DESENVOLVIMENTO!</h2><br>
                    <h3 id="msg">Nos acompanhe em nossas redes sociais🔽</h3>
                </div><hr>
            </div>
            <div class="bottomBar">
                <a href="https://discord.gg/minimania/" class="link discord"></a>
                <a href="https://www.facebook.com/groups/MiniManiaJogo" class="link facebook"></a>
                <a href="https://www.instagram.com/minimaniaofc/" class="link instagram"></a>
                <a href="https://www.youtube.com/c/MiniManiaJogoBR" class="link youtube"></a>
                <a href="https://twitter.com/MiniManiaOFC" class="link twitter"></a>
            </div>
          </section>
      </main>

      <Footer />
    </div>
  )
}
