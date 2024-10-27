import classes from './transaction.module.css';
import images from '../../Assets/resources';

export default function Transactions() {
   
    const transactions = [
        {
            type: 'Withdrawal',
            date: 'September 10, 2024',
            amount: '- $270.00',
            logo: images.DOUBLE_ARROW,
        },
        {
            type: 'Withdrawal',
            date: 'September 10, 2024',
            amount: '- $270.00',
            logo: images.DOUBLE_ARROW,
        },
        {
            type: 'Withdrawal',
            date: 'September 10, 2024',
            amount: '- $270.00',
            logo: images.DOUBLE_ARROW,
        },
    ];

    return (
        <>
            <div className={`${classes.transactionPage}`}>
                <div className={`${classes.transactionHistory}`}>
                <div className={`${classes.tPage}`}>
                            <p>My store</p>
                            <img src={images.ARROW_RIGHT} alt="" />
                            <p>Earnings</p>
                        </div>
                    <div className={`${classes.balanceData}`}>
                       
                        <div className={`${classes.transactionHeader}`}>
                            <div className={`${classes.transactionLogo}`}>
                                <div className={`${classes.logo}`}>
                                    <img src={images.TRANSACT_LOGO} alt="transact" />
                                </div>
                                <div>
                                    <span className={`${classes.balance}`}>Your Wallet Balance</span>
                                     <h5>$4,120.00</h5>
                                </div>
                            </div>
                            <div className={`${classes.withdrawBtn}`}>
                                <button>Withdraw</button>
                            </div>
                        </div>

                        <div className={`${classes.history}`}>
                            <p>Transaction History</p>

                            {transactions.map((transaction, index) => (
                                <div className={`${classes.myTransactions}`} key={index}>
                                    <div>
                                        <div className={`${classes.spent}`}>
                                            <div className={`${classes.spentLogo}`}>
                                                <img src={transaction.logo} alt="double arrow" />
                                            </div>
                                            <div className={`${classes.date}`}>
                                                <p >{transaction.type}</p>
                                                <span>{transaction.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className={`${classes.amount}`}>{transaction.amount}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
