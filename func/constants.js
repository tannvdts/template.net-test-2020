module.exports = {
    SUM_NODE: {
        ERRORS: {
            PARAMS_NOT_IS_ARRAY: 'Param must be array',
            NODE_VALUE_INVALID: 'Node value must in range (1 - 100) or null',
            ARRAY_LENGTH_INVALID: 'Array lengh must be in range (1 - 10^4)',
            NODE_RELATION_INVALID: 'Node with null value cannot have grandchildren'
        },
        ARRAY_MIN_LENGTH: 1,
        ARRAY_MAX_LENGTH: 10000,
        NODE_VALUE_MIN: 1,
        NODE_VALUE_MAX: 100
    }
}