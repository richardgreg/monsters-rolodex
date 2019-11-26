import React from 'react'
import { Card } from '../card/card'
import './card-list.css';

// Exported functional component
export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
);