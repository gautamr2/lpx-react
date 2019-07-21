import { storiesOf } from '@storybook/react'
import React from 'react'
// import { Button } from '@storybook/react/demo'
import { Input } from '../src/components/input/input-text/Input'
import { Ellipsis, Roller, Spinner } from '../src/index'

storiesOf('Loaders', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Spinner', () => <Spinner />)
  .add('Roller', () => <Roller />)

storiesOf('Input', module).add('Input', () => <Input />)
