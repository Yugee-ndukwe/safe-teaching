import classes from './box.module.css';
import IMG1 from '../../Assets/group3.png'
import IMG2 from '../../Assets/group2.png'
import IMG3 from '../../Assets/group1.png'
import IMG4 from '../../Assets/Polygon1.png';
import IMG5 from '../../Assets/group5.png';


import IMG from '../../Assets/imgleft.png'
// import IMG4 from '../../Assets/'



export default function Box(){
    return(
        <>
            <div className={`${classes.title}`}>
                <h1>Set Username</h1>
                <p>This is your marketplace where you can acccess all your information and data.</p>
            </div>

            <div className={`${classes.boxContainer}`}>
                <div className={`${classes.firstRow}`}>
                <div className={`${classes.first}`}>
                    <div className={`${classes.image}`}>
                       <img src={IMG3} alt="img" />
                    </div>
                    <div className={`${classes.res}`}>
                        <p >My Resources</p>
                        <p>0</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={IMG} alt="" />
                    </div>
                </div>
                <div className={`${classes.second}`}>
                    <div>
                         <img src={IMG2} alt="img" />
                    </div>
                    <div className={`${classes.res}`}>
                        <p >Total Earnings</p>
                        <p> &#x24;0</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={IMG} alt="" />
                    </div>
                    
                </div>
                </div>
               <div className={`${classes.firstRow}`}>
               <div className={`${classes.third}`}>
                    <img src={IMG1} alt="img" />
                    <div className={`${classes}`}>
                        <p >Balance</p>
                        <p>$0</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={IMG} alt="" />
                    </div>
                </div>
                <div className={`${classes.fourth}`}>
                    <img src={IMG4} alt="img" />
                    <div className={`${classes}`}>
                    <p >Learn how to earn</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={IMG} alt="" />
                    </div>
                </div>
               </div>
                <div className={`${classes.firstRow}`}>
                <div className={`${classes.fifth}`}>
                    <img src={IMG5} alt="img" />
                    <div className={`${classes}`}>
                    <p >Configuration</p>
                    </div>
                    <div className={`${classes.side}`}>
                        <img src={IMG} alt="" />
                    </div>
                </div>

                </div>
            </div>
        </>
    )
}