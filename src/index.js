import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars

const books = [
    {
    id:1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Me-r4UL1L._AC_UL200_SR200,200_.jpg',
    author: 'Natalie Barelli',
    title: 'The Housekeeper: A Twisted Psychological Thriller'
},
{
    id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91amG4aECWL._AC_UL200_SR200,200_.jpg',
    author: 'Dr seuss',
    title: 'What Was I Scared Of?'
},
{
    id:3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
    author: 'Jeff Kinney',
    title: 'The Deep End (Diary of a Wimpy Kid Book'
}

]


function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) =>{
                return <Book key={book.id} {...book}></Book>
            })}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props;
    return <article className="book">
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
}


ReactDom.render(<BookList/>, document.getElementById('root'))