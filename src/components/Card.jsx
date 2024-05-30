import React, { useEffect } from 'react'

const Card = ({movie,description}) => {
  function countWord(string){
    // it will remove all falsy value from string
      return string.split(' ').filter(Boolean).length;
  }
  return (
    <article className='card-item w-60 h-72 rounded-[20px] bg-zinc-900/90 p-2 text-white m-4 relative p-0'>
      <header className='bg-orange-600 w-[100%] text-center sticky top-0'><h5>{movie}</h5></header>
        <p className= 'h-50 py-4 text-center'>
            {description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis earum fugit minus accusantium asperiores quis exercitationem harum vel commodi tempora blanditiis corrupti rem, ad iste. Accusamus corporis, saepe aliquam dolore assumenda nam autem aperiam! Neque rerum voluptate aspernatur? Pariatur ullam eius optio? Labore, tenetur iure repellendus deserunt sequi animi.
        </p>
        <footer className='bottom-0 bg-zinc-900 w-[100%] text-center'>
          <p>
          word length {countWord(description)}
          </p>
        </footer>
    </article>
  )
}

export default Card