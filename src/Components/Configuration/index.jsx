import classes from './config.module.css';
import images from '../../Assets/resources'


export default function Configuration(){
    return(
        <>
            <div className={`${classes.config}`}>
                <div className={`${classes.configPage}`}>
                    <p>My store</p>
                    <img src={images.ARROW_RIGHT} alt="" />
                    <p>My Configuration</p>
                </div>
               <div>
               <h1> My Configuration</h1>
                <div className={`${classes.setUser}`}>
                   <div className={`${classes.configTab}`}>
                   <div className={`${classes.userIcon}`}>
                        <img src={images.USER} alt="" />
                        <p>Set Username</p>
                    </div>
                    <div className={`${classes.content}`}>
                        <div className={`${classes.img2}`}>
                        <img src={images.STORE_URL} alt="" />
                        </div>
                        <p>Store Url</p>
                    </div>
                   </div>
                   <div className={`${classes.presetContainer}`}>
                  <div className={`${classes.preset}`}>
                        <div>
                            <p>Preset</p>
                        </div>
                   </div>
                   <div className={`${classes.preset}`}>
                        <div>
                            <p>Preset</p>
                        </div>
                   </div>
                  </div>
                  <div className={`${classes.presetContainer}`}>
                  <div className={`${classes.preset}`}>
                        <div>
                            <p>Preset</p>
                        </div>
                   </div>
                   <div className={`${classes.preset}`}>
                        <div>
                            <p>Preset</p>
                        </div>
                   </div>
                  </div>

                </div>

                {/* <form action="">
                    <label >
                        <input type="text" />
                    </label>
                    <label >
                        <input type="text" />
                    </label>
                    <label >
                        <input type="text" />
                    </label>
                    <label >
                        <input type="text" />
                    </label>
                </form> */}
               </div>
            </div>
        </>
    )
}