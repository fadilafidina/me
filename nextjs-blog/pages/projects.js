import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
  return <Layout>
    <Head>
      <title>projects</title>
    </Head>

    <h1 className="text-3xl text-indigo-700">
      It is nice to see you.
    </h1>

    <div className='pt-4'>
      Coming soon :-)
    </div>

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


    {/* <div className="flex min-h-screen justify-center items-center">

        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
            <p className="text-grey-darker text-base">
              Next and Tailwind CSS are a match made in heaven, check out this article on how
              you can combine these two for your next app.
            </p>
          </div>
        </div>
      </div> */}
  </Layout>
}