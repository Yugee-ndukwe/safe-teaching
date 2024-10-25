import { useEffect, useRef, useState } from 'react';
import images from '../../Assets/resources';
import classes from './totalEarnigs.module.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function TotalEarnigs() {
    const [openMonth, setOpenMonth] = useState(false);
    const [openYear, setOpenYear] = useState(false);

    const monthlyRef = useRef(null);
    const yearlyRef = useRef(null);

    useEffect(() => {
        // Function to handle click outside
        const handleClickOutside = (event) => {
            if (
                openMonth &&
                monthlyRef.current && !monthlyRef.current.contains(event.target)
            ) {
                setOpenMonth(false);
            }
            if (
                openYear &&
                yearlyRef.current && !yearlyRef.current.contains(event.target)
            ) {
                setOpenYear(false);
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMonth, openYear]);

    const handleMonthSelect = () => {
        setOpenMonth(!openMonth);
        setOpenYear(false); // Close other dropdown
    };

    const handleYearlyClick = () => {
        setOpenYear(!openYear);
        setOpenMonth(false); // Close other dropdown
    };

    const data = [
        { name: 'Jan', below200: 50, above200: 0 },
        { name: 'Feb', below200: 0, above200: 0 },
        { name: 'Mar', below200: 50, above200: 0 },
        { name: 'Apr', below200: 0, above200: 0 },
        { name: 'May', below200: 0, above200: 320 },
        { name: 'Jun', below200: 150, above200: 0 },
        { name: 'Jul', below200: 0, above200: 400 },
        { name: 'Aug', below200: 0, above200: 0 },
        { name: 'Sep', below200: 50, above200: 0 },
        { name: 'Oct', below200: 0, above200: 250 },
        { name: 'Nov', below200: 0, above200: 0 },
        { name: 'Dec', below200: 0, above200: 0 },
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
                            <button onClick={handleMonthSelect}>
                                Sort by: Monthly
                                <img src={images.ARROW_DOWN} alt="" />
                            </button>
                            {openMonth && (
                                <div ref={monthlyRef} className={`${classes.dropdown}`}>
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
                    {openYear && (
                        <div ref={yearlyRef} className={`${classes.dropdownYear}`}>
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
                                data={data}
                                margin={{ top: 20, right: 50, left: 50, bottom: 0 }}
                                barCategoryGap="15%"  // Adjusts the gap between categories
                                barGap={5}             // Adjusts the gap between bars in the same category
                            >
                                <CartesianGrid horizontal={true} vertical={false} stroke="#E0E0E0" />
                                <XAxis 
                                    dataKey="name" 
                                    tick={{ fill: '#888888' }} 
                                    tickLine={false}
                                    axisLine={false}
                                    padding={{ left: 50, right: 50 }} // Adds more padding for centering
                                />
                                <YAxis 
                                    tick={{ fill: '#888888' }} 
                                    tickFormatter={yAxisTickFormatter} 
                                    domain={[0, 400]} 
                                    ticks={[200, 400]} 
                                />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="below200"
                                    fill="#D9D9D9"
                                    name="Below $200 Earnings"
                                    barSize={30} // Reduced size for better centering
                                    radius={[20, 20, 0, 0]}
                                />
                                <Bar
                                    dataKey="above200"
                                    fill="#4B4E61"
                                    name="Above $200 Earnings"
                                    barSize={30} // Matching size for consistency
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
