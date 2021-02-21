---
title: A Tradeable Investment Portfolio as ERC20 Token 
description: Building a simple portfolio on Ethereum blockchain as an ERC20 token.
date: 2021-02-21T11:00:00.000Z
topic: automation
tags: cryptos
author: chris
img: /static/erc20-exchange.png
---

In a previous post we discussed how it is possible to create a [simple index fund by combining several tradeable assets](/post/from-portfolio-wealth-index-to-index-fund). We also mentioned that such a portfolio can be traded on the secondary market as a basic ETF. 

Such a scenario is pretty difficult to achieve since special licenses and time consuming actions are needed. However, it is fairly easy to do on the Ethereum blockchain!

This is what we will try to showcase in this article. We will build a very simple contract that keeps information about a fictional portfolio of other tokens.

In its extended form, every time someone purchases this token, the amount invested, will be used to purchase the tokens listed in the portfolio based on their weights, and as such, it will follow the development of these tokens (like the index fund we described in the other article).

Below is a screenshot of the end result. The code is published on [github](https://github.com/investingsnippets/tradeable-investment-portfolio-as-erc20-token).

![png](a-tradeable-investment-portfolio-as-erc20-token/portfolio-token.png)

## Introduction to Ethereum Tokens

I will not go deep into how Ethereum works, since it is a huge topic. We can describe it as a decentralized computer which can execute instructions in a distributed manner. These instructions are simple computer programs (code) that perform a specific job. This program is what we call `An Ethereum Smart Contract`. 

The distributed manner of the contract execution is achieved by the nodes on a blockchain :). That means that the program once might run on a node (server) in USA and the next moment on a node in China. Traditionally, we were used to programs running on a limited number of nodes (e.g. on the cloud), that we managed by a single entity (e.g. cloud provider, company datacenter). However, in the blockchain case, the nodes are just another user terminal (e.g. a server at home, our laptops, etc.).

On another side, a blockchain solves the well known `double spending` problem (which we will analyze in another post) and due to that, it can be used as an exchange mechanism for digital currencies! Combining these two aspects together, we achieve tradeable contracts (digital assets), which we generally call tokens (they can hold a balance, have a defined supply amount, and can be transferred).

As an example, imagine a digital currency where you are able to program it with something like. If, the user solves a puzzle on the internet, wins one coin! Or, if the user deposits purchases the coin with some $, then these $ will be used to purchase other coins and hold them locked in the initial coin, until the owner decides to sell the coin and as a consequence sell the subsequent coins! 

Now, the contract creation usually follows some coding principles and is implemented using a programming language. This language is called [Solidity](https://docs.soliditylang.org/en/v0.8.1/) (on Ethereum) and the principles are called standards. ERC20 is such a standard and allows for a digital currency/token creation!

The tokens can be used in many different ways, which I will describe in a future post. For now we will focus on the creation of digital currency feature.

## The contract

Below I'm pasting the simplified version of the contract with inlined comments.

```
// define the solidity compiler version to be used
pragma solidity 0.6.10;
// additional functionalities for passing around structs  
pragma experimental "ABIEncoderV2";

// We use openzeppelin library which provides proper interfaces and
// solves lot's of boilerplate work we would do otherwise.
import { Address } from "@openzeppelin/contracts/utils/Address.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";
import { SignedSafeMath } from "@openzeppelin/contracts/math/SignedSafeMath.sol";

// We define the name of the contract and specify that is an ERC20 token
contract PortfolioToken is ERC20 {
    using Address for address;
    using SafeMath for uint256;
    using SignedSafeMath for int256;

    // the user who creates the contract is also the administrator
    address PortfolioManager;

    // the asset definition
    struct Asset {
        uint8 weight; // weight in the Portfolio
        uint timeStamp; // last updated
        string name; // name of the asset. For the purposes of the example, since tokens can have the same name
        string symbol; // symbol of the asset. Also, the symbol of a token can be the same among tokens :(
    }

    mapping ( address => Asset ) assets; // this allows to store tokens by their ethereum address
    address[] public allAssets; // a directory of all the token addresses in the fund
    mapping(address => bool) public isResource; // for validation purposes

    // the initial price of the token
    int256 private strikePrice;

    // the contsrucor of the token will be called when deploying the contract
    constructor(
        int256 _strikePrice,
        string memory _name,
        string memory _symbol
    )
        public
        ERC20(_name, _symbol)
    {
        PortfolioManager = msg.sender;
        strikePrice = _strikePrice;
    }

    modifier onlyManager() {
        _validateOnlyManager();
        _;
    }

    function mint(address _account, uint256 _quantity) public {
        _mint(_account, _quantity);
    }

    // the main method used to add an asset to the portfolio
    function addAsset(address _assetAddress, uint8 _weight, string memory _name, string memory _symbol) external onlyManager {
        require(!isResource[_assetAddress], "Asset already exists"); // not adding true/false val in struct to save gas
        assets[_assetAddress].weight = _weight;
        assets[_assetAddress].name = _name;
        assets[_assetAddress].symbol = _symbol;
        assets[_assetAddress].timeStamp = block.timestamp;
        isResource[_assetAddress] = true;
        allAssets.push(_assetAddress);
    }

    // edits an asset's weight
    function editAsset(address _assetAddress, uint8 _weight) external onlyManager {
        assets[_assetAddress].weight = _weight;
        assets[_assetAddress].timeStamp = block.timestamp;
    }

    // removes an asset from the portfolio
    function removeAsset(address _assetAddress) external onlyManager {
        delete assets[_assetAddress];
        // allAssets = allAssets.remove(_assetAddress);
        isResource[_assetAddress] = false;
    }

    // returns a list of assets in the portfolio
    function getAssets() external view returns(address[] memory) {
        return allAssets;
    }

    // return the info of an asset by passing the address of it
    function getAssetInfo(address _assetAddress) external view returns(string memory name, string memory symbol, uint8 weight, uint timeStamp) {
        return (assets[_assetAddress].name, assets[_assetAddress].symbol, assets[_assetAddress].weight, assets[_assetAddress].timeStamp);
    } 

    function _validateOnlyManager() internal view {
        require(msg.sender == PortfolioManager, "Only manager has access");
    }
}
```

## How to try it out

> Note: Make sure that MetaMask is either disabled, or configured to use the local blockchain. OR, use browser in incognito mode. Be extra careful! (you have been warned ;))

For this project I have used:

* ganache, which provides a local Ethereum blockchain.
* truffle, which provides tooling to compile, test and deploy contracts
* drizzle, which implements client side interaction with the contract (through web3.js)
* react, for building a simple web application to be able to graphically interact with the contract

To run the example, clone the [github repo](https://github.com/investingsnippets/tradeable-investment-portfolio-as-erc20-token) and make sure that docker is installed on your machine.

Then, use the command

```
docker-compose run -p "3000:3000" -p "8545:8545" --rm develop
```

which starts everything needed in docker and exposes the web app on port 3000!

Just visit `http://localhost:3000/` on your browser and experiment with the app.
