import { Box } from "@mui/material";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MoneyCard from "../components/MoneyCard";
import Products from "../components/Products";


export default function Inventory() {

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/inventory') {
            document.body.style.backgroundColor = '#C29B33';
        };
        return () => {
            document.body.style.backgroundColor = '#F2E3C9';
        };
    }, [location.pathname])

    return (
        <>
            <Header />
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <MoneyCard />
                <Products />
            </Box>
        </>
    )
}