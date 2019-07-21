import { storiesOf } from '@storybook/react'
import React from 'react'
import { Ellipsis, Roller, Spinner } from '../src/index'
// import { Button } from '@storybook/react/demo'

storiesOf('Loaders', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Spinner', () => <Spinner />)
  .add('Roller', () => <Roller />)

// storiesOf('Button', module)
//   .add('with text', () => <Button>Hello Button</Button>)
//   .add('with emoji', () => (
//     <Button>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))
