import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HOVER_COLOR, MAIN_COLOR } from '../constant'
import '../pages/Homepage.css'
// import "@fontsource/lora"; // Defaults to weight 400
import "@fontsource/lora/700.css"; // Specify weight
// import "@fontsource/lora/400-italic.css";

// format of getting data as a prop
// const items = [
//     {
//         header: { title: "Header1", item_link: '/' }, data: [{ title: 'item1', item_link: "demo" }, { title: 'item2', item_link: "/" }, { title: 'item3', item_link: "/" }]
//     },
//     {
//         header: { title: "Header2", item_link: '/' }, data: [{ title: 'item1', item_link: "/" }, { title: 'item2', item_link: "/" }, { title: 'item3', item_link: "/" }]
//     },
// ]


const MegaMenu = ({ title = "GiveTitleName", data = [], navigateHandlerTitleRoute = '/' }) => {
    const navigate = useNavigate()
    const [ stateNavi,setStateNavi]=useState(navigateHandlerTitleRoute)
    const style = {
        navTitle: {
            '&:hover': {borderBottom: `3px solid ${HOVER_COLOR}` },
            transition: "all 0.50s ease",
            mr: "20px",
            color:MAIN_COLOR,
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: '3px solid transparent',
            padding: '5px 5px',
            textTransform: 'unset',
            fontSize: {lg:'18px',md:"17px",sm:"15px",xs:"13px"},
            fontWeight: 700,
            fontFamily:"lora",
        },
        megaMenuTitle: {
            '&:hover': { cursor: 'pointer' },
            fontSize: '18px',
            color: MAIN_COLOR,
            mb: '0px',
            mt: '10px',
            fontWeight: 900,
            lineHeight: 'initial',
            padding: '10px 0px',
            width: 'fit-content',
            
           
        },
        megaMenuItems: {
            '&:hover': { cursor: 'pointer', color: MAIN_COLOR },
            color: '#2B2B2B',
            fontSize: '14px',
            padding: '4px 0px',
            lineHeight: 'inherit',
            fontWeight: 100,
            width: 'fit-content',
            
        }
    }

    const handleNavigator=()=>{
           navigate(`${stateNavi}`)
           setStateNavi("")
            console.log(stateNavi)
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
    }


   const handleNavigateItemLink =(item)=>{
    navigate(`${item}`)
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
   }


   const handleNavigateTitle =(item)=>{
    navigate(`${item}`)
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
   }


 if (data.length > 0) {
        return (
            <>
                <Box component='div' className="dropdown" >
                    <Button onClick={handleNavigator} disableRipple disableElevation disableTouchRipple disableFocusRipple sx={style.navTitle} endIcon={<ExpandMoreIcon />}>
                        {title}
                    </Button>
                    <Box component='div' className="dropdown-content" sx={{ borderTop: `9px solid ${MAIN_COLOR}`, borderBottom: `9px solid ${MAIN_COLOR}` }}>
                        <Grid container className="row" justifyContent={'center'}>
                            {data.map((item, index) => {
                                return <Grid item xs={1.6} component='div' key={index} className="column" sx={{pl:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                    <Typography variant='h1' color={'secondary'} align='center' onClick={() => navigate(`${item.header.item_link}`)} sx={style.megaMenuTitle} >{item.header.title}</Typography>
                                    {item.data.map((nav, i) => {
                                        return <Typography variant='h5' align='center' key={i} onClick={()=>{handleNavigateItemLink(nav.item_link)}} sx={style.megaMenuItems} >{nav.title}</Typography>
                                    })}
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                </Box>
            </>
        )
} 
 else {
        return (
            <>
                <Box component='div' className="dropdown">
                    <Button onClick={()=>{handleNavigateTitle(navigateHandlerTitleRoute)}} disableRipple disableElevation disableTouchRipple disableFocusRipple sx={style.navTitle} >
                        {title}
                    </Button>
                </Box>
            </>
        )
    }

}

export default MegaMenu
