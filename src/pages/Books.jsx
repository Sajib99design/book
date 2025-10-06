import React, { Suspense, useEffect, useState } from 'react'
import Book from './Book'

function Books({bookdata}) {
    // const [allBook, setAllBook] = useState([]);
    // useEffect( () => {
    //     fetch('./booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBook(data))
    // }, []);
    // console.log(allBook)

  // const bookPromise = fetch('./booksData.json')
  // .then(res => res.json())
  // console.log(bookdata);
  return (
    <div>
      <h3>hello Books</h3>
      {/* <Suspense fallback={'loading...'}>
        <Book bookPromise={bookPromise}> </Book>
      </Suspense> */}
     <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
     {
        bookdata.map(singleBook => <Book key={singleBook.id} singleBook={singleBook}> </Book>)
      }
     </div>
    </div>
  )
}

export default Books
