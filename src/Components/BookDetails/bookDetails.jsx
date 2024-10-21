import classes from './bookDetails.module.css';
import { useLocation } from 'react-router-dom';
import image from '../../Assets/resources'

export default function BookDetails() {
    const location = useLocation();
    const book = location.state?.book;  // Retrieve the book object passed from MyBooks

    if (!book) {
        return <div>No book details available</div>;  // Handle case when no book is passed
    }

    return (
        <div className={`${classes.bookdetails}`}>
           <div className={`${classes.detailContainer}`}>
           <div className={`${classes.bookImg}`}>
                <img src={book.image} alt={book.title} />
            </div>
            <div className={`${classes.bookInfo}`}>
                <div>
                    <h3>{book.title}</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit dolor do amet sint. Velit  sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit dolor do amet sint. Velit  sunt nostrud amet.Amet minim mollit non deserunt ullamco</p>
                    <h5 className={`${classes.price}`}>$350 <small>.00</small></h5>
                    <p ><strong>Age Ranges:</strong> <span className={`${classes.ageRange}`}>0-8 12-16</span></p>
                    <p><strong>Subject:</strong> <span className={`${classes.subject}`}>Government & Politics</span></p>
                    <p className={`${classes.type}`}><strong>Type: Academics</strong></p>
                </div>
                <div className={`${classes.detailBtn}`}>
                    <button className={`${classes.backBtn}`}>
                        <img src={image.ARROW_RIGHT} alt="" />
                        Back
                    </button>
                    <button className={`${classes.editBtn}`}>Edit</button>
                </div>
            </div>
           </div>
        </div>
    );
}
