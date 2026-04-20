import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { act, useEffect, useState } from "react";
import MoneyCard from "../components/MoneyCard";
import Products from "../components/Products";
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ModalMT from "../components/ModalMT";


export default function Inventory() {

    const navigate = useNavigate();

    const [active, setActive] = useState<number>(0);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/inventory') {
            document.body.style.backgroundColor = '#C29B33';
        };
        return () => {
            document.body.style.backgroundColor = '#F2E3C9';
        };
    }, [location.pathname])

    const handlerNavigateProduct = () => {
        navigate('/add-product');
        document.body.style.backgroundColor = '#C29B33';
    }

    const [modal, setModal] = useState(Boolean);

    const handleClose = () => {
        setModal(false);
    };

    const modalContent = [
        <>
            <Card onClick={() => setActive(1)} variant={'outlined'}
                sx={{ backgroundColor: active === 1 ? '#d041345b' : 'rgba(255, 255, 255, 0.18)', gap: 2, p: 2, borderRadius: 5, width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, border: active === 1 ? '2px solid #D04234' : '', cursor: 'pointer' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                    <Avatar alt="IconImage" sx={{ width: 60, height: 60, borderRadius: 2, backgroundColor: '#D04234' }}>
                        <QrCodeScannerRoundedIcon fontSize="large" sx={{ color: '#ffffff' }} />
                    </Avatar>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 0.5 }}>
                        <Typography variant="h4" fontFamily="system-ui" fontWeight={'bold'} color="#000000">Buscar</Typography>
                        <Typography variant="body1" fontFamily="system-ui" fontWeight="bold" color="#828287">Solo productos con código de barras.</Typography>
                    </Box>
                </Box>
            </Card>
            <Card variant="outlined" onClick={() => setActive(2)} sx={{ backgroundColor: active === 2 ? '#d041345b' : 'rgba(255, 255, 255, 0.18)', gap: 2, p: 2, borderRadius: 5, width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, border: active === 2 ? '2px solid #D04234' : '', cursor: 'pointer' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                    <Avatar alt="IconImage" sx={{ width: 60, height: 60, borderRadius: 2, backgroundColor: '#82828722' }}>
                        <EditNoteRoundedIcon fontSize="large" sx={{ color: '#D04234' }} />
                    </Avatar>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 0.5 }}>
                        <Typography variant="h4" fontFamily="system-ui" fontWeight={'bold'} color="#000000">Manual</Typography>
                        <Typography variant="body1" fontFamily="system-ui" fontWeight="bold" color="#828287">Captura el producto manualmente cuando no tenga código.</Typography>
                    </Box>
                </Box>
            </Card>
        </>
    ]

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <MoneyCard />
                <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} mt={3} width={1699}>
                    <Button variant="contained" size="large" onClick={() => setModal(true)} endIcon={<AddRoundedIcon sx={{ fontSize: '15px' }} />} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', width: 146 }} >Agregar</Button>
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
                            <Typography variant="h5" fontFamily="system-ui" fontWeight="bold" color="#ffffff">Consulta, edita o elimina productos registrados.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box mb={2}><Products /></Box>
            </Box>
            <ModalMT open={modal} onClose={handleClose} title="Selecciona el tipo" description="Elige cómo deseas agregar el producto al inventario." content={modalContent} buttons={true} icon={<Inventory2RoundedIcon />} actionDisable={active === 0 ? true : false} onClick={() => handlerNavigateProduct()} />
        </>
    )
}