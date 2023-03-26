import { Routes } from './index';
import { LandingPage } from '../components/landing/LandingPage';
import { Work } from '../components/work/Work';
import { Blog } from '../components/blog/Blog';

type ExportedRoutes =
  | 'LandingPage'
  | 'Work'
  | 'Blog';

export const ROUTES: Routes<ExportedRoutes> = {
  LandingPage: {
    path: '/',
    Component: LandingPage,
    exactMatch: true
  },
  Work: {
    path: '/work',
    Component: Work,
    exactMatch: true
  },
  Blog: {
    path: '/blog',
    Component: Blog,
    exactMatch: true
  }
};
