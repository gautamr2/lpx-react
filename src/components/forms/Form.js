import React, { useState } from 'react'
import { Input } from '../..'
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

export const Submit = () => <button type="submit" value="Submit" />

export const Form = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>{children}</form>
)

export const Verify = () => {
  const {
    value: valueFirstName,
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput()
  const {
    value: valueLastName,
    bind: bindLastName,
    reset: resetLastName
  } = useInput(null)

  const handleSubmit = e => {
    e.preventDefault()
    resetFirstName()
    resetLastName()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="firstName"
        id="firstName"
        placeholder="Enter First Name"
        {...bindFirstName}
      />
      <br />
      <Input
        name="lastName"
        id="lastName"
        placeholder="Enter Last Name"
        {...bindLastName}
      />
      <br />
      <Submit />
    </Form>
  )
}
