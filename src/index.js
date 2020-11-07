import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

//setup vars
const firstBook = {
    img: 'https://m.media-amazon.com/images/I/81BC-VqUZfL._AC_UL480_FMwebp_QL65_.jpg',
    author: 'Natalie Barelli',
    title: 'The Housekeeper: A Twisted Psychological Thriller'
}

const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91amG4aECWL._AC_UL200_SR200,200_.jpg',
    author: 'Dr seuss',
    title: 'What Was I Scared Of?'
}


function BookList() {
    return (
        <section className='booklist'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum pariatur dolore, 
                    sequi voluptatum est odio quisquam a animi mollitia voluptatem.</p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
        </section>
    )
}

const Book = (props) => {
    console.log(props)
    return <article className="book">
        <img src={props.img} alt=""/>
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
        {props.children}
    </article>
}


ReactDom.render(<BookList/>, document.getElementById('root'))