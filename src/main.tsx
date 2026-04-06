import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Router'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/datepicker.css'

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraProvider value={defaultSystem}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>,
)
