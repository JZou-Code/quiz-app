import React, {useEffect, useRef, useState} from 'react';
import SearchSidebar from '../components/SearchSidebar';
import QuizCard from '../components/QuizCard';
import classes from '../style/WelcomPage.module.css';
import Header from "../components/Header.jsx";
import {fetchQuizCards} from "../api/quizCards.js";

const WelcomePage = () => {
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const originalTags = useRef([]);
    const [timer, setTimer] = useState()

    useEffect(() => {
        fetchQuizCards()
            .then(res => {
                originalTags.current = [...res.data];
                setTags(res.data);
                setIsLoading(false)
            })
    }, []);

    const onSearch = (keyword) => {
        if(timer){
            timer.clear();
            setTimer()
        }
        setTimer(setTimeout(() => {
            const newTags = originalTags.current.filter(item =>
                item.toLowerCase().includes(keyword.toLowerCase().trim()));
            setTags(newTags);
        }, 500));
    }

    return (
        <>
            <Header/>
            <div className={classes.Container}>
                {isLoading ?
                    <p>
                        Loading...
                    </p>
                    :
                    <div className={classes.CardContainer}>
                        {tags.map((title, idx) => (
                            <QuizCard key={idx} title={title}/>
                        ))}
                    </div>
                }
                <div className={classes.SideContainer}>
                    <SearchSidebar onSearch={onSearch}/>
                </div>
            </div>

        </>
    );
};

export default WelcomePage;