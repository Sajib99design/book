import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreDB } from '../utility/addToDB';

function BookDetails() {
    const { Id } = useParams();
    // console.log(Id);
    const bookData = useLoaderData();
    // console.log(bookData);
   const bookSingle = bookData.find(book => book.bookId == Id);
    // console.log(bookSingle);
    const {bookName, image} = bookSingle;


    const handleMarkRead = id => {
        addToStoreDB(id);
    }


    return (
        <div className='flex  flex-col justify-center items-center space-y-5'>
            <img src={image} alt="" className='w-48' />
            <h5>{bookName}</h5>
            <div className=''>
                <button onClick={() => handleMarkRead(Id )} className='btn-accent btn mr-4'> Mark </button>
                <button className='btn-info btn'> Add </button>
            </div>
        </div>
    )
}

export default BookDetails
