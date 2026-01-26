import React from 'react'

const Heading = ({text}) => {
  return (
    <div>
        <h1 className="text-6xl bg-clip-text text-transparent bg-linear-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-10">{text}</h1>
    </div>
  )
}

export default Heading