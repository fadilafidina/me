import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

        <h1 className='text-2xl'>Hi.</h1>
        <p>
          Some description here.
          More words... idk how to center this yet...
        </p>

      <div className="flex min-h-screen justify-center items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-6">
            <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
            <p className="text-grey-darker text-base">
              Next and Tailwind CSS are a match made in heaven, check out this article on how
              you can combine these two for your next app.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}