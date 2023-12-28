import React from 'react'
import { MAIN_COLOR } from '../constant'
import { Grid, Typography } from '@mui/material'

const SectionHead = ({ title, tagline }) => {
    return (
        <Grid item lg={12} >
            <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize:{lg:'34px',md:"34px",sm:"26px",xs:"20px"},mt:"7px", letterSpacing: '1px',  fontWeight: 900 }}>{title}</Typography>
            <Typography textAlign={'center'} sx={{fontSize:{lg:"18px",md:"17px",sm:"16px",xs:"14px"},mt:"3px"}} fontWeight={600}>{tagline}</Typography>
        </Grid>

    )
}

export default SectionHead