import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'

export default function FirstPost() {
    return <Layout>
    <Head>
        <title>projects</title>
    </Head>

    <h1 className="text-3xl font-bold underline">
      Some projects I have worked on.
    </h1>

    <div>
        Coming soon.
    </div>
    </Layout>
}