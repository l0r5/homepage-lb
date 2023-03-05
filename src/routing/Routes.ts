import { Routes } from './index';
import { LandingPage } from '../components/landing/LandingPage';
import { Works } from '../components/works/Works';
import { Blog } from '../components/blog/Blog';

type ExportedRoutes =
  | 'LandingPage'
  | 'Works'
  | 'Blog';

export const ROUTES: Routes<ExportedRoutes> = {
  LandingPage: {
    path: '/',
    Component: LandingPage,
    exactMatch: true
  },
  Works: {
    path: '/works',
    Component: Works,
    exactMatch: true
  },
  Blog: {
    path: '/blog',
    Component: Blog,
    exactMatch: true
  }
};
