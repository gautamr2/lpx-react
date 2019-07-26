import React, { useState } from 'react';
import { Input, Submit } from '../..';
import './style.scss';

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
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput('')
  const {
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
        iconName="fa-user-o"
        placeholder="Email"
        required
        {...bindFirstName}
      />
      <br />
      <Input
        name="lastName"
        id="lastName"
        placeholder="Mobile No"
        iconName="fa-mobile"
        iconSize='1.4em'
        required
        {...bindLastName}
      />
      <br />
      <Submit disabled={isButtonDisabled} />
    </Form>
  )
}
