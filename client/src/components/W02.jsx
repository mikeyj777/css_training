import { useState, useEffect } from "react";
import '../styles/w02.css';

const W02 = () => {

  const [date, setDate] = useState(new Date());
  const [dateFormatted, setDateFormatted] = useState('MM/DD/YYYY');

  useEffect(() => {
    setDateFormatted(
      `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    );
  }, [date]);

  return (
    <div>
      
      <h1>Welcome to my page!</h1>
      <h2>Mike James</h2>
      <img src='/data/ellie_emma_dad.jpg' alt="at the science"/>
      <div className="rainbow-divider"></div>
      <p>Take my class on science.</p>
      <a href="https://www.google.com"> Click here for Searches! </a>
      <p>You are the { Math.floor(Math.random()*1e6) }th visitor!!!!!</p>
      <p>Last Updated {dateFormatted} </p>
      
    </div>
  )

}

export default W02;