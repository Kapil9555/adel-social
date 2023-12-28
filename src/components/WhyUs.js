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
        { title: 'App Development', path: '/mobile', icon: mobileapp, desc: "Crafting innovative mobile applications with cutting-edge technologies. Our expert team ensures seamless user experiences and efficient functionality. Elevate your business with our custom app development solutions.",animate:"fade-right"},
        { title: 'Landing Page Design', path: '/welcome', icon: landing, desc: "Transform your brand with captivating landing page designs. We create visually stunning, user-centric pages that drive conversions. Make a lasting impression and boost engagement with our expert landing page design services.",animate:"fade-left" },
        { title: 'Web Design', path: '/angular', icon: web, desc: "Revolutionize your online presence with our expert web design services. We craft visually stunning, user-friendly websites tailored to your brand, ensuring a seamless and engaging digital experience for your visitors.",animate:"fade-right" },
        { title: 'Web Development', path: '/wordpress', icon: webdev, desc: "Empower your business with our comprehensive web development services. From concept to deployment, we create scalable, secure, and responsive websites, ensuring a seamless user experience and optimal performance across devices.",animate:"fade-left" }].map((item) => {
            return <Grid lg={5} md={5} sm={5} onClick={() => navigate(item.path)} className='servicesBox' item key={item.title} sx={{   backgroundImage: `url(${item.icon})`,backgroundBlendMode: 'multiply',display: 'flex',bgcolor:"#bdbdbd",flexDirection: 'column',justifyContent: 'flex-end',p: '20px',borderRadius: '30px',m: '0px 20px 20px 0px',backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}} data-aos={`${item.animate}`}>
                <Typography className='servicesBoxhead' variant='h1' sx={{ fontSize: { lg: '28px', md: '28px', sm: '20px' }, fontWeight: 900, color: 'white', m: '0px 0px 30px 20px' }}>{item.title}</Typography>
                <Typography className='servicesBoxpara' paragraph sx={{ m: '-20px 0px 0px 20px', color: 'white', fontSize: { lg: '16px', md: '14px', sm: '13px', xs: '16px' } }} >{state.currentScreenSize < 700 ? item.desc.slice(0, 100) + '...' : item.desc}</Typography>
            </Grid>
        })


    return (
        <Grid container className='serviceSection' sx={{p: { xs: '20px 2px', lg: '30px 20px', md: '30px 20px', sm: '30px 10px'},overflow:"hidden",}} data-aos="fade-up">
            <SectionHead title={"SERVICES"} tagline={"Make a customer, not a sale."} />

            <Grid container className='servicesSectionMiddle' sx={{ borderRadius: { xs: '20px', lg: '90px', sm: '90px', md: '90px' }, p: { xs: '10px', lg: '20px', md: '20px', sm: '20px' }, pl: { xs: '30px', lg: '45px' }, justifyContent: 'space-evenly', alignItems: 'center'}} >
                <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',overflow:"hidden" }}>
                    {services}
                </Container>
            </Grid>
        </Grid>
    )
}

export default WhyUs