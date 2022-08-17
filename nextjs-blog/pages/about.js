import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>about</title>
        </Head>
        <div>
            <h1 className="text-lg text-indigo-700">
                it is nice to meet you
            </h1>

            <div className='pt-4'>
                call me fadila :)
            </div>

            <div className='pt-4'>
                I am a full-stack software engineer, and I love creating and building all sorts of things.
            </div>

            <div className='pt-4'>
                from software, to things that are edible, to websites, to paintings, I love to bring things to life and to share them with the world around me.
            </div>

            <div className='pt-4'>
                technologies I've used include .NET/C#, React + Redux, JavaScript, TypeScript, GraphQL.
                things I love include domain driven design, test driven development, and event-based architectures.
            </div>

            <div className='pt-4 flex'>
                aside from code, I love to bake bread, cakes, loaves, buns, pizzas, and anything that could go into an oven! I also like to draw and paint!
            </div>

            <div className='pt-4 flex'>
                on the weekend, you can probably find me at a local coffee shop, catching up with friends, or taking a walk in the sun.
            </div>
        </div>

        <div className='pt-12'>
            <h1 className="text-lg text-indigo-700">
                faq
            </h1>

            <div className='pt-4'>
                camera? iphone 13 pro + sony a6000.
            </div>

            <div className='pt-4'>
                degree? bachelor of IT, majored in literally nothing and I did every subject from every IT field.
            </div>

            <div className='pt-4'>
                did you always want to be a software engineer? no. some very kind people gave me a chance and I discovered I love it and am amazing at it.
            </div>

            <div className='pt-4'>
                thing you cannot live without? I'm sort of obsessed with my macbook pro right and keyboard right now...
            </div>

            <div className='pt-4 flex'>
                keyboard? keychron k2v2, rgb, brown switches, with custom caps.
            </div>

            <div className='pt-4 flex'>
                where is this blog you keep talking about? shhhhhhhh. I am working on it. it'll be here soon.
            </div>
        </div>
    </Layout>
}