import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import Header from "../components/Header";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

export default function Profile() {

    return (
        <>
            <Header />
            <Box sx={{ position: 'absolute', backgroundColor: '#D04234', p: 6, width: '100%', opacity: 0.5, zIndex: 1, top: 0, height: 350 }} />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ position: 'relative' }}>
                <Avatar sx={{ zIndex: 11, position: 'relative', top: 40, width: 150, height: 150 }} />
                <Card variant="outlined" sx={{ display: 'flex', p: 3, backgroundColor: '#C29B33', zIndex: 10, mt: 2, flexDirection: 'column', borderRadius: 8, width: 1700 }}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ borderBottom: '2.5px solid black', borderRadius: '3' }}>
                        <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">User Complete Name</Typography>
                        <Typography variant="h6" fontFamily={'system-ui'} color="#0000000">Role</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'} sx={{ gap: 3, mt: 2 }}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} sx={{ borderRight: '2.5px solid black' }}>
                            <AlternateEmailRoundedIcon />
                            <Typography variant="h6" fontFamily={'system-ui'} color="#0000000">user_name</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} sx={{ borderRight: '2.5px solid black' }}>
                            <LocalPhoneRoundedIcon />
                            <Typography variant="h6" fontFamily={'system-ui'} color="#0000000">+52 5544332211</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
                            <EmailRoundedIcon />
                            <Typography variant="h6" fontFamily={'system-ui'} color="#0000000">correo@example.com</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card variant="outlined" sx={{ display: 'flex', backgroundColor: '#C29B33', p: 3, mt: 10, flexDirection: 'row', borderRadius: 8, width: 1700, alignItems: 'center' }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <StorefrontRoundedIcon sx={{ fontSize: 35 }} />
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} flex={1}>
                        <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">Grocery Store Name</Typography>
                    </Box>
                </Card>
                <Card variant="outlined" sx={{ display: 'flex', backgroundColor: '#C29B33', p: 3, mt: 10, flexDirection: 'row', borderRadius: 8, width: 1700, alignItems: 'center' }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <AccountTreeRoundedIcon sx={{ fontSize: 35 }} />
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} flex={1}>
                        <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#0000000">Place</Typography>
                    </Box>
                </Card>
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} sx={{mt:10, mb:2}}>
                    <Button variant="contained" size='large' sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '1000px', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height:50,}}>Editar Perfil</Button>
                    <Button variant="outlined" size='large' sx={{ borderColor: '#D04234', color: '#D04234', fontFamily: 'system-ui', width: '1000px', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', mt:2.5, height:50 }}>Eliminar Cuenta</Button>
                </Box>
            </Box>
        </>
    )
}