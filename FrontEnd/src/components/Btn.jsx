import React from 'react'

const Btn = ({name,color}) => {
  return (
    <button className={`py-2 w-[114px] text-xl font-semibold text-white rounded-md bg-sky-500`}>{name}</button>
  )
}

export default Btn