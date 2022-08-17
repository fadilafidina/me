import Head from 'next/head';
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/******* ABOUT SECTION *******/}
      <div className='pb-12 md:pb-12 xl:pb-24'>

        <h1 className="text-lg text-indigo-700 pb-6">
          it is nice to see you.
        </h1>

        <div className='pt-4'>
          my name is <span className='text-indigo-500'>fadila fidina</span>.
        </div>

        <div className='pt-4'>
          I am a <span className='text-indigo-500'>full-stack software engineer</span>, and I love creating and building all sorts of things.
        </div>

        <div className='pt-4'>
          from software, to things that are edible, to web apps and paintings, I love to bring things to life and to share them with the world around me.
        </div>

        <div className='pt-4'>
          I built this site using Next.js, Tailwind CSS, React and deployed it using Vercel.
        </div>

        <div className='pt-4'>
          read a bit more about me <span className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'><Link href="/about">here</Link></span>.
        </div>

        <div className='pt-4'>
          aside from code, I love to <a href='https://www.instagram.com/matchadou/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>bake bread, cakes, loaves, buns, pizzas</a>, and anything that could go into an oven.
        </div>

        <div className='pt-4'>
          I also like to <a href='https://www.instagram.com/dilajournals/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>draw and paint</a>!
        </div>
      </div>

      {/******* HI SECTION *******/}

      <div className='py-12 md:pb-24 xl:py-48'>

        <h1 className="text-lg text-indigo-700 py-6">
          please, say hi!
        </h1>

        <div className='pt-4'>
          catch me on <a href='mailto:fadilafidina@gmail.com'
            className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
            fadilafidina@gmail.com</a> or on
          on <a href='https://www.linkedin.com/in/fadila-fidina/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>linkedin</a>.
        </div>

        <div className='pt-4'>
          if you're in sydney, maybe we can even catch up for a coffee :)
        </div>
      </div>

    </Layout>
  )
}