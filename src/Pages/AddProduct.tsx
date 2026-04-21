import { Box, Button, Card, InputAdornment, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';

export default function AddProduct() {

    const [active, setActive] = useState('manual');
    const [values, setValues] = React.useState({ venta: '0', compra: '0' });


    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/add-product') {
            document.body.style.backgroundColor = '#C29B33';
        };
    }, [location.pathname])

    const formatCurrency = (value: number | string) => {
        const number = Number(value) / 100;
        return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
    };

    const handleChange = (field: 'venta' | 'compra') => (e: React.ChangeEvent<HTMLInputElement>) => {
        const digitsOnly = e.target.value.replace(/\D/g, '');
        setValues(prev => ({ ...prev, [field]: digitsOnly || '0' }));
    };

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} width={1700}>
                    <Typography variant='h5' fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Tipo de captura</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={1700} mt={3} gap={2}>
                    <Card onClick={() => setActive('manual')} variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', borderRadius: 9, p: 0.6, backgroundColor: active === 'manual' ? '#D04234' : '#ffffff', border: active === 'manual' ? 'none' : 'solid 2px #D04234' }}>
                        <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color={active === 'manual' ? '#ffffff' : '#D04234'}>Manual</Typography>
                    </Card>
                    <Card onClick={() => setActive('upc')} variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%', borderRadius: 9, p: 0.6, backgroundColor: active === 'upc' ? '#D04234' : '#ffffff', border: active === 'upc' ? 'none' : 'solid 2px #D04234' }}>
                        <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color={active === 'upc' ? '#ffffff' : '#D04234'}>UPC</Typography>
                    </Card>
                </Box>
                {active === 'manual' ?
                    <Box>

                    </Box>
                    :
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={1700} mt={3} mb={3}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} width={'100%'}>
                            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Código de barras</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} mt={2} gap={2}>
                            <TextField disabled placeholder="Presione para escanear" variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: '#828287', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#828287', zIndex: 1 }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 } } }} slotProps={
                                { input: { endAdornment: (<InputAdornment position="end"><CameraAltRoundedIcon fontSize="medium" sx={{ color: '#828287', zIndex: 1 }} /></InputAdornment>) } }
                            } />
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} width={'100%'} mt={3}>
                            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Imagen del producto</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} mt={2} gap={2}>
                            <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', height: '200px', borderRadius: 9, p: 0.6, backgroundColor: '#F2E3C9', border: 'solid 2px #D04234', flexDirection: 'column', gap: 1 }}>
                                <ImageRoundedIcon fontSize="large" sx={{ color: '#828287' }} />
                                <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287">Agrega una imagen del producto</Typography>
                            </Card>
                            <Button variant="contained" size="large" sx={{ width: '90%', backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }} >Agregar Imagen</Button>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} width={'100%'} mt={3}>
                            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Nombre del producto</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} mt={2} gap={2}>
                            <TextField variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} />
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'100%'} mt={3} gap={2}>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'50%'} gap={1.5}>
                                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Precio de venta</Typography>
                                <TextField value={formatCurrency(values.venta)} onChange={handleChange('venta')} inputMode="numeric" variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#828287', zIndex: 1, fontWeight: 'bold' }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} slotProps={{ input: { style: { textAlign: 'right' } } }} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'50%'} gap={1.5}>
                                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Precio de compra</Typography>
                                <TextField value={formatCurrency(values.compra)} onChange={handleChange('compra')} variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#828287', zIndex: 1, fontWeight: 'bold' }, '& input::placeholder': { color: '#000000', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} slotProps={{ input: { style: { textAlign: 'right' } } }} />
                            </Box>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} width={'100%'} mt={3}>
                            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Cantidad</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} mt={2} gap={2}>
                            <TextField variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} />
                        </Box>
                        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d0413465', gap: 2, mt: 3, width: 1700, alignItems: 'center', borderRadius: 5, p: 1.5 }}>
                            <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color="#D04234">Nota: los impuestos son fijos, no afecta al precio de tu producto</Typography>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} width={'100%'} justifyContent={'space-around'}>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">IVA</Typography>
                                    <TextField value={16.00} variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} />
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">IEPS</Typography>
                                    <TextField value={0.00} variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} />
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">ISR</Typography>
                                    <TextField value={0.00} variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: '4px 12px', height: '22px', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', height: '22 px', padding: '4px 12px', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} />
                                </Box>
                            </Box>
                        </Card>
                        <Button variant="contained" size="large" sx={{ width: '90%', backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', mt:3 }} >Guardar</Button>
                    </Box>}
            </Box>
        </>
    )
}