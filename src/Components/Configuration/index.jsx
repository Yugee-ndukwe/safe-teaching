import classes from './config.module.css';
import USER from '../../Assets/user.png';
import USER1 from '../../Assets/vector2.png';


export default function Configuration(){
    return(
        <>
            <div className={`${classes.config}`}>
                <h1> My Configuration</h1>
                <div className={`${classes.setUser}`}>
                   <div className={`${classes.configTab}`}>
                   <div className={`${classes.userIcon}`}>
                        <img src={USER} alt="" />
                        <p>Set Username</p>
                    </div>
                    <div className={`${classes.content}`}>
                        <div className={`${classes.img2}`}>
                        <img src={USER1} alt="" />
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
        </>
    )
}