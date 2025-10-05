import React from 'react'
import { useLoaderData, useParams } from 'react-router'

function BookDetails() {
    const { Id } = useParams();
    console.log(Id);
    const bookData = useLoaderData();
    // console.log(bookData);

   const bookSingle = bookData.find(book => book.bookId == Id);
    console.log(bookSingle);
    const {bookName, image} = bookSingle;
    return (
        <div className='flex  flex-col justify-center items-center space-y-5'>
            <img src={image} alt="" className='w-48' />
            <h5>{bookName}</h5>
            <div className=''>
                <button className='btn-accent btn mr-4'> Read </button>
                <button className='btn-info btn'> Info </button>
            </div>
        </div>
    )
}

export default BookDetails
