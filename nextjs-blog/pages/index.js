import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-900"></div> */}

      <div className='min-h-screen'>
        <h1 className="text-3xl font-bold">
          It is nice to see you.
        </h1>

        <div className='pt-4'>
          My name is Fadila Fidina.
        </div>

        <div className='pt-4'>
          I am a full-stack software engineer, and I love creating and building all sorts of things.
        </div>

        <div className='pt-4'>
          From software, to things that are edible, to websites, to paintings, I love to bring things to life and to share them with the world around me.
        </div>

        <div className='pt-4'>
          I built this site using Next.js, Tailwind CSS, React and deployed it using Vercel.
        </div>

        <div className='pt-4 flex'>
          Aside from code, I love to bake bread, cakes, loaves, buns, pizzas, and anything that could go into an oven! I also like to draw and paint!
        </div>
      </div>

      <Footer/>
    </Layout>
  )
}