import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'
import me from '../public/images/memoji.png'

export const siteTitle = 'dila tries to code!'

export default function Layout({ children, home }) {
  return (
    <div className='bg-slate-50'>
      <Head>
        <link rel="icon" href="https://31.media.tumblr.com/5a4a522d4da9de9d3347d24bc1cac2f0/tumblr_inline_my5fmtNKRZ1rnr4eb.gif" />
        <meta
          name="description"
          content="me trying to build something haha"
        />
      </Head>
      {home ?
        <>
          <div className='min-h-screen text-2xl'>
            {/* <div class=" h-screen win-w-screen bg-cover bg-[url('../public/images/bg1.jpg')]"> */}
            <Navbar />


            <div className=" min-h-screen grid justify-center">

              <div className='py-1 text-gray-800'>
                <h1 className="text-4xl font-bold">
                  <div className='grid justify-center'>
                    <Image src={me} width={250} height={250} alt='memoji of Fadila'></Image>
                  </div>
                  <div>
                    Hi, I'm <span className='text-indigo-500 underline decoration-dashed underline-offset-8 hover:decoration-wavy decoration-gradient-to-r '>
                      {/* <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> */}
                      Fadila Fidina
                      {/* </span> */}
                    </span>! ✨
                  </div>

                </h1>

                {/* <div className="text-sm pt-6">
                  (They say my name has a nice ring to it.)
                </div> */}

                <div className="pt-6 text-4xl font-bold">
                  I am a full-stack software engineer.
                </div>
              </div>
            </div>



          </div>

          <div className="px-48 text-gray-900 text-2xl min-h-screen" aria-label='main content'>
            <main>{children}</main>
          </div>

          <Footer />
        </>
        : <>
          <Navbar />
          <div className="py-24 px-48 text-gray-900 text-xl min-h-screen" aria-label='main content'>
            <main>{children}</main>
          </div>
          <Footer />
        </>}
    </div >
  )
}