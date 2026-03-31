import { Box, Card, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Wallet() {

    return (
        <>
            <Header />
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C29B33', p: 3, borderRadius: 8, mt: 3, width: 1700 }}>
                    <Box display={'flex'} justifyContent={'center'} flexDirection={'row'}>
                        <Box display={'flex'} flexDirection={'column'} width={'50%'} alignItems={'center'}>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">SALDO</Typography>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">$0.00</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} width={'50%'} alignItems={'center'}> 
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">GANANCIA</Typography>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">$0.00</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </>
    )
}