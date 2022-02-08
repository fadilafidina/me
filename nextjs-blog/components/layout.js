import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

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
      {home ?
        <>
        <div className='min-h-screen'>
          {/* <div class=" h-screen win-w-screen bg-cover bg-[url('../public/images/bg1.jpg')]"> */}
            <Navbar />

            <div className="py-36 min-h-screen grid justify-center">
              <div className='py-1 text-gray-800'>
                <h1 className="text-4xl font-bold">
                  Hi, I'm <span className='text-indigo-500'>Fadila Fidina</span>! ✨
                </h1>

                <div className="text-sm">
                  (They say my name has a nice ring to it.)
                </div>

                <div className="text-xl">
                  I am a full-stack software engineer.
                </div>
              </div>
            </div>



          </div>

          <div className="p-48 text-gray-800 text-lg">
            <main>{children}</main>
          </div>

          <Footer/>
        </>
        : <>
          <Navbar />
          <div className="p-12">
            <main>{children}</main>
          </div>
        </>}
    </div>
  )
}