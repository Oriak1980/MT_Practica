import { Avatar, Box, Card, IconButton, Modal, Typography } from "@mui/material";
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useLocation } from "react-router-dom";


type Props = {
    open: boolean;
    onClose: () => void;
}

export default function ModalMT({ open, onClose }: Props) {

    const location = useLocation();

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
                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                        {/* {location.pathname === '/menu-vi' ? 

                    } */}
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
                    </Box>
                </Box>
                <Card variant="outlined" sx={{ mt: 2, display: 'flex', flexDirection: 'row', gap: 2, p: 1.5, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.18)', justifyContent: 'center', mb: 2, width: '90%', alignItems: 'center', }}>
                    <Avatar alt="ImageIcon" sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: 'rgba(208, 66, 52, 0.18)' }}>
                        <GroupOutlinedIcon fontSize="medium" sx={{ color: '#D04234' }} />
                    </Avatar>
                    <Typography variant="h6" fontFamily={'system-ui'} fontSize={'bold'} color="#000000">Usuarios disponibles: 0</Typography>
                </Card>
            </Box>
        </Modal>
    )
}