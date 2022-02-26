import Head from 'next/head'
import Image from 'next/image'
import me from '../public/images/memoji.png'
import Footer from './Footer'
import Navbar from './Navbar'

export const siteTitle = 'fadila fidina 🌸'

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
            <Navbar />
            <div className="grid justify-center px-12 md:px-24 xl:px-52">
              <div className='py-1 text-gray-800 text-3xl md:text-4xl font-bold'>
                <h1 className="">
                  <div className='grid justify-center pt-24 smi:pt-24'>
                    <Image src={me} width={250} height={250} alt='memoji of Fadila'></Image>
                  </div>
                  <div>
                    Hi, I'm <span className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy decoration-gradient-to-r '>
                      Fadila Fidina
                    </span>! ✨
                  </div>
                </h1>

                <div className="pt-6">
                  I am a full-stack software engineer.
                </div>
              </div>
            </div>



          </div>

          <div className="px-12 md:px-24 xl:px-48 text-gray-900 text-lg md:max-h-min xl:min-h-screen" aria-label='main content'>
            <main>{children}</main>
          </div>

          <Footer />
        </>
        : <>
          <Navbar />
          <div className="py-24 px-48 text-gray-900 text-lg min-h-screen" aria-label='main content'>
            <main>{children}</main>
          </div>
          <Footer />
        </>}
    </div >
  )
}