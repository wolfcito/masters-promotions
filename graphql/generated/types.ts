export default {
    "scalars": [
        0,
        2,
        3,
        5,
        11,
        19,
        23,
        25,
        26,
        32,
        41,
        49,
        58,
        66,
        70,
        72
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_iregex": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_niregex": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nregex": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_regex": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category": {
            "emoji": [
                5
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category_aggregate": {
            "aggregate": [
                9
            ],
            "nodes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "category_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        19,
                        "[category_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                13
            ],
            "min": [
                14
            ],
            "__typename": [
                5
            ]
        },
        "category_bool_exp": {
            "_and": [
                10
            ],
            "_not": [
                10
            ],
            "_or": [
                10
            ],
            "emoji": [
                6
            ],
            "id": [
                73
            ],
            "image": [
                6
            ],
            "name": [
                6
            ],
            "slug": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "category_constraint": {},
        "category_insert_input": {
            "emoji": [
                5
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category_max_fields": {
            "emoji": [
                5
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category_min_fields": {
            "emoji": [
                5
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "category_on_conflict": {
            "constraint": [
                11
            ],
            "update_columns": [
                23
            ],
            "where": [
                10
            ],
            "__typename": [
                5
            ]
        },
        "category_order_by": {
            "emoji": [
                26
            ],
            "id": [
                26
            ],
            "image": [
                26
            ],
            "name": [
                26
            ],
            "slug": [
                26
            ],
            "__typename": [
                5
            ]
        },
        "category_pk_columns_input": {
            "id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "category_select_column": {},
        "category_set_input": {
            "emoji": [
                5
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category_stream_cursor_input": {
            "initial_value": [
                22
            ],
            "ordering": [
                25
            ],
            "__typename": [
                5
            ]
        },
        "category_stream_cursor_value_input": {
            "emoji": [
                5
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "category_update_column": {},
        "category_updates": {
            "_set": [
                20
            ],
            "where": [
                10
            ],
            "__typename": [
                5
            ]
        },
        "cursor_ordering": {},
        "order_by": {},
        "photos": {
            "category_id": [
                72
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "liked": [
                0
            ],
            "likes": [
                3
            ],
            "user_id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_aggregate": {
            "aggregate": [
                29
            ],
            "nodes": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "photos_aggregate_fields": {
            "avg": [
                30
            ],
            "count": [
                3,
                {
                    "columns": [
                        41,
                        "[photos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                35
            ],
            "min": [
                36
            ],
            "stddev": [
                43
            ],
            "stddev_pop": [
                44
            ],
            "stddev_samp": [
                45
            ],
            "sum": [
                48
            ],
            "var_pop": [
                51
            ],
            "var_samp": [
                52
            ],
            "variance": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "photos_avg_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "photos_bool_exp": {
            "_and": [
                31
            ],
            "_not": [
                31
            ],
            "_or": [
                31
            ],
            "category_id": [
                73
            ],
            "id": [
                73
            ],
            "image": [
                6
            ],
            "liked": [
                1
            ],
            "likes": [
                4
            ],
            "user_id": [
                73
            ],
            "__typename": [
                5
            ]
        },
        "photos_constraint": {},
        "photos_inc_input": {
            "likes": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "photos_insert_input": {
            "category_id": [
                72
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "liked": [
                0
            ],
            "likes": [
                3
            ],
            "user_id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_max_fields": {
            "category_id": [
                72
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "likes": [
                3
            ],
            "user_id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_min_fields": {
            "category_id": [
                72
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "likes": [
                3
            ],
            "user_id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "photos_on_conflict": {
            "constraint": [
                32
            ],
            "update_columns": [
                49
            ],
            "where": [
                31
            ],
            "__typename": [
                5
            ]
        },
        "photos_order_by": {
            "category_id": [
                26
            ],
            "id": [
                26
            ],
            "image": [
                26
            ],
            "liked": [
                26
            ],
            "likes": [
                26
            ],
            "user_id": [
                26
            ],
            "__typename": [
                5
            ]
        },
        "photos_pk_columns_input": {
            "id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_select_column": {},
        "photos_set_input": {
            "category_id": [
                72
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "liked": [
                0
            ],
            "likes": [
                3
            ],
            "user_id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_stddev_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "photos_stddev_pop_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "photos_stddev_samp_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "photos_stream_cursor_input": {
            "initial_value": [
                47
            ],
            "ordering": [
                25
            ],
            "__typename": [
                5
            ]
        },
        "photos_stream_cursor_value_input": {
            "category_id": [
                72
            ],
            "id": [
                72
            ],
            "image": [
                5
            ],
            "liked": [
                0
            ],
            "likes": [
                3
            ],
            "user_id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "photos_sum_fields": {
            "likes": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "photos_update_column": {},
        "photos_updates": {
            "_inc": [
                33
            ],
            "_set": [
                42
            ],
            "where": [
                31
            ],
            "__typename": [
                5
            ]
        },
        "photos_var_pop_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "photos_var_samp_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "photos_variance_fields": {
            "likes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user": {
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "nickname": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate": {
            "aggregate": [
                56
            ],
            "nodes": [
                54
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        66,
                        "[user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                60
            ],
            "min": [
                61
            ],
            "__typename": [
                5
            ]
        },
        "user_bool_exp": {
            "_and": [
                57
            ],
            "_not": [
                57
            ],
            "_or": [
                57
            ],
            "id": [
                73
            ],
            "image": [
                6
            ],
            "name": [
                6
            ],
            "nickname": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "user_constraint": {},
        "user_insert_input": {
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "nickname": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_max_fields": {
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "nickname": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_min_fields": {
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "nickname": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                54
            ],
            "__typename": [
                5
            ]
        },
        "user_on_conflict": {
            "constraint": [
                58
            ],
            "update_columns": [
                70
            ],
            "where": [
                57
            ],
            "__typename": [
                5
            ]
        },
        "user_order_by": {
            "id": [
                26
            ],
            "image": [
                26
            ],
            "name": [
                26
            ],
            "nickname": [
                26
            ],
            "__typename": [
                5
            ]
        },
        "user_pk_columns_input": {
            "id": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "user_select_column": {},
        "user_set_input": {
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "nickname": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_stream_cursor_input": {
            "initial_value": [
                69
            ],
            "ordering": [
                25
            ],
            "__typename": [
                5
            ]
        },
        "user_stream_cursor_value_input": {
            "id": [
                72
            ],
            "image": [
                5
            ],
            "name": [
                5
            ],
            "nickname": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_update_column": {},
        "user_updates": {
            "_set": [
                67
            ],
            "where": [
                57
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                72
            ],
            "_gt": [
                72
            ],
            "_gte": [
                72
            ],
            "_in": [
                72
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                72
            ],
            "_lte": [
                72
            ],
            "_neq": [
                72
            ],
            "_nin": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "category": [
                7,
                {
                    "distinct_on": [
                        19,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[category_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "category_aggregate": [
                8,
                {
                    "distinct_on": [
                        19,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[category_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "category_by_pk": [
                7,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "photos": [
                27,
                {
                    "distinct_on": [
                        41,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        39,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        31
                    ]
                }
            ],
            "photos_aggregate": [
                28,
                {
                    "distinct_on": [
                        41,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        39,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        31
                    ]
                }
            ],
            "photos_by_pk": [
                27,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "user": [
                54,
                {
                    "distinct_on": [
                        66,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        64,
                        "[user_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "user_aggregate": [
                55,
                {
                    "distinct_on": [
                        66,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        64,
                        "[user_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "user_by_pk": [
                54,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_category": [
                15,
                {
                    "where": [
                        10,
                        "category_bool_exp!"
                    ]
                }
            ],
            "delete_category_by_pk": [
                7,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "delete_photos": [
                37,
                {
                    "where": [
                        31,
                        "photos_bool_exp!"
                    ]
                }
            ],
            "delete_photos_by_pk": [
                27,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "delete_user": [
                62,
                {
                    "where": [
                        57,
                        "user_bool_exp!"
                    ]
                }
            ],
            "delete_user_by_pk": [
                54,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "insert_category": [
                15,
                {
                    "objects": [
                        12,
                        "[category_insert_input!]!"
                    ],
                    "on_conflict": [
                        16
                    ]
                }
            ],
            "insert_category_one": [
                7,
                {
                    "object": [
                        12,
                        "category_insert_input!"
                    ],
                    "on_conflict": [
                        16
                    ]
                }
            ],
            "insert_photos": [
                37,
                {
                    "objects": [
                        34,
                        "[photos_insert_input!]!"
                    ],
                    "on_conflict": [
                        38
                    ]
                }
            ],
            "insert_photos_one": [
                27,
                {
                    "object": [
                        34,
                        "photos_insert_input!"
                    ],
                    "on_conflict": [
                        38
                    ]
                }
            ],
            "insert_user": [
                62,
                {
                    "objects": [
                        59,
                        "[user_insert_input!]!"
                    ],
                    "on_conflict": [
                        63
                    ]
                }
            ],
            "insert_user_one": [
                54,
                {
                    "object": [
                        59,
                        "user_insert_input!"
                    ],
                    "on_conflict": [
                        63
                    ]
                }
            ],
            "update_category": [
                15,
                {
                    "_set": [
                        20
                    ],
                    "where": [
                        10,
                        "category_bool_exp!"
                    ]
                }
            ],
            "update_category_by_pk": [
                7,
                {
                    "_set": [
                        20
                    ],
                    "pk_columns": [
                        18,
                        "category_pk_columns_input!"
                    ]
                }
            ],
            "update_category_many": [
                15,
                {
                    "updates": [
                        24,
                        "[category_updates!]!"
                    ]
                }
            ],
            "update_photos": [
                37,
                {
                    "_inc": [
                        33
                    ],
                    "_set": [
                        42
                    ],
                    "where": [
                        31,
                        "photos_bool_exp!"
                    ]
                }
            ],
            "update_photos_by_pk": [
                27,
                {
                    "_inc": [
                        33
                    ],
                    "_set": [
                        42
                    ],
                    "pk_columns": [
                        40,
                        "photos_pk_columns_input!"
                    ]
                }
            ],
            "update_photos_many": [
                37,
                {
                    "updates": [
                        50,
                        "[photos_updates!]!"
                    ]
                }
            ],
            "update_user": [
                62,
                {
                    "_set": [
                        67
                    ],
                    "where": [
                        57,
                        "user_bool_exp!"
                    ]
                }
            ],
            "update_user_by_pk": [
                54,
                {
                    "_set": [
                        67
                    ],
                    "pk_columns": [
                        65,
                        "user_pk_columns_input!"
                    ]
                }
            ],
            "update_user_many": [
                62,
                {
                    "updates": [
                        71,
                        "[user_updates!]!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "category": [
                7,
                {
                    "distinct_on": [
                        19,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[category_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "category_aggregate": [
                8,
                {
                    "distinct_on": [
                        19,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[category_order_by!]"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "category_by_pk": [
                7,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "category_stream": [
                7,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        21,
                        "[category_stream_cursor_input]!"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "photos": [
                27,
                {
                    "distinct_on": [
                        41,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        39,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        31
                    ]
                }
            ],
            "photos_aggregate": [
                28,
                {
                    "distinct_on": [
                        41,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        39,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        31
                    ]
                }
            ],
            "photos_by_pk": [
                27,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "photos_stream": [
                27,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        46,
                        "[photos_stream_cursor_input]!"
                    ],
                    "where": [
                        31
                    ]
                }
            ],
            "user": [
                54,
                {
                    "distinct_on": [
                        66,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        64,
                        "[user_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "user_aggregate": [
                55,
                {
                    "distinct_on": [
                        66,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        64,
                        "[user_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "user_by_pk": [
                54,
                {
                    "id": [
                        72,
                        "uuid!"
                    ]
                }
            ],
            "user_stream": [
                54,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        68,
                        "[user_stream_cursor_input]!"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}