import { PinInput } from "@chakra-ui/react";
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router";


export default function Login() {
    const navigate = useNavigate();
    const theme = useTheme();
    const circles = [
        { top: '20px', left: '10%', size: 40, color: '#D04234', img: 'null' },
        { top: '40px', left: '30%', size: 60, color: '#C29B33', img: 'null' },
        { top: '15px', left: '55%', size: 50, color: '#D04234', img: 'null' },
        { top: '60px', left: '75%', size: 35, color: '#C29B33', img: 'null' },
        { top: '95px', left: '20%', size: 45, color: '#D04234', img: 'null' },
        { top: '110px', left: '45%', size: 30, color: '#C29B33', img: 'null' },
        { top: '80px', left: '65%', size: 55, color: '#D04234', img: 'null' },
        { top: '55px', left: '88%', size: 40, color: '#C29B33', img: 'null' },
        { top: '200px', left: '15%', size: 50, color: '#D04234', img: 'null' },
        { top: '250px', left: '45%', size: 70, color: '#C29B33', img: 'null' },
        { top: '220px', left: '75%', size: 45, color: '#D04234', img: 'null' },
        { top: '350px', left: '25%', size: 35, color: '#C29B33', img: 'null' },
        { top: '380px', left: '65%', size: 60, color: '#D04234', img: 'null' },
        { top: '320px', left: '80%', size: 30, color: '#D04234', img: 'null' },
        { top: '500px', left: '10%', size: 55, color: '#C29B33', img: 'null' },
        { top: '520px', left: '40%', size: 40, color: '#D04234', img: 'null' },
        { top: '480px', left: '70%', size: 50, color: '#C29B33', img: 'null' },
        { top: '650px', left: '30%', size: 45, color: '#D04234', img: 'null' },
        { top: '680px', left: '60%', size: 35, color: '#C29B33', img: 'null' },
        { top: '620px', left: '85%', size: 60, color: '#D04234', img: 'null' },
        { top: '800px', left: '20%', size: 50, color: '#C29B33', img: 'null' },
        { top: '780px', left: '50%', size: 30, color: '#D04234', img: 'null' },
        { top: '850px', left: '75%', size: 40, color: '#C29B33', img: 'null' },
    ];

    return (
        <Box sx={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: theme.spacing(2) }}>
            <Card variant="outlined" sx={{ zIndex: 10, backgroundColor: '#fffff', position: 'relative', gap: 3, borderRadius: '20px', display: 'flex', flexDirection: 'column', padding: 2, maxWidth: '500px', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2 }}>
                    <Box component={'img'} src="/MiTienditaLogo.png" alt="Logo Mi Tiendita" sx={{ width: { xs: '60px', sm: '80px' }, height: { xs: '60px', sm: '80px' } }} />
                    <Box component={'img'} src="/logo_anpec.png" alt="Logo Mi Tiendita" sx={{ width: { xs: '200px', sm: '250px' }, height: { xs: '60px', sm: '80px' } }} />
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                    <Box component={'img'} src="/LogoIniciarSesion.jpeg" alt="Imagen de Inicio de Sesión" sx={{ width: { xs: '200px', sm: '250px' }, height: { xs: '200px', sm: '250px' } }} />
                </Box>
                <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={2} sx={{ position: 'relative', zIndex: 10 }}>
                    <Typography variant="h5" color="#D04234" fontWeight={'bold'} fontFamily={'system-ui'} zIndex={10} sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>INICAR SESIÓN</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={2} sx={{ zIndex: 10, alignItems: 'center' }}>
                    <Typography variant="h6" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'} zIndex={10} sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, textAlign: 'center' }}>Ingresa el código de tu tienda</Typography>
                    <PinInput.Root placeholder="" type="alphanumeric">
                        <PinInput.HiddenInput />
                        <PinInput.Control>
                            <PinInput.Input index={0} style={{ backgroundColor: '#ffff', zIndex: 10, borderColor: '#D04234', borderRadius: '10px', fontFamily: 'system-ui', color: '#D04234', fontSize: '16px' }} />
                            <PinInput.Input index={1} style={{ backgroundColor: '#ffff', zIndex: 10, borderColor: '#D04234', borderRadius: '10px', fontFamily: 'system-ui', color: '#D04234', fontSize: '16px' }} />
                            <PinInput.Input index={2} style={{ backgroundColor: '#ffff', zIndex: 10, borderColor: '#D04234', borderRadius: '10px', fontFamily: 'system-ui', color: '#D04234', fontSize: '16px' }} />
                            <PinInput.Input index={3} style={{ backgroundColor: '#ffff', zIndex: 10, borderColor: '#D04234', borderRadius: '10px', fontFamily: 'system-ui', color: '#D04234', fontSize: '16px' }} />
                            <PinInput.Input index={4} style={{ backgroundColor: '#ffff', zIndex: 10, borderColor: '#D04234', borderRadius: '10px', fontFamily: 'system-ui', color: '#D04234', fontSize: '16px' }} />
                            <PinInput.Input index={5} style={{ backgroundColor: '#ffff', zIndex: 10, borderColor: '#D04234', borderRadius: '10px', fontFamily: 'system-ui', color: '#D04234', fontSize: '16px' }} />
                        </PinInput.Control>
                    </PinInput.Root>
                    <Typography variant="subtitle2" color="#000000" fontWeight={450} fontFamily={'system-ui'} fontStyle={'italic'} zIndex={10} sx={{ textAlign: 'center', fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>Puedes consultar el código de tu tienda desde le email que registraste</Typography>
                    <Button variant="contained" size="large" onClick={() => navigate('/access')} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: { xs: '100%', sm: '200px' }, fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px' }} >Continuar</Button>
                </Box>
            </Card>
            {circles.map((c, i) => (
                <Box key={i} sx={{
                    position: 'absolute',
                    top: c.top,
                    left: c.left,
                    width: c.size,
                    height: c.size,
                    borderRadius: '50%',
                    backgroundColor: c.color,
                    zIndex: 0,
                }} />
            ))}
        </Box>
    )
}