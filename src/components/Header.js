import { AppBar, Box, Button, CssBaseline, Grid, Toolbar } from '@mui/material';
// import logo from '../assets/logo.png'
import "@fontsource/lora"; // Defaults to weight 400
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/400.css"; // Specify weight
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/adellogo.png';
import { MAIN_COLOR } from '../constant';
import { items } from '../global/NavbarData';
import ScrollToColor from "../global/ScrollToColor";
import '../pages/Homepage.css';
import { AdelContext } from '../store/Context';
import MegaMenu from "../utils/MegaMenu";




export default function Header() {
    const { state, dispatch } = useContext(AdelContext)
    const navigate = useNavigate()

    
    const handleNavigateHome =()=>{
        navigate('/')
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <Grid item>
            <CssBaseline />
            <ScrollToColor>
                <AppBar>
                    <Toolbar sx={{height:"65px",bgcolor:"white",display:"flex",justifyContent:"space-between"}}>
                        <Box id="logoImg" sx={{width:"250px"}} >
                            {/* <Typography onClick={() => navigate('/')} variant='h1' sx={{ cursor: 'pointer', color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR }} fontWeight={900} fontSize={'25px'} >AdelSocial</Typography> */}
                            <div style={{ flexGrow: 1 }}>
                                {/* <div style={{ height:"90%",width:"100%",border:"1px solid red",backgroundColor:"white"}}> */}
                                    {/* <img src={logo}  style={{ cursor: 'pointer',}} alt='pic' /> */}
                                     {/* <Typography sx={{ml:"10px",color:"white",fontSize:{lg:"20px",md:"20px",sm:"17px",xs:"15px"},fontWeight:"800"}}>AdelSocial</Typography> */}
                                {/* </div> */}
                                <Box onClick={handleNavigateHome}  sx={{ userSelect: 'none', cursor:"pointer",width: { lg: "200px", xs: "150px", md: '200px' }, height: { lg: '50px', md: '50px', xs: '38px' }, bgcolor: "white", borderRadius: '10px' }}>
                                  <img src={logo} alt='pic' width="100%" height="100%" style={{cursor:"pointer"}}/>
                                </Box>
                            </div>
                            {/* <img width="200px" className='imgStyles' height="50px" style={{ aspectRatio: "auto 165 / 35" }} src={logo} alt="logo" /> */}
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",ml:"30px"}}>
                        {state.currentScreenSize > 918 && <Box color={'secondary'} sx={{display: "flex",justifyContent:"space-between",width:{lg:"65%",md:"90%",sm:"90%",xs:"90%"}}}>
                            <MegaMenu title="Home" />
                            <MegaMenu title="About" navigateHandlerTitleRoute='/about' />
                            <MegaMenu title="IT Services" data={items}  navigateHandlerTitleRoute='/itservices'/>
                            {/* <MegaMenu title="Solutions" data={solutionsSection} /> */}
                            <MegaMenu title="Job Openings" navigateHandlerTitleRoute='/jobopenings' />
                            <MegaMenu title="Contact" navigateHandlerTitleRoute='/contact' />
                        </Box>}

                        <Box sx={{ display: "flex",justifyContent:"right",width:{lg:"35%",md:"10%",sm:"100%",xs:"100%"}}}>
                            {/* <IconButton sx={{ color: state.trigger ? SECONDARY_COLOR : MAIN_COLOR, '&:hover': { opacity: 0.6 }, transition: "all 0.70s ease", }}>
                                <SearchOutlinedIcon />
                            </IconButton> */}
                            <Button variant='contained' sx={{  color:"white",bgcolor:MAIN_COLOR, textTransform: 'unset', fontWeight: 900, display: { xs: 'none', sm: 'none',md:"none",lg:"block" } }}>Free Consultancy</Button>
                            <MenuIcon onClick={() => dispatch({ type: "DRAWER_CLICKED", payload: true })} sx={{ ml: '20px', cursor: 'pointer',display:{lg:"none",md:"none",sm:"flex",xs:"flex"},color:MAIN_COLOR }} />
                        </Box>
                        </Box>
                      
                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </Grid>
    );
}