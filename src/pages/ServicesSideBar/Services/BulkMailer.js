import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Button, Divider, Grid, Typography } from '@mui/material'
import bulk from '../../../assets/maxbulk-using-gmail.png'
import bulkImg from '../../../assets/bulk_mail.png'
import { MAIN_COLOR, MOBILE } from '../../../constant'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
const BulkMailer = () => {
    const emptArr = [
        { title: 'Tell Us Your Requirments', para: 'Why Choose Email Marketing Services? It’s a Cost-Effective Way to Grow Your Business' },
        { title: 'Unrivalled Levels of Service', para: 'Generate & Close More Leads With Targeted Campaigns From Us' },
        { title: 'Creating Custom Email Content', para: 'Working with your company and target audience to write valuable content for them. Running contests and giveaways to increase engagement.Designing for engagement and conversions.' },
        { title: 'Testing Your Email Campaigns', para: 'Split-testing subject lines Split-testing send times and dates Split-testing copy and offers And more!' },
        { title: 'Advanced Email Marketing Strategies', para: 'Marketing automation Customer retention email Win-back email campaigns And more!' },
        { title: 'Tracking Your Email Campaigns', para: 'Tracking sends and delivery rates Tracking open and click-through rates Tracking web visits, leads, sales, and revenue for each email blast' },
    ]
    return (
        <>
            <Header />
            <Grid container sx={{ height: '400px' }}>
                <Grid item lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundBlendMode: 'multiply', bgcolor: 'rgba(0,0,0,0.8)', backgroundImage: `url(${bulk})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <Typography variant='h1' sx={{ color: 'white', fontWeight: 800 }}>Bulk Mailer</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ height: '780px' }}>
                <Grid item lg={6} sx={{ backgroundImage: `url(${bulkImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                </Grid>
                <Grid item lg={6} sx={{ pt: '100px' }}>
                    <Typography variant='h5' fontSize={'3rem'} sx={{ lineHeight: 1.2, fontWeight: 900 }}>
                        THE BEST EMAIL MARKETING STRATEGY
                    </Typography>
                    <div style={{ marginBottom: '10px', height: '5px', width: '100px', backgroundColor: MAIN_COLOR }}></div>
                    <div style={{ paddingRight: '100px' }}>
                        <Typography paragraph sx={{ fontSize: '18px' }}>
                            Around 95 billion emails are sent every day for business purposes worldwide, and there is no indication that this number will fall anytime soon.<br />
                            Our service is designed to kickstart a stronger sales funnel, provide sales-ready leads, build a robust sales pipeline, shorten the sales cycle, increase<br />
                            conversion rates, support inside-sales function, manage the web of channel partners and accelerate the efficacy and productivity of the sales process. We complete the sales<br />
                            journey by aligning our ‘closure specialists’ with digital marketing prowess within the sales ecosystem.<br />
                            So, yes, you should spend some time and resources trying to find the best ways to grab your potential client’s attention through email marketing. It<br />
                            usually is cheaper than other strategies and can give as much in return – and maybe a bit more, depending on your target audience.<br />

                            Email marketing campaigns are one of the best lead generation tactics for small businesses.<br />
                            Every small business wants to generate more quality leads. If this is a focus for your business, email lead generation will play a vital role in your<br />
                            digital marketing strategy. To get the most out of your email marketing, you’ll need to start with understanding the basics of email lead
                            generation and focus on tactics that are proven to maximize conversions over time.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container sx={{ bgcolor: '#f3f3f3', p: '80px' }}>
                {emptArr.map((item, index) => {
                    return <Grid item key={index} lg={12}>
                        <Typography variant='h5' fontWeight={900} sx={{ color: MAIN_COLOR }}>{item.title}</Typography>
                        <Typography paragraph fontSize={'20px'}>{item.para}</Typography>
                    </Grid>
                })}
            </Grid>
            <Grid container sx={{ p: '80px', height: 'fit-content' }}>
                <div>
                    <Typography sx={{ fontWeight: 900, fontSize: '30px' }}>CONTACT US</Typography>
                    <div style={{ marginTop: '30px', marginBottom: '18px', height: '5px', width: '100px', backgroundColor: MAIN_COLOR }}></div>
                    <Typography sx={{ fontSize: '20px' }}>
                        To boost your revenue, request a proposal or contact us with your questions
                    </Typography>
                </div>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid item lg={3.5} sx={{ m: '60px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <PlaceIcon />
                        <Typography sx={{ fontSize: '30px', fontWeight: 900 }}>Head Office</Typography>
                        <Typography textAlign={'center'} sx={{ fontSize: '19px' }}>
                            3rd Floor , P-27 Shivalik Malviya Nager , Delhi-110017
                        </Typography>
                    </Grid>
                    <Divider orientation='vertical' sx={{ height: '90%' }} />
                    <Grid item lg={3.5} sx={{ m: '60px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <PhoneIcon />
                        <Typography sx={{ fontSize: '30px', fontWeight: 900 }}>Phone Number</Typography>
                        <Typography sx={{ fontSize: '19px' }}>
                            {MOBILE}
                        </Typography>
                    </Grid>
                    <Divider orientation='vertical' sx={{ height: '90%' }} />
                    <Grid item lg={3.5} sx={{ m: '60px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <LocalPostOfficeIcon />
                        <Typography sx={{ fontSize: '30px', fontWeight: 900 }}> Mail</Typography>
                        <Typography sx={{ fontSize: '19px' }}>
                            sms@adelsocial.com
                        </Typography>
                    </Grid>

                </Grid>
                <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0553500909477!2d77.21102887449014!3d28.538055988366565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fceaa6e5387%3A0x37ebbd6c60001afc!2sAdelSocial!5e0!3m2!1sen!2sin!4v1689831157113!5m2!1sen!2sin" width="100%" height="400px" style={{ border: '0', allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", borderRadius: '10px' }}></iframe>
            </Grid>
            <Grid container component={'form'} sx={{ p: '0px 80px', justifyContent: 'center' }} spacing={2}>
                <Grid item lg={5}>
                    <input type="text" placeholder='First name' style={{ padding: '15px', width: '100%' }} />
                </Grid>
                <Grid item lg={5}>
                    <input type="text" placeholder='Last name' style={{ padding: '15px', width: '100%' }} />
                </Grid>
                <Grid item lg={10}>
                    <input type="text" placeholder='Email' style={{ padding: '15px', width: '100%' }} />
                </Grid>
                <Grid item lg={5}>
                    <input type="text" placeholder='Contact' style={{ padding: '15px', width: '100%' }} />
                </Grid>
                <Grid item lg={5}>
                    <input type="text" placeholder='Subject' style={{ padding: '15px', width: '100%' }} />
                </Grid>
                <Grid item lg={10}>
                    <textarea style={{ width: '100%' }} rows="10" placeholder='Message'></textarea>
                </Grid>
                <Grid item lg={10} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, mb: '30px', p: '10px 50px' }}>Submit</Button>

                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default BulkMailer