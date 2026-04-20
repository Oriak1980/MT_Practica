import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AddProduct() {

    const location = useLocation();

        useEffect(() => {
            if (location.pathname === '/add-product') {
                document.body.style.backgroundColor = '#C29B33';
            };
        }, [location.pathname])

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <MoneyCard />
            </Box>
        </>
    )
}