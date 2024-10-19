import classes from './resource.module.css';
import DROP from '../../Assets/arrow-down.png';
import UPLOAD from '../../Assets/undraw_not_found_re_bh2e 1.png';
import RIGHT from '../../Assets/arrow-right.png';

export default function Resource(){
    return(
        <>
            <div className={classes.resources}>
                <div className={`${classes.page}`}>
                    <span>
                        My store
                        <img src={RIGHT} alt="icon" />
                        My resources
                    </span>
                </div>
                <div className={`${classes.resTitle}`}>
                    <h1>My resources</h1>
                    <div className={`${classes.btnContainer}`}>
                        <div className={`${classes.resourceBtn}`}>
                            <p>Sort by: Types</p>
                            <img src={DROP} alt="drop" />
                        </div>
                        <div className={`${classes.add}`}>
                            <button>add new resoutces</button>
                        </div>
                    </div>
                </div>
                <div className={`${classes.upload}`}>
                    <img src={UPLOAD} alt="img" />
                    <p>No resource uploaded yet</p>
                </div>
            </div>
        </>
    )
}