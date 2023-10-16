import Button from "../../ui/Button"
import React, { useState } from 'react'
import CreateCabinForm from './CreateCabinForm'
import Modal from '../../ui/Modal'

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm OnCloseModal={() => setIsOpenModal(false)}/>
        </Modal>
      )}
    </div>
  )
}

export default AddCabin