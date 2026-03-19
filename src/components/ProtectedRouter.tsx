import { useNavigate } from "react-router-dom";
import { isSessionActive } from "../security/session";
import { onSessionExpired } from "../security/SessionTime";
import Swal from "sweetalert2";

export default function ProtectedRouter () {
    const isSession = isSessionActive;
    const navigate = useNavigate();
    const off = onSessionExpired (() => {
        navigate('/login');
        Swal.fire({
            icon: 'warning', 
            title: 'Sesión expirda',
            text: 'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
            
        })
    })
}