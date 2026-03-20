import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Welcome() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        navigate('/login');
    }

    // Aplicar fondo solo cuando estemos en la página Welcome
    useEffect(() => {
        if (location.pathname === '/') {
            document.body.style.backgroundImage = 'url(/welvome_background.png)';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.minHeight = '100vh';
            
        }

        // Limpiar el fondo cuando salgamos de la página
        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundRepeat = '';
            document.body.style.minHeight = '';
        };
    }, [location.pathname]);

    return (
        <Box sx={{
            minHeight: '100vh',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box component={'img'} src="/MiTienditaLogo.png" alt="Logo Mi Tiendita" sx={{width:'400px', height:'400px', mt:6}}/>
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Typography variant="h1" color="#ffffff" fontFamily={'Poppins'} sx={{fontWeight:'bold', mt:6}}>Bienvenido A Mi Tiendita</Typography>
            </Box>
            <Box display={'flex'} justifyContent={'center'} sx={{mt:6}}>
                <Button variant="contained" onClick={handleLogin} size="large" sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'Poppins', width: '200px', fontSize:'20px', fontWeight:'bold', borderRadius: '50px' }} >Continuar</Button>
            </Box>
        </Box>
    )
}