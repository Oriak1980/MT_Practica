import { Box, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Terms() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} width={'100%'} gap={2}>
                <Typography variant='h1' fontFamily={'system-ui'} fontWeight={'bold'}>TÉRMINOS Y CONDICIONES</Typography>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} ></Typography>
            </Box>
        </>
    )
}