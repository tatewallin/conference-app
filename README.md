# conference-app

Here will be some information about the app.

## How to start?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/client/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

Find more information on the main repo on [GitHub](https://github.com/muenzpraeger/create-lwc-app).

## Troubleshooting Notes
Issue - Error in initial `npm run watch`
Fix - Update package.json.  add -p xxxx to specify a diff port # as 3001 is already in use

Issue - when attempting to push changes to my github , `git ssl certificate problem: unable to get local issuer cert`
Fix - For this repo only, ran the following command `git config --local http.sslVerify false`

Issue - Connection refused on start up after attempting to integrate to my personal org playground
Fix - Disconnect from F5
