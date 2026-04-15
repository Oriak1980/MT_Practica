import { Box, Card } from "@mui/material";
import { useLocation } from "react-router-dom";


export default function Products() {

    const location = useLocation();

    return (
        <>
            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F2E3C9', p: 1.5, borderRadius: 8, mt: 2, width:1700 }}>
                {location.pathname === '/inventory' ?
                    <>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'}>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={1.5}>
                                
                            </Box>
                        </Box>
                    </>
                    :
                    <>
                    </>
                }
            </Card>
        </>
    )
}