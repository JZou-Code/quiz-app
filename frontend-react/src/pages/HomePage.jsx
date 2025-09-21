import React, {useEffect, useRef, useState} from 'react';
import SearchBar from '../components/SearchBar.jsx';
import QuizCard from '../components/QuizCard';
import classes from '../style/HomePage.module.css';
import {fetchQuizCards} from "../api/quizCards.js";
import Header from "../components/Header.jsx";
import Rank from "../components/Rank.jsx";

const HomePage = () => {
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
        if (timer) {
            clearTimeout(timer);
            setTimer()
        }
        setTimer(setTimeout(() => {
            const newTags = originalTags.current.filter(item =>
                item.toLowerCase().includes(keyword.toLowerCase().trim()));
            setTags(newTags);
        }, 200));
    }

    return (
        <>
            <Header/>
            <div className={classes.Container}>
                <div className={classes.Left}>
                    <SearchBar onSearch={onSearch}/>
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
                </div>
                <div className={classes.Right}>
                    <Rank/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
