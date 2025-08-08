import React from 'react';
import Header from "../components/Header.jsx";
import classes from '../style/AccountPage.module.css'
import {fakeHistory} from '../mock/fakeHistory.js'
import {generateTime} from "../utils/generateTime.js";
import HistoryBlock from "../components/HistoryBlock.jsx";

const AccountPage = () => {
    return (
        <div>
            <Header/>
            <div className={classes.Container}>
                {
                    fakeHistory
                        .toSorted((a, b) => new Date(b.time) - new Date(a.time))
                        .map((item) => (
                            <HistoryBlock
                                key={item.time}
                                data={{ ...item, time: generateTime(item.time) }}
                            />
                        ))
                }
            </div>
        </div>
    );
};

export default AccountPage;
