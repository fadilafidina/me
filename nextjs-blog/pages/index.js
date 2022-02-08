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

      {/* <div className='min-h-screen'> */}

      {/******* ABOUT SECTION *******/}
      <div className='text-xl'>
        <h1 className="text-3xl font-bold">
          It is nice to see you.
        </h1>

        <div className='pt-4'>
          My name is <span className='text-indigo-500'>Fadila Fidina</span>.
        </div>

        <div className='pt-4'>
          I am a <span className='text-indigo-500'>full-stack software engineer </span>, and I love creating and building all sorts of things.
        </div>

        <div className='pt-4'>
          From software, to things that are edible, to webapps and paintings, I love to bring things to life and to share them with the world around me.
        </div>

        <div className='pt-4'>
          I built this site using Next.js, Tailwind CSS, React and deployed it using Vercel.
        </div>

        <div className='pt-4'>
          Aside from code, I love to <a href='https://www.instagram.com/matchadou/' className='text-indigo-500 underline decoration-dashed underline-offset-8 hover:decoration-wavy'>bake bread, cakes, loaves, buns, pizzas</a>, and anything that could go into an oven.
        </div>

        <div className='pt-4'>
          I also like to <a href='https://www.instagram.com/dilajournals/' className='text-indigo-500 underline decoration-dashed underline-offset-8 hover:decoration-wavy'>draw and paint</a>!
        </div>
      </div>

      {/******* PROJECTS SECTION *******/}
      <div className='pt-96 text-xl'>
        <h1 className="text-3xl font-bold">
          Times where I wrote some code
        </h1>

        <div className='pt-4'>
          Some cards...
        </div>
      </div>

      {/******* PROJECTS SECTION *******/}
      <div className='py-96 text-xl'>
        <h1 className="text-3xl font-bold">
          Times where I'm proud of my creative self
        </h1>

        <div className='pt-4'>
          Some cards...
        </div>
      </div>



    </Layout>
  )
}