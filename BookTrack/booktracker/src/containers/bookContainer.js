import React from 'react';
import Book from '../components/book';
import FilterButton from '../components/filterButton';
import '../css/bookContainerStyle.css'
import GT1 from '../media/GT1.png';
import HPCS1 from '../media/HPCS1.png';
import LOTR3 from '../media/LOTR3.png';

const dummyData = [
    {
        title: "Game of Thrones",
        author: "George Martin",
        date: "1996",
        src: GT1
    },
    {
        title : "Harry Potter and the Chamber of secrets",
        author: "J.K. Rowling",
        date: "2002",
        src: HPCS1
    },
    {
        title : "Lord of the Rings: The Return of the King",
        author: "J.R.R. Tolkien",
        date: "1955",
        src: LOTR3
    }
]
export class BookContainer extends React.Component{

    render() {
        return (
            <div className="bookContainer">
                <FilterButton/>
                <ul className="bookList">
                    {dummyData.map((item, i) =>
                        <li className="bookListItem">
                            <Book key={i} {...item}/>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default BookContainer;