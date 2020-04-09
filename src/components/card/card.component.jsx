import React from 'react'

import './card.styles.css'

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monsters'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}
    />
    <h1>{props.monster.name}</h1>
    <h2>{props.monster.email}</h2>
  </div>
)
