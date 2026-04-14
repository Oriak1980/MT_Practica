import { Box, Typography } from "@mui/material";
import Header from "../components/Header";


export default function Terms() {
    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={2} mt={3}>
                <Typography variant='h3' fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>TÉRMINOS Y CONDICIONES</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#828287" ml={2}>Este aviso regula el acceso y uso de los servicios disponibles en Mi Tiendita</Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>1. Aceptación</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Al usar la aplicación aceptas estos Términos y Condiciones, así como las políticas vigentes publicadas en la plataforma.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>2. Uso de la Cuenta</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    El usuario es responsable del uso de sus credenciales. Debe mantener su PIN y accesos bajo resguardo y notificar cualquier uso no autorizado.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>3. Operaciones y Servicios</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Las operaciones están sujetas a disponibilidad, validaciones internas y cumplimiento de requisitos regulatorios y de seguridad.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>4. Comisiones y Costos</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Las comisiones aplicables a cada servicio pueden variar. Antes de confirmar una operación, revisa los montos vigentes en la app.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>5. Conducta del Usuario</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Queda prohibido usar la plataforma para actividades ilícitas, fraudulentas o que vulneren los derechos de terceros.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>6. Limitación de Responsabilidad</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    No seremos responsables por interrupciones ajenas a nuestro control, incluyendo fallas de redes, terceros o mantenimientos programados.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>7. Suspención y Terminación</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Podemos suspender o cancelar cuentas que incumplan estos términos o presenten actividad de riesgo.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>8. Modificaciones</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Estos términos pueden actualizarse. La versión vigente será publicada en la app y entrará en vigor desde su publicación.
                </Typography>
                <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" ml={2}>9. Contacto</Typography>
                <Typography variant="h5" fontFamily={'system-ui'} color="#000000" ml={2}>
                    Para dudas relacionadas con estos términos, utiliza....
                </Typography>
            </Box>
        </>
    )
}