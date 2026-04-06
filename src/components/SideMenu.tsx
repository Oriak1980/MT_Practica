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
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

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
      icon: <HomeRoundedIcon />,
      path: "/home", // Ruta a navegar
    },
    {
      id: "profile",
      label: "Perfil",
      icon: <PersonRoundedIcon />,
      path: "/profile",
    },
    {
      id:'wallet',
      label:'Cartera',
      icon: <WalletRoundedIcon />,
      path: '/wallet',
    },
    {
      id:'history',
      label:'Historial',
      icon: <HistoryRoundedIcon />,
      path: '/history',
    },
    {
      id:'notifications',
      label:'Notificaciones',
      icon: <NotificationsRoundedIcon/>,
      path: '/notification',
    },
    {
      id:'admin',
      label: 'Administrador',
      icon: <PeopleRoundedIcon/>,
      path:'/admin',
    }
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
          size="medium"
          sx={{
            width: 55,
            height: 55,
            zIndex: 1300,
            p:0.5,
            color: "white",
            "&:hover": {
              backgroundColor: "#00000040",
            },
          }}
        >
          <MenuRoundedIcon fontSize='large' sx={{color:'#D04234'}}/>
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
            width: 240, // TODO: Ajusta el ancho del menú
            backgroundColor: "#D04234",
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
          <Box sx={{ marginBottom: 1, display:'flex', justifyContent:'center' }}>
            <Typography variant="h5" fontWeight={'bold'} fontFamily={'system-ui'} sx={{color:'#FFFFFFFF'}}>Menú</Typography> 
          </Box>

          {/* ========== LISTA DE ELEMENTOS ========== */}
          {/* Lista principal de navegación */}
          <List sx={{ flex: 1 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    // navegar
                    handleNavigation(item.path);
                  }}
                  sx={{
                    borderRadius: 15,
                    margin:0,
                    "&:hover": {
                      backgroundColor: "#ffffff85",
                    },
                  }}
                >
                  {/* Icono del elemento */}
                  <ListItemIcon sx={{ color: "white"}}>
                    {item.icon}
                  </ListItemIcon>

                  {/* Texto del elemento */}
                  <ListItemText primary={item.label} sx={{fontFamily:'system-ui', fontWeight:'bold', color:'white'}}/>
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
                borderRadius: 15,
                color: "white",
                "&:hover": {
                  backgroundColor: "#ffffff85",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutRoundedIcon />
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
