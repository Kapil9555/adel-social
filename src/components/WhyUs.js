import '../pages/Homepage.css'
import { Container, Grid, Typography } from '@mui/material'
import mobileapp from '../assets/mobileapp.png'
import web from '../assets/webapp.png'
import landing from '../assets/landing.png'
import webdev from '../assets/webdev.png'
import { useContext } from 'react'
import { AdelContext } from '../store/Context'
import SectionHead from '../global/SectionHead'
import { useNavigate } from 'react-router-dom'

const WhyUs = () => {
    const { state } = useContext(AdelContext)
    const navigate = useNavigate()
    const services = [
        { title: 'App Development', path: '/mobile', icon: mobileapp, desc: "Our goal in mobile app design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the app’s features and functionality.",animate:"fade-right"},
        { title: 'Landing Page Design', path: '/welcome', icon: landing, desc: "Our goal in landing page design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the page’s features and content.",animate:"fade-left" },
        { title: 'Web Design', path: '/angular', icon: web, desc: "Our goal in web design is to create an intuitive and visually appealing interface that allows users to easily navigate and interact with the website’s features and content.",animate:"fade-right" },
        { title: 'Web Development', path: '/wordpress', icon: webdev, desc: "Our goal in web development is to create an intuitive and functional website that meets our client's needs and requirements.",animate:"fade-left" }].map((item) => {
            return <Grid lg={5} md={5} sm={5} onClick={() => navigate(item.path)} className='servicesBox' item key={item.title} sx={{ backgroundImage: `url(${item.icon})`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: '20px', borderRadius: '30px', m: '0px 20px 20px 0px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-aos={`${item.animate}`}>
                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '28px', md: '28px', sm: '20px' }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '16px', md: '14px', sm: '13px', xs: '16px' } }} >{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
            </Grid>
        })


    return (
        <Grid container className='serviceSection' sx={{ p: { xs: '30px 2px', lg: '60px 20px', md: '60px 20px', sm: '40px 10px'},overflow:"hidden",}} data-aos="fade-up">
            <SectionHead title={"SERVICES"} tagline={"Make a customer, not a sale."} />

            <Grid container className='servicesSectionMiddle' sx={{ borderRadius: { xs: '20px', lg: '90px', sm: '90px', md: '90px' }, p: { xs: '10px', lg: '20px', md: '20px', sm: '20px' }, pl: { xs: '30px', lg: '45px' }, justifyContent: 'space-evenly', alignItems: 'center' }} >
                <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',overflow:"hidden" }}>
                    {services}
                </Container>
            </Grid>
        </Grid>
    )
}

export default WhyUs