/**
 * Valida si hay una sesión activa en base a un token de sesión.
 *
 * Nota: Esta función solo valida que exista un token no vacío. Si se usa JWT u otro
 * formato con expiración, se puede extender para validar fechas y estructura.
 */
export function isSessionActive(token: string | null | undefined){
  typeof token === 'string' && token.trim().length > 0;
  const tok = token;
  if (typeof tok === 'string' && tok.trim().length > 0) {
    return true;
  } else {
    return false;
  }
}


