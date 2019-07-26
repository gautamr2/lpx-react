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
    <div>
      <Input
        name="firstName"
        placeholder="First name"
        id="firstName"
        iconName="fa-user-o"
        onChange={() => { }}
      />
      <br />
      <Input
        name="lastName"
        placeholder="Last name"
        id="lastName"
        onChange={() => { }}
      />
    </div>
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
    <Chip label='EC2' color='#FFB6BE'/>
    <div style = {{marginTop: 15}}/>
    <Chip label='m4.medium (r)' color='#00f' />
    <div style = {{marginTop: 15}}/>
    <Chip label='us east 1' color='#BAC8FF' />
    <div style = {{marginTop: 15}}/>
    <Chip label='EUW3-DataTransfer-Out-Bytes' color='#12b886' />
  </div>
))

storiesOf('Tags', module).add('Tag', () => (
  <div style={{padding: '160px'}}>
    <Tag label='Not Verified' color='#f03e3e'/>
    <div style = {{marginTop: 15}}/>
    <Tag label='Auto Discovered' color='#99cfe0' />
    <div style={{ marginTop: 15 }} />
    <Tag label='Verified' color='#12b886' />
    <div style={{ marginTop: 15 }} />
    <Tag label='Defined' color='#e2d405' />
  </div>
), { notes: `<Tag label='Verified' color='#ade6bb' />`})
