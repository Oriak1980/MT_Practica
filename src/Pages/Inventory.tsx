import { Avatar, Box, Button, Typography } from "@mui/material";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MoneyCard from "../components/MoneyCard";
import Products from "../components/Products";
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


export default function Inventory() {

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/inventory') {
            document.body.style.backgroundColor = '#C29B33';
        };
        return () => {
            document.body.style.backgroundColor = '#F2E3C9';
        };
    }, [location.pathname])

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <MoneyCard />
                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} mt={3} width={1699}>
                    <Button variant="contained" size="large" endIcon={<AddRoundedIcon sx={{fontSize:'15px'}} />} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', width: 146 }} >Agregar</Button>
                </Box>
                <Box width={1700}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                    sx={{ backgroundColor: '#D04234', gap: 2, p: 2, borderRadius: 8 }}>
                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                        <Avatar alt="IconImage" sx={{ width: 100, height: 100, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.18)' }}>
                            <Inventory2RoundedIcon sx={{ color: '#ffffff', fontSize: 50 }} />
                        </Avatar>
                        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 0.5 }}>
                            <Typography variant="h4" fontFamily="system-ui" color="#ffffff">Inventario almacenado</Typography>
                            <Typography variant="h5" fontFamily="system-ui"  fontWeight="bold" color="#ffffff">Consulta, edita o elimina productos registrados.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box mb={2}><Products /></Box>

            </Box>
        </>
    )
}