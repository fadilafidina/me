import Head from 'next/head';
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-900"></div> */}

      {/* <div className='min-h-screen'> */}

      {/******* ABOUT SECTION *******/}
      <div className='pb-36'>

        <h1 className="text-3xl text-indigo-700 py-6">
          It is nice to see you.
        </h1>

        <div className='pt-4'>
          My name is <span className='text-indigo-500'>Fadila Fidina</span>.
        </div>

        <div className='pt-4'>
          I am a <span className='text-indigo-500'>full-stack software engineer </span>, and I love creating and building all sorts of things.
        </div>

        <div className='pt-4'>
          From software, to things that are edible, to web apps and paintings, I love to bring things to life and to share them with the world around me.
        </div>

        <div className='pt-4'>
          I built this site using Next.js, Tailwind CSS, React and deployed it using Vercel.
        </div>

        <div className='pt-4'>
          Read a bit more about me <span className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'><Link href="/about">here</Link></span>.
        </div>

        <div className='pt-4'>
          Aside from code, I love to <a href='https://www.instagram.com/matchadou/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>bake bread, cakes, loaves, buns, pizzas</a>, and anything that could go into an oven.
        </div>

        <div className='pt-4'>
          I also like to <a href='https://www.instagram.com/dilajournals/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>draw and paint</a>!
        </div>
      </div>

      <div className='py-48'>

        <h1 className="text-3xl text-indigo-700 py-6">
          Please, say hi!
        </h1>

        <div className='pt-4'>
          Want to work with me? <br />
        </div>

        <div className='pt-4'>
          Want to chat about software engineering? <br />
        </div>

        <div className='pt-4'>
          Want to make a new friend? <br />
        </div>

        <div className='pt-4'>
          Want my recommendations on the best bread recipe, or all of the above?
        </div>

        <div className='pt-4'>
          Catch me on <a href='mailto:fadilafidina@gmail.com'
            className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
            fadilafidina@gmail.com</a> or on
          on <a href='https://www.linkedin.com/in/fadila-fidina/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>LinkedIn</a>.
        </div>

        <div className='pt-4'>
          If you're in Sydney, maybe we can even catch up for a coffee :)
        </div>

      </div>

      {/******* PROJECTS SECTION *******/}
      {/* <div className='pt-96 text-xl'>
        <h1 className="text-3xl font-bold">
          Times where I wrote some code
        </h1>

        <div className='pt-4'>
          Some cards...
        </div>
      </div> */}

      {/******* PROJECTS SECTION *******/}
      {/* <div className='py-96 text-xl'>
        <h1 className="text-3xl font-bold">
          Times where I'm proud of my creative self
        </h1>

        <div className='pt-4'>
          Some cards...
        </div>
      </div> */}



    </Layout>
  )
}