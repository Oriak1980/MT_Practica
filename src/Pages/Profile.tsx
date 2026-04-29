import { Avatar, Box, Button, Card, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';

export default function Profile() {
    const theme = useTheme();

    return (
        <>
            <Header />
            <Box sx={{ position: 'absolute', backgroundColor: '#D04234', p: { xs: 4, sm: 6 }, width: '100%', opacity: 0.5, zIndex: 1, top: 0, height: { xs: 250, sm: 350 } }} />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ position: 'relative', px: theme.spacing(2) }}>
                <Avatar sx={{ zIndex: 11, position: 'relative', top: { xs: 20, sm: 40 }, width: { xs: 120, sm: 150 }, height: { xs: 120, sm: 150 } }} />
                <Card variant="outlined" sx={{ display: 'flex', p: { xs: 2, sm: 3 }, backgroundColor: '#C29B33', zIndex: 10, mt: 2, flexDirection: 'column', borderRadius: 8, maxWidth: '1700px', width: '100%' }}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ borderBottom: '2.5px solid black', borderRadius: '3', pb: 2 }}>
                        <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>User Complete Name</Typography>
                        <Typography variant="h6" fontFamily={'system-ui'} color="#000000" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>Role</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={'space-around'} sx={{ gap: 3, mt: 2, alignItems: 'center' }}>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} sx={{ borderRight: { xs: 'none', sm: '2.5px solid black' }, borderBottom: { xs: '2.5px solid black', sm: 'none' }, pb: { xs: 2, sm: 0 } }}>
                            <AlternateEmailRoundedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} />
                            <Typography variant="h6" fontFamily={'system-ui'} color="#000000" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>user_name</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} sx={{ borderRight: { xs: 'none', sm: '2.5px solid black' }, borderBottom: { xs: '2.5px solid black', sm: 'none' }, pb: { xs: 2, sm: 0 } }}>
                            <LocalPhoneRoundedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} />
                            <Typography variant="h6" fontFamily={'system-ui'} color="#000000" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>+52 5544332211</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
                            <EmailRoundedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} />
                            <Typography variant="h6" fontFamily={'system-ui'} color="#000000" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>correo@example.com</Typography>
                        </Box>
                    </Box>
                </Card>
                <Card variant="outlined" sx={{ display: 'flex', backgroundColor: '#C29B33', p: { xs: 2, sm: 3 }, mt: { xs: 5, sm: 10 }, flexDirection: 'row', borderRadius: 8, maxWidth: '1700px', width: '100%', alignItems: 'center' }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <StorefrontRoundedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} />
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} flex={1}>
                        <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>Grocery Store Name</Typography>
                    </Box>
                </Card>
                <Card variant="outlined" sx={{ display: 'flex', backgroundColor: '#C29B33', p: { xs: 2, sm: 3 }, mt: { xs: 5, sm: 10 }, flexDirection: 'row', borderRadius: 8, maxWidth: '1700px', width: '100%', alignItems: 'center' }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <AccountTreeRoundedIcon sx={{ fontSize: { xs: 30, sm: 35 } }} />
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} flex={1}>
                        <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>Place</Typography>
                    </Box>
                </Card>
                <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} sx={{ mt: { xs: 5, sm: 10 }, mb: 2, width: '100%', maxWidth: '1000px' }}>
                    <Button variant="contained" size='large' sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px', height: { xs: 45, sm: 50 } }}>Editar Perfil</Button>
                    <Button variant="outlined" size='large' sx={{ borderColor: '#D04234', color: '#D04234', fontFamily: 'system-ui', width: '100%', fontSize: { xs: '14px', sm: '15px' }, fontWeight: 'bold', borderRadius: '50px', mt: 2.5, height: { xs: 45, sm: 50 } }}>Eliminar Cuenta</Button>
                </Box>
            </Box>
        </>
    )
}