import React, { useState } from 'react';
import "./container.css";
import { data } from "../data";

const Container = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  function eventHandler(){
    setPeople();
  }

  
  return (
    <div className='largeContainer'>
      <p className='heading'>5 birthdays today</p>
      <div className='listItems'>
        {
          people.map((items) => {
            console.log(items);
          
            const {name,age,id,imgg} = items;
            return(
              <div key={id} className="boxer">
                <img src={imgg}/>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            )
          })
        }
      </div>
      
      <button className='changeButon' onClick={eventHandler}>Clear All</button>

    </div>
  )
}

export default Container;