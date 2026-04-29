import { Box } from "@mui/material";
import Header from "../components/Header";
import MoneyCard from "../components/MoneyCard";

export default function ServiceAction() {

    return(
        <>
            <Header />
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <MoneyCard />
            </Box>
        </>
    )
}