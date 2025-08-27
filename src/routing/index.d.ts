import React from 'react';

export interface Route {
  path: string;
  Component: React.FC;
  roles?: string[];
  // exactMatch is removed as it's no longer used in React Router v6
  // Routes are exact by default in v6
}

export type Routes<ER> = {
  [K in ER]: Route;
};