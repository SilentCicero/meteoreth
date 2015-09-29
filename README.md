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
          "geth": {
              "shh": "",
              "rpc": "",
              "rpcaddr": "localhost",
              "rpcport": 8545,
              "rpccorsdomain": "*",
              "unlock": 0,
              "verbosity": 5,
              "genesis": "test-genesis.json",
              "etherbase": 0,
              "mine": "",
              "nodiscover": "",
              "networkid": 4325,
              "maxpeers": 0
          }
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
  
## About
The idea behind Meteoreth is simple, Meteor is a comprehensive javascript application framework for building full-stack or half-stack apps that can be made into decentralized apps (or dApps) for Ethereum. Meteoreth will allow a seemless, one-line command to run both the Ethereum geth client infrastructure with a Meteor applicaiton. This way, you can run a Metoer dApp in one line.

Meteoreth does not commit to a testing framework, and so unit testing can be handled with Meteor's Velocity visualization framework with either Mocha or Jasmine. Please see http://github.com/silentcicero/meteor-dapp-boilerplate for examples.
