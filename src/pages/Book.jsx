import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

function Book({ singleBook }) {
    const { bookId, bookName, image, category, rating, tags, publisher } = singleBook;

    /** Problem 05 - ( PH Email Generator ) */

    return (
        <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm  p-3">
            <figure className='bg-gray-200 w-2/3 mx-auto p-7'>
                <img className='h-[165px]' src={image} alt="imageName" />
            </figure>
            <div className="card-body">
                <span className='flex justify-around text-orange-500'>
                    {

                        tags.map(tag => <button> {tag} </button>)
                    }
                </span>
                <h2 className="card-title">
                    {bookName}

                </h2>
                <p className='bg-red-200 text-left  border-b-2 border-dotted' >Book By: {publisher}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">
                        {rating}
                        <FaStarHalfAlt></FaStarHalfAlt>
                    </div>
                </div>
            </div>
        </div>
        </Link>

    )
}

export default Book
