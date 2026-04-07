import { Box, Card, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Comisiones() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3} width={'100%'}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Comisiones</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287" mt={2}>
                    Las comisiones mostradas son informativas y pueden actualizarse según las condiciones vigentes de cada servicio
                </Typography>
                <Card variant="outlined" sx={{mt:3, backgroundColor: 'rgba(130, 130, 135, 0.25)', p: 3, display: 'flex', flexDirection: 'row', width: 1700, borderRadius: 8, justifyContent: 'center' }}>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">5 catalogos · 87 servicios</Typography>
                </Card>
            </Box>
        </>
    )
}