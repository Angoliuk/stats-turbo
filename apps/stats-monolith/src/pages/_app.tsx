import { type AppType } from 'next/app'
import { api } from '@stats/utils/api'
import '@stats/styles/globals.css'
import Head from 'next/head'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>stats-monolith</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default api.withTRPC(MyApp)
