module.exports = [
    {
        inputs: [],
        name: 'BASE',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
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
                internalType: 'address',
                name: '_factory',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_amountIn',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amountOut',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_tokenIn',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_tokenOut',
                type: 'address',
            },
            {
                internalType: 'bool[2]',
                name: '_isBase',
                type: 'bool[2]',
            },
        ],
        name: 'allowSwap',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_factory',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_pool',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_registry',
                type: 'address',
            },
            {
                internalType: 'bool[2]',
                name: '_usdAsBase',
                type: 'bool[2]',
            },
            {
                internalType: 'address',
                name: '_manager',
                type: 'address',
            },
        ],
        name: 'hasDeviation',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
]
