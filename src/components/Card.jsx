import React from 'react'

const Card = () => {
  return (
    <article className='card-item w-60 h-72 rounded-[20px] bg-zinc-900/90 p-2 text-white m-4 relative'>
      <header className='bg-orange-600 absolute top-0 left-0 w-[100%] text-center'>TODO</header>
        <p className= 'h-50 py-4 text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, incidunt quod. Perspiciatis, ab est. Quibusdam ut saepe soluta ratione doloremque eum? Assumenda dignissimos quaerat aliquam culpa ducimus vel esse sit commodi quis, eius ipsum vero nemo neque asperiores doloribus a fugit atque perferendis? Reprehenderit odio eaque natus quas ratione id.
        </p>
    </article>
  )
}

export default Card