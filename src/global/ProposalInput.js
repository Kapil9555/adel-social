import { Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AdelContext } from '../store/Context'
import { AVATAR_IMAGE, MAIN_COLOR,MOBILE } from '../constant'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import EastIcon from '@mui/icons-material/East';

const ProposalInput = ({ style }) => {
    
    return (
        // <FormControl sx={style} variant="outlined" >
        //     <InputLabel shrink={false} >{state.propasal_input.length > 0 ? "" : 'Enter your Email'}</InputLabel>
        //     <OutlinedInput
        //         value={state.propasal_input}
        //         onChange={e => { dispatch({ type: 'PROPOSAL', payload: e.target.value }) }}
        //         sx={{ outline: 'none', color: MAIN_COLOR, fontWeight: 900, border: 'none', bgcolor: 'lightgray', borderRadius: '12px' }}
        //         type={'text'}
        //         endAdornment={
        //             <InputAdornment position="end" >
        //                 <Button variant='contained' sx={{ fontSize: { xs: '14px' }, textTransform: { md: 'unset', lg: 'uppercase', xs: 'unset' } }}>Send </Button>
        //             </InputAdornment>
        //         }
        //         label="Password"
        //     />
        // </FormControl>

        <Grid container justifyContent={'center'}>
            <Grid item lg={4.5} md={5} sm={8} xs={10} sx={{ height: "60px",position:"relative",bgcolor:"white",borderRadius:"12px",display:"flex",alignItems:"center"}}>
                <Typography align='center' sx={{userSelect:"none",pl:"10px",fontSize:"20px",fontWeight:"400",whiteSpace:"nowrap",width:"90%",display:"flex",justifyContent:"Center",alignItems:"center"}}>Send us a message <EastIcon sx={{ml:"10px"}}/></Typography>
                <FloatingWhatsApp accountName="AdelSocial" buttonClassName="whatsappButton2" avatar={AVATAR_IMAGE} phoneNumber={`${MOBILE}`} statusMessage="Typically replies within 1 hour" chatMessage={`Hello there! 🤝 How can we help?`} darkMode={false} buttonStyle={{position:"absolute",top:"10px",right:"4px",height:"40px",width:"40px",zIndex:0}} allowEsc allowClickAway notification notificationSound/>
            </Grid>
        </Grid>

    )
}

export default ProposalInput