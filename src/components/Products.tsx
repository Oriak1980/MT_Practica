import { Box, Button, Card, Chip, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded';
import SellRoundedIcon from '@mui/icons-material/SellRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { testProducts } from "../data/productos";
import { useState } from "react";
import ModalMT from "./ModalMT";

export default function Products() {

    const location = useLocation();
    const [editModal, setEditModal] = useState(Boolean);
    const [addModal, setAddModal] = useState(Boolean);
    const [deleteModal, setDeleteModal] = useState(Boolean);
    const data = testProducts;
    const contentModalEdit = [
        <Card variant="outlined" sx={{mt: 2, display: 'flex', flexDirection: 'column', gap: 0.5, p: 1.5, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.18)', justifyContent: 'center', mb: 2, width: '90%', alignItems: 'flex-start', }}>
            <Typography variant="h5" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000">Product Name</Typography>
            <Typography variant="h6" fontFamily={'system-ui'} color="#000000">SKU: 0000</Typography>
            <Typography variant="h6" fontFamily={'system-ui'} color="#000000">Código: 0000</Typography>
        </Card>
    ];

    const handleCloseModal = () =>{
        if (editModal === true) {
            return setEditModal(false);
        } else if (addModal === true){
            return setAddModal(false);
        } else if (deleteModal === true){
            return setDeleteModal(false);
        }
    };

    return (
        <>
            {location.pathname === '/inventory' ?
                <>
                    {data.map((p, i) => (
                        <Card key={i} variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F2E3C9', p: 1.5, borderRadius: 8, mt: 2, width: 1700 }}>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} width={'100%'}>
                                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={1.5} width={'100%'}>
                                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={'100%'}>
                                        <Box component={'img'} alt="Product Image" src={p.image} sx={{ height: 200, objectFit: 'cover', width: 350, borderRadius: 8, objectPosition: 'center' }} />
                                        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} width={'25%'} justifyContent={'center'} flex={1.3} ml={1}>
                                            <Chip label={`$${p.price}`} sx={{ backgroundColor: 'rgba(208, 66, 52, 0.18)', height: 40, width: 'auto', borderRadius: 8, '& .MuiChip-label': { color: '#D04234', fontFamily: 'system-ui', fontWeight: 'bold', fontSize: 25, p: 1 } }} />
                                            <Typography variant="h4" fontFamily={'system-ui'} fontWeight={'bold'} color="#000000" mt={0.5}>{p.name}</Typography>
                                            <Typography variant="h5" fontFamily={'system-ui'} color="#000000" mt={0.5}>SKU: {p.SKU}</Typography>
                                            <Chip label={`UPC: ${p.UPC}`} icon={<QrCode2RoundedIcon sx={{ fontSize: 20, color: '#D04234' }} />} sx={{ backgroundColor: 'rgba(208, 66, 52, 0.18)', height: 40, width: 'auto', borderRadius: 8, '& .MuiChip-label': { color: '#D04234', fontFamily: 'system-ui', fontWeight: 'bold', fontSize: 20, ml: 1 }, mt: 0.5, p: 1, '& .MuiChip-icon': { color: '#D04234' } }} />
                                        </Box>
                                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} width={'25'} flex={1}>
                                            <Chip label={`Cantidad: ${p.stock}`} icon={<FilterNoneRoundedIcon sx={{ fontSize: 20, color: '#D04234' }} />} sx={{ backgroundColor: 'rgba(130, 130, 135, 0.18)', height: 40, width: 'auto', borderRadius: 8, '& .MuiChip-label': { color: '#828287', fontFamily: 'system-ui', fontWeight: 'bold', fontSize: 20, ml: 1 }, mt: 1.5, p: 1, '& .MuiChip-icon': { color: '#828287' } }} />
                                            <Chip label={`Venta: $${p.sell}`} icon={<SellRoundedIcon sx={{ fontSize: 20, color: '#D04234' }} />} sx={{ backgroundColor: 'rgba(73, 174, 58, 0.18)', height: 40, width: 'auto', borderRadius: 8, '& .MuiChip-label': { color: '#49ae3a', fontFamily: 'system-ui', fontWeight: 'bold', fontSize: 20, ml: 1 }, mt: 1.5, p: 1, '& .MuiChip-icon': { color: '#49ae3a' } }} />
                                            <Chip label={`Compra: $${p.shop}`} icon={<ShoppingBagRoundedIcon sx={{ fontSize: 20, color: '#D04234' }} />} sx={{ backgroundColor: 'rgba(230, 147, 12, 0.18)', height: 40, width: 'auto', borderRadius: 8, '& .MuiChip-label': { color: '#e6920c', fontFamily: 'system-ui', fontWeight: 'bold', fontSize: 20, ml: 1 }, mt: 1.5, p: 1, '& .MuiChip-icon': { color: '#e6920c' } }} />
                                        </Box>
                                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'} gap={3} width={'25%'}>
                                            <Button variant="contained" size="large" onClick={() => setEditModal(true)} startIcon={<EditRoundedIcon sx={{ fontSize: '15 px', color: '#ffffff' }} />} sx={{ backgroundColor: '#C29B33', color: '#ffffff', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', width: 146 }} >Editar</Button>
                                            <Button variant="contained" size="large" startIcon={<DeleteRoundedIcon sx={{ fontSize: '15px' }} />} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px' }} >Eliminar</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    ))}
                </>
                :
                <>
                </>
            }
            <ModalMT open={editModal} onClose={handleCloseModal} title="Editar Producto" description="Actualiza la información del producto en el inventario." content={contentModalEdit} icon={<EditRoundedIcon sx={{color: '#ffffff'}} />} buttons={true} actionTitle="Guardar"/>
        </>
    )
}