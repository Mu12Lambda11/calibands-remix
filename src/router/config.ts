const HOME = '/';
const ABOUT = '/about';
const PROFILES = '/Profiles';
const RESOURCES = '/resources';
const ERROR = '/error';
const CONTACT='/contact';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    profiles: { path: PROFILES, to: () => PROFILES },
    resources: { path: RESOURCES, to: () => RESOURCES },
    contact: { path: CONTACT, to: () => CONTACT },
    error: {
        path: ERROR,
        to: (title: string, message?: string) => `${ERROR}?title=${title}&message=${message}`,
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
