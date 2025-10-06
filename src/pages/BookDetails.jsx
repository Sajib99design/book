import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreDB } from '../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



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
        MySwal.fire("SweetAlert2 is working!");
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
