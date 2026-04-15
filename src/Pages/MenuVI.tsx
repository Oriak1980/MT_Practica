import { Box, Button, Card, Typography } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import { useState } from "react";
import ModalMT from "../components/ModalMT";

export default function MenuVI() {

    const [modal, setModal] = useState(false);

    const cards = [
        { label: 'Inventario', icon: <Inventory2RoundedIcon sx={{ color: '#D04234', fontSize: 180 }} />, action: () => { setModal(true) } },
        { label: 'Venta', icon: <PointOfSaleRoundedIcon sx={{ color: '#D04234', fontSize: 180 }} />, action: () => { } },
    ]

    return (
        <>
            <Header />
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <MoneyCard />
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3} mb={3} gap={2} width={1700}>
                    {cards.map((c, i) => (
                        <Card key={i} variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 3, borderRadius: '9px', backgroundColor: '#ffffff', border: '3px solid #C29B33', width: '30%' }}>
                            {c.icon}
                            <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">{c.label}</Typography>
                            <Button variant="contained" size="large" onClick={c.action} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }}>Comenzar</Button>
                        </Card>
                    ))}
                </Box>
            </Box>
            <ModalMT open={modal} onClose={() => setModal(false)}/>
        </>
    )
}