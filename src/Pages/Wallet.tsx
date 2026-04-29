import { Box, Button, Card, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';


export default function Wallet() {
    const theme = useTheme();

    return (
        <>
            <Header />
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} sx={{ px: theme.spacing(2) }}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C29B33', p: { xs: 2, sm: 3 }, borderRadius: 8, mt: 3, maxWidth: '1700px', width: '100%' }}>
                    <Box display={'flex'} justifyContent={'center'} flexDirection={{ xs: 'column', sm: 'row' }} alignItems={'center'}>
                        <Box display={'flex'} flexDirection={'column'} width={{ xs: '100%', sm: '50%' }} alignItems={'center'} sx={{ mb: { xs: 2, sm: 0 } }}>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>SALDO</Typography>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>$0.00</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} width={{ xs: '100%', sm: '50%' }} alignItems={'center'}>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>GANANCIA</Typography>
                            <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>$0.00</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'} mt={3}>
                        <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' }, textAlign: 'center' }}>Para ingresar más saldo, se puede mediante la cuenta CLABE asignada:</Typography>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} sx={{ mt: 1.5, p: 2, borderRadius: 50, backgroundColor: '#FFFF', width: { xs: '100%', sm: '90%' } }}>
                            <Box display={'flex'} justifyContent={'center'} flex={1}>
                                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.2rem', sm: '2rem' } }}>000000000000000000</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'}>
                                <IconButton>
                                    <ContentCopyRoundedIcon sx={{ color: '#D04234', fontSize: { xs: 30, sm: 40 } }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ mt: 4, width: '100%', maxWidth: '1000px' }}>
                    <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, textAlign: 'center' }}>¿Qué deseas hacer con tus ganancias?</Typography>
                    <Button variant="contained" size='large' sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px', height: { xs: 45, sm: 50 }, mt: 2.5 }}>Dispersar</Button>
                    <Button variant="contained" size='large' sx={{ backgroundColor: '#C29B33', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px', height: { xs: 45, sm: 50 }, mt: 2.5 }}>Transferir a Saldo</Button>
                </Box>
                <Box borderRadius={'1%'} sx={{ backgroundColor: '#828287', p: 0.2, width: '100%', maxWidth: '1700px', mt: 4 }} />
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={4} gap={0}>
                    <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>RECARGAR SALDO</Typography>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color='#000000' mt={0.5} sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem' }, textAlign: 'center', px: 2 }}>
                        Realiza un deposito para realizar operaciones de pago de servicios, recargas, tesorería, depósitos bancarios, etc.
                    </Typography>
                    <Box component={'img'} src="/spei.png" alt="Spei logo" sx={{ mt: 0, width: '100%', height: 'auto', maxWidth: '1300px' }} />
                </Box>
            </Box>
        </>
    )
}