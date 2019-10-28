import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem,
  Table,
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap'

import Logo from '../../assets/EpiCenter Logo-02.png'
import './styles.css'

const EpicenterNavbar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='primary' light expand='md'>
        <NavbarBrand href='/' className='text-white'>
          Your Dashboard
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <ListGroup>
                <ListGroupItem tag='a' href='#' action>
                  🏠 Your Dashboard
                </ListGroupItem>
                <ListGroupItem tag='a' href='#' action>
                  ✅ Set Safety Instructions
                </ListGroupItem>
                <ListGroupItem tag='a' href='#' action>
                  🗓 Manage Appointments
                </ListGroupItem>
                <ListGroupItem tag='a' href='#' action>
                  💊 Medication Center
                </ListGroupItem>
                <ListGroupItem tag='a' href='#' action>
                  ⌚️ Manage Your Devices
                </ListGroupItem>
                <ListGroupItem tag='a' href='#' action>
                  ♼ Cycle Tracking
                </ListGroupItem>
                <ListGroupItem tag='a' href='#' action>
                  ❃ Settings
                </ListGroupItem>
              </ListGroup>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className='dashboard'>
        <img src={Logo} className='image' />
        <Toast className='dashboard-items'>
          <ToastHeader icon='success'>Instructions</ToastHeader>
          <ToastBody>Safety insctructions set!</ToastBody>
        </Toast>
        <Toast className='dashboard-items'>
          <ToastHeader icon='danger'>Medication</ToastHeader>
          <ToastBody>
            💊 You are <strong>passed due</strong> on your prescription refill
          </ToastBody>
        </Toast>
        <Toast className='dashboard-items'>
          <ToastHeader icon='warning'>Appointments</ToastHeader>
          <ToastBody>
            🗓 You have an appointment with Dr. John on <strong>Oct 28th</strong>
          </ToastBody>
        </Toast>
        <Toast className='dashboard-items'>
          <ToastHeader icon='info'>Seizure History</ToastHeader>
          <ToastBody>
            <Table borderless>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Vitals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>7/25/19</td>
                  <td>1.2 min</td>
                  <td className='text-danger'>Above Ave.</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>9/13/19</td>
                  <td>2.1 min</td>
                  <td className='text-danger'>Above Ave.</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>10/22/19</td>
                  <td>.45 min</td>
                  <td>Normal</td>
                </tr>
              </tbody>
            </Table>
          </ToastBody>
        </Toast>
      </div>
    </div>
  )
}

export default EpicenterNavbar
