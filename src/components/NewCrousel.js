import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import landingpahge from '../assets/landingpage.webp'
import mobileapp from '../assets/mobileapp.png';
import googleads from '../assets/googleads.jpg';
import gameimg from '../assets/mobilegame.webp';
import fbads from '../assets/fbads.jpeg';
import whatsup from '../assets/whatsapp.jpg';
import bulksms from '../assets/Bulksms.png';
import webapp from '../assets/webapp.png';
import whatsupbtn from '../assets/whatsbutton.jpg';
import vps from '../assets/vps.jpg';
import secure from '../assets/domain.jpg';
import './crousal.css';


const imgArr = [
  {img: webapp,title: 'Website Development',desc: 'Website Development: Harness the power of the web with our expertise in creating dynamic and responsive websites that not only showcase your brand but also engage your audience effectively.'},
  {img: mobileapp,title: 'App Development',desc: 'App Development: Dive into the mobile world with our innovative and user-friendly app development services. We bring your ideas to life, ensuring a seamless and captivating user experience.'},
  {img: googleads,title: 'Google Ads',desc: 'Google Ads: Elevate your online presence through strategically crafted Google Ads campaigns. Our team optimizes your ads for maximum visibility and impact, driving relevant traffic to your business.'},
  {img: fbads,title: ' Facebook Ads',desc: 'Facebook Ads: Target your audience precisely with our Facebook Ads solutions. We leverage the potential of social media advertising to boost your brand visibility and engagement.'},
  {img: gameimg,title: 'Game App Development',desc: 'Game App Development: Immerse your audience in captivating gaming experiences. Our game app development services combine creativity and technology to deliver entertainment that resonates.'},
  {img: landingpahge,title: 'Landing Pages',desc: 'Landing Pages: Increase your conversion rates with our skillfully designed landing pages. We create pages that not only grab attention but also guide visitors towards desired actions.'},
  {img: whatsup,title: 'Bulk WhatsApp Messages',desc: 'Bulk WhatsApp Messages: Streamline your communication strategy with our bulk WhatsApp messaging service. Reach your audience efficiently and effectively through the worlds most popular messaging platform.'},
  {img: bulksms,title: 'Bulk SMS',desc: 'Bulk SMS: Stay connected with your customers through our bulk SMS services. Whether its promotions, alerts, or notifications, we ensure your messages reach the right recipients.'},
  {img: whatsupbtn,title:'WhatsApp Button SMS',desc: 'WhatsApp Button SMS: Integrate WhatsApp functionality seamlessly into your communication channels. Enhance customer engagement with the convenience of WhatsApp messaging.'},
  {img: vps,title:'VPS Hosting',desc: 'VPS Hosting: Ensure your online presence is secure and scalable with our Virtual Private Server hosting solutions. Experience reliable performance and flexibility tailored to your specific requirements.'},
  {img: secure,title:'Secured Domains',desc: 'Secured Domains: Protect your online identity with our secure domain registration services. We offer a range of options to safeguard your brand in the digital landscape.'}
]

const NewCrousel = () => {
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log('hellonjdnjn', activeSlideIndex)
  return (
    <>
      <Grid container>
        <Grid item xs={12} >
          <ReactSimplyCarousel activeSlideIndex={activeSlideIndex} onRequestChange={setActiveSlideIndex} itemsToShow={1} itemsToScroll={1} autoplay={true} autoplayDelay={2000}
            forwardBtnProps={{
              style: {alignSelf: 'center',background: 'black',border: 'none',borderRadius: '50%',color: 'white',cursor: 'pointer',fontSize: '20px',height: 30,lineHeight: 1,textAlign: 'center',width: 30,display: isSmallScreen ? 'none' : 'block'},
              children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
              style: {alignSelf: 'center',background: 'black',border: 'none',borderRadius: '50%',color: 'white',cursor: 'pointer',fontSize: '20px',height: 30,lineHeight: 1,textAlign: 'center',width: 30,display: isSmallScreen ? 'none' : 'block'},
              children: <span>{`<`}</span>,
            }}
            responsiveProps={[{itemsToShow: 1,itemsToScroll: 1,minWidth: 480},{itemsToShow: 3,itemsToScroll: 1,minWidth: 600,},{itemsToShow: 3,itemsToScroll: 1,minWidth: 1024}]}
            speed={300}
            easing="linear"
            centerMode>
           
            {
              imgArr.map((ele, index) => {
                return (
                  <Box  className={index == activeSlideIndex ? 'activeCard' : 'nonActive'} sx={{ p: '8px', alignSelf: 'center', position:'relative',width: { lg: 370, md: 350, sm: 250, xs: 280 }, height: { lg: 500, md: 440, sm: 330, xs: 365 },}}>
                    <Box sx={{height:"100%",alignSelf: 'center',  borderRadius: '15px', p: "15px", backgroundImage: `url(${ele.img})`, backgroundSize: '100% 100%', backgroundColor: 'rgb(180,180,180)', backgroundBlendMode: 'multiply' }}>
                      {/* <img src={ele.img} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '15px', backgroundColor:'rgb(170, 170, 170)', backgroundBlendMode:'multiply' }} /> */}
                      <Box sx={{ position: 'absolute',  bottom: '30px', p: '10px' }}>
                        <Typography sx={{ fontSize: { lg: '25px', md: '23px', sm: '20px', xs: '18px' }, fontWeight: 'bold', color: 'white', }}>{ele.title}</Typography>
                        <Box sx={{ p: '0px 10px 0px 0px' }}>
                          <Typography sx={{ fontSize: { lg: '14px', md: '13px', sm: '13px', xs: '12px' }, color: 'white', }}>{ele.desc}</Typography>
                        </Box>
                      </Box>

                    </Box>
                  </Box>
                )
              })
            }

          </ReactSimplyCarousel>
        </Grid>
      </Grid>

    </>
  )
}

export default NewCrousel
