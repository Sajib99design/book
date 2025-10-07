import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';
import { FaStarHalfAlt } from 'react-icons/fa';




function ReadList() {
    const data = useLoaderData();
    const [readList, setReadList] = useState([]);

    const [sort, setSort] = useState('');
    const handleSort = (type) => {
        setSort(type);
        if (type === 'Pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === 'Ratting') {
            const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByrating);
        }
    };

    useEffect(() => {
        const storeBookData = getStoredBook();
        const convertStore = storeBookData.map(id => parseInt(id))

        const myRead = data.filter(book => convertStore.includes(book.bookId));
        setReadList(myRead);

    }, []);
    // console.log(readList);

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1"> Sort By : {sort && sort} </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('Pages')}>Pages </a></li>
                    <li><a onClick={() => handleSort('Ratting')}>Ratting </a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List </Tab>
                    <Tab>My Wish List  </Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Book List </h2>
                    {
                        readList.map(book =>
                            <div className="card bg-base-100 w-96 shadow-sm  p-3">
                                <figure className='bg-gray-200 w-2/3 mx-auto p-7'>
                                    <img className='h-[165px]' src={book.image} alt="imageName" />
                                </figure>
                                <div className="card-body">
                                    <span className='flex justify-around text-orange-500'>
                                        {

                                            book.tags.map(tag => <button> {tag} </button>)
                                        }
                                    </span>
                                    <h2 className="card-title">
                                        {book.bookName}

                                    </h2>
                                    <p className='bg-red-200 text-left  border-b-2 border-dotted' >Book By: {book.publisher}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{book.category}</div>
                                        <div className="badge badge-outline">
                                            {book.rating}
                                            <FaStarHalfAlt></FaStarHalfAlt>
                                        </div>
                                        <div className='badge badge-outline'>{book.totalPages}</div>
                                    </div>
                                </div>
                            </div>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2> My Wish List </h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ReadList
