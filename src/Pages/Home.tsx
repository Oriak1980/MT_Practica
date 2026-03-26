import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Header from "../components/Header";

export default function Home() {

  const cards = [
    { label: 'Venta / Inventario', img: '/VentasInv.jpeg', action: () => { } },
    { label: 'Recargas', img: '/Recargas.png', action: () => { } },
    { label: 'Servicios', img: '/Servicios.png', action: () => { } },
    { label: 'Tarjetas de regalo', img: '/TarjetasRegalo.jpeg', action: () => { } },
    { label: 'Peaje', img: '/Peaje.png', action: () => { } },
    { label: 'Internet', img: '/Internet.png', action: () => { } },
    { label: 'Tesoreria', img: '/tesoreria.png', action: () => { } },
    { label: 'Productos Financieros', img: '/ProductosFin.png', action: () => { } },
    { label: 'Productos Por Catalogo', img: '/ProductosCat.png', action: () => { } },
    { label: 'Depositos y Trasnferencias', img: '/DepositosTrans.jpeg', action: () => { } },
  ]

  return (
    <>
      <Header />
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Card variant="outlined" sx={{
          background: 'radial-gradient(circle at 30% 40%, rgba(255, 180, 80, 0.4), transparent 70%), radial-gradient(circle at 60% 60%, rgba(220, 70, 40, 0.35), transparent 75%), radial-gradient(circle at 40% 80%, rgba(200, 50, 20, 0.3), transparent 80%), linear-gradient(135deg, #d38a4c, #a6321a)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          mt: 3,
          width: '90%',
          p: 3,
          borderRadius: 18,
        }}
        >
          <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ p: 3, borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.18)', width: '45%', boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.45), inset -3px -3px 6px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 12px rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.45)', backgroundClip: 'padding-box' }}>
            <Typography variant="h4" color="white" fontFamily={'system-ui'} fontWeight={'bold'}>Saldo: $0.00</Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ p: 3, borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.18)', width: '45%', boxShadow: 'inset 2px 2px 4px rgba(255, 255, 255, 0.45), inset -3px -3px 6px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 12px rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.45)', backgroundClip: 'padding-box' }}>
            <Typography variant="h4" color="white" fontFamily={'system-ui'} fontWeight={'bold'}>Ganancias: $0.00</Typography>
          </Box>
        </Card>
        <Grid container spacing={3} columns={12} direction={'row'} sx={{ m: 3, }}>
          {cards.map((c, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Card variant="outlined" sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3, borderRadius: '9px', overflow: 'hidden', width: '70%' }}>
                <Box component={'img'} src={c.img} alt='MainImage' sx={{ width: 'auto', height: 'auto', border:'2px solid #D04234', borderRadius: 8 }} />
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

