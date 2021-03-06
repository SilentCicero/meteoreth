## meteoreth
A simple module for running meteor dApps with Ethereum on a local test network.

## Installation

    $ npm install meteoreth
  
## Running A meteoreth Applicaiton

    $ cd your-meteor-dapp/app
    $ meteoreth
  
## The Settings JSON
Most MeteorJS applications will have a settings.json file, meteoreth will look for and leverages this settings.json file to run a local Ethereum node. This allows you to save your geth settings with your Meteor application.

    {
      "production": {
      },
      "development": {
          "geth": {
              "shh": "",
              "rpc": "",
              "rpcaddr": "localhost",
              "rpcport": 8545,
              "rpccorsdomain": "*",
              "genesis": "test-genesis.json",
              "verbosity": 5,
              "unlock": 0,
              "etherbase": 0,
              "mine": "",
              "nodiscover": "",
              "networkid": 4325,
              "maxpeers": 0
          },
          "name": "Boilerplate"
      },
      "public": {}
    }
  
## Applicaitons Using meteoreth

- BoardRoom - <a href="https://github.com/web3-gov/meteor-dapp-boardroom">Github</a> . <a href="http://boardroom.to">Website</a>

- WeiFund - <a href="https://github.com/weifund/weifund">Github</a> . <a href="http://weifund.io">Website</a>

- dApp Boilerplate - <a href="https://github.com/SilentCicero/meteor-dapp-boilerplate">Github</a>
  
## About
The idea behind Meteoreth is simple, Meteor is a comprehensive javascript application framework for building full-stack or half-stack apps that can be made into decentralized apps (or dApps) for Ethereum. Meteoreth will allow a seemless, one-line command to run both the Ethereum geth client infrastructure with a Meteor application. This way, you can run a Meteor dApp in one line.

Meteoreth does not commit to a testing framework, and so unit testing can be handled with Meteor's Velocity visualization framework with either Mocha or Jasmine. Please see http://github.com/silentcicero/meteor-dapp-boilerplate for examples.
