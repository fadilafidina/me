import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>about</title>
        </Head>
        <div className='text-base'>
            <h1 className="text-3xl text-indigo-700">
                it is nice to meet you
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
                Technologies I've used include .NET/C#, React + Redux, JavaScript, TypeScript, GraphQL.
                Things I love include domain driven design, test driven development, and event-based architectures.
            </div>

            <div className='pt-4 flex'>
                Aside from code, I love to bake bread, cakes, loaves, buns, pizzas, and anything that could go into an oven! I also like to draw and paint!
            </div>

            <div className='pt-4 flex'>
                On the weekend, you can probably find me at a local coffee shop, catching up with friends, or taking a walk in the sun.
            </div>
        </div>
    </Layout>
}