import { Box, Button, Grid, OutlinedInput, Paper, Typography } from '@mui/material'

import wordPress from '../../assets/hire-wordpress-developer-banner.jpg'
import CheckIcon from '@mui/icons-material/Check';
import clutch from '../../assets/clutch.png'
import googleFirm from '../../assets/google-firms.png'
import hp1 from '../../assets/hp-and.png'
import hp2 from '../../assets/hp-PernodRicard.png'
import hp3 from '../../assets/hp-Panasonic.png'
import hp4 from '../../assets/hp-Ikea-Logo.png'
import hp5 from '../../assets/hp-Hero-logo.png'
import wordPressHire from '../../assets/wordpress-development-services-1.jpg'
import hiring from '../../assets/hiring-modal-one.jpg'
import hiring2 from '../../assets/hiring-modal-two.png'
import hiring3 from '../../assets/hiring-modal-three.jpg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SendMessage from '../../components/SendMessage';
import { MAIN_COLOR } from '../../constant';
import useBottomBar from '../../utils/useBottomBar';
import BottomNavBar from '../../global/BottomNavBar';



const Wordpress = () => {
    const { state } = useBottomBar()
    let six = Array(6).fill(1)
    return (

        <>
            <Header />
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Grid container >
                <Grid item xs={12} sx={{ backgroundImage: `url(${wordPress})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "50px" }}>

                    <Grid container sx={{ p: "10px" }}>
                        <Grid item xs={2} sm={2} md={1} lg={1} >

                        </Grid>

                        <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ lineHeight: "10" }}>
                                <Box>
                                    <Typography variant='h4' sx={{ fontWeight: "800", color: "white" }}>
                                        Hire WordPress Developer
                                    </Typography>
                                    <Typography sx={{ color: "white", mt: "20px", fontSize: "20px" }}>
                                        Develop an intuitive &amp; feature-rich website with the experienced, well-versed, &amp; skilled assistance of WordPress developers.
                                    </Typography>
                                    <Box sx={{ mt: "40px" }}>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: "18px", display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Extensive expertise</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: "18px", display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Hands-on technology</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: "18px", display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />360-degree innovation</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: "18px", display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Seamless integration</Typography>
                                        <Typography sx={{ color: "white", mt: "20px", fontSize: "18px", display: "flex", alignItems: "center" }}><CheckIcon sx={{ color: MAIN_COLOR, mr: "8px" }} />Easy to scale up &amp; down</Typography>

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "65%", lg: "65%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                                    <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                            <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: MAIN_COLOR }}>
                                                Request a free quote
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                    <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                        submit
                                    </Button>

                                </Paper>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ mb: "20px", mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                        <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: "#F05523", width: "60%" }}>
                                <Typography align='center' sx={{ color: "white", fontSize: "17px", bgcolor: "#F05523" }}>
                                    Request a free quote
                                </Typography>
                            </Box>
                        </Box>
                        <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                        <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                        <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                        <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                        <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                        <Button variant='contained' sx={{ bgcolor: "#F05523;", fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: "#F05523;" } }} fullWidth>
                            submit
                        </Button>

                    </Paper>
                </Box>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px", mt: "-40px" }}>
                <Grid container xs={8} sx={{ bgcolor: "white", boxShadow: " 0px -2px 38px -7px rgba(0,0,0,0.44)", p: "10px", borderRadius: "15px" }}>
                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }} spacing={2}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                            600+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                            50+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                            21+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} lg={3} sx={{ borderRight: "1px solid #efefef" }}>

                        <Typography align='center' sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                            400+
                        </Typography>
                        <Typography align='center' sx={{ fontWeight: "600", mt: "13px", fontSize: "20px" }}>
                            Happy Clients
                        </Typography>

                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "10px" }}>
                <Grid container xs={4}>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                        <img src={clutch} alt='pic' />
                        <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <img src={googleFirm} alt='pic' />
                        <Typography align='center' sx={{ fontFamily: 'Tisa Sans Pro sans-serif !important', fontSize: "18px" }}> We are rated 4.8 out of 5  on average.</Typography>

                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "black", p: "15px" }}>
                <Grid container xs={8} >
                    <Grid item xs={12} sm={12} md={12} lg={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography sx={{ fontSize: "18px", color: "white" }}>
                            Trusted by Global Brands
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} >
                        <img src={hp1} alt='img' height="100%" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2}  >
                        <img src={hp2} alt='img' height="100%" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} >
                        <img src={hp3} alt='img' height="100%" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} >
                        <img src={hp4} alt='img' height="100%" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} >
                        <img src={hp5} alt='img' height="100%" width="100%" />
                    </Grid>
                </Grid>
            </Box>
            <Grid container sx={{ p: "20px" }}>
                <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                <Grid item xs={12} md={5} lg={5}>
                    <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                        Hire Dedicated WordPress Developers with Flexibility
                    </Typography>
                    <Typography sx={{ mt: "10px", fontSize: "18px" }}>
                        WordPress has long dominated the world of website development and blogging. It’s the single most popular website builder. According to WordPress.org, 38% of the entire web is built on WordPress. Small businesses and Fortune 500 companies alike use the framework for building and managing their digital ecosystem.
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                        We nurture a team of experienced WordPress developers who can efficiently fulfill your digital solution requirements. Their years-long experience of working in multiple industry verticals helps them build the right solution for you. Whether you want to launch a personal blog, a business website, or an online store, you can hire a dedicated WordPress developer to meet your needs.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={5} lg={4} sx={{ p: "15px" }}>
                    <Box sx={{ height: "100%", borderRadius: "25px", overflow: "hidden", width: "80%" }}>
                        <img src={wordPressHire} height="100%" width="100%" alt='img3' />
                    </Box>
                </Grid>
            </Grid>


            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container xs={8}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box >
                            <Typography align='center' sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                End-To-End WordPress Development Services
                            </Typography>
                            <Typography align='center' sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                When you hire WordPress developers from us, the scope of your digital world becomes virtually limitless. We offer an extensive range of design, development, and tech support services for all kinds of needs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} spacing={3}>
                            {
                                six.map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "25px", border: "1px solid #F05523" }} elevation={3}>
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: "15px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>

            <Grid container spacing={3} sx={{ bgcolor: "#002F96", p: "20px", mt: "20px" }}>
                <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" } }}>
                        <Typography align='center' sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                            Our Hiring Models
                        </Typography>
                        <Typography align='center' sx={{ color: "white", fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                            Explore the engagement models we offer to hire React JS developer for your project         </Typography>
                    </Box>
                </Grid>

                <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: "800", color: "white" }}>
                            Hourly-Basis
                        </Typography>
                        <Typography sx={{ fontWeight: "400", fontSize: "18px", lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                            As the name suggests, the hourly-basis or pay-as-you-go model offers ReactJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", p: "15px" }}>
                    <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                        <img src={hiring} alt='img' height="100%" width="100%" />
                    </Box>
                </Grid>




                <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                <Grid item xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", }}>
                    <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                        <img src={hiring2} alt='img' height="100%" width="100%" />
                    </Box>
                </Grid>

                <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: "800", color: "white" }}>
                            Part-Time Hiring
                        </Typography>
                        <Typography sx={{ fontWeight: "400", fontSize: "18px", lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                            As the name suggests, the hourly-basis or pay-as-you-go model offers ReactJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                        </Typography>
                    </Box>
                </Grid>


                <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                        <Typography sx={{ fontSize: "25px", fontWeight: "800", color: "white" }}>
                            Full-Time Hiring
                        </Typography>
                        <Typography sx={{ fontWeight: "400", fontSize: "18px", lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                            As the name suggests, the hourly-basis or pay-as-you-go model offers ReactJS development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", p: "15px" }}>
                    <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                        <img src={hiring3} alt='img' height="100%" width="100%" />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container xs={8}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box >
                            <Typography align='center' sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Different Hiring Models for Different Needs
                            </Typography>
                            <Typography align='center' sx={{ fontSize: "20px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                When you hire WordPress developers from us, the scope of your digital world becomes virtually limitless. We offer an extensive range of design, development, and tech support services for all kinds of needs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} spacing={3}>
                            {
                                six.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "25px", border: "1px solid #F05523" }} elevation={3}>
                                                <Typography sx={{ fontSize: "23px", fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: "15px", fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <SendMessage />
            <Footer />
        </>
    )
}

export default Wordpress