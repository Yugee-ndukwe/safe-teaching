import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './books.module.css';
import images from '../../Assets/resources'


export default function MyBooks() {
    const [clickedIndex, setClickedIndex] = useState(null);
    const [deleteBook, setDeleteBook] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleClick = (index) => {
        // Toggle the clicked state only for the specific card
        setClickedIndex(prev => prev === index ? null : index);
    };

    const handleDelete = (book) => {
        setDeleteBook(book);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setDeleteBook(null);
    };

    const confirmDelete = () => {
        console.log('book deleted');
        closeModal();
    };

    const books = [
        { title: "History of the world for senior secondary schools", date: "September 9, 2024", price: "$360", image: images.HISTORY_BOOK },
        { title: "Novel: The sun with iterated idiomatic expressions", date: "September 9, 2024", price: "$360", image: images.THE_SUN_NOUVEL },
        { title: "Full Literature course with practice questions", date: "September 9, 2024", price: "$360", image: images.LIT_PRACTICE },
        { title: "Indices & Logarithms with worked examples", date: "September 9, 2024", price: "$360", image: images.INDICES_LOG },
        { title: "Grammar & composition for classes 1-3", date: "September 9, 2024", price: "$360", image: images.ENG_GRAM },
        { title: "Nouvel: Think outside the box volume 1", date: "September 9, 2024", price: "$360", image: images.THINK_OUT_NOUVEL },
        { title: "Literature in English for junior secondary school 1", date: "September 9, 2024", price: "$360", image: images.LIT_ENG },
        { title: "Basic science for junior secondary school 3", date: "September 9, 2024", price: "$360", image: images.B_SCIENCE },
    ];

    const openBookDetails = (book) => {
        navigate('/bookDetails', { state: { book } });  // Pass the book as state
    };

    return (
        <div className={`${classes.booksContainer}`}>
            {books.map((book, index) => (
                <div key={index} className={`${classes.card}`}>
                    <div className={`${classes.cardBody}`}>
                        <div className={`${classes.cardImage}`}  onClick={() => openBookDetails(book)}>
                            <img src={book.image} alt="book" />
                        </div>
                        <div className={`${classes.cardTitle}`}>
                            <h4>{book.title}</h4>
                            <div className={`${classes.cardText}`}>
                                <p className={`${classes.bookDate}`}>{book.date}</p>
                                <p className={`${classes.bookPrice}`}>{book.price}</p>
                            </div>
                            <div className={`${classes.toggler}`}>
                                <span className={`${classes.toggleIcon}`} onClick={() => handleClick(index)}>
                                    <img src={images.BOOK_DOTS_TOGGLER} alt="icon" />
                                </span>
                                {clickedIndex === index && (
                                    <div className={`${classes.listToggler}`}>
                                        <ul>
                                            <li><img src={images.EDIT_ICON} alt="icon" /> Edit</li>
                                            <li><img src={images.PREVIEW} alt="icon" />Preview</li>
                                            <li><img src={images.PUBLISH} alt="icon" />Publish</li>
                                            <li><img src={images.UNPUBLISH} alt="icon" />Unpublish</li>
                                            <li className={`${classes.delete}`} onClick={() => handleDelete(book)}>
                                                <img src={images.DELETE} alt="icon" /> Delete
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
