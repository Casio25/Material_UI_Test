import React from 'react'
import { Stack, Box, TextField, MenuItem } from "@mui/material"
import {useState} from 'react'
export const MuiSelect = () => {
    const [country, setCountry] = useState<string[]>([])
    console.log(country)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setCountry(typeof value === 'string' ? value.split(",") : value)
    }
  return (
    <Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange}
        fullWidth SelectProps={{multiple: true}}>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="UA">Ukraine</MenuItem>
        </TextField>
    </Box>
  )
}
