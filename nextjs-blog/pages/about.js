import Head from 'next/head'
import Layout from '../components/layout'

export default function FirstPost() {
    return <Layout>
    <Head>
        <title>about</title>
    </Head>

    <h1 className="text-3xl">
      Welcome. It is nice to see you.
    </h1>

    <div>
        My name is la di da di da. I ok insert some stuff here later.
    </div>
    </Layout>
}