import { Box } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";
import { useContext, useEffect, useState } from "react";
import { ServiceContext, ServiceProvider } from "../context/ServiceProvider";

type comissionData = {
    id: number;
    label: string;
    number: number;
    image: string;
    action?: () => void;
};

type mounts = {
    label: string;
    mount: number;
}

type services = {
    service: comissionData['label'];
    type: 'recargas' | 'servicios' | 'tarjetas-regalo' | 'peaje' | 'internet' | 'tesoreria' | 'productos-financieros' | 'productos-catalogo';
    mounts?: mounts[];
    image?: comissionData['image'];
    referenceImage?: string;
    helpText?: string;
};

export default function ServiceAction() {

    const [render, setRender] = useState('');

    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error('ServiceProvider problem')
    };

    const {service} = context;
    console.log(service);

    const handleRender = () => {
        
    };

    return (
        <>
            <ServiceProvider>
                <Header />
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <MoneyCard />
                </Box>


            </ServiceProvider>
        </>
    )
}