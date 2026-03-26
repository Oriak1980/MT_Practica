import { Box } from "@mui/material";
import Header from "../components/Header";

export default function Profile() {

    return (
        <>
            <Header />
            <Box sx={{ position: 'absolute', backgroundColor: '#D04234', p: 6, width: '100%', opacity: 0.5, zIndex: 1, top: 0 }} />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} sx={{ position: 'relative' }}>
            </Box>
        </>
    )
}