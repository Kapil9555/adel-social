import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHead from '../global/SectionHead'
import angular from '../assets/angular2.png'
import flutter from '../assets/flutter2.png'
import python from '../assets/python.png'
import node from '../assets/node.png'
import wordpress from '../assets/wordpress.png'
import shopify from '../assets/shopify.png'
import reactjs from '../assets/reactjs.png'
import laravel from '../assets/laravel.png'
import fullstack from '../assets/full-stack.png'

import '../pages/Homepage.css'
import { Box, Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AdelContext } from "../store/Context";
import { useNavigate } from "react-router-dom";

const OurExpertise = () => {
    const [isMouseDown, setIsMouseDown] = useState(true)

    const navigate = useNavigate()
    const { state } = useContext(AdelContext)
    const services = [
        { title: 'WordPress', path: 'wordpress', icon: wordpress, desc: 'WordPress: Powering websites with user-friendly content management, themes, and plugins.' },
        { title: 'Python', path: 'python', icon: python, desc: 'Python: Versatile, high-level programming language fostering simplicity, readability, and robust development.' },
        { title: 'Flutter', path: 'flutter', icon: flutter, desc: 'Flutter: Google UI toolkit for building natively compiled applications with expressive, beautiful interfaces.' },
        { title: 'Shopify', path: 'shopify', icon: shopify, desc: 'Shopify: E-commerce platform simplifying online store creation and management for businesses.' },
        { title: 'React JS', path: 'react', icon: reactjs, desc: 'React.js: Building efficient, interactive user interfaces with a declarative and component-based approach.' },
        { title: 'Laravel', path: '/', icon: laravel, desc: 'Laravel: Elegant PHP framework providing expressive syntax and robust tools for web development.' },
        { title: 'Angular JS', path: 'angular', icon: angular, desc: 'AngularJS: Streamlining web development with dynamic, two-way data binding and modular, efficient components.' },
        { title: 'FullStack', path: '/', icon: fullstack, desc: 'Full Stack: Expertise in front-end and back-end technologies for holistic application development.' },
        { title: 'Node JS', path: 'nodejs', icon: node, desc: 'Node.js: Lightweight, scalable, and efficient JavaScript runtime for server-side applications.' }].map((item) => {
            return <Box onClick={() => navigate(item.path)} onMouseDown={() => (setIsMouseDown(false))} onMouseOut={() => (setIsMouseDown(true))} key={item.title} className="card-container" sx={{display: "flex", justifyContent: "center" }}>
                <Box className="card" sx={{ height: { lg: "280px", md: "280px", sm: "280px", xs: "280px" }, width: { lg: "280px", md: "280px", sm: "280px", xs: "280px" } }}>
                    <h2><strong>{item.title}</strong></h2>
                    <Typography sx={{fontSize:{lg:"16px",md:"16px",sm:"16px",xs:"15px"}}}>{item.desc}</Typography>
                    <img width="60px" height={"50px"} src={item.icon} alt="pic" />
                     <div className="layers">
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                     </div>
                </Box>
            </Box>
        })
    return (
        <Box component={'div'} sx={{ padding: { lg: '20px', xs: '10px' }, width: '100%'}}>
            <SectionHead title={"OUR TECHNOLOGIES EXPERTISE"} tagline={"Building Your Digital Future with Expertise and Excellence"} />
            <Box component='div' className='scrollTechParent' sx={{ p: { xs: '10px 2px', lg: '30px 20px', md: '30px 20px', sm: '30px 10px' }, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap', overflow: "hidden", borderRadius: { lg: '100px', xs: '10px', sm: '100px', md: '100px' }}}>
                <Container disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="scrollTech" style={{ width: state.currentScreenSize < 1000 && state.currentScreenSize > 800 ? '90%' : '100%', padding: '0px'}}>
                        <Carousel
                            additionalTransform={0}
                            arrows={state.currentScreenSize < 600 ? false : true}
                            autoPlay={isMouseDown}
                            autoPlaySpeed={2000}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            customTransition="all 1s linear"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover={true}
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={
                                {
                                    superLargeDesktop: {
                                        // the naming can be any, depends on you.
                                        breakpoint: { max: 4000, min: 3000 },
                                        items: 5
                                    },
                                    desktop: {
                                        breakpoint: { max: 3000, min: 1024 },
                                        items: 3
                                    },
                                    tablet: {
                                        breakpoint: { max: 1024, min: 464 },
                                        items: 1
                                    },
                                    mobile: {
                                        breakpoint: { max: 464, min: 0 },
                                        items: 1
                                    }
                                }
                            }
                            rewind={true}
                            rewindWithAnimation={true}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            transitionDuration={1000}
                        >
                            {services}
                        </Carousel>
                    </div>
                </Container>


            </Box>


        </Box>

    )
}

export default OurExpertise