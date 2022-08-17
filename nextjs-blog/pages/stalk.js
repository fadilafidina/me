import Head from 'next/head'
import Layout from '../components/layout'

export default function StalkMe() {
  return <Layout>
    <Head>
      <title>stalk me!</title>
    </Head>

    <h1 className='text-lg text-indigo-700'>
      find me on the dark, dark web
    </h1>

    <ul class="list-disc">
      <li className='text-grey-darker my-2 pt-2'>
        <a href='https://twitter.com/fadilafidina' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
          twitter
        </a>
      </li>

      <li className='text-grey-darker my-2 pt-2'>
        <a href='https://www.youtube.com/channel/UCwLxgb5sxslXF0WiByXpCmg' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
          youtube
        </a>
      </li>

      <li className='text-grey-darker my-2 pt-2'>
        <a href='https://www.linkedin.com/in/fadila-fidina/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
          linkedin
        </a>
      </li>

      <li className='text-grey-darker my-2 pt-2'>
        <a href='https://www.instagram.com/matchadou/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
          baking instagram
        </a>
      </li>

      <li className='text-grey-darker my-2 pt-2'>
        <a href='https://www.instagram.com/dilajournals/' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
          art/desk setup/bullet journal/everything else instagram
        </a>
      </li>

      <li className='text-grey-darker my-2 pt-2'>
        <a href='https://github.com/fadilafidina' className='text-indigo-500 underline decoration-dashed underline-offset-4 hover:decoration-wavy'>
          github
        </a>
      </li>
    </ul>
  </Layout>
}