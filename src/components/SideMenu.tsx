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
  Avatar,
  Card,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import ModalMT from "./ModalMT";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';

const contentModal = [
  <><Card variant="outlined" sx={{ mt: 2, display: 'flex', flexDirection: 'row', gap: 2, p: 1.5, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.18)', justifyContent: 'center', mb: 2, width: '90%', alignItems: 'center', }}>
    <Avatar alt="ImageIcon" sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: 'rgba(208, 66, 52, 0.18)' }}>
      <GroupOutlinedIcon fontSize="medium" sx={{ color: '#D04234' }} />
    </Avatar>
    <Typography variant="h6" fontFamily={'system-ui'} fontSize={'bold'} color="#000000">Usuarios disponibles: 0</Typography>
  </Card></>
];

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
  const [openModal, setOpenModal] = useState(false);

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

  const modalUserOpen = () => {
    setOpenModal(true);
  };

  const modalUserClose = () => {
    setOpenModal(false);
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
      id: 'wallet',
      label: 'Cartera',
      icon: <WalletRoundedIcon />,
      path: '/wallet',
    },
    {
      id: 'history',
      label: 'Historial',
      icon: <HistoryRoundedIcon />,
      path: '/history',
    },
    {
      id: 'notifications',
      label: 'Notificaciones',
      icon: <NotificationsRoundedIcon />,
      path: '/notification',
    },
    {
      id: 'admin',
      label: 'Administrador',
      icon: <PeopleRoundedIcon />,
      path: '/admin',
    },
    {
      id: 'comissions',
      label: 'Comisiones',
      icon: <RequestQuoteRoundedIcon />,
      path: '/comisiones'
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
        size="medium"
        sx={{
          width: 55,
          height: 55,
          zIndex: 1300,
          p: 0.5,
          color: "white",
          "&:hover": {
            backgroundColor: "#00000040",
          },
        }}
      >
        <MenuRoundedIcon fontSize='large' sx={{ color: '#D04234' }} />
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
          <Box sx={{ marginBottom: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
            <Avatar alt="User Avatar" src="/SinImagenDePerfil.jpeg" sx={{ width: 60, height: 60, border: '2.5px solid #FFFFFF' }} />
            <Typography variant="h5" fontWeight={'bold'} fontFamily={'system-ui'} sx={{ color: '#FFFFFFFF' }}>Name User</Typography>
            <Typography variant="body1" fontFamily={'system-ui'} sx={{ color: '#FFFFFFFF' }}>Role</Typography>
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
                    margin: 0,
                    "&:hover": {
                      backgroundColor: "#ffffff85",
                    },
                  }}
                >
                  {/* Icono del elemento */}
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>

                  {/* Texto del elemento */}
                  <ListItemText primary={item.label} sx={{ fontFamily: 'system-ui', fontWeight: 'bold', color: 'white' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Link to={'/terms'} ><Typography variant="subtitle2" fontFamily={'system-ui'} color="#ffffff" sx={{ '&:hover': { borderBottom: '2px solid #ffffff', paddingBottom: '0.5px' } }} >Términos y condiciones</Typography></Link>
            <Link to={'/privacy'}><Typography variant="subtitle2" fontFamily={'system-ui'} color="#ffffff" sx={{ '&:hover': { borderBottom: '2px solid #ffffff', paddingBottom: '0.5px' } }}>Política de privacidad</Typography></Link>
          </Box>

          {/* ========== SECCIÓN INFERIOR (LOGOUT) ========== */}
          {/* Separador antes de la sección inferior */}
          <Divider sx={{ marginY: 2, borderColor: '#ffffff' }} />

          {/* Botón de logout */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={modalUserOpen}
              sx={{
                borderRadius: 15,
                color: "white",
                "&:hover": {
                  backgroundColor: "#ffffff85",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <SupervisorAccountRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Cambiar Usuario" />
            </ListItemButton>
          </ListItem>
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
      <ModalMT open={openModal} onClose={modalUserClose} title="Cambiar usuario" description="Selecciona quién va a iniciar sesión en esta tienda." content={contentModal} closeIcon={true} icon={<SwitchAccountRoundedIcon/>}/>
    </>
  );
};

export default SideMenu;
