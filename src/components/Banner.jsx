import React from 'react'
import BookImg from  '../assets/books.jpg'

function Banner() {
  return (
    <div className='flex '>
      <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate, velit blanditiis impedit iusto ipsum minus iure ipsam, quo accusamus deserunt libero. Alias consequuntur aperiam sunt aliquid ab, laborum voluptatibus.</p>
      </div>
      <div>
      <img src={BookImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
