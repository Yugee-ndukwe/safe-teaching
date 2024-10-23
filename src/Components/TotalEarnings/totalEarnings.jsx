import { useState } from 'react';
import images from '../../Assets/resources';
import classes from './totalEarnigs.module.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function TotalEarnigs() {
    const [openMonth, setOpenMonth] = useState(false);
    const [openYear, setOpenYear] = useState(false)

    const handleMonthSelect = () =>{
        setOpenMonth(!openMonth)
    };

    const handleYearlyClick = () => {
        setOpenYear(!openYear);
    }
    const data = [
        { name: 'Jan', below200: 50, above200: 0 },  // January earnings
        { name: 'Feb', below200: 0, above200: 0 },  // February has no earnings
        { name: 'Mar', below200: 50, above200: 0 },  // March has the same earnings as January
        { name: 'Apr', below200: 0, above200: 0 },   // April has no earnings (0 for both)
        { name: 'May', below200: 0, above200: 320 },  // May has above 200 earnings
        { name: 'Jun', below200: 150, above200: 0 },  // June earnings set to 150 below 200
        { name: 'Jul', below200: 0, above200: 400 },  // July earnings
        { name: 'Aug', below200: 0, above200: 0 },    // August earnings set to empty
        { name: 'Sep', below200: 50, above200: 0 },    // September earnings set to 50 below 200
        { name: 'Oct', below200: 0, above200: 250 },   // October earnings
        { name: 'Nov', below200: 0, above200: 0 },     // November has no earnings
        { name: 'Dec', below200: 0, above200: 0 },     // December has no earnings
    ];

    // Custom Y-axis tick formatter to show only $200 and $400
    const yAxisTickFormatter = (value) => {
        if (value === 200 || value === 400) {
            return `$${value}`; // Show only these two values with a dollar sign
        }
        return ''; // Hide other tick values
    };

    return (
        <>
            <div className={`${classes.totalEarnigs}`}>
                <div className={`${classes.pageTitle}`}>
                    <p>My store</p>
                    <img src={images.ARROW_RIGHT} alt="" />
                    <p>Earnings</p>
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
                            <button>Sort by: Monthly
                                <img src={images.ARROW_DOWN} onClick={handleMonthSelect} alt="" />
                            </button>
                           {openMonth &&(
                                 <div className={`${classes.dropdown}`}>
                                 <ul>
                                     <li>January</li>
                                     <li>February</li>
                                     <li>March</li>
                                     <li>April</li>
                                     <li>May</li>
                                     <li>June</li>
                                     <li>July</li>
                                     <li>August</li>
                                     <li>September</li>
                                     <li>October</li>
                                     <li>November</li>
                                     <li>December</li>
                                 </ul>
                             </div>
                           )}
                        </div>
                    </div>
                    <div className={`${classes.date}`}>
                        <p>2023</p>
                        <img src={images.ARROW_DOWN} onClick={handleYearlyClick} alt="" />
                    </div>
                            {openYear &&(
                                 <div className={`${classes.dropdown}`}>
                                 <ul>
                                     <li>2022</li>
                                     <li>2021</li>
                                     <li>2020</li>
                                     <li>2019</li>
                                     <li>2018</li>
                                     <li>2017</li>
                                     <li>2016</li>
                                     <li>2015</li>
                                     <li>2014</li>
                                     <li>2013</li>
                                     <li>2012</li>
                                     <li>2011</li>
                                 </ul>
                             </div>
                            )}
                    <div className={`${classes.chart}`}>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={data}  // Use the full data set
                                margin={{
                                    top: 20, right: 30, left: 0, bottom: 0,
                                }}
                                barCategoryGap="0"  // Reduce space between the bars for empty months
                            >
                                {/* Only horizontal grid lines */}
                                <CartesianGrid horizontal={true} vertical={false} stroke="#E0E0E0" />

                                <XAxis dataKey="name" tick={{ fill: '#888888' }} />

                                <YAxis 
                                    tick={{ fill: '#888888' }} 
                                    tickFormatter={yAxisTickFormatter} // Format Y-axis ticks to show only 200, 400
                                    domain={[0, 400]}  // Limit the Y-axis to a max value of 400
                                    ticks={[200, 400]}  // Only show ticks for 200 and 400
                                />

                                <Tooltip />
                                <Legend />

                                {/* Bar for earnings below $200 */}
                                <Bar
                                    dataKey="below200"
                                    fill="#D9D9D9"  // Custom gray color for below 200 earnings
                                    name="Below $200 Earnings"
                                    barSize={40}  // Adjust bar size to reduce width
                                    radius={[20, 20, 0, 0]} 
                                    color='#000000'
                                    // style={{borderRadius: '50px'}}
                                />

                                {/* Bar for earnings above $200 */}
                                <Bar
                                    dataKey="above200"
                                    fill="#4B4E61"  // Set the specified color for above 200 earnings
                                    name="Above $200 Earnings"
                                    barSize={100}  // Adjust bar size to reduce width
                                    radius={[20, 20, 0, 0]} 
                                   

                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
