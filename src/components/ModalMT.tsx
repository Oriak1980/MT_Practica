import { Avatar, Box, Button, Card, IconButton, Modal, Typography } from "@mui/material";
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import { testStore } from "../data/sucursales";
import { useState } from "react";


type Props = {
    open: boolean;
    onClose: () => void;
}

export default function ModalMT({ open, onClose }: Props) {

    const location = useLocation();
    const navigate = useNavigate();
    const dataStore = testStore;
    const [active, setActive] = useState<number | null>(null);

    const handleActive = (index: number) => {
        setActive(index);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Box
                sx={{
                    width: 420,
                    maxWidth: '100%',
                    bgcolor: '#F2E3C9',
                    borderRadius: 3,
                    boxShadow: 24,
                    overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
            >
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ backgroundColor: '#D04234', gap: 2, p: 2 }}
                >
                    {
                        location.pathname === '/menu-vi' ?
                            <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 0.5 }}>
                                <Typography variant="h6" fontFamily="system-ui" color="#ffffff">Selecciona la sucursal</Typography>
                                <Typography variant="body2" fontFamily="system-ui" color="#ffffff" fontWeight={'bold'}>Elige una sola tienda para modificar su inventario.</Typography>
                            </Box>
                            : <><Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                                <Avatar alt="IconImage" sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.18)' }}>
                                    <SwitchAccountRoundedIcon fontSize="medium" sx={{ color: '#ffffff' }} />
                                </Avatar>
                                <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 0.5 }}>
                                    <Typography variant="h6" fontFamily="system-ui" fontWeight="bold" color="#ffffff">Cambiar usuario</Typography>
                                    <Typography variant="body2" fontFamily="system-ui" color="#ffffff">Selecciona quien va a iniciar sesión en esta tienda.</Typography>
                                </Box>
                            </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                                    <IconButton onClick={onClose} size="medium" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', borderRadius: '8px' }}>
                                        <CloseRoundedIcon fontSize="medium" sx={{ color: '#ffffff' }} />
                                    </IconButton>
                                </Box> </>
                    }

                </Box>

                {
                    location.pathname === '/menu-vi' ?
                        <>
                            {dataStore.map((c, i) => (
                                <Card key={i} variant="outlined" onClick={() => handleActive(i)} sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 0.3, p: 1.5, borderRadius: 5, backgroundColor: active === i ? '#d041345b' : 'rgba(255, 255, 255, 0.18)', justifyContent: 'center', mb: 1, width: '90%', alignItems: 'flex-start', cursor: 'pointer', border: active === i ? 'solid 2px #D04234' : '' }}>
                                    <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color={"#000000"}>{c.name}</Typography>
                                    <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color={"#828287"}>{c.description}</Typography>
                                    <Typography variant="h6" fontFamily={'system-ui'} fontWeight={'bold'} color={"#828287"}>{c.direction}</Typography>
                                </Card>
                            ))}
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} alignItems={'center'} gap={2} p={1.5}>
                                <Button variant="outlined" size='large' onClick={onClose} sx={{ borderColor: '#D04234', color: '#D04234', fontFamily: 'system-ui', width: '50%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height: 50 }}>Cancelar</Button>
                                <Button variant="contained" size='large' onClick={() => navigate('/inventory')} disabled={active === null ? true : false} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '50%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height: 50, }}>Continuar</Button>
                            </Box>
                        </> :
                        <>
                            <Card variant="outlined" sx={{ mt: 2, display: 'flex', flexDirection: 'row', gap: 2, p: 1.5, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.18)', justifyContent: 'center', mb: 2, width: '90%', alignItems: 'center', }}>
                                <Avatar alt="ImageIcon" sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: 'rgba(208, 66, 52, 0.18)' }}>
                                    <GroupOutlinedIcon fontSize="medium" sx={{ color: '#D04234' }} />
                                </Avatar>
                                <Typography variant="h6" fontFamily={'system-ui'} fontSize={'bold'} color="#000000">Usuarios disponibles: 0</Typography>
                            </Card>
                        </>
                }
            </Box>
        </Modal>
    )
}