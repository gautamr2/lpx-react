import { storiesOf } from '@storybook/react'
import React from 'react'
import {
  Button,
  Checkbox,
  Ellipsis,
  Input,
  Roller,
  Spinner,
  Submit,
  TreeStructure,
  Verify
} from '../src/index'

storiesOf('Loaders', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Spinner', () => <Spinner />)
  .add('Roller', () => <Roller />)

storiesOf('Input', module)
  .add('Input', () => (
    <Input
      name="name"
      placeholder="Enter your name"
      id="name"
      onChange={() => {}}
    />
  ))
  .add('Checkbox', () => <Checkbox label="One" />)

storiesOf('Forms', module).add('Forms', () => <Verify />)
storiesOf('Buttons', module)
  .add('Button', () => (
    <Button
      text="Reset"
      onClick={() => {
        console.log('Hello')
      }}
    />
  ))
  .add('Button props{small}', () => (
    <Button
      varient="small"
      text="Reset"
      onClick={() => {
        console.log('Hello')
      }}
    />
  ))
  .add('Submit', () => <Submit />)

storiesOf('Tree', module).add('Tree', () => (
  <div style={{ fontSize: '2rem' }}>
    <TreeStructure />
  </div>
))
