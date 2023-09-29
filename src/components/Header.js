import { AppBar, Toolbar, CssBaseline, Box, Typography, IconButton, Button, Grid } from '@mui/material';
// import logo from '../assets/logo.png'
import ScrollToColor from "../global/ScrollToColor";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { AdelContext } from '../store/Context';
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';
import MegaMenu from "../utils/MegaMenu";
import logo from '../assets/adellogo.png'
import { items, solutionsSection } from '../global/NavbarData'
import '../pages/Homepage.css'
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const { state, dispatch } = useContext(AdelContext)
    const navigate = useNavigate()

    
    return (
        <Grid item>
            <CssBaseline />
            <ScrollToColor>
                <AppBar>
                    <Toolbar sx={{height:"65px",borderBottom:"1px solid #757575",display:"flex",justifyContent:"space-between"}}>
                        <Box id="logoImg" sx={{width:"250px"}} >
                            {/* <Typography onClick={() => navigate('/')} variant='h1' sx={{ cursor: 'pointer', color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR }} fontWeight={900} fontSize={'25px'} >AdelSocial</Typography> */}
                            <div style={{ flexGrow: 1 }}>
                                {/* <div style={{ height:"90%",width:"100%",border:"1px solid red",backgroundColor:"white"}}> */}
                                    {/* <img src={logo}  style={{ cursor: 'pointer',}} alt='pic' /> */}
                                     {/* <Typography sx={{ml:"10px",color:"white",fontSize:{lg:"20px",md:"20px",sm:"17px",xs:"15px"},fontWeight:"800"}}>AdelSocial</Typography> */}
                                {/* </div> */}
                                <Box onClick={() => navigate('/')}  sx={{ userSelect: 'none', cursor:"pointer",width: { lg: "200px", xs: "100px", md: '200px' }, height: { lg: '50px', md: '50px', xs: '40px' }, bgcolor: "white", borderRadius: '10px' }}>
                                  <img src={logo} alt='pic' width="100%" height="100%" style={{cursor:"pointer"}}/>
                                </Box>
                            </div>
                            {/* <img width="200px" className='imgStyles' height="50px" style={{ aspectRatio: "auto 165 / 35" }} src={logo} alt="logo" /> */}
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",ml:"30px"}}>
                            
                        
                        {state.currentScreenSize > 918 && <Box sx={{ display: "flex",justifyContent:"space-between",width:{lg:"65%",md:"90%",sm:"90%",xs:"90%"}}}>
                            <MegaMenu title="Home" />
                            <MegaMenu title="About" navigateHandlerTitleRoute='/about' />
                            <MegaMenu title="IT Services" data={items}  navigateHandlerTitleRoute='/itservices'/>
                            <MegaMenu title="Solutions" data={solutionsSection} />
                            <MegaMenu title="Job Openings" navigateHandlerTitleRoute='/jobopenings' />
                            <MegaMenu title="Contact" navigateHandlerTitleRoute='/contact' />
                        </Box>}

                        <Box sx={{ display: "flex",justifyContent:"right",width:{lg:"35%",md:"10%",sm:"100%",xs:"100%"}}}>
                            {/* <IconButton sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", }}>
                                <SearchOutlinedIcon />
                            </IconButton> */}
                            <Button variant='outlined' sx={{ border: state.trigger && `1px solid ${SECONDARY_COLOR}`,"&:hover":{border: state.trigger && `1px solid ${SECONDARY_COLOR}`}, color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, textTransform: 'unset', fontWeight: 900, display: { xs: 'none', sm: 'none',md:"none",lg:"block" } }}>Free Consultancy</Button>
                            <MenuIcon onClick={() => dispatch({ type: "DRAWER_CLICKED", payload: true })} sx={{ ml: '20px', cursor: 'pointer' }} />
                        </Box>
                        </Box>
                      
                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </Grid >
    );
}