import { Box, Container, Typography } from "@mui/material";
import SideMenu from "../components/SideMenu";

/**
 * Página Home
 * - Importa y renderiza el SideMenu
 * - Punto de entrada principal de la aplicación
 */
const Home = () => {
  return (
    <>
      {/* ==========================================
           COMPONENTE SIDEMENU
           ========================================== */}
      {/* Menú lateral desplegable con navegación */}

      {/* ==========================================
           CONTENIDO PRINCIPAL
           ========================================== */}
      {/* TODO: Personaliza el contenido de esta página */}
      <Container maxWidth="lg" sx={{ padding: 4, marginTop: 8 }}>
        {/* Encabezado */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Bienvenido a Home
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Este es el contenido principal de la página. Usa el menú lateral para
            navegar.
          </Typography>
        </Box>

        {/* TODO: Añade más contenido aquí */}
        <Box sx={{ backgroundColor: "#f5f5f5", padding: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Contenido Principal
          </Typography>
          <Typography variant="body2">
            Aquí irá el contenido específico de la página Home.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
