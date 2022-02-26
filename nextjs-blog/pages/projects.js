import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import portfolioPng from '../public/images/this-site.png'
import browniesNoissue from '../public/images/brownies-noissue.JPG'


export default function FirstPost() {
  return <Layout>
    <Head>
      <title>projects</title>
    </Head>

    <h1 className="text-3xl text-indigo-700">
      A few select things I have worked on
    </h1>

    <p className='pt-4'>I've worked across a number of projects, both in development and also in the creative aspects. I hope to share with you here my work which I am most proud of, and you can be proud of me too.</p>

    <ul class='py-8 uppercase font-bold text-sm'>
      <li class="transition ease-in-out delay-100 duration-300  inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
        personal
      </li>
      <li class="transition ease-in-out delay-100 duration-300 inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
        Professional
      </li>
      <li class="transition ease-in-out delay-100 duration-300 inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
        Creative
      </li>
    </ul>

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

    {/* this website */}
    <div className="flex min-h-screen justify-center items-center my-16">
      <div className="max-w-6xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2">
        <Image
          src={portfolioPng}
          alt="Screenshot of this"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">My personal website ❤️</div>
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

    {/* this website */}
    <div className="flex min-h-screen justify-center items-center my-16">
      <div className="max-w-6xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2">
        <Image
          src={browniesNoissue}
          alt="no issue paper"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Noissue custom paper partnership ✨</div>
          <ul class='py-2 uppercase font-bold'>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              procreate
            </li>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              adobe illustrator
            </li>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              food photography
            </li>
            <li class="transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full">
              instagram
            </li>
          </ul>

          <p className="text-grey-darker text-base my-2 pt-2">
            A printing company Noissue contacted me to see if I was interested in creating my own food-safe custom paper for my side baking hobbies.
            I was delighted at the offer and jumped straight in to learn digital drawing and printing.
          </p>
          <p className="text-grey-darker text-base my-2 pt-2">
            I came up with the conceptual design, doodling on paper when I zone out during the day. I had an image of what the end product would look like but I realised bringing it to life is a longer process.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            I picked up an old iPad, downloaded the Procreate app, and learnt how to use it to draw my paper design.
            After many iterations, I had to convert it to a vector file for the printing to come out high quality.
            This meant using Adobe Illustrator to convert the .png file into an .ai file, converting the image into vectors and updating the colours to match their printing requirements.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            After submitting my design and waiting a month or so, the final product came in the mail! I was so happy to see my work come to life - from some scribbles in a notebook, to high-quality paper juxtaposed against my baked goods.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            Read the full blog post on the <a href='https://noissue.com.au/blog/matchadou-2/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>noissue site here</a>.
          </p>

          <p className="text-grey-darker text-base my-2 pt-2">
            See the <a href='https://www.instagram.com/p/CMdqoEkla-l/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>full drawing timelapse here</a> (swipe to see it!) .
          </p>
        </div>
      </div>
    </div>
  </Layout>
}