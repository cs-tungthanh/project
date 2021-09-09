import { Sandbox } from '../page/Sandbox';

export type Routes = {
    name: string;
    path: string;
    component: React.ReactNode;
}

const RoutePaths = {
    HOME: '/',
    SANDBOX: '/sandbox',
};

export const AppRouter: Routes[] = [
    {
        name: 'Sandbox',
        path: RoutePaths.SANDBOX,
        component: <Sandbox />,
    },
    {
        name: 'Home',
        path: RoutePaths.HOME,
        component: <div>Home Page</div>,
    },
];
