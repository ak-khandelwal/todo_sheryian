import React from 'react';
import Card from './Card';
import '../CSS/Card.css';
const Foreground = () => {
  return (
    <section id="foreground" className=''>
        <header>
            <h1 className='text-center p-4 text-orange-600 font-bold tracking-widest'>Documents</h1>
        </header>
        <section id="cards" className=''>
        <Card />
        <Card />
        </section>
    </section>
  )
}

export default Foreground