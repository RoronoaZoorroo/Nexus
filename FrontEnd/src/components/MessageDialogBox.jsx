import React from 'react'
import MsgBox from './MsgBox'

const MessageDialogBox = () => {
  return (
    <div className='w-full h-[64%] border-2 rounded-sm space-y-2'>
        <div className='flex justify-between p-2 text-lg font-bold border-b-2'>
            <span>Messages</span>
            <a className='font-semibold text-neutral-600' href="">Requests</a>
        </div>
        <div className='w-full h-[86%] flex flex-col px-2 overflow-y-scroll scrollbar-hidden'>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
            <MsgBox></MsgBox>
        </div>
    </div>
  )
}

export default MessageDialogBox