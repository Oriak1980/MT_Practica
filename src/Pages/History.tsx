import { Box, Card, Typography } from "@mui/material";
import Header from "../components/Header";
import DateRangePicker from "../components/DateRangePicker";


export default function History() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Historial de transacciones</Typography>
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <DateRangePicker/>
                <Card variant="outlined" sx={{mt:3, backgroundColor:'rgba(130, 130, 135, 0.25)', p:3, display:'flex', flexDirection:'row', width:1700, borderRadius:8, justifyContent:'center' }}>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287">Mostrando sin rango de fechas disponible</Typography>
                </Card>
            </Box>
        </>
    )
}