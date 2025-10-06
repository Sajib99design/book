import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';

function ReadList() {
    const data = useLoaderData();
    console.log(data);

    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storeBookData = getStoredBook();
        const convertStore = storeBookData.map(id => parseInt(id))

        const myRead = data.filter(book => convertStore.includes(book.bookId));
        setReadList(myRead);

    }, []);
    console.log(readList);

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book List </Tab>
                    <Tab>My Wish List  </Tab>
                </TabList>

                <TabPanel>
                    <h2>Read Book List </h2>
                    {
                    readList.map(book =>
                    <div className='space-y-3'>
                        <h2>{ book.bookName} </h2>
                        <img className='w-[100px] mx-auto' src={book.image} alt="" />
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
