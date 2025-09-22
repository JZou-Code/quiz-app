import React, {useEffect, useState} from 'react';
import classes from '../style/Rank.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareNodes} from '@fortawesome/free-solid-svg-icons';
import RankItem from "./RankItem.jsx";
import {requestRank} from "../api/otherUtils.js";
import ShareBoard from "./ShareBoard.jsx";
import Backdrop from "../UI/Backdrop/Backdrop.jsx";
import {baseURL} from "../utils/urlConfig.js";

const Rank = () => {
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [rank, setRank] = useState([]);

    const [isSharing, setIsSharing] = useState(false)

    const loadRank = async () => {
        try {
            setLoading(true)
            const {data} = await requestRank();
            if (data?.code === 200 || data?.code === '200') {
                if (data.data.length === 0) {
                    setIsEmpty(true);
                } else if (data.data.length > 6) {
                    setRank(data.data.slice(0, 6))
                } else {
                    setRank(data.data)
                }
            } else {
                setIsError(true);
            }
        } catch (e) {
            console.log(e)
            setIsError(true);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadRank();
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.TitleContainer}>
                <div className={classes.Title}>
                    Rank
                </div>
                <div onClick={() => {
                    setIsSharing(true)
                }} className={classes.Icon}>
                    <FontAwesomeIcon icon={faShareNodes}/>
                </div>
            </div>

            <div className={classes.RankMsg}>
                Updated every Sunday with data from Monday to Saturday
            </div>
            {
                (!loading && !isError && !isEmpty) &&
                <div className={classes.RankData}>
                    {
                        rank.map((item, index) => <RankItem key={index} data={{...item, rank: index + 1}}/>)
                    }
                </div>
            }

            {
                loading && <div className={classes.NotificationMsg}>Loading...</div>
            }
            {
                isError && <div className={classes.NotificationMsg}>Something went wrong</div>
            }
            {
                isEmpty && <div className={classes.NotificationMsg}>No data found</div>
            }
            {
                isSharing &&
                <Backdrop>
                    <ShareBoard url={baseURL} onCancel={() => {
                        setIsSharing(false)
                    }}/>
                </Backdrop>
            }
        </div>
    );
};

export default Rank;
