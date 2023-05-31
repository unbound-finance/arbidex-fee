module.exports = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_pool',
                type: 'address',
            },
            {
                internalType: 'int24',
                name: '_tickLower',
                type: 'int24',
            },
            {
                internalType: 'int24',
                name: '_tickUpper',
                type: 'int24',
            },
            {
                internalType: 'uint128',
                name: '_liquidity',
                type: 'uint128',
            },
        ],
        name: 'getAmountsForLiquidity',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amount0',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'amount1',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_pool',
                type: 'address',
            },
            {
                internalType: 'int24',
                name: '_tickLower',
                type: 'int24',
            },
            {
                internalType: 'int24',
                name: '_tickUpper',
                type: 'int24',
            },
            {
                internalType: 'uint256',
                name: '_amount0',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amount1',
                type: 'uint256',
            },
        ],
        name: 'getLiquidityForAmounts',
        outputs: [
            {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
]
