import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Home.css'
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Flight from '../Flight/Flight';
import Rail from '../Rail/Rail';
import TaxiBill from '../Taxi/TaxiBill';


const ButtonAppBar = (props) => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#26a69a' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ mr: 5 }}>
                        <Button href="/rail-bill" className='button-nav' style={{
                            color: 'white',
                            border: '2px solid white',
                            fontSize: '18px',
                            width: '150px'
                        }} variant="outlined">
                            <TrainOutlinedIcon style={{ paddingRight: "5px" }} /> Rail
                        </Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 5 }}>
                        <Button href="/" className='button-nav' style={{
                            color: 'white',
                            border: '2px solid white',
                            fontSize: '18px',
                            width: '150px'
                        }} variant="outlined">
                            <FlightOutlinedIcon style={{ paddingRight: "5px" }} /> Flight
                        </Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 5, flexGrow: 1 }}>

                        <Button href="/taxi-bill" className='button-nav' style={{
                            color: 'white',
                            border: '2px solid white',
                            fontSize: '18px',
                            width: '150px'
                        }} variant="outlined" >
                            <LocalTaxiIcon style={{ paddingRight: "5px" }} /> Taxi
                        </Button>

                    </Typography>
                    <Typography>
                        <Button onClick={props.clickFunction} className='button-nav' style={{
                            color: 'white',
                            border: '2px solid white',
                            fontSize: '18px',
                            width: '150px',
                        }} variant="outlined" >
                            <PrintIcon style={{ paddingRight: "5px" }} />  Print
                        </Button>

                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const Page = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Flight />
                } exact />
                <Route path="/rail-bill" element={
                    <Rail />
                } exact />
                <Route path="/taxi-bill" element={
                    <TaxiBill />
                } exact />

            </Routes>
        </BrowserRouter>
    )
}


const Home = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'R S TOUR & TRAVEL'
    })



    return (
        <>
            <ButtonAppBar clickFunction={handlePrint}></ButtonAppBar>

            <div className='page-print' ref={componentRef}>
                <Page />
            </div>



        </>
    )
}

export default Home;