import images from '../../Assets/resources';
import classes from './totalEarnigs.module.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';

export default function TotalEarnigs() {

    const data = [
        { name: 'Jan', earnings: 0 },
        { name: 'Feb', earnings: 0 },
        { name: 'Mar', earnings: 0 },
        { name: 'Apr', earnings: 200 },
        { name: 'May', earnings: 300 },
        { name: 'Jun', earnings: 100 },
        { name: 'Jul', earnings: 400 },
        { name: 'Aug', earnings: 0 },
        { name: 'Sep', earnings: 0 },
        { name: 'Oct', earnings: 300 },
        { name: 'Nov', earnings: 0 },
        { name: 'Dec', earnings: 0 },
    ];

    // Custom color for each bar based on name
    const getBarColor = (entry) => {
        const grayBars = ['Jan', 'Feb', 'Mar', 'Aug', 'Sep', 'Nov', 'Dec'];
        return grayBars.includes(entry.name) ? '#C4C4C4' : '#4A4A59';  // Gray for inactive months
    };

    // Custom label for bars with 0 earnings
    const renderCustomLabel = ({ x, y, width, value }) => {
        if (value === 0) {
            return (
                <text
                    x={x + width / 2}
                    y={y - 10} // Position above the bar
                    fill="#ff0000" // Red color to highlight zero
                    textAnchor="middle"
                    background= "#D9D9D9"
                    dominantBaseline="middle"
                    width="48.09px"
                    height= '37.3px'
                  

                >
                    
                </text>
                
            );
        }
        return null;
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
                                <img src={images.ARROW_DOWN} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className={`${classes.date}`}>
                        <p>2023</p>
                        <img src={images.ARROW_DOWN} alt="" />
                    </div>
                    <div className={`${classes.chart}`}>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={data}
                                margin={{
                                    top: 20, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                                <XAxis dataKey="name" tick={{ fill: '#888888' }} />
                                <YAxis tick={{ fill: '#888888' }} />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="earnings"
                                    fill={({ payload }) => getBarColor(payload)} // Dynamic color
                                    barSize={50}  // Adjust the bar size if needed
                                >
                                    <LabelList dataKey="earnings" content={renderCustomLabel} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
