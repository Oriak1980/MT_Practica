
const SESSION_EXPIRED_EVENT = 'auth:session-expired';
const TROTLE_TIME = 3000;

let lastFired = 0;

export function dispatchSessionExpired(): void {
    const now = Date.now();
    if (now - lastFired < TROTLE_TIME) return
    lastFired = now;
    window.dispatchEvent(new CustomEvent(SESSION_EXPIRED_EVENT));
}

export function onSessionExpired(handler: () => void): () => void {
    window.addEventListener(SESSION_EXPIRED_EVENT, handler);
    return () => window.removeEventListener(SESSION_EXPIRED_EVENT, handler);
}