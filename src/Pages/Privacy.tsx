import { Box, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Privacy() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={2} mt={3}>
                <Typography variant='h3' fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>AVISO DE PRIVACIDAD</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287" ml={2}>Este Aviso de Privacidad describe cómo tratamos tus datos personales al utilizar Mi Tiendita</Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>1. Finalidad del Tratamientos de Datos</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Recabamos datos personales para identificarte, validar tu cuenta y dar seguimiento a tus movimientos en la aplicación.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>2. Datos Financieros</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Podemos tratar información financiera relacionada con pagos, depósitos y comisiones, exclusivamente para la operación de servicios y cumplimiento regulatorio. 
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>3. Protección y Seguridad de la Información</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Aplicamos medidas administrativas, técnicas y físicas para proteger la información contra daño, pérdida, alteración, destrucción o acceso no autorizado.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>4. Transferencia de Datos</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Los datos podrán compartirse con terceros autorizados cuando sea necesario para procesar operaciones, cumplir obligaciones legales o mejorar el servicio.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>5. Derechos ARCO</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Puedes solicitar acceso, rectificación cancelación u oposición del tratamiento de tus datos personales, conforme a la legislación aplicable.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>6. Cambios al Aviso</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Este aviso puede actualizarse en cualquier momento. Publicaremos la versión vigente dentro de la aplicación para consulta permanente.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>7. Contacto</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Para dudas o solicitudes sobre privacidad, contáctanos por los canales oficiales de atención indicados en la app.
                </Typography>
            </Box>
        </>
    )
}