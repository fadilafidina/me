import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react';

export default function CreativeStuff() {
    return <Layout>
        <Head>
            <title>projects</title>
        </Head>
        <h1 className="text-lg text-indigo-700">
            It is nice to see you.
        </h1>
        <div className='pt-4'>
            Coming soon :-)
        </div>
    </Layout>
}