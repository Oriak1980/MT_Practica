import { Box, Card, Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import { recargas } from "../data/comisiones";
import UniversalTree from "../components/Tree";


export default function Comisiones() {

    const dataRecargas = recargas

    const comissionsTree = [
        {
            id: 1, label: 'Recargas', content: <Grid container spacing={3} columns={12} direction={'row'} sx={{ m: 3, }}>
                {dataRecargas.map((c, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Card variant="outlined" sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3, borderRadius: '9px', overflow: 'hidden', width: '70%', border:'2px solid #D04234' }}>
                            <Box component={'img'} src={c.image} alt='MainImage' sx={{ width: 'auto', height: 'auto', borderRadius: 8 }} />
                            <Typography variant="h5" color="#D04234" fontFamily={'system-ui'} fontWeight={'bold'}>{c.id === 1.1 || c.id === 8.1 || c.id === 11.1 || c.id === 14 ? `$${c.number}` : `${c.number}%` }</Typography>
                            <Typography variant="h5" color="#000000" fontWeight={'bold'} fontFamily={'system-ui'}>{c.label}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        }
    ];

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={3} width={'100%'}>
                <Typography variant="h3" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Comisiones</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287" mt={2}>
                    Las comisiones mostradas son informativas y pueden actualizarse según las condiciones vigentes de cada servicio
                </Typography>
                <Card variant="outlined" sx={{ mt: 3, backgroundColor: 'rgba(130, 130, 135, 0.25)', p: 3, display: 'flex', flexDirection: 'row', width: 1700, borderRadius: 8, justifyContent: 'center' }}>
                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">5 catalogos · 87 servicios</Typography>
                </Card>
                <Card variant="outlined" sx={{ mt: 3, backgroundColor: '#D04234', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 1700, borderRadius: 8, p: 1 }}>
                    <UniversalTree data={comissionsTree} direction="column"/>
                </Card>
            </Box>
        </>
    )
}