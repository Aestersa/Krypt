// https://eth-goerli.alchemyapi.io/v2/2KLmC6MkL8b2WAx2jG1OTcunrnu7Jjaw

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/QioEJfHDCVOjY8IYPJ2iqIVRkXL48eAX',
      accounts: ['507fb434bbbd09af5d4e7c8fcd0a9876c37935921ccd640e17af7bf4044da940'],
    },
  },
};