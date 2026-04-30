import { Box, Button, Card, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { giftCards, internet, peaje, productosCatalogo, productosFinacieros, recargas, servicios, tesoreria } from "../data/comisiones";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

type mounts = {
    label: string;
    mount: number;
}

export default function SelectService() {

    type data = {
        id: number;
        label: string;
        number: number;
        image: string;
        action?: () => void;
    };

    type service = {
    service: data['label'];
    type: 'recargas' | 'servicios' | 'tarjetas-regalo' | 'peaje' | 'internet' | 'tesoreria' | 'productos-financieros' | 'productos-catalogo';
    mounts?: mounts[];
    referenceImage?: string;
    helpText?: string;
};

    const [services, setServices] = useState<data[] | null>(null);
    const [serv, setServ] = useState<service[] | null>(null); 
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/recargas') {
            return setServices(recargas);
        };
        if (location.pathname === '/servicios') {
            return setServices(servicios);
        };
        if (location.pathname === '/tarjetas-regalo') {
            return setServices(giftCards);
        };
        if (location.pathname === '/peaje') {
            return setServices(peaje);
        };
        if (location.pathname === '/internet') {
            return setServices(internet);
        };
        if (location.pathname === '/tesoreria') {
            return setServices(tesoreria);
        };
        if (location.pathname === '/productos-financieros') {
            return setServices(productosFinacieros);
        };
        if (location.pathname === '/productos-catalogo') {
            return setServices(productosCatalogo);
        }
    }, [location]);

    const handleNav = (s: service) => {
        const look = services?.find(c => c.label === s.service);
        if (look) {
            setServ([s]);
        };

        if (s.type === 'recargas' || s.type === 'peaje' || s.type === 'tarjetas-regalo' || s.type === 'internet' || s.service === 'Pospago') {
            return 'hola';
        };
        
        if (s.type === 'productos-financieros' || s.type === 'productos-catalogo' || s.type === 'tesoreria') {
            return 'mundo';
        }
    }

    return (
        <>
            <Header />
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={3}>
                <MoneyCard />
                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={1700}>
                    <TextField variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: 'auto', height: 'auto', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }}
                        slotProps={{
                            input: {
                                startAdornment: (<InputAdornment position="start"><SearchRoundedIcon fontSize="medium" sx={{ color: '#828287', zIndex: 1 }} /></InputAdornment>)
                            }
                        }}
                    />
                </Box>
                <Grid container spacing={3} columns={12} direction={'row'} sx={{ m: 3, }}>
                    {services?.map((c, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Card variant="outlined" sx={{ backgroundColor: '#C29B33', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3, borderRadius: '9px', overflow: 'hidden', width: '70%' }}>
                                <Box component={'img'} src={c.image} alt='MainImage' sx={{ width: 'auto', height: 'auto', borderRadius: 50, backgroundColor: '#ffffff', }} />
                                <Typography variant="h5" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'}>{c.label}</Typography>
                                <Button variant="contained" size="large" sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }}>Comenzar</Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}