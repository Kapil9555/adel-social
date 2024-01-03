import { Grid } from '@mui/material'
import SectionHead from '../global/SectionHead'
import '../pages/Homepage.css'
import NewCrousel from './NewCrousel'


const WhyUs = () => {
    

    return (
        <Grid container className='serviceSection' sx={{p: { xs: '20px 2px', lg: '30px 20px', md: '30px 20px', sm: '30px 10px'},overflow:"hidden",}} >
            <SectionHead title={"SERVICES"} tagline={"Make a customer, not a sale."} />
            <Grid container className='servicesSectionMiddle' sx={{ borderRadius: { xs: '20px', lg: '90px', sm: '90px', md: '90px' },mt:"10px",overflow:"hidden",p: { xs: '10px', lg: '20px', md: '20px', sm:'20px'}, justifyContent: 'space-evenly', alignItems:'center'}} >
                <NewCrousel/>
            </Grid>
        </Grid>
    )
}

export default WhyUs