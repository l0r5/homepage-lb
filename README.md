# Homepage

This repository contains the code of my personal homepage. It is build with React and Typescript and uses [Yarn](https://yarnpkg.com/) as package manager and [Vite](https://vitejs.dev/) for the development environment.

## Local DEV

Fetch the projects dependencies by running `yarn install` in the root directory of the project first.
To start the development server run the command:

    $ yarn dev
or

    $ vite

The local dev server is configured to run on http://localhost:3000/. In case you want to expose the host on the local network use

    $ vite --host 0.0.0.0

## Deploy to Vercel

The app is deployed on [Vercel](https://vercel.com/). It is in the way configured that it creates a preview deployment for every branch. Merge to ci/prod to deploy automatically to production.
