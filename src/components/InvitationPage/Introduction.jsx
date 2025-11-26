import React from 'react'

const Introduction = () => {
  return (
    <div className='relative'>
      <div className="absolute left-0 bottom-0">
        <img
          src="../img/flowers-corner.png"
          className="w-[150px] lg:w-[300px] m-[10px]"
        />
      </div>
      <div className='max-w-[1200px] m-auto'>
        <p className='text-center text-2xl p-25'>A veces lo que empieza como una <span className='font-[DancingScript] text-4xl'>locura</span>, se convierte en lo <span className='font-[DancingScript] text-4xl'>mejor</span> de tu vida</p>
      </div>
      <div className="absolute right-0 top-0 rotate-180">
        <img
          src="../img/flowers-corner.png"
          className="w-[150px] lg:w-[300px] m-[10px]"
        />
      </div>       
    </div>
  )
}

export default Introduction
