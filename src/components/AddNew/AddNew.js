import React from 'react'
import {Dropdown} from 'react-bootstrap'
import contributonImage from '../../img/tools/contribution-editor.png'
import addPaperImage from '../../img/tools/add-paper-wizard.png'
import './AddNew.css'

export default function AddNew({header}) {
  return (
    <>
      <Dropdown type="button" className={header ? "text-white bg-cus-orange focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 sm:py-2 lg:my-0 lg:w-40 sm:w-full px-12 flex justify-center items-center":"text-black bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm lg:mx-2 sm:my-2 sm:py-2 lg:my-0 lg:w-40 sm:w-full flex justify-center items-center"}>

          <Dropdown.Toggle className={header? "text-white":"text-black"} id="dropdown-button-dark-example1" >
              <svg className={header ? 'w-4 h-4 mr-2 -ml-1 fill-white inline':'w-4 h-4 mr-2 -ml-1 fill-gray-900 inline'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
              <span>Add New</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className='addnew'>
            <Dropdown.Item href="#/action-1">
              <div className='flex justify-center items-center'>
                 <div>
                     <img className='h-16' src={contributonImage} alt='contibution-editor'></img>
                 </div>
                 <div className='w-full ml-2'>
                     <h1 className='text-2xl text-gray-600 font-semibold'>Comparison</h1>
                     <p className='text-sm'>Create an overview of state-of-the-art <br></br> literature for a particular topic by adding <br></br> multiple contributions simultaneously.</p>
                 </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">
              <div className='flex justify-center items-center'>
                 <div>
                     <img className='h-16' src={addPaperImage} alt='contibution-editor'></img>
                 </div>
                 <div className='w-full ml-2'>
                     <h1 className='text-2xl text-gray-600 font-semibold'>Comparison</h1>
                     <p className='text-sm'>Create an overview of state-of-the-art <br></br> literature for a particular topic by adding <br></br> multiple contributions simultaneously.</p>
                 </div>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
