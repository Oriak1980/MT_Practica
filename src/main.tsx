import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Router'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
