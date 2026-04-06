import { Box, Typography } from "@mui/material";
import Header from "../components/Header";


export default function History() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Historial de transacciones</Typography>
            </Box>
            
        </>
    )
}