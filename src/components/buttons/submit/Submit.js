import React from 'react'
import { Button } from '../button/Button'

export const Submit = ({ disabled, label = 'Submit' }) => (
  <Button type="submit" value="Submit" text={label} disabled={disabled} />
)
