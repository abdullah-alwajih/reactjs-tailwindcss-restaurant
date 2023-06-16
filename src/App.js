import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import {items} from "./data/data";
import Category from "./components/Category";
import Header from "./components/Header";
import {ItemsList} from "./components/ItemsList";

function App() {
    const [itemsData, setItemsData] = useState(items)

    //get all cat uniqe
    const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]

    //filter by category
    const filterByCategory = (cat) => {
        if (cat === "الكل") {
            setItemsData(items)
        } else {
            const newArr = items.filter((item) => item.category === cat)
            setItemsData(newArr)
        }
    }

    //filter by search form
    const filterBySearch = (word) => {
        if (word !== "") {
            const newArr = items.filter((item) => item.title.includes(word))
            console.log(word, newArr);
            setItemsData(newArr)
        } else {
            setItemsData(items)
        }
    }
    return (
        <div className="App">
            <header className="App-header ">
                <NavBar filterBySearch={filterBySearch}/>
                <div className='container m-auto mt-8'>
                    <Header/>
                    <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
                    <ItemsList itemsData={itemsData}/>
                </div>
            </header>
        </div>
    );
}

export default App;
