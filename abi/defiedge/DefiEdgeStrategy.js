module.exports = [
    {
        inputs: [
            {
                internalType: 'contract IStrategyFactory',
                name: '_factory',
                type: 'address',
            },
            {
                internalType: 'contract IUniswapV3Pool',
                name: '_pool',
                type: 'address',
            },
            {
                internalType: 'contract IOneInchRouter',
                name: '_oneInchRouter',
                type: 'address',
            },
            {
                internalType: 'contract FeedRegistryInterface',
                name: '_chainlinkRegistry',
                type: 'address',
            },
            {
                internalType: 'contract IStrategyManager',
                name: '_manager',
                type: 'address',
            },
            {
                internalType: 'bool[2]',
                name: '_usdAsBase',
                type: 'bool[2]',
            },
            {
                components: [
                    {
                        internalType: 'int24',
                        name: 'tickLower',
                        type: 'int24',
                    },
                    {
                        internalType: 'int24',
                        name: 'tickUpper',
                        type: 'int24',
                    },
                ],
                internalType: 'struct IStrategyBase.Tick[]',
                name: '_ticks',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'user',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'share',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount0',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount1',
                type: 'uint256',
            },
        ],
        name: 'Burn',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'managerFee',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'protocolFee',
                type: 'uint256',
            },
        ],
        name: 'ClaimFee',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'strategy',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount0',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount1',
                type: 'uint256',
            },
        ],
        name: 'FeesClaim',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'Hold',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'user',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'share',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount0',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount1',
                type: 'uint256',
            },
        ],
        name: 'Mint',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'burn',
                        type: 'bool',
                    },
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
                indexed: false,
                internalType: 'struct DefiEdgeStrategy.PartialTick[]',
                name: 'ticks',
                type: 'tuple[]',
            },
        ],
        name: 'PartialRebalance',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                components: [
                    {
                        internalType: 'int24',
                        name: 'tickLower',
                        type: 'int24',
                    },
                    {
                        internalType: 'int24',
                        name: 'tickUpper',
                        type: 'int24',
                    },
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
                indexed: false,
                internalType: 'struct DefiEdgeStrategy.NewTick[]',
                name: 'ticks',
                type: 'tuple[]',
            },
        ],
        name: 'Rebalance',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_zeroForOne',
                type: 'bool',
            },
        ],
        name: 'Swap',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        inputs: [],
        name: 'FEE_PRECISION',
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
        inputs: [],
        name: 'MAX_TICK_LENGTH',
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
        inputs: [],
        name: 'MINIMUM_LIQUIDITY',
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
        inputs: [],
        name: 'accManagementFeeShares',
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
        inputs: [],
        name: 'accPerformanceFeeShares',
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
        inputs: [],
        name: 'accProtocolPerformanceFeeShares',
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
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'allowance',
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
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'balanceOf',
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
                internalType: 'uint256',
                name: '_shares',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amount0Min',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amount1Min',
                type: 'uint256',
            },
        ],
        name: 'burn',
        outputs: [
            {
                internalType: 'uint256',
                name: 'collect0',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'collect1',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_tickIndex',
                type: 'uint256',
            },
        ],
        name: 'burnLiquiditySingle',
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
            {
                internalType: 'uint256',
                name: 'fee0',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'fee1',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'claimFee',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
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
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'subtractedValue',
                type: 'uint256',
            },
        ],
        name: 'decreaseAllowance',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_token',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                components: [
                    {
                        internalType: 'int24',
                        name: 'tickLower',
                        type: 'int24',
                    },
                    {
                        internalType: 'int24',
                        name: 'tickUpper',
                        type: 'int24',
                    },
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
                internalType: 'struct DefiEdgeStrategy.NewTick[]',
                name: '_newTicks',
                type: 'tuple[]',
            },
        ],
        name: 'emergencyWithdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'factory',
        outputs: [
            {
                internalType: 'contract IStrategyFactory',
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
                internalType: 'bool',
                name: '_includeFee',
                type: 'bool',
            },
        ],
        name: 'getAUMWithFees',
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
            {
                internalType: 'uint256',
                name: 'totalFee0',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'totalFee1',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getTicks',
        outputs: [
            {
                components: [
                    {
                        internalType: 'int24',
                        name: 'tickLower',
                        type: 'int24',
                    },
                    {
                        internalType: 'int24',
                        name: 'tickUpper',
                        type: 'int24',
                    },
                ],
                internalType: 'struct IStrategyBase.Tick[]',
                name: '',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'addedValue',
                type: 'uint256',
            },
        ],
        name: 'increaseAllowance',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'manager',
        outputs: [
            {
                internalType: 'contract IStrategyManager',
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
                internalType: 'uint256',
                name: '_amount0',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amount1',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amount0Min',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_amount1Min',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_minShare',
                type: 'uint256',
            },
        ],
        name: 'mint',
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
            {
                internalType: 'uint256',
                name: 'share',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'onHold',
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
        inputs: [],
        name: 'oneInchRouter',
        outputs: [
            {
                internalType: 'contract IOneInchRouter',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pool',
        outputs: [
            {
                internalType: 'contract IUniswapV3Pool',
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
                internalType: 'bytes',
                name: '_swapData',
                type: 'bytes',
            },
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bool',
                        name: 'burn',
                        type: 'bool',
                    },
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
                internalType: 'struct DefiEdgeStrategy.PartialTick[]',
                name: '_existingTicks',
                type: 'tuple[]',
            },
            {
                components: [
                    {
                        internalType: 'int24',
                        name: 'tickLower',
                        type: 'int24',
                    },
                    {
                        internalType: 'int24',
                        name: 'tickUpper',
                        type: 'int24',
                    },
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
                internalType: 'struct DefiEdgeStrategy.NewTick[]',
                name: '_newTicks',
                type: 'tuple[]',
            },
            {
                internalType: 'bool',
                name: '_burnAll',
                type: 'bool',
            },
        ],
        name: 'rebalance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'swap',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'ticks',
        outputs: [
            {
                internalType: 'int24',
                name: 'tickLower',
                type: 'int24',
            },
            {
                internalType: 'int24',
                name: 'tickUpper',
                type: 'int24',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
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
                name: 'recipient',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
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
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'uniswapV3MintCallback',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'usdAsBase',
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
