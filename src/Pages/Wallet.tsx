import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import Header from "../components/Header";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';


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
                    <Box display={'flex'} flexDirection={'column'} width={'100%'} alignItems={'center'} mt={3}>
                        <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Para ingresar más saldo, se puede mediante la cuenta CLABE asignada:</Typography>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} sx={{ mt: 1.5, p: 2, borderRadius: 50, backgroundColor: '#FFFF', width: '90%' }}>
                            <Box display={'flex'} justifyContent={'center'} flex={1}>
                                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">000000000000000000</Typography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'}>
                                <IconButton>
                                    <ContentCopyRoundedIcon sx={{ color: '#D04234', fontSize: 40 }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" mt={4}>¿Qué deseas hacer con tus ganancias?</Typography>
                    <Button variant="contained" size='large' sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '1000px', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height: 50, mt: 2.5 }}>Dispersar</Button>
                    <Button variant="contained" size='large' sx={{ backgroundColor: '#C29B33', color: '#ffffff', fontFamily: 'system-ui', width: '1000px', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height: 50, mt:2.5 }}>Transferir a Saldo</Button>
                </Box>
                <Box borderRadius={'1%'} sx={{backgroundColor:'#828287', p:0.2, width:1700, mt:4}}/>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={4} gap={0}>
                    <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">RECARGAR SALDO</Typography>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color='#000000' mt={0.5}>
                        Realiza un deposito para realizar operaciones de pago de servicios, recargas, tesorería, depósitos bancarios, etc. 
                    </Typography>
                    <Box component={'img'} src="/spei.png" alt="Spei logo" sx={{mt:0, width:1300, height:550}}/>
                </Box>
            </Box>
        </>
    )
}