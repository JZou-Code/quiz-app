import React, { useEffect, useState } from 'react';
import classes from '../style/SharePage.module.css';
import {useParams} from 'react-router-dom'; 


const SharePage = () => {
  const [data, setData] = useState(null);
  const {shareId = 'test-id'} = useParams(); 

  // const [data, setData] = useState({
  //   username: 'TestUser',
  //   time: '2025-08-12 12:34',
  //   quizTag: ['Math'],
  //   score: 95,
  // });


  async function fetchSharedData() {
    try{
      const res = await fetch(`/api/share/${shareId}`);
      const sharedData= await res.json(); 
      setData(sharedData); 
    }catch(err){
      console.error('data error: ', err);
      setData(null); 
    }
  }
  useEffect(()=>{
    fetchSharedData(); 
  },[shareId]); 

  if(!data) return <p>no data available</p>

 
  return (
    <div className={classes.Container}>
      <img src="/congrat.jpg" alt="congratulations" />
      <h2 className={classes.Title}>
      Well done! {data.username}!
      </h2>
      <div className={classes.Text}>
        <p>Your final score is {data.score}!</p>
        <p>You have completed the {data.quizTag} challenge on: {data.time}.</p>
        <p>Your speed and accuracy were truly impressive!</p>
      </div>
    </div>
  )
}; 

export default SharePage; 