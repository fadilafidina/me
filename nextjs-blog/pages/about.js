import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'

export default function FirstPost() {
    return <Layout>
    <Head>
        <title>about me</title>
    </Head>

    <h1 className="text-3xl font-bold underline">
      Welcome. It is nice to see you.
    </h1>

    <div>
        My name is la di da di da. I ok insert some stuff here later.
    </div>
    </Layout>
}