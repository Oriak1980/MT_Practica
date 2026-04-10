import { Avatar, Box, Modal, Typography } from "@mui/material";
import SwitchAccountRoundedIcon from '@mui/icons-material/SwitchAccountRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { IconButton } from "@chakra-ui/react";


type Props = {
    open: boolean;
    onClose: () => void;
}

export default function ModalChangeUser({ open, onClose }: Props) {

    return (
        <Modal open={open} onClose={onClose} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F2E3C9', alignItems: 'center', borderRadius:8 }}>
            <Box width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ backgroundColor: '#D04234', gap:2 }}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <Avatar alt="IconImage" sx={{width: 30, height:30, borderRadius: 8}}>
                        <SwitchAccountRoundedIcon fontSize="medium" sx={{color:'#fffffff'}}/>
                    </Avatar>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} sx={{gap:1}}>
                    <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#ffffff">Cambiar usuario</Typography>
                    <Typography variant="h5" fontFamily={'system-ui'} color="#ffffff">Selecciona quien va a iniciar sesión en esta tienda.</Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                    <IconButton variant={'surface'}>
                        <CloseRoundedIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Modal>
    )
}