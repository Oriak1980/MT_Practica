import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function Welcome() {

    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(2),
        }}>
            <Box component={'img'} src="/MiTienditaLogo.png" alt="Logo Mi Tiendita" sx={{
                maxWidth: '400px',
                width: '80%',
                height: 'auto',
                mb: 4
            }}/>
            <Typography variant="h1" color="#ffffff" fontFamily={'system-ui'} sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                textAlign: 'center',
                mb: 4
            }}>Bienvenido A Mi Tiendita</Typography>
            <Button variant="contained" onClick={handleLogin} size="large" sx={{
                backgroundColor: '#D04234',
                color: '#ffffff',
                fontFamily: 'system-ui',
                width: { xs: '100%', sm: '200px' },
                fontSize: { xs: '16px', sm: '20px' },
                fontWeight: 'bold',
                borderRadius: '50px'
            }}>Continuar</Button>
        </Box>
    )
}