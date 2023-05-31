module.exports = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_governance',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'acceptGovernance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_governance',
                type: 'address',
            },
        ],
        name: 'changeGovernance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_quote',
                type: 'address',
            },
        ],
        name: 'decimals',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'feeds',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'frozeUpdate',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'governance',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'isUpdateFrozen',
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
                name: 'base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'quote',
                type: 'address',
            },
        ],
        name: 'latestRoundData',
        outputs: [
            {
                internalType: 'uint80',
                name: 'roundId',
                type: 'uint80',
            },
            {
                internalType: 'int256',
                name: 'answer',
                type: 'int256',
            },
            {
                internalType: 'uint256',
                name: 'startedAt',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'updatedAt',
                type: 'uint256',
            },
            {
                internalType: 'uint80',
                name: 'answeredInRound',
                type: 'uint80',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pendingGovernance',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_feed',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_quote',
                type: 'address',
            },
        ],
        name: 'setFeed',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_feed',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_base',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_quote',
                type: 'address',
            },
        ],
        name: 'update',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
]
