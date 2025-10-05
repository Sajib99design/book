import React from 'react'
import Banner from '../components/Banner'
import Books from './Books'
import { useLoaderData } from 'react-router'

function Home() {
  const bookdata = useLoaderData()
  // console.log(data);
  return (
    <div>
      <h2>This is HOme</h2>
      <Banner> </Banner>
      <Books bookdata={bookdata} ></Books>
    </div>
  )
}

export default Home
