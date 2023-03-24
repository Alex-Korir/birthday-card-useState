import React, { useState } from 'react';
import "./container.css";
import { data } from "../data";

const Container = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  function eventHandler(){
    setPeople([]);
  }

  const removeItem = (id) => {
    let removal = people.filter((items)=> items.id !== id);
    setPeople(removal);
  }
  
  return (
    <div className='largeContainer'>
      <p className='heading'>{people.length} birthdays today</p>
      <div className='listItems'>
        {
          people.map((items) => {
            console.log(items);
          
            const {name,age,id} = items;
            return(
              <div key={id} className="boxer">
                <div className='icon'>
                  <img src={items.imgg} alt={name}/>
                </div>
                <div className='details'>
                  <h4>{name}</h4>
                  <p>{age}</p>
                </div>
                <button className='removeBtn' onClick={() => removeItem(id)}>Remove</button>
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