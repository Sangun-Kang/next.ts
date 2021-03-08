import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! my Name is Kang sangun</p>
        <p>
          This is My First Next Application{' '}
          You can contact to My <a href='https://www.instagram.com/sangun.kang' target='blank'>Instagram</a>
        </p>
      </section>
    </Layout>
  )
}
