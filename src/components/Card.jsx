import React, { useEffect } from 'react'

const Card = ({movie,description}) => {
  function countWord(string){
      return string.split(' ').length;
  }
  return (
    <article className='card-item w-60 h-72 rounded-[20px] bg-zinc-900/90 p-2 text-white m-4 relative'>
      <header className='bg-orange-600 absolute top-0 left-0 w-[100%] text-center'><h5>{movie}</h5></header>
        <p className= 'h-50 py-4 text-center'>
            {description} lorem50
        </p>
        <footer className='absolute left-0 bottom-0 bg-zinc-900 w-[100%] text-center'>
          <p>
          word length {countWord(description)}
          </p>
        </footer>
    </article>
  )
}

export default Card