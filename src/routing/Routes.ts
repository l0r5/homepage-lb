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
    Component: LandingPage
  },
  Blog: {
    path: '/blog',
    Component: Blog
  },
  Cookies: {
    path: '/cookies',
    Component: CookiePolicy
  },
  DataProtection: {
    path: '/data-protection',
    Component: DataProtection
  },
  Imprint: {
    path: '/imprint',
    Component: Imprint
  },
  LegalInformation: {
    path: '/legal-information',
    Component: LegalInformation
  },
  Work: {
    path: '/work',
    Component: Work
  }
};
