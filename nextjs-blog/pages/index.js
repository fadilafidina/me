import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-900"></div>

      <div className="min-h-screen">
        <div className="flex justify-center space-x-4">
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