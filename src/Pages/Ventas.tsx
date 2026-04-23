import { Box, Button, Card, Typography } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";
import Products from "../components/Products";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


export default function Ventas() {
    return (
        <>
            <Header />
            <Box display={'flex'} justifyContent={'center'}>
                <MoneyCard />
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} mt={3} sx={{ height: 'calc(100vh - 250px)' }} gap={2} p={1.5}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', width: '50%', borderRadius: 6, border: '2px solid #D04234', backgroundColor: '#C29B33', mb: 5, height: '100%', p: 0, overflowY: 'auto', '&::-webkit-scrollbar': { width: '8px' }, '&::-webkit-scrollbar-track': { background: 'transparent' }, '&::-webkit-scrollbar-thumb': { background: 'none', borderRadius: '20000px', height: '10%' } }}>
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} mb={3} mt={3}>
                        <Products />
                    </Box>
                </Card>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', width: '50%', borderRadius: 6, border: '2px solid #D04234', backgroundColor: '#C29B33', mb: 5, height: '100%', p: 0, overflowY: 'auto', position: 'relative', '&::-webkit-scrollbar': { width: '8px' }, '&::-webkit-scrollbar-track': { background: 'transparent' }, '&::-webkit-scrollbar-thumb': { background: 'none', borderRadius: '20000px', height: '10%' } }}>
                    <Box width={'90%'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={0.5} mt={3} sx={{ borderRadius: 8, backgroundColor: '#D04234', p: 1.5 }}>
                        <Typography variant="h5" fontFamily={'system-ui'} color={"#ffffff"}>Carrito</Typography>
                        <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">Del lado derecho revisas los productos seleccionados y el total de la venta.</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'90%'} mt={5}>
                        <ShoppingCartRoundedIcon sx={{ fontSize: 200, color: '#ffffff', mt: 0 }} />
                        <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color={"#ffffff"}>Aun no has agregado productos a la venta.</Typography>
                    </Box>
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} sx={{ position: 'absolute', borderRadius: '32px 32px 0px 0px', bottom: 0, left: 0, right: 0, backgroundColor: '#828287', p: 3, gap: 1 }}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'100%'} >
                            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">TOTAL</Typography>
                            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">$0.00</Typography>
                        </Box>
                        <Button variant="contained" size="large" sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }}>Realizar Cobro</Button>
                    </Box>
                </Card>
            </Box>
        </>
    )
}