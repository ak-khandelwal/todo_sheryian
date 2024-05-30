import React from 'react';
import Card from './Card';
import '../CSS/Foreground.css';
import '../CSS/Card.css';
const Foreground = () => {
  return (
    <section id="foreground" className=''>
        <header className=''>
            <h1 className='relative text-center p-4 text-orange-600 font-bold tracking-widest'>Documents
            <button type="button" className="text-white bg-orange-600 hover:bg-orange-200 hover:text-black font-medium md:rounded-lg md:text-sm md:px-5 md:py-2.5 px-3 py-1.5 me-2 mb-2 absolute right-0 top-15">Add</button>
            </h1>
        </header>
        <section id="cards" className='flex justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </section>
    </section>
  )
}

export default Foreground