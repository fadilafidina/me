import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>about</title>
        </Head>
        <div className='text-base'>
            <h1 className="text-3xl text-indigo-700">
                It is nice to meet you.
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
                Technologies I've used include .NET / C#, React + Redux, JavaScript, TypeScript, GraphQL.
            </div>

            <div className='pt-4 flex'>
                Aside from code, I love to bake bread, cakes, loaves, buns, pizzas, and anything that could go into an oven! I also like to draw and paint!
            </div>
        </div>

        <div className='pb-24 text-base'>
            <h1 className="text-2xl text-indigo-700 pt-24">
                My journey to software engineering
            </h1>

            <h2 className="text-xl text-indigo-700 pt-8">
                High school days
            </h2>

            <div className='pt-4'>
                When I was twelve, I discovered the wild side of the internet and signed myself up for a tumblr blog.
                I was obsessed with customising my theme by adding custom CSS and HTML.
            </div>

            <div className='pt-4'>
                I built my own themes, added snow effects over Christmas using JavaScript
                and even embedded music players to my blog. <span className='italic'>(I know automated audio on a webpage is cringe nowadays)</span>.
            </div>

            <div className='pt-4'>
                At fifteen, in my IST (Information, Software and Technology) class at high school, we had an assignment to create a web page out of pure HTML and CSS on any topic we wanted.
                Obviously, I wrote about Harry Potter, and edited my webpage using Notepad. <span className='italic'> What is even an IDE?</span> I was so proud of my creation and was so ecstatic when I got (nearly) full marks.
            </div>

            <h2 className="text-xl text-indigo-700 pt-8">
                University days
            </h2>

            <div className='pt-4'>
                High school ended, and it was time to pick a university course.

            </div>

            <div className='pt-4'>
                I knew I loved making things <span aria-label='sparkle emoji'>✨</span> pretty <span aria-label='sparkle emoji'>✨</span> and I thought websites were cool.
            </div>

            <div className='pt-4'>
                I was also really into graphic design, so maybe something where I can be creative while creating web pages?
            </div>

            <div className='pt-4'>
                Some sort of <span className='italic'>website designer? A website creator?</span> I
                had no idea what was actually out there where I can create pretty web pages which people will use.
            </div>

            <div className='pt-4'>
                Alas, I jumped head first into doing an information technology degree.
            </div>

            <div className='pt-4'>
                Fast forward a few years later and here I am, a full-stack software engineer, bringing the world to life one line of code at a time.
            </div>
        </div>
    </Layout>
}