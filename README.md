# RaspiBolt-Overview
_Raspberry Pi, Bitcoin, Lightning, Electron, React_

### Overview
A simple and concise system monitoring application for [RaspiBolt](https://github.com/Stadicus/guides/blob/master/raspibolt/README.md) projects inspired by the [System Overview](https://github.com/Stadicus/guides/blob/master/raspibolt/raspibolt_61_system-overview.md) shell script addon.

Monitors and reports the following stats:
- System resources (memory, SSD, HDD, bandwidth, uptime)
- Bitcoin (market price, mempool transactions)
- Bitcoin Core node (blockchain sync status, network, public status) 
- Lightning node (channels, balances)

Further stats and information may be added in the future. Suggestions and PRs welcomed.

### Local Development
* Run `yarn && yarn dev`to start webpack-dev-server. Electron will launch automatically after compilation with hot reloading.

### Production Builds
_You have two options, an automatic build or two manual steps_

###### One Shot
* Run `npm run package` to have webpack compile your application into `dist/bundle.js` and `dist/index.html`
* An `electron-packager` run will be triggered for the current platform/arch
* Built assets will be available in `builds/`

###### Manual
_Recommendation: Update the "postpackage" script call in package.json to specify parameters as you choose and use the `yarn package` command instead of running these steps manually_
* Run `yarn build` to have webpack compile and output your bundle to `dist/bundle.js`
* Then you can call electron-packager directly with any commands you choose

Testing the production build:
* Run `yarn build` followed by `yarn prod`. 

This will cause electron to load off of the `dist/` build instead of looking for the webpack-dev-server instance. Electron will launch automatically after compilation.
