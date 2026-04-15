import { Box, Card, IconButton } from "@mui/material";
import SideMenu from "./SideMenu";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', p: 3, borderRadius: '0px 0px 50px 50px', backgroundColor: '#ffffff', position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 130, justifyContent: 'space-between' }}>
            {location.pathname === '/menu-vi' || location.pathname==='/inventory' ?
                <IconButton
                    onClick={ handleBack }
                    size="medium"
                    sx={{
                        width: 55,
                        height: 55,
                        zIndex: 1300,
                        p: 0.5,
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#00000040",
                        },
                    }}
                >
                    <ArrowBackRoundedIcon fontSize='large' sx={{ color: '#D04234' }} />
                </IconButton>
                :
                <SideMenu />
            }

            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'15%'} alignItems={'center'} sx={{ zIndex: 10 }}>
                <Box component={'img'} src="/logo_anpec.png" alt="Logo Mi Tiendita" sx={{ width: '210px', height: '55px', zIndex: 10 }} />
                <Box component={'img'} src="/MiTienditaLogo.png" alt="Logo Mi Tiendita" sx={{ width: '55px', height: '55px', zIndex: 10 }} />
            </Box>
        </Card>
    )
}