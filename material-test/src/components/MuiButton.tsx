import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react"

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log(formats,)
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary'>Primary Contained</Button>
                <Button variant='contained' color='secondary'>Secondary Contained</Button>
                <Button variant='outlined' color='error'>Error Contained</Button>
                <Button variant='contained' color='warning'>Warning Contained</Button>
                <Button variant='contained' color='info'>Info Contained</Button>
                <Button variant='contained' color='success'>Success Contained</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<AddShoppingCartIcon />}>Buy</Button>
                <Button variant='contained' endIcon={<AddShoppingCartIcon />}>Buy</Button>
                <Button>
                    <IconButton color='success' size='large'>
                        <AddShoppingCartIcon />
                    </IconButton>
                </Button>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant='outlined' orientation='vertical' size='small' color="secondary"
                    aria-label='alignment button group'>
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}
                size='small' color='success' orientation='vertical'
                exclusive>
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
