import { Box, Modal } from "@mui/material";


type Props = {
    open: boolean;
    onClose: () => void;
}

export default function ModalChangeUser({ open, onClose }: Props) {

    return (
        <Modal open={open} onClose={onClose} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F2E3C9', alignItems: 'center' }}>
            <Box width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{ backgroundColor: '#D04234' }}>
            </Box>
        </Modal>
    )
}