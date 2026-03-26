import { Box, Card } from "@mui/material";
import SideMenu from "./SideMenu";
import { useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();

    return (
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'row', p: 3, borderRadius: '0px 0px 50px 50px', backgroundColor: '#ffffff', position: 'relative', zIndex: 10, justifyContent: 'space-between' }}>
            <SideMenu />
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'15%'} alignItems={'center'} sx={{zIndex:10}}>
                <Box component={'img'} src="/logo_anpec.png" alt="Logo Mi Tiendita" sx={{ width: '210px', height: '55px', zIndex: 10 }} />
                <Box component={'img'} src="/MiTienditaLogo.png" alt="Logo Mi Tiendita" sx={{ width: '55px', height: '55px', zIndex: 10 }} />
            </Box>
        </Card>
    )
}