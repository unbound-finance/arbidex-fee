require('dotenv').config()
const { ethers, utils } = require('ethers')
const axios = require('axios')
// const getSigner = require('./utils/getSigner')
const UniswapV3PoolABI = require('./abi/defiedge/UniswapV3Pool')
const ERC20ABI = require('./abi/UnboundDai')

// const config = {
//     rpc: 'https://arb1.croswap.com/rpc',
//     privateKey:
//         '0x5992f29e79df13ed9d04b947c759f152e4cafbd5a16bdacd554836982d36ba91',
// }

// const signer = getSigner(config.rpc, config.privateKey)

const rpcUrl = 'https://arb1.croswap.com/rpc'
const privateKey = process.env.PRIVATE_KEY

const provider = new ethers.JsonRpcProvider(rpcUrl)
const signer = new ethers.Wallet(privateKey, provider)

console.log({ signer: signer.getAddress() })

const pools = [
    '0x36d9ee4d468a3a1aeec126ff27b7f5baa28590bb',
    '0x3418f617c8ec5efbcf929fb2e33802c5a693f1c5',
    '0xaa58e42559ebf027f5b7f846b7debd8001e05a0c',
    '0x4ccb6fa5bb67ddac84c217f4b1cce573f385c6c8',
    '0x46dc00f9de3d51182f8686e1f8491645506e2f61',
    '0x06537920bde4960713e220bd9cb4844a1461101c',
    '0x27629d01f673d9f68efa136c30865a5720dbf5c3',
    '0xb7fa82d0493f6c51f03b1da41387d3eede594f6d',
    '0x48d7e1a9d652ba5f5d80a8dc396df37993659f35',
    '0x814df4dd3b2bfc7a37504308d3332691cb57ef32',
    '0xafe48b65a14be5dba2693118b0901b322232c9f1',
    '0xbb304e41a3dcab1eebe4bf9975e39f91fabe69d0',
]

const getTokensFromOneInch = async () => {
    const { data } = await axios.get(
        'https://api.1inch.exchange/v3.0/42161/tokens'
    )

    return data.tokens
}

async function checkFee() {
    const tokens = await getTokensFromOneInch()
    for (const pool of pools) {
        const uniswapV3Pool = new ethers.Contract(
            pool,
            UniswapV3PoolABI,
            signer
        )

        const fee = await uniswapV3Pool.protocolFees()

        const token0Address = await uniswapV3Pool.token0()
        const token1Address = await uniswapV3Pool.token1()

        const token0 = new ethers.Contract(token0Address, ERC20ABI, signer)
        const token1 = new ethers.Contract(token1Address, ERC20ABI, signer)

        const token0Symbol = await token0.symbol()
        const token1Symbol = await token1.symbol()

        const token0Decimals = await token0.decimals()
        const token1Decimals = await token1.decimals()

        // console.log({ token0Decimals, token1Decimals })

        const token0value = parseInt(fee[0]) / 10 ** parseInt(token0Decimals)
        const token1value = parseInt(fee[1]) / 10 ** parseInt(token1Decimals)

        console.log({
            pool: token0Symbol + '-' + token1Symbol,
            fee: {
                token0: token0value + ' ' + token0Symbol,
                token1: token1value + ' ' + token1Symbol,
            },
        })
    }
}

checkFee()
