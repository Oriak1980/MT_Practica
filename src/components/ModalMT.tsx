import { Avatar, Box, Button, Card, IconButton, Modal, Typography } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useLocation, useNavigate } from "react-router-dom";
import { testStore } from "../data/sucursales";
import React, { useState } from "react";
import type { JSX } from "@emotion/react/jsx-runtime";

type Props = {
    open: boolean;
    onClose: () => void;
    icon?: React.ReactElement,
    title: string,
    description?: string,
    buttons?: boolean,
    onClick?: () => void,
    actionDisable?: boolean,
    actionTitle?: string,
    closeIcon?: boolean,
    content: JSX.Element[],
}

export default function ModalMT({ open, onClose, icon = undefined, title, description, buttons = false, onClick, closeIcon = false, content, actionDisable = false, actionTitle = 'Continuar' }: Props) {

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
                        {icon !== undefined ?
                            <Avatar alt="IconImage" sx={{ width: 40, height: 40, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.18)' }}>
                                {icon}
                            </Avatar> :
                            <></>
                        }
                        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ gap: 0.5 }}>
                            <Typography variant="h6" fontFamily="system-ui" color="#ffffff">{title}</Typography>
                            <Typography variant="body2" fontFamily="system-ui" fontWeight="bold" color="#ffffff">{description}</Typography>
                        </Box>
                    </Box>
                    {closeIcon === true ? <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
                        <IconButton onClick={onClose} size="medium" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', borderRadius: '8px' }}>
                            <CloseRoundedIcon fontSize="medium" sx={{ color: '#ffffff' }} />
                        </IconButton>
                    </Box> : <></>}
                </Box>
                <>{content}</>
                {buttons === true ?
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} alignItems={'center'} gap={2} p={1.5}>
                        <Button variant="outlined" size='large' onClick={onClose} sx={{ borderColor: '#D04234', color: '#D04234', fontFamily: 'system-ui', width: '50%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height: 50 }}>Cancelar</Button>
                        <Button variant="contained" size='large' onClick={onClick} disabled={actionDisable} sx={{ backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', width: '50%', fontSize: '15px', fontWeight: 'bold', borderRadius: '50px', height: 50, }}>{actionTitle}</Button>
                    </Box> : <></>}
            </Box>
        </Modal>
    )
}