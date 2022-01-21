import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './navbar'

const name = 'voldy'
export const siteTitle = 'howdy 🤠'

export default function Layout({ children, home }) {
  return (
    <div className='place-items-center h-screen pt-6'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="me struggling to build something haha okay"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar></Navbar>

      <div className="pt-6 align-middle container mx-auto min-h-0">
      <main>{children}</main>
      
      
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      </div>
    </div>
  )
}