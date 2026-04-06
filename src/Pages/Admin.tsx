import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";


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

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">Administración</Typography>
            </Box>
        </>
    )
}