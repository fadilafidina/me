import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'

export default function FirstPost() {
    return <Layout>
    <Head>
        <title>about</title>
    </Head>

    <h1 className="text-3xl text-indigo-700">
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
        The stack that I've used with include .NET / C#, React + Redux, JavaScript, TypeScript, GraphQL.
    </div>

    <div className='pt-4'>
        Stores I've played with include SQL, PostgreSQL, MongoDB and Elasticsearch.
    </div>

    <div className='pt-4'>
        I built this site using Next.js, TailwindsCSS, React and deployed it using Vercel.
    </div>

    <div className='pt-4 flex'>
        Aside from code, I love to bake bread, cakes, loafs, buns, pizzas, and anything that could go into an oven! I also like to draw and paint!
    </div>

    </Layout>
}