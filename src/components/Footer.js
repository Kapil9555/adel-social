// import { Box, Divider, Grid, TextField, Typography } from '@mui/material'
// import React from 'react'
// import adel from '../assets/logo.png'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import { HOVER_COLOR, MAIN_COLOR } from '../constant';
// import { useNavigate } from 'react-router-dom';


// const Footer = () => {
//     const navigate = useNavigate()
//     const year = new Date().getFullYear()

//     const companyArray = [{ title: 'Home', path: '/' }, { title: 'Service', path: '/itservices' }, { title: 'Portfolio', path: '/' }, { title: 'Contact', path: '/contact' }].map((item, index) => {
//         return <Typography onClick={() => { navigate(`${item.path}`); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} key={index} sx={{

//             fontSize: '15px',
//             fontWeight: "700", mt: "8px", cursor: 'pointer', borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
//             transition: "all 0.30s ease",
//         }}>{item.title}</Typography>
//     })

//     const supportArray = [{ title: 'Help center', path: '/' }, { title: 'Terms of services', path: '/terms' }, { title: 'Privacy policy', path: '/terms' }].map((item, index) => {
//         return <Typography onClick={() => { navigate(`${item.path}`); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} key={index} sx={{ transition: "all 0.30s ease", fontSize: '15px', fontWeight: "700", mt: "8px", borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}`, cursor: 'pointer' } }}>{item.title}</Typography>
//     })

//     const socialIcons = [{icon:<InstagramIcon />,name:"insta"},{ icon:<FacebookIcon />,name:"face"}, {icon:<TwitterIcon />,name:"twit"},{ icon:<LinkedInIcon />,name:"link"}]

//     const handleNavigateHome = () => {
//         navigate('/')
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         })
//     }

//     const handleSocial =(name)=>{
//          console.log(name)
//         //  if(name == 'insta'){

//         //  }
//     }

//     return (
//         <>
//             <Divider sx={{ border: `5px solid ${MAIN_COLOR}`, mb: '20px' }} />
//             <Grid container spacing={2} sx={{ pb: '20px', pl: { lg: '20px', xs: '0px' } }}>

//                 <Grid item xs={6} sm={6} md={6} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
//                     <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                         <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px", mb: "10px", cursor: "pointer" }}>Company</Typography>
//                         {companyArray}
//                     </Box>

//                 </Grid>
//                 <Grid item xs={6} sm={6} md={6} lg={2} sx={{ display: "flex", justifyContent: "center" }}>
//                     <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                         <Typography variant='h1' className='Box1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px", mb: "10px", cursor: "pointer" }}>Support</Typography>
//                         {supportArray}
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center" }}>
//                     <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
//                         <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: "24px" }}>Stay up to date</Typography>
//                         <Box sx={{ display: "flex", alignItems: "center", mt: "15px" }}>
//                             <TextField
//                                 label="Your email address"
//                                 variant="standard"
//                                 focused
//                             />
//                             <ArrowOutwardIcon sx={{ ml: "-20px", mt: "17px" }} />
//                         </Box>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={6} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
//                     <Box sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//                         <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
//                             <img src={adel} height="70px" width="100%" style={{ marginLeft: "-32px", cursor: "pointer" }} alt='pic' onClick={handleNavigateHome} />
//                         </Box>
//                         <Box sx={{ display: "flex", mt: "40px", justifyContent: "space-between", width: "70%", alignItems: 'center' }}>
//                             {
//                                 socialIcons.map((item, index) => {
//                                     return <Typography key={index} sx={{ color: MAIN_COLOR, }} onClick={()=>{handleSocial(item.name)}}>
//                                         {item.icon}
//                                     </Typography>
//                                 })
//                             }
//                         </Box>
//                     </Box>

//                 </Grid>

//             </Grid>
//             <Grid container sx={{ p: '20px', justifyContent: 'center', bgcolor: '#404343', mb: "50px" }}>
//                 <Typography textAlign={'center'} sx={{ fontSize: "14px", color: '#c3c3c3' }}>Copyright © {`${year}`} AdelSocial | All rights reserved</Typography>
//             </Grid>
//         </>
//     )
// }

// export default Footer

import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import adellogo from '../assets/adellogo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HOVER_COLOR, MAIN_COLOR } from '../constant';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Footer = () => {
    const navigate = useNavigate()
    const year = new Date().getFullYear()
    const companyArray = [{ title: 'Home', path: '/' }, { title: 'Service', path: '/itservices' }, { title: 'Contact', path: '/contact' }].map((item, index) => {
        return <Typography onClick={() => { navigate(`${item.path}`); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} key={index} sx={{

            fontSize:  {lg:'17px', md:'17px', sm:'14px' ,xs:'14px'},
            color: 'white',
            fontWeight: "700", mt: "8px", cursor: 'pointer', borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
            transition: "all 0.30s ease",
        }}>{item.title}</Typography>
    })

    const supportArray = [{ title: 'Help center', path: '/' }, { title: 'Terms of services', path: '/terms' }, { title: 'Privacy policy', path: '/terms' }].map((item, index) => {
        return <Typography onClick={() => { navigate(`${item.path}`); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} key={index} sx={{ transition: "all 0.30s ease", color: 'white', fontSize: {lg:'17px', md:'17px', sm:'14px' ,xs:'14px'}, fontWeight: "700", mt: "8px", borderBottom: '3px solid transparent', '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}`, cursor: 'pointer' } }}>{item.title}</Typography>
    })

    const socialIcons = [{ icon: <InstagramIcon />, name: "insta" }, { icon: <FacebookIcon />, name: "face" }, { icon: <TwitterIcon />, name: "twit" }, { icon: <LinkedInIcon />, name: "link" }]
  
    const handleSocial =(name)=>{
                 console.log(name)
                //  if(name == 'insta'){
        
                //  }
            }
  
    return (
        <>
            <Grid container sx={{ bgcolor: 'black',height: 'fit-content',borderTop:'1px solid white' }}>
                <Grid item xs={12} sx={{bgcolor: 'black',}}>
                    <Grid container sx={{  justifyContent: 'space-around', alignItems: 'center', mt:'20px' }}>
                        <Grid item lg={2.5} md={3} sm={6} xs={12} sx={{ height: '100%', width: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Grid container >
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent:{ lg:'left', md:'left',sm:'center',xs:'center' }, alignItems: 'center' }}>
                                    <Box sx={{ bgcolor: 'white', width: '240px', height: '55px', borderRadius: '10px' }}>
                                        <img src={adellogo} style={{ height: '100%', width: '100%' }} />
                                    </Box>

                                </Grid>
                                <Grid item xs={12} sx={{ mt: '20px', p:'10px' }}>
                                    <Typography sx={{ fontSize: {lg:'15px', md:'15px', sm:'14px',xs:'13px'}, color: 'white' ,textAlign:{ lg:'left', md:'left',sm:'center',xs:'center' }}}>Welcome to AdelSocial,Empower your digital journey with us. We craft captivating apps and websites, combining cutting-edge technology and creative design. From dynamic mobile apps to sleek websites, we turn your vision into reality.</Typography>
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid item lg={3} md={5} sm={5} xs={12} sx={{ height: '100%', width: '400px', display: "flex", justifyContent: "center", alignItems: 'center', }}>
                            <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', p:'15px'}}>
                                <Grid item xs={6} sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                                    <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                        <Typography variant='h1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: {lg:'28px', md:'26px' ,sm:'24px',xs:'20px'}, mb: "10px", cursor: "pointer" }}>Company</Typography>
                                        {companyArray}
                                    </Box>

                                </Grid>
                                <Grid item xs={6} sx={{ display: "flex", justifyContent: "center",alignItems:'center', }}>
                                    <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                        <Typography variant='h1' className='Box1' sx={{ color: MAIN_COLOR, fontWeight: "900", fontSize: {lg:'28px', md:'26px' ,sm:'24px',xs:'20px'}, mb: "10px", cursor: "pointer" }}>Support</Typography>
                                        {supportArray}
                                    </Box>
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid item lg={2.3} md={3} sm={5} xs={12} sx={{ height: '100%', width: '300px', display: 'flex', justifyContent: 'center', alignItems: {lg:'flex-start', md:'flex-start', md:'center', xs:'center'}, flexDirection: 'column', p: '11px 10px' }}>
                            <Typography sx={{ fontSize: {lg:'28px', md:'26px' ,sm:'24px',xs:'20px'}, color: MAIN_COLOR, textAlign: 'left', fontWeight: 'bold' }}>Office</Typography>
                         
                            <Typography sx={{ fontSize: {lg:'15px', md:'14px', sm:'14px' ,xs:'14px'}, color: 'white',  mt: '5px', textAlign:{lg:'left', md:';left', sm:'center', xs:'center'} }}> P-27,Block P,Shivalik Colony,Malviya Nagar,New Delhi,Delhi 110017</Typography>

                            <Typography sx={{ fontSize: '15px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '5px' }}> info@adelsocial.com</Typography>
                            <Typography sx={{ fontSize: '15px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '5px' }}><a href='tel:977-392-6687'style={{color:'white', cursor:'pointer'}}>9773926687</a></Typography>
                            


                        </Grid>
                      

                        <Grid item lg={3} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: "center",alignItems:'center', flexDirection: {lg:'column',md:'column',sm:'column', xs:'column'}, mt:{lg:'0px', md:'0px', sm:'10px', xs:'10px'} }}>
                            <Box sx={{ display:{ lg:"flex", md:'flex', sm:'none', xs:'none'}, alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }}>
                                <Typography variant='h1' sx={{ color: 'white', fontWeight: "900", fontSize: {lg:'28px', md:'26px' ,sm:'24px',xs:'20px'} }}>Stay up to date</Typography>
                                <Box sx={{ display: "flex", alignItems: "center", mt: "15px", borderRadius:'5px' }}>
                                    
                                    <TextField
                                        
                                        label="Your email address"
                                        size='small'
                                        focused

                                    />
                                    <ArrowOutwardIcon sx={{ ml: "20px", color: 'white' }} />
                                </Box>
                            </Box>


                            <Box sx={{ display: "flex", mt: {lg:"40px", md:'40px', sm:'5px', xs:'5px'}, justifyContent: "space-between", width: "70%", alignItems: 'center' ,mb:{lg:'0px', md:'0px', sm:'10px', xs:'20px'} }}>
                                {
                                    socialIcons.map((item, index) => {
                                        return <Typography key={index} sx={{ color: 'white',cursor:"pointer" }} onClick={() => { handleSocial(item.name) }}>
                                            {item.icon}
                                        </Typography>
                                    })
                                }
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container sx={{ p: '20px', justifyContent: 'center', bgcolor: '#404343', mb:{lg:'0px', md:'0px', sm:'55px', xs:'56px'} }}>
                    <Typography textAlign={'center'} sx={{ fontSize: "14px", color: '#c3c3c3' }}>Copyright © {year} AdelSocial | All rights reserved</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer