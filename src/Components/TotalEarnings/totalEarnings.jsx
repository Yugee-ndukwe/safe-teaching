// import classes from './totalEarnings.module.css';
import images from '../../Assets/resources';
import classes from './totalEarnigs.module.css';

export default function TotalEarnigs() {
    return(
        <>
            <div className={`${classes.totalEarnigs}`}>
                <div className={`${classes.pageTitle}`}>
                    <h6>My store</h6>
                    <img src={images.ARROW_RIGHT} alt="" />
                    <h6>Earnings</h6>
                </div>

                <div className={`${classes.myEarnings}`}>
                    <div className={`${classes.earningsHeader}`}>
                        <div className={`${classes.totalLogo}`}>
                            <img src={images.TOTAL_EARN_LOGO} alt="" />
                                <div>
                                <h1>Total Earnings</h1>
                                </div>
                        </div>
                        <div className={`${classes.headerBtn}`}>
                            <button>Sort by:Monthly
                                <img src={images.ARROW_DOWN} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className={`${classes.date}`}>
                        <p>2023</p>
                        <img src={images.ARROW_DOWN} alt="" />
                    </div>

                    <div className={`${classes.chart}`}>
                        <img src={images.TOTAL_CHART} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}