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
        { label: 'Sucursales', icon: <StorefrontRoundedIcon sx={{ fontSize: 180, color: '#ffffff' }} />, action: () => { } },
        { label: 'Usuarios', icon: <GroupsRoundedIcon sx={{ fontSize: 180, color: '#ffffff' }} />, action: () => { } },
    ]

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">Administración</Typography>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3} mb={3} gap={2} width={1700}>
                    {cards.map((c, i) => (
                        <Card key={i} variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 3, borderRadius: '9px', backgroundColor: 'rgba(255, 255, 255, 0.18)', boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.45), inset -3px -3px 6px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 12px rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.45)', backgroundClip: 'padding-box', width: '30%' }}>
                            {c.icon}
                            <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">{c.label}</Typography>
                            <Button variant="contained" size="large" onClick={c.action} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }}>Comenzar</Button>
                        </Card>
                    ))}
                </Box>
            </Box>
        </>
    )
}