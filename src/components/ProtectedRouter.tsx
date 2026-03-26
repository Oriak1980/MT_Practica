import { Outlet, useNavigate } from "react-router-dom";
import { isSessionActive } from "../security/session";
import { onSessionExpired } from "../security/SessionTime";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function ProtectedRouter() {
    const token = localStorage.getItem('sessionToken');
    const navigate = useNavigate();
    useEffect(() => {
        const off = onSessionExpired(() => {
            Swal.fire({
                icon: 'warning',
                title: 'Sesión expirda',
                text: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#D04234',
                background: '#F2E3C9',
                timer: 5000,
                timerProgressBar: true,
            }).then(() => navigate('/login', { replace: true }));
        });
        return off;
    }, [navigate]);

    if (isSessionActive(token)) {
        return <Outlet />;
    } else {
        navigate('/login', { replace: true });
    }
}