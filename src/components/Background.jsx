import React from "react";

const Background = () => {
  return (
    <section id='background' className='absolute top-0 left-0 w-full h-screen bg-zinc-800 z-[-2]'>
      <header>
        <h1 className="fixed top-1/2 left-1/2 text-[13vw] font-semibold -translate-x-[50%] -translate-y-[50%] tracking-tighter text-zinc-900">
          DOCS.
        </h1>
      </header>
    </section>
  );
};

export default Background;
