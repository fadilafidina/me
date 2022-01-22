import Head from 'next/head'
import Navbar from './Navbar'

export const siteTitle = 'howdy 🤠'

export default function Layout({ children, home }) {
  return (
    <div className=''>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="me struggling to build something haha okay"
        />
      </Head>
      {home ? <div class=" min-h-screen win-w-screen bg-cover bg-[url('../public/images/bg1.jpg')]">
        <Navbar />

        <div className="py-64 min-h-screen grid justify-center">
          <div className='py-1'>
            <h1 className="text-3xl font-bold">
              Hi there! ✨
            </h1>
            My name is la di da di da.
            <br />
            Welcome to my space on the internet.
            <br />
            I drew this cute background!
            <br />
            Enjoy your stay!
          </div>
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