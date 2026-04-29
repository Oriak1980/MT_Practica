import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import MoneyCard from "../components/MoneyCard";

export default function Home() {

  const navigate = useNavigate();

  const cards = [
    { label: 'Venta / Inventario', img: '/VentasInv.jpeg', action: () => { navigate('/menu-vi') } },
    { label: 'Recargas', img: '/Recargas.png', action: () => { navigate('/recargas') } },
    { label: 'Servicios', img: '/Servicios.png', action: () => { navigate('/servicios') } },
    { label: 'Tarjetas de regalo', img: '/TarjetasRegalo.jpeg', action: () => { navigate('/tarjetas-regalo') } },
    { label: 'Peaje', img: '/Peaje.png', action: () => { navigate('/peaje') } },
    { label: 'Internet', img: '/Internet.png', action: () => { navigate('/internet') } },
    { label: 'Tesoreria', img: '/tesoreria.png', action: () => { navigate('/tesoreria') } },
    { label: 'Productos Financieros', img: '/ProductosFin.png', action: () => { navigate('/productos-financieros') } },
    { label: 'Productos Por Catalogo', img: '/ProductosCat.png', action: () => { navigate('/productos-catalogo') } },
    { label: 'Depositos y Trasnferencias', img: '/DepositosTrans.jpeg', action: () => { } },
  ];

  return (
    <>
      <Header />
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <MoneyCard />
        <Grid container spacing={3} columns={12} direction={'row'} sx={{ m: 3, }}>
          {cards.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Card variant="outlined" sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3, borderRadius: '9px', overflow: 'hidden', width: '70%' }}>
                <Box component={'img'} src={c.img} alt='MainImage' sx={{ width: 'auto', height: 'auto', border: '2px solid #D04234', borderRadius: 8 }} />
                <Typography variant="h5" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'}>{c.label}</Typography>
                <Button variant="contained" size="large" onClick={c.action} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '100%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }}>Comenzar</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

