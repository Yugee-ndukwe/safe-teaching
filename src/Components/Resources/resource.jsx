import { useEffect, useRef, useState } from 'react';
import classes from './resource.module.css';
import images from '../../Assets/resources';

export default function Resource() {
    const [openTypss, setOpenTypes] = useState(false);
    const clickRef = useRef(null); // Reference for the dropdown

    const handleSortClick = () => {
        setOpenTypes(!openTypss);
    };

    // Handle outside click to close dropdown
    useEffect(() => {
        function handleOutsideClick(e) {
            if (clickRef.current && !clickRef.current.contains(e.target)) {
                setOpenTypes(false); // Close the dropdown if clicked outside
            }
        }

        // Attach the event listener
        document.addEventListener('mousedown', handleOutsideClick);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [clickRef, openTypss]);

    return (
        <>
            <div className={`${classes.myResources}`}>
                <div className={classes.resources}>
                    <div className={`${classes.resourceWrapper}`}>
                        <div className={`${classes.page}`}>
                            <span>
                                My store
                                <img src={images.ARROW_RIGHT} alt="icon" />
                                My resources
                            </span>
                        </div>
                        <div>
                            <div className={`${classes.resTitle}`}>
                                <div className={`${classes.resText}`}>
                                    <h3>My Resources</h3>
                                </div>
                                <div className={`${classes.btnContainer}`}>
                                    <div className={`${classes.resourceBtn}`} ref={clickRef}>
                                        <button onClick={handleSortClick}>
                                            Sort by: Types
                                            <img src={images.ARROW_DOWN} alt="drop" />
                                        </button>
                                        {openTypss && (
                                            <div className={`${classes.sortType}`}>
                                                <ul>
                                                    <li>Resources</li>
                                                    <li>Total Earnings</li>
                                                    <li>Transaction</li>
                                                    <li>Configuration</li>
                                                    <li>Balance</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`${classes.add}`}>
                                        <button>add new resources</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.upload}`}>
                                <img src={images.UPLOAD_RESOURCE} alt="img" />
                                <p>No resource uploaded yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
