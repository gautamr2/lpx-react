import { storiesOf } from '@storybook/react';
import React from 'react';
import MARKDOWN from '../README.md';
import { Chip } from '../src/components/chips/Chip';
import { Button, Checkbox, Ellipsis, Input, Roller, Spinner, Submit, Tag, TreeStructure, Verify } from '../src/index';
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

storiesOf('Forms', module).add('Forms', () => <Verify />, {
  notes: { markdown: MARKDOWN }
})
storiesOf('Buttons', module)
  .add('Button', () => (
    <>
      <Button
        text="Reset"
        onClick={() => {
          console.log('Hello')
        }}
      />
      <div style={{ height: 30 }} />
      <Button
        text="Disabled"
        onClick={() => {
          console.log('Hello')
        }}
        disabled
      />
    </>
  ))
  .add('Button props{small}', () => (
    <>
      <Button
        varient="small"
        text="Reset"
        onClick={() => {
          console.log('Hello')
        }}
      />
      <div style={{ height: 30 }} />
      <Button
        varient="small"
        text="Disabled"
        onClick={() => {
          console.log('Hello')
        }}
        disabled
      />
    </>
  ))
  .add('Submit', () => (
    <>
      <Submit />
      <div style={{ height: 30 }} />
      <Submit disabled />
    </>
  ))

storiesOf('Tree', module).add('Tree', () => (
  <div style={{ fontSize: '2rem' }}>
    <TreeStructure />
  </div>
))

storiesOf('Chips', module).add('Chip', () => (
  <div style={{padding: '160px'}}>
    <Chip label='EC2' color='#FF0000'/>
    <div style = {{marginTop: 15}}/>
    <Chip label='EC2' color='#00ff00' />
    <div style = {{marginTop: 15}}/>
    <Chip label='EC2' color='#00f' />
  </div>
))

storiesOf('Tags', module).add('Tag', () => (
  <div style={{padding: '160px'}}>
    <Tag label='Not Verified' color='#FF0000'/>
    <div style = {{marginTop: 15}}/>
    <Tag label='Auto Discovered' color='#99cfe0' />
    <div style={{ marginTop: 15 }} />
    <Tag label='Verified' color='#ade6bb' />
  </div>
))
