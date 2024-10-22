import classes from './resource.module.css';
import images from '../../Assets/resources'

export default function Resource(){
    return(
        <>
            <div className={classes.resources}>
                {/* <div className={`${classes.page}`}>
                    <span>
                        My store
                        <img src={RIGHT} alt="icon" />
                        My resources
                    </span>
                </div> */}
                <div className={`${classes.resTitle}`}>
                    <div className={`${classes.resText}`}>
                    <h3>My Resources</h3>
                    </div>
                    <div className={`${classes.btnContainer}`}>
                        <div className={`${classes.resourceBtn}`}>
                            <button>
                                Sort by: Types
                                <img src={images.ARROW_DOWN} alt="drop" />
                            </button>
                            <p></p>
                            
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
        </>
    )
}