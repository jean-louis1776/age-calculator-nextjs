import React from "react"
import Head from "next/head"

import Calculator from "../components/Calculator"

const Home = () => {
  return (
    <>
      <Head>
        <title>Age Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex items-center justify-center h-screen bg-colors-light-grey">
        <Calculator />
      </main>
    </>
  )
}

export default Home