import React from 'react';
import '../css/bookStyle.css';

const Book = ({title, author, date, src}) =>{
        return (
            <div className="mainBook">
                <div className="bookBox">
                    <div className="bookImage">
                        <img alt={title} src={src}/>
                    </div>
                    <h1 className="bookTitle">{title}</h1>
                    <h2 className="bookAuthor">{author}</h2>
                    <p className="bookDate">{date}</p>
                </div>
            </div>
        );
}

export default Book;