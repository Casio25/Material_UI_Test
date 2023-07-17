import React from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'
import {useState} from 'react'

export const  MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='name' variant='outlined'/>
        <TextField label='name' variant='filled' />
        <TextField label='name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' size='small' color='secondary'/>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='form input' required value={value} onChange={(e) => {setValue(e.target.value)}}
         error = {!value}
         helperText={!value ? 'Required' : 'do not share you' }/>
        <TextField label='Password' type='password' helperText='do not shre your password' />
        <TextField label='Read Only' InputProps={{readOnly: true}} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField  label='Amount' InputProps={{
          startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }}/>
        <TextField label='Weigth' InputProps={{
          endAdornment: <InputAdornment position='end'>KG</InputAdornment>,
        }} />
      </Stack>
    </Stack>
  )
}
