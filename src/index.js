import React from 'react'
import ReactDom from 'react-dom'

//css
import './index.css'

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Title = () => <h1>The Housekeeper: A Twisted Psychological Thriller</h1>

const Image = () => <img src="https://m.media-amazon.com/images/I/81BC-VqUZfL._AC_UL480_FMwebp_QL65_.jpg" alt=""/>

const Author = () => <h4>Natalie Barelli</h4>

ReactDom.render(<BookList/>, document.getElementById('root'))