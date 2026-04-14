import { Box, Card, Typography } from "@mui/material";

export default function () {

    return (
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
    )
}