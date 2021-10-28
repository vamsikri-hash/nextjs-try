import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirstPost() {
    return (
      <Layout>
        <Head><title>Fist Post</title></Head>
        <h1>Hii by vamsi</h1>
        <Link href="/"><a>Back To Home</a></Link>
      </Layout>
    )
}