import { Box, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Notification() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                    <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Notificaciones</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} mt={3} width={1700} sx={{ border: '2px solid #C29B33', borderRadius: 8, p: 3 }}>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Actualmente no tienes notificaciones</Typography>
                </Box>
            </Box>
        </>
    )
}