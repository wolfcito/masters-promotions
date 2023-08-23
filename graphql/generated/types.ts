export default {
    "scalars": [
        0,
        2,
        3,
        5,
        11,
        20,
        24,
        26,
        27,
        33,
        42,
        50,
        59,
        68,
        72,
        74
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
                74
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
                        20,
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
                75
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
                74
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
                74
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
                74
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
        "category_obj_rel_insert_input": {
            "data": [
                12
            ],
            "on_conflict": [
                17
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
                24
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
                27
            ],
            "id": [
                27
            ],
            "image": [
                27
            ],
            "name": [
                27
            ],
            "slug": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "category_pk_columns_input": {
            "id": [
                74
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
                74
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
                23
            ],
            "ordering": [
                26
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
                74
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
                21
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
            "category": [
                7
            ],
            "category_id": [
                74
            ],
            "id": [
                74
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
            "user": [
                55
            ],
            "user_id": [
                74
            ],
            "__typename": [
                5
            ]
        },
        "photos_aggregate": {
            "aggregate": [
                30
            ],
            "nodes": [
                28
            ],
            "__typename": [
                5
            ]
        },
        "photos_aggregate_fields": {
            "avg": [
                31
            ],
            "count": [
                3,
                {
                    "columns": [
                        42,
                        "[photos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                36
            ],
            "min": [
                37
            ],
            "stddev": [
                44
            ],
            "stddev_pop": [
                45
            ],
            "stddev_samp": [
                46
            ],
            "sum": [
                49
            ],
            "var_pop": [
                52
            ],
            "var_samp": [
                53
            ],
            "variance": [
                54
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
                32
            ],
            "_not": [
                32
            ],
            "_or": [
                32
            ],
            "category": [
                10
            ],
            "category_id": [
                75
            ],
            "id": [
                75
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
            "user": [
                58
            ],
            "user_id": [
                75
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
            "category": [
                16
            ],
            "category_id": [
                74
            ],
            "id": [
                74
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
            "user": [
                64
            ],
            "user_id": [
                74
            ],
            "__typename": [
                5
            ]
        },
        "photos_max_fields": {
            "category_id": [
                74
            ],
            "id": [
                74
            ],
            "image": [
                5
            ],
            "likes": [
                3
            ],
            "user_id": [
                74
            ],
            "__typename": [
                5
            ]
        },
        "photos_min_fields": {
            "category_id": [
                74
            ],
            "id": [
                74
            ],
            "image": [
                5
            ],
            "likes": [
                3
            ],
            "user_id": [
                74
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
                28
            ],
            "__typename": [
                5
            ]
        },
        "photos_on_conflict": {
            "constraint": [
                33
            ],
            "update_columns": [
                50
            ],
            "where": [
                32
            ],
            "__typename": [
                5
            ]
        },
        "photos_order_by": {
            "category": [
                18
            ],
            "category_id": [
                27
            ],
            "id": [
                27
            ],
            "image": [
                27
            ],
            "liked": [
                27
            ],
            "likes": [
                27
            ],
            "user": [
                66
            ],
            "user_id": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "photos_pk_columns_input": {
            "id": [
                74
            ],
            "__typename": [
                5
            ]
        },
        "photos_select_column": {},
        "photos_set_input": {
            "category_id": [
                74
            ],
            "id": [
                74
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
                74
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
                48
            ],
            "ordering": [
                26
            ],
            "__typename": [
                5
            ]
        },
        "photos_stream_cursor_value_input": {
            "category_id": [
                74
            ],
            "id": [
                74
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
                74
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
                34
            ],
            "_set": [
                43
            ],
            "where": [
                32
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
                74
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
                57
            ],
            "nodes": [
                55
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
                        68,
                        "[user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                61
            ],
            "min": [
                62
            ],
            "__typename": [
                5
            ]
        },
        "user_bool_exp": {
            "_and": [
                58
            ],
            "_not": [
                58
            ],
            "_or": [
                58
            ],
            "id": [
                75
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
                74
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
                74
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
                74
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
                55
            ],
            "__typename": [
                5
            ]
        },
        "user_obj_rel_insert_input": {
            "data": [
                60
            ],
            "on_conflict": [
                65
            ],
            "__typename": [
                5
            ]
        },
        "user_on_conflict": {
            "constraint": [
                59
            ],
            "update_columns": [
                72
            ],
            "where": [
                58
            ],
            "__typename": [
                5
            ]
        },
        "user_order_by": {
            "id": [
                27
            ],
            "image": [
                27
            ],
            "name": [
                27
            ],
            "nickname": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "user_pk_columns_input": {
            "id": [
                74
            ],
            "__typename": [
                5
            ]
        },
        "user_select_column": {},
        "user_set_input": {
            "id": [
                74
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
                71
            ],
            "ordering": [
                26
            ],
            "__typename": [
                5
            ]
        },
        "user_stream_cursor_value_input": {
            "id": [
                74
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
                69
            ],
            "where": [
                58
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                74
            ],
            "_gt": [
                74
            ],
            "_gte": [
                74
            ],
            "_in": [
                74
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                74
            ],
            "_lte": [
                74
            ],
            "_neq": [
                74
            ],
            "_nin": [
                74
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
                        20,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        18,
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
                        20,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        18,
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
                        74,
                        "uuid!"
                    ]
                }
            ],
            "photos": [
                28,
                {
                    "distinct_on": [
                        42,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        40,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "photos_aggregate": [
                29,
                {
                    "distinct_on": [
                        42,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        40,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "photos_by_pk": [
                28,
                {
                    "id": [
                        74,
                        "uuid!"
                    ]
                }
            ],
            "user": [
                55,
                {
                    "distinct_on": [
                        68,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        66,
                        "[user_order_by!]"
                    ],
                    "where": [
                        58
                    ]
                }
            ],
            "user_aggregate": [
                56,
                {
                    "distinct_on": [
                        68,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        66,
                        "[user_order_by!]"
                    ],
                    "where": [
                        58
                    ]
                }
            ],
            "user_by_pk": [
                55,
                {
                    "id": [
                        74,
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
                        74,
                        "uuid!"
                    ]
                }
            ],
            "delete_photos": [
                38,
                {
                    "where": [
                        32,
                        "photos_bool_exp!"
                    ]
                }
            ],
            "delete_photos_by_pk": [
                28,
                {
                    "id": [
                        74,
                        "uuid!"
                    ]
                }
            ],
            "delete_user": [
                63,
                {
                    "where": [
                        58,
                        "user_bool_exp!"
                    ]
                }
            ],
            "delete_user_by_pk": [
                55,
                {
                    "id": [
                        74,
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
                        17
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
                        17
                    ]
                }
            ],
            "insert_photos": [
                38,
                {
                    "objects": [
                        35,
                        "[photos_insert_input!]!"
                    ],
                    "on_conflict": [
                        39
                    ]
                }
            ],
            "insert_photos_one": [
                28,
                {
                    "object": [
                        35,
                        "photos_insert_input!"
                    ],
                    "on_conflict": [
                        39
                    ]
                }
            ],
            "insert_user": [
                63,
                {
                    "objects": [
                        60,
                        "[user_insert_input!]!"
                    ],
                    "on_conflict": [
                        65
                    ]
                }
            ],
            "insert_user_one": [
                55,
                {
                    "object": [
                        60,
                        "user_insert_input!"
                    ],
                    "on_conflict": [
                        65
                    ]
                }
            ],
            "update_category": [
                15,
                {
                    "_set": [
                        21
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
                        21
                    ],
                    "pk_columns": [
                        19,
                        "category_pk_columns_input!"
                    ]
                }
            ],
            "update_category_many": [
                15,
                {
                    "updates": [
                        25,
                        "[category_updates!]!"
                    ]
                }
            ],
            "update_photos": [
                38,
                {
                    "_inc": [
                        34
                    ],
                    "_set": [
                        43
                    ],
                    "where": [
                        32,
                        "photos_bool_exp!"
                    ]
                }
            ],
            "update_photos_by_pk": [
                28,
                {
                    "_inc": [
                        34
                    ],
                    "_set": [
                        43
                    ],
                    "pk_columns": [
                        41,
                        "photos_pk_columns_input!"
                    ]
                }
            ],
            "update_photos_many": [
                38,
                {
                    "updates": [
                        51,
                        "[photos_updates!]!"
                    ]
                }
            ],
            "update_user": [
                63,
                {
                    "_set": [
                        69
                    ],
                    "where": [
                        58,
                        "user_bool_exp!"
                    ]
                }
            ],
            "update_user_by_pk": [
                55,
                {
                    "_set": [
                        69
                    ],
                    "pk_columns": [
                        67,
                        "user_pk_columns_input!"
                    ]
                }
            ],
            "update_user_many": [
                63,
                {
                    "updates": [
                        73,
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
                        20,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        18,
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
                        20,
                        "[category_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        18,
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
                        74,
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
                        22,
                        "[category_stream_cursor_input]!"
                    ],
                    "where": [
                        10
                    ]
                }
            ],
            "photos": [
                28,
                {
                    "distinct_on": [
                        42,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        40,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "photos_aggregate": [
                29,
                {
                    "distinct_on": [
                        42,
                        "[photos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        40,
                        "[photos_order_by!]"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "photos_by_pk": [
                28,
                {
                    "id": [
                        74,
                        "uuid!"
                    ]
                }
            ],
            "photos_stream": [
                28,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        47,
                        "[photos_stream_cursor_input]!"
                    ],
                    "where": [
                        32
                    ]
                }
            ],
            "user": [
                55,
                {
                    "distinct_on": [
                        68,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        66,
                        "[user_order_by!]"
                    ],
                    "where": [
                        58
                    ]
                }
            ],
            "user_aggregate": [
                56,
                {
                    "distinct_on": [
                        68,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        66,
                        "[user_order_by!]"
                    ],
                    "where": [
                        58
                    ]
                }
            ],
            "user_by_pk": [
                55,
                {
                    "id": [
                        74,
                        "uuid!"
                    ]
                }
            ],
            "user_stream": [
                55,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        70,
                        "[user_stream_cursor_input]!"
                    ],
                    "where": [
                        58
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}