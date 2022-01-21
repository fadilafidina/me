import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>



      <div className='py-64 min-h-screen'>

        <h1 className="text-3xl font-bold">
          Hi there!
        </h1>

        <div className='py-2'>
          My name is la di da di da.

          Welcome to my space on the internet.

        </div>

        <div className='py-2'>
          Enjoy your stay!
        </div>

      </div>

      <div className="min-h-screen">
        <div className="flex min-h-300 justify-center space-x-4">
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
      </div>

    </Layout>
  )
}