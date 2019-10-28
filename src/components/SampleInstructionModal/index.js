import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import Timer from '../Timer'

const ModalExample = props => {
  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)
  const [nestedModal, setNestedModal] = useState(false)
  const [closeAll, setCloseAll] = useState(false)

  const toggle = () => setModal(!modal)
  const toggleNested = () => {
    setNestedModal(!nestedModal)
    setCloseAll(false)
  }

  const toggleAll = () => {
    setNestedModal(!nestedModal)
    setCloseAll(true)
  }

  return (
    <div className='modal-container'>
      <Button color='danger' onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className='bg-danger text-white'>
          Instructions
        </ModalHeader>
        <ModalBody>
          <h5>Make Sure I Am On My Side</h5>
          <h5>Clear Object From My Mouth</h5>
          <h5>Don't Hold Me During The Seizure</h5>
          <h5>Unless I Am Hurt, Call 911 After 5min.</h5>
          <br />
          <h5>
            Hi, my name is Claire. I have epilepsy and am having a seizure.
            Don’t be afraid. My seizures typically last between two and five
            minutes. During the seizure, please follow the instructions above.
            If it is nearby, I keep emergency nasal spray medication in my
            backpack Thank you for helping me.
          </h5>
          <br />
          <Button color='success' onClick={toggleNested}>
            Disable Alert
          </Button>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={toggleNested}>
                Done
              </Button>{' '}
              <Button color='secondary' onClick={toggleAll}>
                All Done
              </Button>
            </ModalFooter>
          </Modal>
          <Timer />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalExample

// TO ADDS
/*
1. ADD A TIMER DISPLAY
2. CHECKLIST
3. CONDITIONALLY ALERT FOR NOTIFYING EMERGENCY RESPONDER 



*/
