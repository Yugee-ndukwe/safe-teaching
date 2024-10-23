import classes from './box.module.css';
import images from '../../Assets/resources'



export default function box(){
    
    // const navigate = useNavigate();
    return(
        <>
           <div className={`${classes.container}`}>
           <div className={`${classes.title}`}>
                <h1>Set Username</h1>
                <p>This is your marketplace where you can acccess all your information and data.</p>
            </div>

            <div className={`${classes.boxContainer}`}>
                <div className={`${classes.firstRow}`}>
                <div className={`${classes.first}`}>
                    <div className={`${classes.image}`}>
                       <img src={images.MY_RESOURCES} alt="img" />
                    </div>
                    <div className={`${classes.res}`}>
                        <p >My Resources</p>
                        <p className={`${classes.imagePrice}`}>0</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={images.DOUBLE_RIGHT_ARROW} alt=""icon />
                    </div>
                </div>
                <div className={`${classes.second}`}>
                    <div>
                         <img src={images.TOTAL_EARNINGS} alt="toal earnings" />
                    </div>
                    <div className={`${classes.res}`}>
                        <p >Total Earnings</p>
                        <p className={`${classes.imagePrice}`}> $0</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={images.DOUBLE_RIGHT_ARROW} alt="icon" />
                    </div>
                    
                </div>
                </div>
               <div className={`${classes.firstRow}`}>
               <div className={`${classes.third}`}>
                    <img src={images.BALANCE} alt="balance" />
                    <div className={`${classes.res}`}>
                        <p >Balance</p>
                        <p className={`${classes.imagePrice}`}>$0</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={images.DOUBLE_RIGHT_ARROW} alt="icon" />
                    </div>
                </div>
                <div className={`${classes.fourth}`}>
                    <img src={images.LEARN_TO_EARN} alt="learn" />
                    <div className={`${classes.res}`}>
                    <p >Learn how to earn</p>
                    </div>
                    <div className={`${classes.sideArrow}`}>
                        <img src={images.DOUBLE_RIGHT_ARROW} alt="icon" />
                    </div>
                    <div className={classes.additionalImage}>
                        <img src={images.LEARN} alt="learn" />
                    </div>
                </div>
               </div>
                <div className={`${classes.firstRow}`}>
                <div className={`${classes.fifth}`}>
                    <img src={images.CONFIGURATION} alt="config" />
                    <div className={`${classes.res}`}>
                    <p >Configuration</p>
                    </div>
                    <div className={`${classes.sideArrow}`}>
                        <img src={images.DOUBLE_RIGHT_ARROW} alt="" />
                    </div>
                </div>

                </div>
            </div>
           </div>
        </>
    )
}