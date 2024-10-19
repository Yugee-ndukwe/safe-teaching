import classes from './books.module.css';
import BOOK1 from '../../Assets/Image.png';
import DOTS from '../../Assets/3dots.png';
import { useState } from 'react';
import EDIT from '../../Assets/edit.png';

export default function MyBooks(){
    const [clicked, setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(prev => !prev)
    }
    return(
        <>
            <div className={`${classes.booksContainer}`}>
                <div className={`${classes.card}`}>
                    <div className={`${classes.cardBody}`}>
                        <div className={`${classes.cardImage}`}>
                            <img src={BOOK1} alt="book" />
                        </div>
                        <div className={`${classes.cardTitle}`}>
                            <h4>History of the world for senior secondary schools</h4>
                            <div className={`${classes.cardText}`}>
                                <p>September 9, 2024</p>
                                <p>$360</p>
                            </div>
                            <div>
                                <span onClick={handleClick}>
                                <img src={DOTS} alt="icon" />
                                </span>
                                {clicked && (
                                    <div className={`${classes.listToggler}`}>
                                    <ul>
                                        <li><img src={EDIT} alt="icon" /></li>
                                        <li><img src={EDIT} alt="icon" /></li>
                                        <li><img src={EDIT} alt="icon" /></li>
                                        <li><img src={EDIT} alt="icon" /></li>
                                        <li><img src={EDIT} alt="icon" /></li>
                                    </ul>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}