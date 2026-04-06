import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import DateRangePicker from "../components/DateRangePicker";


export default function History() {
    const [buttonLabel, setButtonLabel] = useState('Fecha');

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Historial de transacciones</Typography>
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <DateRangePicker onButtonLabelChange={setButtonLabel} />
                <Card variant="outlined" sx={{ mt: 3, backgroundColor: 'rgba(130, 130, 135, 0.25)', p: 3, display: 'flex', flexDirection: 'row', width: 1700, borderRadius: 8, justifyContent: 'center' }}>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287">{buttonLabel === 'Fecha' ? 'Mostrando sin rango de fechas disponible' : `Mostrando ${buttonLabel}`}</Typography>
                </Card>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} mt={3} width={1700} sx={{ border: '2px solid #C29B33', borderRadius: 8, p: 3 }}>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Actualmente no tienes transacciones</Typography>
                </Box>
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} sx={{position:'fixed', borderRadius: '32px 32px 0px 0px', bottom:0, left:0, right:0, zIndex:100, backgroundColor:'#828287', p:3}}>
                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">TOTAL</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">$0.00</Typography>
            </Box>
        </>
    )
}