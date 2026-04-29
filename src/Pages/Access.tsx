import { PinInput } from "@chakra-ui/react";
import { Box, Button, Card, Checkbox, FormControlLabel, IconButton, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';


export default function Access() {
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
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return (
        <Box sx={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: theme.spacing(2) }}>
            <Card variant="outlined" sx={{ zIndex: 10, backgroundColor: '#fffff', position: 'relative', gap: 3, borderRadius: '20px', display: 'flex', flexDirection: 'column', padding: 2, maxWidth: '500px', width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2 }}>
                    <Box component={'img'} src="/MiTienditaLogo.png" alt="Logo Mi Tiendita" sx={{ width: { xs: '60px', sm: '80px' }, height: { xs: '60px', sm: '80px' } }} />
                    <Box component={'img'} src="/logo_anpec.png" alt="Logo Mi Tiendita" sx={{ width: { xs: '200px', sm: '250px' }, height: { xs: '60px', sm: '80px' } }} />
                </Box>
                <Box display={'flex'} justifyContent={'center'}>
                    <Box component={'img'} src="/AccesoLogo.jpeg" alt="Imagen de Inicio de Sesión" sx={{ width: { xs: '200px', sm: '250px' }, height: { xs: '200px', sm: '250px' } }} />
                </Box>
                <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={2} sx={{ position: 'relative', zIndex: 10 }}>
                    <Typography variant="h5" color="#D04234" fontWeight={'bold'} fontFamily={'system-ui'} zIndex={10} sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>ACCESO</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={2} sx={{ zIndex: 10, alignItems: 'center' }}>
                    <Typography variant="h6" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'} zIndex={10} sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, textAlign: 'center' }}>Ingresa tu usuario</Typography>
                    <TextField variant="outlined" sx={{ width: { xs: '95%', sm: '85%' }, height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: '#D04234', borderRadius: '30px', color: '#D04234' }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box' } } }} />
                    <Typography variant="h6" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'} zIndex={10} sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, textAlign: 'center' }}>Coloca tu PIN asignado</Typography>
                    <PinInput.Root placeholder="">
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
                    <Box display={'flex'} justifyContent={'flex-start'} flexDirection={'row'} gap={1} sx={{ borderRadius: '20px', border: 'solid 2px #C29B33', width: { xs: '95%', sm: '85%' }, alignItems: 'center' }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    sx={{
                                        color: '#D04234',
                                        '&.Mui-checked': {
                                            color: '#D04234',
                                        },
                                        ml: 2,
                                    }}
                                />
                            }
                            label={
                                <Typography variant="subtitle2" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'} sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                                    Recordar accesos
                                </Typography>
                            }
                        />
                    </Box>
                    <Box display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: 'center', sm: 'space-between' }} alignItems={'center'} sx={{ width: '100%', gap: 2 }}>
                        <IconButton onClick={()=>navigate('/login')} size="large" sx={{ backgroundColor: '#D04234', color: '#ffffff', '&:hover':{ backgroundColor: '#d3685e' } }}><ArrowBackRoundedIcon /></IconButton>
                        <Button variant="contained" size="large" onClick={()=>navigate('/home')} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: { xs: '100%', sm: '200px' }, fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px' }} >Iniciar Sesión</Button>
                    </Box>
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