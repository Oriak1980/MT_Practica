import React, { createContext } from "react";
import { data } from "react-router-dom";

//  type mounts = {
//     label: string, 
//     number: number,
//  }

type data = {
    id: number;
    label: string;
    number: number;
    image: string;
    action?: () => void;
};

type serviceContext = {
    service: data[] | null;
    setService: React.Dispatch<React.SetStateAction<data[] | null>>;   
}

const ServiceContext = createContext<serviceContext | null>(null);
//     type service = {
//     service: data['label'];
//     type: 'recargas' | 'servicios' | 'tarjetas-regalo' | 'peaje' | 'internet' | 'tesoreria' | 'productos-financieros' | 'productos-catalogo';
//     mounts?: mounts[];
//     referenceImage?: string;
//     helpText?: string;
// };

export default function ServiceProvider({children}: {children: React.ReactNode}) {

    const [service, setService] = React.useState<data[] | null>(null);

    return (
        <ServiceContext.Provider value={{service, setService}}>
            {children}
        </ServiceContext.Provider>
    )
} 