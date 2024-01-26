import React from 'react'
import { NormalTodo } from '../components/CompoundPattern/NormalTodo'
import { FinalTodo } from '../components/CompoundPattern/FinalTodo'
import { Typography } from '@mui/material'

const CompoundPattern = () => {
  return (
    <>
    <NormalTodo title={'Sin el patron Compound Pattern'}/>
    <FinalTodo>
      <FinalTodo.Title>
        <Typography variant='h3'>Compound Pattern </Typography>
      </FinalTodo.Title>
      <FinalTodo.Form />
      <FinalTodo.List />
    </FinalTodo>
    </>
  )
}

export default CompoundPattern