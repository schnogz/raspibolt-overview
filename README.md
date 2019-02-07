# RaspiBolt-Overview
_Raspberry Pi, Bitcoin, Lightning, Electron, React_

### Overview
A simple and concise system monitoring application for [RaspiBolt](https://github.com/Stadicus/guides/blob/master/raspibolt/README.md) 
projects inspired by the [System Overview](https://github.com/Stadicus/guides/blob/master/raspibolt/raspibolt_61_system-overview.md) shell script addon.

Monitors and reports the following stats:
- System resources (memory, SSD, HDD, bandwidth, uptime)
- Bitcoin (market price, mempool transactions)
- Bitcoin Core node (blockchain sync status, network, public status) 
- Lightning node (channels, balances)

Further stats and information may be added in the future. Suggestions and PRs welcomed.

### Local Development
Run `yarn && yarn dev`to start webpack-dev-server. Electron will launch automatically after compilation with hot reloading.

### Production Builds
Run `yarn package` to have webpack compile the app and then create the Debian installer file. Assets will be available in `builds/`.

##### Building For Other Platforms
Most of the shell scripts in `src/electron/scripts` will not work correctly on platforms other than Unix, however if you want
you can change the `package` and `postpackage` commands in `package.json` to target other platforms.

Building for Mac OS X would look something like this:
```
"package": "electron-packager ./ --platform darwin --arch x64 --out=./builds",
"postpackage": "electron-installer-dmg ./builds/RaspiBolt-darwin-x64/ RaspiBolt --out builds/installers/"
```

##### Building From Mac OS X
_It is recommended to build the package on the target platform!_

If you are compiling from Mac OS X, it will require Node 6 or greater, `fakeroot` and `dpkg` to build the .deb file.
You can install these dependencies through Brew:
```
brew install fakeroot dpkg
```
