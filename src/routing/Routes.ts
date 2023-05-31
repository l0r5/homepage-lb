import { Routes } from './index';
import { LandingPage } from '../components/landing/LandingPage';
import { Work } from '../components/work/Work';
import { Blog } from '../components/blog/Blog';
import { Imprint } from '../components/footer/Imprint';
import { CookiePolicy } from '../components/footer/CookiePolicy';
import { DataProtection } from '../components/footer/DataProtection';
import { LegalInformation } from '../components/footer/LegalInformation';

type ExportedRoutes =
  | 'LandingPage'
  | 'Blog'
  | 'Cookies'
  | 'DataProtection'
  | 'Imprint'
  | 'LegalInformation'
  | 'Work'


export const ROUTES: Routes<ExportedRoutes> = {
  LandingPage: {
    path: '/',
    Component: LandingPage,
    exactMatch: true
  },
  Blog: {
    path: '/blog',
    Component: Blog,
    exactMatch: true
  },
  Cookies: {
    path: '/cookies',
    Component: CookiePolicy,
    exactMatch: true
  },
  DataProtection: {
    path: '/data-protection',
    Component: DataProtection,
    exactMatch: true
  },
  Imprint: {
    path: '/imprint',
    Component: Imprint,
    exactMatch: true
  },
  LegalInformation: {
    path: '/legal-information',
    Component: LegalInformation,
    exactMatch: true
  },
  Work: {
    path: '/work',
    Component: Work,
    exactMatch: true
  }
};
