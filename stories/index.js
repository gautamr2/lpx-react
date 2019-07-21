import { storiesOf } from '@storybook/react'
import React from 'react'
import { Ellipsis, Input, Roller, Spinner, Verify } from '../src/index'

storiesOf('Loaders', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Spinner', () => <Spinner />)
  .add('Roller', () => <Roller />)

storiesOf('Input', module).add('Input', () => (
  <Input name="name" placeholder="Enter your name" id="name" />
))
storiesOf('Verify', module).add('Verify', () => <Verify />)
