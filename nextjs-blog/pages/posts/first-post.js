import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
    return <Layout>
    <Head>
        <title>First post</title>
    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1>
        <Link href='/'><a>Back home</a></Link>
    </h1>
    </Layout>
}