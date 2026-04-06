/**
 * Generate inline SVG data URIs for avatar initials.
 * Eliminates external HTTP requests to ui-avatars.com.
 */
function createAvatarDataUri(initials: string, bgColor: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bgColor}"/><text x="40" y="40" dy=".35em" fill="#fff" font-family="Inter,system-ui,sans-serif" font-size="32" font-weight="600" text-anchor="middle">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Hero section avatars
export const AVATAR_MK = createAvatarDataUri('MK', '#0D8ABC');
export const AVATAR_VR = createAvatarDataUri('VR', '#E53E3E');
export const AVATAR_SJ = createAvatarDataUri('SJ', '#38A169');

// Testimonial section avatars
export const AVATAR_RAMESH = createAvatarDataUri('RK', '#4f46e5');
export const AVATAR_LAKSHMI = createAvatarDataUri('LN', '#0f172a');
export const AVATAR_SURESH = createAvatarDataUri('SR', '#059669');
