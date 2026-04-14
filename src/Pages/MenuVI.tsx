import { Box } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";


export default function MenuVI() {
    return(
        <>
            <Header/>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <MoneyCard/>
            </Box>
        </>
    )
}