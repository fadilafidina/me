import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import portfolioPng from '../public/images/this-site.png'


export default function FirstPost() {
  return <Layout>
    <Head>
      <title>projects</title>
    </Head>

    <h1 className="text-3xl text-indigo-700">
      A few select things I have worked on
    </h1>

    {/* https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/  */}
    {/* <div className="min-h-screen">
      <div className="flex justify-center place-items-center space-x-4">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2">Some words ❤️</div>
            <p className="text-grey-darker text-base">
              Words
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2">Some words ❤️</div>
            <p className="text-grey-darker text-base">
              Words
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2">Some words ❤️</div>
            <p className="text-grey-darker text-base">
              Words
            </p>
          </div>
        </div>
      </div>
    </div> */}


    <div className="flex min-h-screen justify-center items-center my-16">

      <div className="max-w-7xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2">
        <Image
          src={portfolioPng}
          alt="Screenshot of this"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 mx-2">my personal website ❤️</div>
          <ul class='py-2 uppercase font-bold'>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              react
            </li>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              next.js
            </li>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              tailwind css
            </li>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              vercel
            </li>

          </ul>

          <p className="text-grey-darker text-base my-2 pt-2">
            One fine afternoon I decided that it was time that I started a personal site for myself.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            I researched the dark web to see how people are building their static sites and I saw a few options.
            One was to use a static site generator, like Hugo, Gatsby or Jeykll, but then decided to settle with Next.JS.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            Next.JS is ideal for me as I'm working on improving my React skills right now, so it will definitely help me flex my skills a bit.
            Next.JS is also great at slowly learning more about Jamstack, since that's a whole new architecture of web apps that I have not worked with before.
            It's also great because I can easily plug this site later on to a headless CMS to display blog posts (keep an eye out for that).
            I also chose this to learn more about server-side rendering and its benefits.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            Next.JS is ideal for me as I'm working on improving my React skills right now, so it will definitely help me flex my skills a bit.
            Next.JS is also great at slowly learning more about Jamstack, since that's a whole new architecture of web apps that I have not worked with before.
            It's also great because I can easily plug this site later on to a headless CMS to display blog posts (keep an eye out for that).
            I also chose this to learn more about server-side rendering and its benefits.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            I deployed the site using Vercel since it has out-of-the-box for Next.JS apps, which is very nice. Within a few clicks of connecting my repository across, every push to the main branch would go straight to production. Lovely.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            Like usual, setting up everything was tricky at first, but through reading documentation and looking at other code snippets online, I am able to make this site as elegant and reflective of who I am.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            The design and colours on this site reflect my personality and what it's like to hang out with me :)
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
          </p>
        </div>
      </div>
    </div>
  </Layout>
}