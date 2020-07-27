import Head from 'next/head';
import App from '../components/app'


export default function Index() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <App/>
    </>
  )
}
