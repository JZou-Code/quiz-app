import React, {useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import classes from '../style/AccountPage.module.css'
import {generateTime} from "../utils/generateTime.js";
import HistoryBlock from "../components/HistoryBlock.jsx";
import {getHistory} from "../api/quizzes.js";

const HistoryPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [history, setHistory] = useState([]);
    const fetchHistory = async () => {
        try {
            const {data} = await getHistory();

            if (data.code === 200 || data.code === '200') {
                setHistory(data.data)
                setIsEmpty(data.data.length === 0)
            } else {
                setIsError(true)
            }
        } catch (e) {
            setIsError(true);
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div>
            <Header/>
            <div className={classes.Container}>
                {
                    isLoading ? <div className={classes.Notification}>Loading...</div> :
                        history
                            .toSorted((a, b) => new Date(b.CreateAt) - new Date(a.CreateAt))
                            .map((item) => (
                                <HistoryBlock
                                    key={item.CreateAt}
                                    data={{
                                        ...item,
                                        quizNum: 20,
                                        time: generateTime(new Date(item?.CreateAt))
                                    }}
                                />
                            ))
                }
                {
                    isError && <div className={classes.Notification}>Something went wrong, please try again later.</div>
                }
                {
                    isEmpty &&
                    <div className={classes.Notification}>No data found</div>
                }
            </div>
        </div>
    );
};

export default HistoryPage;
