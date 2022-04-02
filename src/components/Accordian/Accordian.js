import React from 'react'
import { Accordion } from 'react-bootstrap'
import DropdownRender from '../DropdownButton/DropdownButton'

export default function Accordian() {
  return (
    <>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
  <div className='w-full lg:flex lg:justify-around sm:flex-none'>
  <Accordion.Header>Comparisons</Accordion.Header>
  <Accordion.Item eventKey="1">
  <Accordion.Header>Visualizations</Accordion.Header>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
  <Accordion.Header>Papers</Accordion.Header>
  </Accordion.Item>
    
  </div>
    <Accordion.Body className='show text-center py-24'>
    <DropdownRender></DropdownRender>
    There are no comparisons for this research field, yet.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Body className='show text-center py-24'>
    <DropdownRender></DropdownRender>
    There are no visualizations for this research field, yet.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Body className='show text-center py-24'>
    <DropdownRender></DropdownRender>
    There are no papers for this research field, yet.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </>
  )
}
