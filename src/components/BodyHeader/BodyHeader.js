import React from 'react'
import { Link } from 'react-router-dom'

export default function BodyHeader() {
  return (
    <>
        <div className='w-full h-12 shadow-lg rounded-t-md flex justify-around'>
            <li>
                <Link to='/item1'></Link>
            </li>
            <li>
                <Link to='/item2'></Link>
            </li>
            <li>
                <Link to='/item3'></Link>
            </li>
        </div>
    </>
  )
}
