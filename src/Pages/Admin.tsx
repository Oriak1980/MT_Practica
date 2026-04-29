import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';


export default function Admin() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/admin') {
            document.body.style.backgroundImage = 'url(/Fondo.png)';
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.minHeight = '100vh';
        }

        return () => {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundPosition = '';
            document.body.style.backgroundRepeat = '';
            document.body.style.minHeight = '';
        }
    }, [location.pathname]);

    const cards = [
        { label: 'Sucursales', icon: <StorefrontRoundedIcon sx={{ fontSize: { xs: 120, sm: 180 }, color: '#ffffff' }} />, action: () => { } },
        { label: 'Usuarios', icon: <GroupsRoundedIcon sx={{ fontSize: { xs: 120, sm: 180 }, color: '#ffffff' }} />, action: () => { } },
    ]

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3} sx={{ px: 2 }}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, textAlign: 'center' }}>Administración</Typography>
                <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'} gap={3} sx={{ mt: 3, mb: 3, maxWidth: '1700px', width: '100%' }}>
                    {cards.map((c, i) => (
                        <Card key={i} variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: { xs: 2, sm: 3 }, borderRadius: '9px', backgroundColor: 'rgba(255, 255, 255, 0.18)', boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.45), inset -3px -3px 6px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 12px rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.45)', backgroundClip: 'padding-box', width: { xs: '100%', sm: '45%', md: '30%' } }}>
                            {c.icon}
                            <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>{c.label}</Typography>
                            <Button variant="contained" size="large" onClick={c.action} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px' }}>Comenzar</Button>
                        </Card>
                    ))}
                </Box>
            </Box>
        </>
    )
}