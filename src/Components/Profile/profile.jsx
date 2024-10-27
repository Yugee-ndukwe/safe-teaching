import { useState, useRef } from 'react';
import classes from './profile.module.css';
import images from '../../Assets/resources';

export default function Profile() {
    const [profileImage, setProfileImage] = useState(images.PROFILE_PIX);
    const fileInputRef = useRef(null); // Reference to the hidden file input

    const handleChangePix = () => {
        fileInputRef.current.click(); // Trigger the file input dialog
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl); // Update profile image preview
        }
    };

    const handleDeletePix = () => {
        setProfileImage(images.PROFILE_PIX); // Reset to default image
    };

    return (
        <div className={`${classes.profilePage}`}>
            <div className={`${classes.pageContainer}`}>
                <div className={`${classes.pageIndi}`}>
                    <p>My store</p>
                    <img src={images.ARROW_RIGHT} alt="icon" />
                    <p>My Configuration</p>
                </div>
                <div className={`${classes.pTitle}`}>
                    <h3>Store profile picture</h3>
                </div>

                <div className={`${classes.myProfile}`}>
                    <div>
                        <img src={profileImage} alt="profile" />
                    </div>
                    <div className={`${classes.profileBtn}`}>
                        <button className={`${classes.change}`} onClick={handleChangePix}>Change picture</button>
                        <button className={`${classes.delete}`} onClick={handleDeletePix}>Delete picture</button>
                    </div>
                    {/* Hidden file input */}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
                <div className={`${classes.profileInfo}`}>
                    <label>
                        Store name
                        <input type="text" placeholder='Your store name' />
                    </label>
                    <label>
                        Store Url
                        <div className={`${classes.copy}`}>
                            <input type="url" placeholder='http://safeticha.com/mystore/Username' className={`${classes.copyInput}`} />
                            <div className={`${classes.copyImg}`}>
                                <span>Copy</span>
                                <img src={images.COPY} alt="" />
                            </div>
                        </div>
                    </label>
                    <label>
                        Store Description
                        <textarea name="message" id=""></textarea>
                    </label>
                </div>
                <div className={`${classes.save}`}>
                    <button>Save Changes</button>
                </div>
            </div>
        </div>
    );
}
