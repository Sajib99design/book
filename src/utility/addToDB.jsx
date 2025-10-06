// Store with id
// where to store
// array or Collection
// !
// if book already  exist,  the show a alert
// if book not exist , then push in the collection or array

const getStoredBook = () => {
    const storeBookSTR = localStorage.getItem('readList');

    if(storeBookSTR){
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else {
        return [];
    }
};


const addToStoreDB = (id) => {
    const storeBookData = getStoredBook();

    if(storeBookData.includes(id)) {
        alert('already data Exist');
    } else {
        storeBookData.push(id);
        console.log(storeBookData);

       const data = JSON.stringify(storeBookData);
        localStorage.setItem('readList', data);
    }
};

export {getStoredBook ,  addToStoreDB};