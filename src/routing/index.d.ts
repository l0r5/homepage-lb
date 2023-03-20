import React from 'react';

export interface Route {
  path: string;
  Component: React.FC;
  roles?: string[];
  exactMatch?: boolean;
}

export type Routes<ER> = {
  [K in ER]: Route;
};