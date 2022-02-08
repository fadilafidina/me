import Head from 'next/head'
import Navbar from './Navbar'

export const siteTitle = 'dila tries to code!'

export default function Layout({ children, home }) {
  return (
    <div className=''>
      <Head>
        <link rel="icon" href="https://31.media.tumblr.com/5a4a522d4da9de9d3347d24bc1cac2f0/tumblr_inline_my5fmtNKRZ1rnr4eb.gif" />
        <meta
          name="description"
          content="me struggling to build something haha okay"
        />
      </Head>
      {home ? <div class=" min-h-screen win-w-screen bg-cover bg-[url('../public/images/bg1.jpg')]">
        <Navbar />

        <div className="py-40 min-h-screen grid justify-center">
          <div className='py-1'>
            <h1 className="text-3xl font-bold">
              Hi there! ✨
            </h1>
            My name is Fadila Fidina, or Dila for short.
            <br />
            Welcome to my space on the internet.
            <br />
            I drew this cute background!
            <br />
            Enjoy your stay!
          </div>
        </div>

        <div className="p-12 min-h-screen">
            <main>{children}</main>
          </div>

      </div>
        : <>
          <Navbar />
          <div className="p-12">
            <main>{children}</main>
          </div>
        </>}
    </div>
  )
}