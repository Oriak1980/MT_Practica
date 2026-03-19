/**
 * Valida si hay una sesión activa en base a un token de sesión.
 *
 * Nota: Esta función solo valida que exista un token no vacío. Si se usa JWT u otro
 * formato con expiración, se puede extender para validar fechas y estructura.
 */
export function isSessionActive(token: string | null | undefined): boolean {
  return typeof token === 'string' && token.trim().length > 0;
}
