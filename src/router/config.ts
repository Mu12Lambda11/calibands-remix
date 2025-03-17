const HOME = '/';
const ABOUT = '/about';
const PROFILES = '/Profiles';
const RESOURCES = '/resources';
const ERROR = '/error';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    about: { path: ABOUT, to: () => ABOUT },
    profiles: { path: PROFILES, to: () => PROFILES },
    resources: { path: RESOURCES, to: () => RESOURCES },
    error: {
        path: ERROR,
        to: (title: string, message?: string) => `${ERROR}?title=${title}&message=${message}`,
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
