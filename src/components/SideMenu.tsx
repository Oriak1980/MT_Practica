import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// ==========================================
// INTERFAZ DE PROPS (OPCIONAL)
// ==========================================
// interface SideMenuProps {
//   onMenuItemClick?: (path: string) => void;
// }

/**
 * Componente SideMenu
 * Menú lateral desplegable con navegación
 * - Estado local para controlar apertura/cierre
 * - Lista de elementos navegables comentada
 * - Estilos personalizables
 */
const SideMenu = () => {
  // ==========================================
  // ESTADO
  // ==========================================
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // ==========================================
  // HOOKS
  // ==========================================
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // ==========================================
  // FUNCIONES
  // ==========================================
  /**
   * Alterna el estado del menú (abre/cierra)
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Cierra el menú
   */
  const closeMenu = () => {
    setIsOpen(false);
  };

  /**
   * Navega a una ruta y cierra el menú
   * @param path - Ruta a navegar
   */
  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  /**
   * Maneja el logout del usuario
   * TODO: Implementar lógica de logout
   */
  const handleLogout = () => {
    console.log("Cerrando sesión...");
    // Aquí iría la lógica de logout
    // - Limpiar sessionStorage/localStorage
    // - Llamar a API de logout
    // - Redirigir a login
    navigate("/login");
    closeMenu();
  };

  // ==========================================
  // ELEMENTOS DEL MENÚ (ARRAY EDITABLE)
  // ==========================================
  // TODO: Personalizar estos elementos según necesidades
  const menuItems = [
    {
      id: "home",
      label: "Inicio",
      icon: <HomeIcon />,
      path: "/", // Ruta a navegar
      action: null, // Si necesita acción especial en lugar de navegación
    },
    {
      id: "settings",
      label: "Configuración",
      icon: <SettingsIcon />,
      path: "/settings",
      action: null,
    },
    {
      id: "info",
      label: "Información",
      icon: <InfoIcon />,
      path: "/info",
      action: null,
    },
  ];

  // ==========================================
  // RENDER
  // ==========================================
  return (
    <>
      {/* ========== BOTÓN HAMBURGUESA ========== */}
      {/* Botón flotante para abrir el menú */}
      <IconButton
        onClick={toggleMenu}
        sx={{
          position: "fixed",
          // TODO: Ajusta estos valores según tu layout
          top: 16,
          left: 16,
          zIndex: 1300,
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* ========== DRAWER (MENÚ LATERAL) ========== */}
      {/* Componente que dibuja el menú lateral */}
      <Drawer
        anchor="left" // TODO: Cambia a "right" si quieres el menú a la derecha
        open={isOpen}
        onClose={closeMenu}
        sx={{
          // TODO: Personaliza los estilos del drawer
          "& .MuiDrawer-paper": {
            width: 280, // TODO: Ajusta el ancho del menú
            backgroundColor: "background.paper",
            boxShadow: 2,
          },
        }}
      >
        {/* Contenedor principal del menú */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 2,
          }}
        >
          {/* ========== ENCABEZADO DEL MENÚ ========== */}
          {/* TODO: Personaliza este encabezado */}
          <Box sx={{ marginBottom: 2 }}>
            <h2 style={{ margin: 0 }}>Menú</h2>
            <Divider sx={{ marginTop: 1 }} />
          </Box>

          {/* ========== LISTA DE ELEMENTOS ========== */}
          {/* Lista principal de navegación */}
          <List sx={{ flex: 1 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                sx={{
                  marginBottom: 1,
                  // TODO: Añade estilos personalizados aquí
                }}
              >
                <ListItemButton
                  onClick={() => {
                    // Si tiene acción personalizada, ejecutarla
                    // Si no, navegar
                    if (item.action) {
                      item.action();
                    } else {
                      handleNavigation(item.path);
                    }
                  }}
                  sx={{
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  {/* Icono del elemento */}
                  <ListItemIcon sx={{ color: "primary.main" }}>
                    {item.icon}
                  </ListItemIcon>

                  {/* Texto del elemento */}
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* ========== SECCIÓN INFERIOR (LOGOUT) ========== */}
          {/* Separador antes de la sección inferior */}
          <Divider sx={{ marginY: 2 }} />

          {/* Botón de logout */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                borderRadius: 1,
                color: "error.main",
                "&:hover": {
                  backgroundColor: "error.light",
                },
              }}
            >
              <ListItemIcon sx={{ color: "error.main" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>
    </>
  );
};

export default SideMenu;
