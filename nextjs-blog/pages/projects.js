import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import portfolioPng from '../public/images/this-site.png'
import browniesNoissue from '../public/images/brownies-noissue.JPG'
import lpPortal from '../public/images/lp.png'
import sourdoughCalc from '../public/images/sourdoughCalc.jpg'

export default function FirstPost() {
  return <Layout>
    <Head>
      <title>projects</title>
    </Head>

    <h1 className='text-3xl text-indigo-700'>
      A few things I have worked on
    </h1>

    <p className='pt-4'>
      I've worked across a number of projects, both in development and also in the creative aspects.
      I hope to share with you here my work which I am most proud of, and you can be proud of me too.
    </p>

    <p className='pt-4'>
      This page is under contruction and will be updated frequently.
    </p>

    {/* 
    TODO: Add support for filtering by tags
    <ul class='py-8 uppercase font-bold text-sm'>
      <li class='transition ease-in-out delay-100 duration-300  inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
        personal
      </li>
      <li class='transition ease-in-out delay-100 duration-300 inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
        Professional
      </li>
      <li class='transition ease-in-out delay-100 duration-300 inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
        Creative
      </li>
    </ul> */}

    {/* https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/  */}
    {/* <div className='min-h-screen'>
      <div className='flex justify-center place-items-center space-x-4'>
        <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
          <img
            className='w-full'
            src='https://tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-6'>
            <div className='font-bold text-xl mb-2'>Some words ❤️</div>
            <p className='text-grey-darker text-base'>
              Words
            </p>
          </div>
        </div>

        <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
          <img
            className='w-full'
            src='https://tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-6'>
            <div className='font-bold text-xl mb-2'>Some words ❤️</div>
            <p className='text-grey-darker text-base'>
              Words
            </p>
          </div>
        </div>

        <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
          <img
            className='w-full'
            src='https://tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-6'>
            <div className='font-bold text-xl mb-2'>Some words ❤️</div>
            <p className='text-grey-darker text-base'>
              Words
            </p>
          </div>
        </div>
      </div>
    </div> */}

    {/* this website */}
    <div className='flex min-h-screen justify-center items-center my-16'>
      <div className='max-w-6xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2'>
        <Image
          src={portfolioPng}
          alt='Screenshot of this'
        />
        <div className='p-12'>
          <div className='font-bold text-xl mb-2'>My personal website ❤️</div>
          <ul class='py-2 uppercase font-bold'>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              react
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              next.js
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              tailwind css
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              vercel
            </li>
          </ul>

          <p className='text-grey-darker text-base my-2 pt-2'>
            One fine afternoon I decided that it was time that I started a personal site for myself.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            I researched the dark web to see how people are building their static sites and I saw a few options.
            One was to use a static site generator, like Hugo, Gatsby or Jeykll, but then decided to settle with Next.js.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            Next.js is ideal for me as I'm working on improving my React skills right now, so it will definitely help me flex my skills a bit.
            Next.js is also great at slowly learning more about Jamstack, since that's a whole new architecture of web apps that I have not worked with before.
            It's also great because I can easily plug this site later on to a headless CMS to display blog posts (keep an eye out for that).
            I also chose this to learn more about server- rendering and its benefits.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            I deployed the site using Vercel since it has out-of-the-box support for Next.js apps, which is very nice. Within a few clicks of connecting my repository across, every push to the main branch would go straight to production. Lovely.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            Like usual, setting up everything was tricky at first, but through reading documentation and looking at other code snippets online, I am able to make this site as elegant and reflective of who I am.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            The design and colours on this site reflect my personality and what it's like to hang out with me :)
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
          </p>
        </div>
      </div>
    </div>

    {/* this website */}
    <div className='flex min-h-screen justify-center items-center my-16'>
      <div className='max-w-6xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2'>
        <Image
          src={browniesNoissue}
          alt='no issue paper'
        />
        <div className='p-12'>
          <div className='font-bold text-xl mb-2'>Noissue custom paper partnership ✨</div>
          <ul class='py-2 uppercase font-bold'>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              procreate
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              adobe illustrator
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              food photography
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              instagram
            </li>
          </ul>

          <p className='text-grey-darker text-base my-2 pt-2'>
            A printing company called Noissue contacted me to see if I was interested in creating my own food-safe custom paper for my  baking hobbies.
            I was delighted at the offer and jumped straight in to learn digital drawing and printing.
          </p>
          <p className='text-grey-darker text-base my-2 pt-2'>
            I came up with the conceptual design, doodling on paper when I zone out during the day. I had an image of what the end product would look like but I realised bringing it to life is a longer process.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            I picked up an old iPad, downloaded the Procreate app, and learnt how to use it to draw my paper design.
            After many iterations, I had to convert it to a vector file for the printing to come out high quality.
            This meant using Adobe Illustrator to convert the .png file into an .ai file, converting the image into vectors and updating the colours to match their printing requirements.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            After submitting my design and waiting a month or so, the final product came in the mail! I was so happy to see my work come to life - from some scribbles in a notebook, to high-quality paper juxtaposed against my baked goods.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            Read the full blog post on the <a href='https://noissue.com.au/blog/matchadou-2/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>noissue site here</a>.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            See the <a href='https://www.instagram.com/p/CMdqoEkla-l/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>full drawing timelapse here</a> (swipe to see it!) .
          </p>
        </div>
      </div>
    </div>

    {/* lp portal */}
    <div className='flex min-h-screen justify-center items-center my-16'>
      <div className='max-w-6xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2 justify-center'>
        <div className='flex justify-center'>
          <Image
            src={lpPortal}
            alt="image of a laptop featuring lanternpay' s old claiming portal"
            width='1100'
            height='700'
          />
        </div>
        <div className='p-12'>
          <div className='font-bold text-xl mb-2'>LanternPay Portal (now HICAPS Digital Portal) 🧑‍⚕️ 💻</div>
          <ul class='py-2 uppercase font-bold'>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              react
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              typescript
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              jest
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              playwright
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              graphql
            </li>
          </ul>

          <p className='text-grey-darker text-base my-2 pt-2'>
            This is the app that I spent a majority of my time working on at one of the companies I worked at.
          </p>
          <p className='text-grey-darker text-base my-2 pt-2'>
            I implemented whole full-stack features, from determining the feasibility of features, scoping, breaking down requirements into small chunks of work,
            and to the execution itself, writing unit tests, all the way to go-live and maintenance of features.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            Some features I worked on included the bulk uploading of invoices into our system, and a self-serve feature for users to activate different claiming schemes.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            When I started working on the app, there was no automated tests at all. With every change I did, I committed to learning react testing library and
            to add tests around existing and new components. This has successfully increased the safety of future changes in the app.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            I also mentored fellow team members on how to write effective tests in the UI land.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            I also advocated in tackling the debt of the app - such as adding error handling, proper logging, and alerting of errors.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            The production site is available on the <a href='https://www.lanternpay.com/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'> HICAPS page  here</a>.
          </p>
        </div>
      </div>
    </div>

    {/* sourdough calc */}
    <div className='flex min-h-screen justify-center items-center my-16'>
      <div className='max-w-6xl rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/40 my-2 justify-center'>
        <div className='flex justify-center'>
          <Image
            src={sourdoughCalc}
            alt="image of a web-based sourdough calculator"
          />
        </div>
        <div className='p-12'>
          <div className='font-bold text-xl mb-2'>Sourdough calculator 🍞 🧮</div>
          <ul class='py-2 uppercase font-bold'>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              react
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              javscript
            </li>
            <li class='transition ease-in-out delay-100 duration-300 text-xs inline-flex items-center leading-sm mr-2 px-3 py-1 bg-indigo-200 hover:bg-indigo-400 hover:text-slate-100 rounded-full'>
              sourdough
            </li>
          </ul>

          <p className='text-grey-darker text-base my-2 pt-2'>
            This is the first app that I commited to working on to learn React (and a bit more JavaScript).
          </p>
          <p className='text-grey-darker text-base my-2 pt-2'>
            I had no background to frontend development, so I decided that I will follow a tutorial, and then build my own little thing on the side.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            This is my experimental project that I play with when a new React feature comes out, like hooks, and practicing with React Testing Library.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            I was also slightly obsessed with sourdough baking at the time, hence me building a sourdough calculator.
          </p>

          <p className='text-grey-darker text-base my-2 pt-2'>
            The production site is available <a href='https://sourdghcalc.netlify.app/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>here</a>, and repo <a href='https://github.com/fadilafidina/sourdough-calculator' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>here</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
}