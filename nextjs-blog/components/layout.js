import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'

export const siteTitle = 'howdy 🤠'

export default function Layout({ children, home }) {
  return (
    <div className='pt-12'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="me struggling to build something haha okay"
        />
      </Head>
      <Navbar></Navbar>

      <div className="p-12 grid justify-center">
      <main>{children}</main>
      </div>
    </div>
  )
}