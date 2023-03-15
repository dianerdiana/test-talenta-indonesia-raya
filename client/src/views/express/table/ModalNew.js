// ** React Import
import React from 'react'

// ** Thirdparty Component
import * as yup from 'yup'
import { Modal, Button, Form } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import classnames from 'classnames'
import Select from 'react-select'

// ** Store & Redux
import { addUser } from '../../store/express'
import { useDispatch } from 'react-redux'

// ** selectThemeColor
import { selectThemeColors } from '../../../utility/utils'

const ModalNew = (props) => {
  const dispatch = useDispatch()

  const FormSchema = yup.object().shape({
    fullname: yup.string().min(3).required(),
    age: yup.string().min(1).required(),
    gender: yup.object().required(),
  })

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormSchema),
  })

  const onSubmit = (data) => {
    const newUser = {
      ...data,
      gender: data.gender.value,
    }
    dispatch(addUser(newUser)).then((res) => {
      if (res.payload) {
        const { status, message } = res.payload

        if (status === 'success') {
          props.onHide()
          handleReset()
          return toast.success(message)
        }

        return toast.error(message)
      }
    })
  }

  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]

  const handleReset = () => {
    reset({
      fullname: '',
      age: '',
      gender: '',
    })
  }

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="border-0 shadow-none" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Controller
              id="fullname"
              name="fullname"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Form.Control className="shadow-none" isInvalid={errors.fullname && true} {...field} />
              )}
            />

            {errors.fullname && <Form.Text className="text-danger">{errors.fullname.message}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Controller
              id="age"
              name="age"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Form.Control type="number" className="shadow-none" isInvalid={errors.age && true} {...field} />
              )}
            />

            {errors.age && <Form.Text className="text-danger">{errors.age.message}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Gender</Form.Label>
            <Controller
              id="age"
              name="age"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <Controller
                  id="gender"
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      isClearable
                      options={genderOptions}
                      classNamePrefix="select"
                      theme={selectThemeColors}
                      className={classnames('react-select', {
                        'is-invalid': errors.gender && true,
                      })}
                      {...field}
                    />
                  )}
                />
              )}
            />

            {errors.gender && <Form.Text className="text-danger">{errors.gender.message}</Form.Text>}
          </Form.Group>
          <Form.Group className="text-end">
            <Button type="reset" variant="dark" className="px-3 shadow fw-bold text-white me-3" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" variant="success" className="px-4 shadow fw-bold text-dark">
              Add
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalNew
