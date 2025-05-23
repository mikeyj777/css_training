import { useState, useEffect } from "react";
import '../styles/w01.css';

const W01 = () => {

  return (
    <div className="w01">
      <marquee behavior="scroll" direction="left">Klingons on the Starboard Bow!</marquee>
      <table>
        <tr>
          <th><h1>Welcome to my page!</h1></th>
          <th><h2>Mike James</h2></th>
        </tr>
        <tr>
          <th>
            <img src='/data/ellie_emma_dad.jpg' alt="at the science"/>
          </th>
          <th>
            <p>Take my class on science.</p>
            <a href="https://www.google.com"> Click here for Searches! </a>
            <p>You are the { Math.floor(Math.random()*1e6) }th visitor!!!!!</p>
          </th>
        </tr>
      </table>
    </div>
  )

}

export default W01;