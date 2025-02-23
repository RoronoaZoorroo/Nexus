import React from 'react'

// Single messaage that user send

const SingleMszBox = ({align, sender}) => {
    let a = "place-self-end"
    let b
    const alignment = () => {
        if (align === "right") {
            return a
        }
        
    }
    const color = () => {
        if (sender === "user") {
            return "bg-emerald-500"
        }
    }
    
    
  return (
    <span className={`max-w-[45%] p-1 pl-2 border-2 rounded-2xl ${color()} ${alignment()}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda iure omnis, modi distinctio pariatur laudantium.</span>
  )
}

export default SingleMszBox