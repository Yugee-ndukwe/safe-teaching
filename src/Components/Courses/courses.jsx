import classes from './courses.module.css';
import IMAGES from '../../Assets/resources'


export default function MyCourses(){
    console.log(IMAGES)
   
    const course = [
        {
            image: IMAGES.GET_START,
            title: 'Learn How to get started with Resources' ,
            text: '15 Lessons (10h 5m'
        },

        {
            image: IMAGES.MAN_SALES,
            title: 'Sales: Manage your sales effectively' ,
            text: '15 Lessons (10h 5m)'
        },

        {
            image: IMAGES.CON_CREATE,
            title: 'Become a content creator for Beginners',
            text: '15 Lessons (10h 5m)'
        },

        {
            image: IMAGES.SALES_ANALYZE,
            title: 'Become a sales strategist and anaylzer',
            text: '15 Lessons (10h 5m)'
        },

        {
            image: IMAGES.MARKET_RES,
            title: 'Complete guide to marketing your resources',
            text: '15 Lessons (10h 5m)'
        },

        {
            image: IMAGES.BOOST_SALES,
            title: 'Boosting your Resource sales on Safeticha',
            text: '15 Lessons (10h 5m)'
        },

        {
            image: IMAGES.TOP_MARKETER,
            title: 'Learn how to be a Top Tier marketer in Safeticha',
            text: '15 Lessons (10h 5m)'
        },

        {
            image: IMAGES.GROW_AUD,
            title: 'Advanced: Grow your Audience in Creation',
            text: '15 Lessons (10h 5m)'
        }

    ]

    
    return(
        <>
            <div className={`${classes.courseList}`}>
                    <h2>List of courses</h2>
                    <div className={classes.courses}>
                  {course.map((course, i) => (
                    <div key={i} className={`${classes.courseCard}`}>
                        <div className={`${classes.courseBody}`}>
                            <div className={`${classes.courseImage}`}>
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className={`${classes.courseTitle}`}>
                                <h3>{course.title}</h3>
                                <div className={`${classes.courseTime}`}>
                                    <img src={IMAGES.COURSE_ICON} alt="" />
                                    <p>{course.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
           
        </>
    )
}

// export default function Courses(){

//     const courses = [
//         {
//             image: COURSE1,
//             title: 'Learn How to get started with Resources',
//             text: '15 Lessons (10h 5m)'
//         }
//     ]
//     return(
//         <>

//             <div className={`${classes.courses}`}>
//                 <div>
//                     <h3>List of courses</h3>
//                 </div>
//                 {courses.map((course, i) =>{
//                     <div key={i} className={`${classes.courseCard}`}>
//                         <div className={`${classes.courseBody}`}>
//                             <div className={`${classes.cardImg}`}>
//                                 <img src={} alt="" />
//                             </div>
//                             <div className={`${classes.courseTitle}`}>
//                                     <h3>{course.title}</h3>
//                                     <p>{course.text}</p>
//                              </div>

//                         </div>

//                     </div>
//                 })}

//             </div>
//         </>
//     )
// }