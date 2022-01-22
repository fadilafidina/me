import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-900"></div> */}
    </Layout>
  )
}