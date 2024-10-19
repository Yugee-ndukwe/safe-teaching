
import classes from './books.module.css';
import BOOK1 from '../../Assets/Image.png';
import BOOK2 from '../../Assets/image2.png';
import BOOK3 from '../../Assets/image3.png';
import BOOK4 from '../../Assets/image4.png';
import BOOK5 from '../../Assets/image5.png';
import BOOK6 from '../../Assets/image6.png';
import BOOK7 from '../../Assets/image7.png';
import BOOK8 from '../../Assets/image8.png';
import DOTS from '../../Assets/3dots.png';
import { useState } from 'react';
import EDIT from '../../Assets/edit-icon.png';
import PREVIEW from '../../Assets/Group.png';
import PUBLISH from '../../Assets/publish.png';
import UNPUBLISH from '../../Assets/unpublish.png';
import DELETE from '../../Assets/trash.png';





export default function MyBooks(){
    const [clickedIndex, setClickedIndex] = useState(null);
    const [deleteBook, setDeleteBook] = useState(null);
    const [showModal, setShowModal] = useState(false)

    const handleClick = (index) => {
        // Toggle the clicked state only for the specific card
        setClickedIndex(prev => prev === index ? null : index);
    }

    const handleDelete = (book) =>{
        setDeleteBook(book);
        setShowModal(true)
    }

    const closeModal =()=>{
        setShowModal(false);
        setDeleteBook(null);

    }

    const confirmDelete = () =>{
        console.log('bookdeleted')
        closeModal();

    }

    const books = [
        { title: "History of the world for senior secondary schools",
          date: "September 9, 2024",
         price: "$360",
         image: BOOK1
         
         },
        { title: "Novel: The sun with iterated idiomatic expressions", date: "September 9, 2024", price: "$360" ,
            image: BOOK2
        },
        { title: "Full Literature course with practice questions", date: "September 9, 2024", price: "$360" ,
            image: BOOK3

        },
        { title: "Indices & Logarithms with worked examples", date: "September 9, 2024", price: "$360" ,  image: BOOK4 },
        { title: "Grammar & composition for classes 1-3", date: "September 9, 2024", price: "$360", image: BOOK5 },
        { title: `Nouvel: Think outside the box volume 1`, date: "September 9, 2024", price: "$360" ,  image: BOOK6},
        { title: "Literature in English for junior secondary school 1", date: "September 9, 2024", price: "$360",  image: BOOK7 },
        { title: "Basic science for junior secondary school 3 ", date: "September 9, 2024", price: "$360",  image: BOOK8 },




    ];

    return (
        <div className={`${classes.booksContainer}`}>
            {books.map((book, index) => (
                <div key={index} className={`${classes.card}`}>
                    <div className={`${classes.cardBody}`}>
                        <div className={`${classes.cardImage}`}>
                            <img src={book.image} alt="book" />
                        </div>
                        <div className={`${classes.cardTitle}`}>
                            <h4>{book.title}</h4>
                            <div className={`${classes.cardText}`}>
                                <p>{book.date}</p>
                                <p>{book.price}</p>
                            </div>
                            <div className={`${classes.toggler}`}>
                                <span className={`${classes.toggleIcon}`} onClick={() => handleClick(index)}>
                                    <img src={DOTS} alt="icon" />
                                </span>
                                {clickedIndex === index && (
                                    <div className={`${classes.listToggler}`}>
                                        <ul>
                                            <li><img src={EDIT} alt="icon" /> Edit</li>
                                            <li><img src={PREVIEW} alt="icon" />Preview</li>
                                            <li><img src={PUBLISH} alt="icon" />Publish</li>
                                            <li><img src={UNPUBLISH} alt="icon" />Unpublish</li>
                                            <li onClick={() => handleDelete(book)}>
                                                <img src={DELETE} alt="icon" /> Delete
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {showModal && (
                <div className={classes.modal}>
                <div className={classes.modalContent}>
                    <h3>Are you sure you want to delete this resource?</h3>
                    <button onClick={closeModal}>No, Go back</button>
                    <button onClick={confirmDelete}>Yes, Delete</button>
                </div>
            </div>
            )}
        </div>

    );
}
