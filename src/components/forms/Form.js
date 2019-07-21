import React, { useState } from 'react'
import { Input, Submit } from '../..'
import './style.scss'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    }
  }
}

export const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>{children}</form>
)

export const Verify = () => {
  const {
    value: valueFirstName,
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput('')
  const {
    value: valueLastName,
    bind: bindLastName,
    reset: resetLastName
  } = useInput('')
  const [isButtonDisabled, setButtonState] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    resetFirstName()
    resetLastName()
    setButtonState(true)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="firstName"
        id="firstName"
        placeholder="Enter First Name"
        {...bindFirstName}
        required
      />
      <br />
      <Input
        name="lastName"
        id="lastName"
        placeholder="Enter Last Name"
        {...bindLastName}
        required
      />
      <br />
      <Submit disabled={isButtonDisabled} />
    </Form>
  )
}
