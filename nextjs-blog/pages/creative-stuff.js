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
      I like to make art in different forms.
    </h1>

    <div>
        Coming soon.
    </div>
    </Layout>
}