import React from 'react'
import { MAIN_COLOR } from '../constant'
import { Grid, Typography } from '@mui/material'

const SectionHead = ({ title, tagline }) => {
    return (
        <Grid item lg={12} >
            <Typography textAlign={'center'} variant='h1' color={MAIN_COLOR} sx={{ fontSize:{lg:'34px',md:"34px",sm:"28px",xs:"25px"}, letterSpacing: '3px',  fontWeight: 900 }}>{title}</Typography>
            <Typography textAlign={'center'} fontSize={'18px'} fontWeight={600}>{tagline}</Typography>
        </Grid>

    )
}

export default SectionHead