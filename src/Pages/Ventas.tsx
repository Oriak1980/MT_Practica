import { Box, Button, Card, Chip, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";
import Products from "../components/Products";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { testProducts } from "../data/productos";


export default function Ventas() {
    return (
        <>
            <Header />
            <Box display={'flex'} justifyContent={'center'}>
                <MoneyCard />
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} mt={3} sx={{ height: 'calc(100vh - 250px)' }} gap={2} p={1.5}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'flex-start', justifyItems: 'center', width: '50%', borderRadius: 6, border: '2px solid #D04234', backgroundColor: '#C29B33', mb: 5, height: '100%', p: 0, overflowY: 'auto', '&::-webkit-scrollbar': { width: '8px', display: 'none' }, '&::-webkit-scrollbar-track': { background: 'transparent' }, '&::-webkit-scrollbar-thumb': { background: 'none', borderRadius: '20000px', height: '10%' } }}>
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={1.5} justifyContent={'space-between'} alignItems={'center'} alignSelf='center' sx={{ backgroundColor: '#F2E3C9', p: 1.5, position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' }}>
                        <Box width={'100%'} display={'flex'} flexDirection={'row'} gap={0.5} justifyContent={'space-between'} alignItems={'center'} alignSelf='center' sx={{}}>
                            <Box display={'flex'} flexDirection={'column'} gap={0.5} alignItems={'flex-start'}>
                                <Typography variant="h5" fontFamily={'system-ui'} fontSize={'bold'} color="#000000">Productos Disponibles</Typography>
                                <Typography variant="h6" fontFamily={'system-ui'} fontSize={'bold'} color="#828287">Busca, escanea y agrega productos y viendo cantidad y precio de venta directa</Typography>
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} flexShrink={0}>
                                <Chip label={testProducts.length === 1 ? `${testProducts.length} producto` : `${testProducts.length} productos`} icon={<Inventory2RoundedIcon sx={{ fontSize: 20, color: '#D04234' }} />} sx={{ backgroundColor: 'rgba(208, 66, 52, 0.18)', height: 40, width: 'auto', borderRadius: 8, '& .MuiChip-label': { color: '#D04234', fontFamily: 'system-ui', fontWeight: 'bold', fontSize: 20, ml: 1 }, mt: 0.5, p: 1, '& .MuiChip-icon': { color: '#D04234' } }} />
                            </Box>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} width={'100%'}>
                            <Button variant="outlined" size="large" startIcon={<QrCodeScannerRoundedIcon sx={{ fontSize: '15px', color: '#D04234' }} />} sx={{ color: '#D04234', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', borderColor: '#D04234' }} >Escaneo múltiple</Button>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'}>
                            <TextField placeholder="Ingresa Nombre, SKU o código" variant="outlined" sx={{ width: '90%', height: '49px', '& .MuiOutlinedInput-root': { height: '49px', '& fieldset': { borderColor: 'none', borderRadius: '30px', backgroundColor: '#ffffff', zIndex: 0 }, '& input': { padding: 'auto', height: 'auto', boxSizing: 'border-box', color: '#000000', zIndex: 1 }, '& input::placeholder': { color: '#828287', opacity: 1 }, '&.Mui-focused fieldset': { borderColor: '#D04234' } } }} 
                            slotProps={{
                                input:{
                                    startAdornment: (<InputAdornment position="start"><SearchRoundedIcon  fontSize="medium" sx={{color:'#828287', zIndex:1}} /></InputAdornment>),
                                    endAdornment: (<InputAdornment position="end"><IconButton sx={{backgroundColor:'#D04234', zIndex:1, borderRadius: 2}} size="small"><QrCodeScannerRoundedIcon fontSize='medium' sx={{color:'#ffffff'}}/></IconButton></InputAdornment>)
                                }
                            }}
                            />
                        </Box>
                    </Box>
                    <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} mb={3} mt={3}>
                        <Box display={'flex'} flexDirection={'row'} width={'100%'} justifyContent={'center'} ml={0} sx={{ borderRadius: 8, backgroundColor: '#F2E3C9', width: '90%' }}>
                            <Typography variant="body1" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287">Escanea o captura el nombre para encontrar productos y agregarlos al carrito</Typography>
                        </Box>
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