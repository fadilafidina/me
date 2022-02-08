import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react';

export default function FirstPost() {
    return <Layout>
    <Head>
        <title>projects</title>
    </Head>
    <h1 className="text-3xl">
      It is nice to see you.
    </h1>
    <div className='pt-4'>
        Insert some lorem ipsum.
    </div>
    </Layout>
}