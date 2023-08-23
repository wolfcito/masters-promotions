// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    uuid: any,
}


/** category for each photo */
export interface category {
    emoji: Scalars['String']
    id: Scalars['uuid']
    image: Scalars['String']
    name: Scalars['String']
    slug: Scalars['String']
    __typename: 'category'
}


/** aggregated selection of "category" */
export interface category_aggregate {
    aggregate: (category_aggregate_fields | null)
    nodes: category[]
    __typename: 'category_aggregate'
}


/** aggregate fields of "category" */
export interface category_aggregate_fields {
    count: Scalars['Int']
    max: (category_max_fields | null)
    min: (category_min_fields | null)
    __typename: 'category_aggregate_fields'
}


/** unique or primary key constraints on table "category" */
export type category_constraint = 'category_pkey'


/** aggregate max on columns */
export interface category_max_fields {
    emoji: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    image: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    __typename: 'category_max_fields'
}


/** aggregate min on columns */
export interface category_min_fields {
    emoji: (Scalars['String'] | null)
    id: (Scalars['uuid'] | null)
    image: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    __typename: 'category_min_fields'
}


/** response of any mutation on the table "category" */
export interface category_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: category[]
    __typename: 'category_mutation_response'
}


/** select columns of table "category" */
export type category_select_column = 'emoji' | 'id' | 'image' | 'name' | 'slug'


/** update columns of table "category" */
export type category_update_column = 'emoji' | 'id' | 'image' | 'name' | 'slug'


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "category" */
    delete_category: (category_mutation_response | null)
    /** delete single row from the table: "category" */
    delete_category_by_pk: (category | null)
    /** delete data from the table: "photos" */
    delete_photos: (photos_mutation_response | null)
    /** delete single row from the table: "photos" */
    delete_photos_by_pk: (photos | null)
    /** delete data from the table: "user" */
    delete_user: (user_mutation_response | null)
    /** delete single row from the table: "user" */
    delete_user_by_pk: (user | null)
    /** insert data into the table: "category" */
    insert_category: (category_mutation_response | null)
    /** insert a single row into the table: "category" */
    insert_category_one: (category | null)
    /** insert data into the table: "photos" */
    insert_photos: (photos_mutation_response | null)
    /** insert a single row into the table: "photos" */
    insert_photos_one: (photos | null)
    /** insert data into the table: "user" */
    insert_user: (user_mutation_response | null)
    /** insert a single row into the table: "user" */
    insert_user_one: (user | null)
    /** update data of the table: "category" */
    update_category: (category_mutation_response | null)
    /** update single row of the table: "category" */
    update_category_by_pk: (category | null)
    /** update multiples rows of table: "category" */
    update_category_many: ((category_mutation_response | null)[] | null)
    /** update data of the table: "photos" */
    update_photos: (photos_mutation_response | null)
    /** update single row of the table: "photos" */
    update_photos_by_pk: (photos | null)
    /** update multiples rows of table: "photos" */
    update_photos_many: ((photos_mutation_response | null)[] | null)
    /** update data of the table: "user" */
    update_user: (user_mutation_response | null)
    /** update single row of the table: "user" */
    update_user_by_pk: (user | null)
    /** update multiples rows of table: "user" */
    update_user_many: ((user_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** principal images for news feed */
export interface photos {
    /** An object relationship */
    category: category
    category_id: Scalars['uuid']
    id: Scalars['uuid']
    image: Scalars['String']
    liked: Scalars['Boolean']
    likes: Scalars['Int']
    /** An object relationship */
    user: user
    user_id: Scalars['uuid']
    __typename: 'photos'
}


/** aggregated selection of "photos" */
export interface photos_aggregate {
    aggregate: (photos_aggregate_fields | null)
    nodes: photos[]
    __typename: 'photos_aggregate'
}


/** aggregate fields of "photos" */
export interface photos_aggregate_fields {
    avg: (photos_avg_fields | null)
    count: Scalars['Int']
    max: (photos_max_fields | null)
    min: (photos_min_fields | null)
    stddev: (photos_stddev_fields | null)
    stddev_pop: (photos_stddev_pop_fields | null)
    stddev_samp: (photos_stddev_samp_fields | null)
    sum: (photos_sum_fields | null)
    var_pop: (photos_var_pop_fields | null)
    var_samp: (photos_var_samp_fields | null)
    variance: (photos_variance_fields | null)
    __typename: 'photos_aggregate_fields'
}


/** aggregate avg on columns */
export interface photos_avg_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_avg_fields'
}


/** unique or primary key constraints on table "photos" */
export type photos_constraint = 'photos_pkey'


/** aggregate max on columns */
export interface photos_max_fields {
    category_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    image: (Scalars['String'] | null)
    likes: (Scalars['Int'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'photos_max_fields'
}


/** aggregate min on columns */
export interface photos_min_fields {
    category_id: (Scalars['uuid'] | null)
    id: (Scalars['uuid'] | null)
    image: (Scalars['String'] | null)
    likes: (Scalars['Int'] | null)
    user_id: (Scalars['uuid'] | null)
    __typename: 'photos_min_fields'
}


/** response of any mutation on the table "photos" */
export interface photos_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: photos[]
    __typename: 'photos_mutation_response'
}


/** select columns of table "photos" */
export type photos_select_column = 'category_id' | 'id' | 'image' | 'liked' | 'likes' | 'user_id'


/** aggregate stddev on columns */
export interface photos_stddev_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface photos_stddev_pop_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface photos_stddev_samp_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface photos_sum_fields {
    likes: (Scalars['Int'] | null)
    __typename: 'photos_sum_fields'
}


/** update columns of table "photos" */
export type photos_update_column = 'category_id' | 'id' | 'image' | 'liked' | 'likes' | 'user_id'


/** aggregate var_pop on columns */
export interface photos_var_pop_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface photos_var_samp_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_var_samp_fields'
}


/** aggregate variance on columns */
export interface photos_variance_fields {
    likes: (Scalars['Float'] | null)
    __typename: 'photos_variance_fields'
}

export interface query_root {
    /** fetch data from the table: "category" */
    category: category[]
    /** fetch aggregated fields from the table: "category" */
    category_aggregate: category_aggregate
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk: (category | null)
    /** fetch data from the table: "photos" */
    photos: photos[]
    /** fetch aggregated fields from the table: "photos" */
    photos_aggregate: photos_aggregate
    /** fetch data from the table: "photos" using primary key columns */
    photos_by_pk: (photos | null)
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: user_aggregate
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk: (user | null)
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "category" */
    category: category[]
    /** fetch aggregated fields from the table: "category" */
    category_aggregate: category_aggregate
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk: (category | null)
    /** fetch data from the table in a streaming manner: "category" */
    category_stream: category[]
    /** fetch data from the table: "photos" */
    photos: photos[]
    /** fetch aggregated fields from the table: "photos" */
    photos_aggregate: photos_aggregate
    /** fetch data from the table: "photos" using primary key columns */
    photos_by_pk: (photos | null)
    /** fetch data from the table in a streaming manner: "photos" */
    photos_stream: photos[]
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: user_aggregate
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk: (user | null)
    /** fetch data from the table in a streaming manner: "user" */
    user_stream: user[]
    __typename: 'subscription_root'
}


/** user information */
export interface user {
    id: Scalars['uuid']
    image: Scalars['String']
    name: Scalars['String']
    nickname: Scalars['String']
    __typename: 'user'
}


/** aggregated selection of "user" */
export interface user_aggregate {
    aggregate: (user_aggregate_fields | null)
    nodes: user[]
    __typename: 'user_aggregate'
}


/** aggregate fields of "user" */
export interface user_aggregate_fields {
    count: Scalars['Int']
    max: (user_max_fields | null)
    min: (user_min_fields | null)
    __typename: 'user_aggregate_fields'
}


/** unique or primary key constraints on table "user" */
export type user_constraint = 'user_pkey'


/** aggregate max on columns */
export interface user_max_fields {
    id: (Scalars['uuid'] | null)
    image: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    nickname: (Scalars['String'] | null)
    __typename: 'user_max_fields'
}


/** aggregate min on columns */
export interface user_min_fields {
    id: (Scalars['uuid'] | null)
    image: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    nickname: (Scalars['String'] | null)
    __typename: 'user_min_fields'
}


/** response of any mutation on the table "user" */
export interface user_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: user[]
    __typename: 'user_mutation_response'
}


/** select columns of table "user" */
export type user_select_column = 'id' | 'image' | 'name' | 'nickname'


/** update columns of table "user" */
export type user_update_column = 'id' | 'image' | 'name' | 'nickname'

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** category for each photo */
export interface categoryGenqlSelection{
    emoji?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "category" */
export interface category_aggregateGenqlSelection{
    aggregate?: category_aggregate_fieldsGenqlSelection
    nodes?: categoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "category" */
export interface category_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (category_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: category_max_fieldsGenqlSelection
    min?: category_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export interface category_bool_exp {_and?: (category_bool_exp[] | null),_not?: (category_bool_exp | null),_or?: (category_bool_exp[] | null),emoji?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null),image?: (String_comparison_exp | null),name?: (String_comparison_exp | null),slug?: (String_comparison_exp | null)}


/** input type for inserting data into table "category" */
export interface category_insert_input {emoji?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface category_max_fieldsGenqlSelection{
    emoji?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface category_min_fieldsGenqlSelection{
    emoji?: boolean | number
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "category" */
export interface category_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: categoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "category" */
export interface category_obj_rel_insert_input {data: category_insert_input,
/** upsert condition */
on_conflict?: (category_on_conflict | null)}


/** on_conflict condition type for table "category" */
export interface category_on_conflict {constraint: category_constraint,update_columns?: category_update_column[],where?: (category_bool_exp | null)}


/** Ordering options when selecting data from "category". */
export interface category_order_by {emoji?: (order_by | null),id?: (order_by | null),image?: (order_by | null),name?: (order_by | null),slug?: (order_by | null)}


/** primary key columns input for table: category */
export interface category_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "category" */
export interface category_set_input {emoji?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null)}


/** Streaming cursor of the table "category" */
export interface category_stream_cursor_input {
/** Stream column input with initial value */
initial_value: category_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface category_stream_cursor_value_input {emoji?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),slug?: (Scalars['String'] | null)}

export interface category_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (category_set_input | null),
/** filter the rows which have to be updated */
where: category_bool_exp}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "category" */
    delete_category?: (category_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: category_bool_exp} })
    /** delete single row from the table: "category" */
    delete_category_by_pk?: (categoryGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "photos" */
    delete_photos?: (photos_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: photos_bool_exp} })
    /** delete single row from the table: "photos" */
    delete_photos_by_pk?: (photosGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "user" */
    delete_user?: (user_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: user_bool_exp} })
    /** delete single row from the table: "user" */
    delete_user_by_pk?: (userGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** insert data into the table: "category" */
    insert_category?: (category_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: category_insert_input[], 
    /** upsert condition */
    on_conflict?: (category_on_conflict | null)} })
    /** insert a single row into the table: "category" */
    insert_category_one?: (categoryGenqlSelection & { __args: {
    /** the row to be inserted */
    object: category_insert_input, 
    /** upsert condition */
    on_conflict?: (category_on_conflict | null)} })
    /** insert data into the table: "photos" */
    insert_photos?: (photos_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: photos_insert_input[], 
    /** upsert condition */
    on_conflict?: (photos_on_conflict | null)} })
    /** insert a single row into the table: "photos" */
    insert_photos_one?: (photosGenqlSelection & { __args: {
    /** the row to be inserted */
    object: photos_insert_input, 
    /** upsert condition */
    on_conflict?: (photos_on_conflict | null)} })
    /** insert data into the table: "user" */
    insert_user?: (user_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: user_insert_input[], 
    /** upsert condition */
    on_conflict?: (user_on_conflict | null)} })
    /** insert a single row into the table: "user" */
    insert_user_one?: (userGenqlSelection & { __args: {
    /** the row to be inserted */
    object: user_insert_input, 
    /** upsert condition */
    on_conflict?: (user_on_conflict | null)} })
    /** update data of the table: "category" */
    update_category?: (category_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (category_set_input | null), 
    /** filter the rows which have to be updated */
    where: category_bool_exp} })
    /** update single row of the table: "category" */
    update_category_by_pk?: (categoryGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (category_set_input | null), pk_columns: category_pk_columns_input} })
    /** update multiples rows of table: "category" */
    update_category_many?: (category_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: category_updates[]} })
    /** update data of the table: "photos" */
    update_photos?: (photos_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (photos_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (photos_set_input | null), 
    /** filter the rows which have to be updated */
    where: photos_bool_exp} })
    /** update single row of the table: "photos" */
    update_photos_by_pk?: (photosGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (photos_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (photos_set_input | null), pk_columns: photos_pk_columns_input} })
    /** update multiples rows of table: "photos" */
    update_photos_many?: (photos_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: photos_updates[]} })
    /** update data of the table: "user" */
    update_user?: (user_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_set_input | null), 
    /** filter the rows which have to be updated */
    where: user_bool_exp} })
    /** update single row of the table: "user" */
    update_user_by_pk?: (userGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_set_input | null), pk_columns: user_pk_columns_input} })
    /** update multiples rows of table: "user" */
    update_user_many?: (user_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: user_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** principal images for news feed */
export interface photosGenqlSelection{
    /** An object relationship */
    category?: categoryGenqlSelection
    category_id?: boolean | number
    id?: boolean | number
    image?: boolean | number
    liked?: boolean | number
    likes?: boolean | number
    /** An object relationship */
    user?: userGenqlSelection
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "photos" */
export interface photos_aggregateGenqlSelection{
    aggregate?: photos_aggregate_fieldsGenqlSelection
    nodes?: photosGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "photos" */
export interface photos_aggregate_fieldsGenqlSelection{
    avg?: photos_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (photos_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: photos_max_fieldsGenqlSelection
    min?: photos_min_fieldsGenqlSelection
    stddev?: photos_stddev_fieldsGenqlSelection
    stddev_pop?: photos_stddev_pop_fieldsGenqlSelection
    stddev_samp?: photos_stddev_samp_fieldsGenqlSelection
    sum?: photos_sum_fieldsGenqlSelection
    var_pop?: photos_var_pop_fieldsGenqlSelection
    var_samp?: photos_var_samp_fieldsGenqlSelection
    variance?: photos_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface photos_avg_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "photos". All fields are combined with a logical 'AND'. */
export interface photos_bool_exp {_and?: (photos_bool_exp[] | null),_not?: (photos_bool_exp | null),_or?: (photos_bool_exp[] | null),category?: (category_bool_exp | null),category_id?: (uuid_comparison_exp | null),id?: (uuid_comparison_exp | null),image?: (String_comparison_exp | null),liked?: (Boolean_comparison_exp | null),likes?: (Int_comparison_exp | null),user?: (user_bool_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for incrementing numeric columns in table "photos" */
export interface photos_inc_input {likes?: (Scalars['Int'] | null)}


/** input type for inserting data into table "photos" */
export interface photos_insert_input {category?: (category_obj_rel_insert_input | null),category_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),liked?: (Scalars['Boolean'] | null),likes?: (Scalars['Int'] | null),user?: (user_obj_rel_insert_input | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface photos_max_fieldsGenqlSelection{
    category_id?: boolean | number
    id?: boolean | number
    image?: boolean | number
    likes?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface photos_min_fieldsGenqlSelection{
    category_id?: boolean | number
    id?: boolean | number
    image?: boolean | number
    likes?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "photos" */
export interface photos_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: photosGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "photos" */
export interface photos_on_conflict {constraint: photos_constraint,update_columns?: photos_update_column[],where?: (photos_bool_exp | null)}


/** Ordering options when selecting data from "photos". */
export interface photos_order_by {category?: (category_order_by | null),category_id?: (order_by | null),id?: (order_by | null),image?: (order_by | null),liked?: (order_by | null),likes?: (order_by | null),user?: (user_order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: photos */
export interface photos_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "photos" */
export interface photos_set_input {category_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),liked?: (Scalars['Boolean'] | null),likes?: (Scalars['Int'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface photos_stddev_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface photos_stddev_pop_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface photos_stddev_samp_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "photos" */
export interface photos_stream_cursor_input {
/** Stream column input with initial value */
initial_value: photos_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface photos_stream_cursor_value_input {category_id?: (Scalars['uuid'] | null),id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),liked?: (Scalars['Boolean'] | null),likes?: (Scalars['Int'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate sum on columns */
export interface photos_sum_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface photos_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (photos_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (photos_set_input | null),
/** filter the rows which have to be updated */
where: photos_bool_exp}


/** aggregate var_pop on columns */
export interface photos_var_pop_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface photos_var_samp_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface photos_variance_fieldsGenqlSelection{
    likes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "category" */
    category?: (categoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (category_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (category_order_by[] | null), 
    /** filter the rows returned */
    where?: (category_bool_exp | null)} })
    /** fetch aggregated fields from the table: "category" */
    category_aggregate?: (category_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (category_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (category_order_by[] | null), 
    /** filter the rows returned */
    where?: (category_bool_exp | null)} })
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk?: (categoryGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "photos" */
    photos?: (photosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (photos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (photos_order_by[] | null), 
    /** filter the rows returned */
    where?: (photos_bool_exp | null)} })
    /** fetch aggregated fields from the table: "photos" */
    photos_aggregate?: (photos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (photos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (photos_order_by[] | null), 
    /** filter the rows returned */
    where?: (photos_bool_exp | null)} })
    /** fetch data from the table: "photos" using primary key columns */
    photos_by_pk?: (photosGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table: "user" */
    user?: (userGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_bool_exp | null)} })
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: (user_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_bool_exp | null)} })
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: (userGenqlSelection & { __args: {id: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "category" */
    category?: (categoryGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (category_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (category_order_by[] | null), 
    /** filter the rows returned */
    where?: (category_bool_exp | null)} })
    /** fetch aggregated fields from the table: "category" */
    category_aggregate?: (category_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (category_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (category_order_by[] | null), 
    /** filter the rows returned */
    where?: (category_bool_exp | null)} })
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk?: (categoryGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "category" */
    category_stream?: (categoryGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (category_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (category_bool_exp | null)} })
    /** fetch data from the table: "photos" */
    photos?: (photosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (photos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (photos_order_by[] | null), 
    /** filter the rows returned */
    where?: (photos_bool_exp | null)} })
    /** fetch aggregated fields from the table: "photos" */
    photos_aggregate?: (photos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (photos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (photos_order_by[] | null), 
    /** filter the rows returned */
    where?: (photos_bool_exp | null)} })
    /** fetch data from the table: "photos" using primary key columns */
    photos_by_pk?: (photosGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "photos" */
    photos_stream?: (photosGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (photos_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (photos_bool_exp | null)} })
    /** fetch data from the table: "user" */
    user?: (userGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_bool_exp | null)} })
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: (user_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null), 
    /** filter the rows returned */
    where?: (user_bool_exp | null)} })
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: (userGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "user" */
    user_stream?: (userGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (user_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (user_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** user information */
export interface userGenqlSelection{
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    nickname?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "user" */
export interface user_aggregateGenqlSelection{
    aggregate?: user_aggregate_fieldsGenqlSelection
    nodes?: userGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "user" */
export interface user_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (user_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: user_max_fieldsGenqlSelection
    min?: user_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp {_and?: (user_bool_exp[] | null),_not?: (user_bool_exp | null),_or?: (user_bool_exp[] | null),id?: (uuid_comparison_exp | null),image?: (String_comparison_exp | null),name?: (String_comparison_exp | null),nickname?: (String_comparison_exp | null)}


/** input type for inserting data into table "user" */
export interface user_insert_input {id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),nickname?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface user_max_fieldsGenqlSelection{
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    nickname?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface user_min_fieldsGenqlSelection{
    id?: boolean | number
    image?: boolean | number
    name?: boolean | number
    nickname?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "user" */
export interface user_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: userGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "user" */
export interface user_obj_rel_insert_input {data: user_insert_input,
/** upsert condition */
on_conflict?: (user_on_conflict | null)}


/** on_conflict condition type for table "user" */
export interface user_on_conflict {constraint: user_constraint,update_columns?: user_update_column[],where?: (user_bool_exp | null)}


/** Ordering options when selecting data from "user". */
export interface user_order_by {id?: (order_by | null),image?: (order_by | null),name?: (order_by | null),nickname?: (order_by | null)}


/** primary key columns input for table: user */
export interface user_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "user" */
export interface user_set_input {id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),nickname?: (Scalars['String'] | null)}


/** Streaming cursor of the table "user" */
export interface user_stream_cursor_input {
/** Stream column input with initial value */
initial_value: user_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface user_stream_cursor_value_input {id?: (Scalars['uuid'] | null),image?: (Scalars['String'] | null),name?: (Scalars['String'] | null),nickname?: (Scalars['String'] | null)}

export interface user_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (user_set_input | null),
/** filter the rows which have to be updated */
where: user_bool_exp}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const category_possibleTypes: string[] = ['category']
    export const iscategory = (obj?: { __typename?: any } | null): obj is category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscategory"')
      return category_possibleTypes.includes(obj.__typename)
    }
    


    const category_aggregate_possibleTypes: string[] = ['category_aggregate']
    export const iscategory_aggregate = (obj?: { __typename?: any } | null): obj is category_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscategory_aggregate"')
      return category_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const category_aggregate_fields_possibleTypes: string[] = ['category_aggregate_fields']
    export const iscategory_aggregate_fields = (obj?: { __typename?: any } | null): obj is category_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscategory_aggregate_fields"')
      return category_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const category_max_fields_possibleTypes: string[] = ['category_max_fields']
    export const iscategory_max_fields = (obj?: { __typename?: any } | null): obj is category_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscategory_max_fields"')
      return category_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const category_min_fields_possibleTypes: string[] = ['category_min_fields']
    export const iscategory_min_fields = (obj?: { __typename?: any } | null): obj is category_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscategory_min_fields"')
      return category_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const category_mutation_response_possibleTypes: string[] = ['category_mutation_response']
    export const iscategory_mutation_response = (obj?: { __typename?: any } | null): obj is category_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscategory_mutation_response"')
      return category_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const photos_possibleTypes: string[] = ['photos']
    export const isphotos = (obj?: { __typename?: any } | null): obj is photos => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos"')
      return photos_possibleTypes.includes(obj.__typename)
    }
    


    const photos_aggregate_possibleTypes: string[] = ['photos_aggregate']
    export const isphotos_aggregate = (obj?: { __typename?: any } | null): obj is photos_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_aggregate"')
      return photos_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const photos_aggregate_fields_possibleTypes: string[] = ['photos_aggregate_fields']
    export const isphotos_aggregate_fields = (obj?: { __typename?: any } | null): obj is photos_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_aggregate_fields"')
      return photos_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_avg_fields_possibleTypes: string[] = ['photos_avg_fields']
    export const isphotos_avg_fields = (obj?: { __typename?: any } | null): obj is photos_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_avg_fields"')
      return photos_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_max_fields_possibleTypes: string[] = ['photos_max_fields']
    export const isphotos_max_fields = (obj?: { __typename?: any } | null): obj is photos_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_max_fields"')
      return photos_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_min_fields_possibleTypes: string[] = ['photos_min_fields']
    export const isphotos_min_fields = (obj?: { __typename?: any } | null): obj is photos_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_min_fields"')
      return photos_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_mutation_response_possibleTypes: string[] = ['photos_mutation_response']
    export const isphotos_mutation_response = (obj?: { __typename?: any } | null): obj is photos_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_mutation_response"')
      return photos_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const photos_stddev_fields_possibleTypes: string[] = ['photos_stddev_fields']
    export const isphotos_stddev_fields = (obj?: { __typename?: any } | null): obj is photos_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_stddev_fields"')
      return photos_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_stddev_pop_fields_possibleTypes: string[] = ['photos_stddev_pop_fields']
    export const isphotos_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is photos_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_stddev_pop_fields"')
      return photos_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_stddev_samp_fields_possibleTypes: string[] = ['photos_stddev_samp_fields']
    export const isphotos_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is photos_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_stddev_samp_fields"')
      return photos_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_sum_fields_possibleTypes: string[] = ['photos_sum_fields']
    export const isphotos_sum_fields = (obj?: { __typename?: any } | null): obj is photos_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_sum_fields"')
      return photos_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_var_pop_fields_possibleTypes: string[] = ['photos_var_pop_fields']
    export const isphotos_var_pop_fields = (obj?: { __typename?: any } | null): obj is photos_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_var_pop_fields"')
      return photos_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_var_samp_fields_possibleTypes: string[] = ['photos_var_samp_fields']
    export const isphotos_var_samp_fields = (obj?: { __typename?: any } | null): obj is photos_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_var_samp_fields"')
      return photos_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const photos_variance_fields_possibleTypes: string[] = ['photos_variance_fields']
    export const isphotos_variance_fields = (obj?: { __typename?: any } | null): obj is photos_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isphotos_variance_fields"')
      return photos_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    


    const user_possibleTypes: string[] = ['user']
    export const isuser = (obj?: { __typename?: any } | null): obj is user => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser"')
      return user_possibleTypes.includes(obj.__typename)
    }
    


    const user_aggregate_possibleTypes: string[] = ['user_aggregate']
    export const isuser_aggregate = (obj?: { __typename?: any } | null): obj is user_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate"')
      return user_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const user_aggregate_fields_possibleTypes: string[] = ['user_aggregate_fields']
    export const isuser_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate_fields"')
      return user_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const user_max_fields_possibleTypes: string[] = ['user_max_fields']
    export const isuser_max_fields = (obj?: { __typename?: any } | null): obj is user_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_max_fields"')
      return user_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const user_min_fields_possibleTypes: string[] = ['user_min_fields']
    export const isuser_min_fields = (obj?: { __typename?: any } | null): obj is user_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_min_fields"')
      return user_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const user_mutation_response_possibleTypes: string[] = ['user_mutation_response']
    export const isuser_mutation_response = (obj?: { __typename?: any } | null): obj is user_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isuser_mutation_response"')
      return user_mutation_response_possibleTypes.includes(obj.__typename)
    }
    

export const enumCategoryConstraint = {
   category_pkey: 'category_pkey' as const
}

export const enumCategorySelectColumn = {
   emoji: 'emoji' as const,
   id: 'id' as const,
   image: 'image' as const,
   name: 'name' as const,
   slug: 'slug' as const
}

export const enumCategoryUpdateColumn = {
   emoji: 'emoji' as const,
   id: 'id' as const,
   image: 'image' as const,
   name: 'name' as const,
   slug: 'slug' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPhotosConstraint = {
   photos_pkey: 'photos_pkey' as const
}

export const enumPhotosSelectColumn = {
   category_id: 'category_id' as const,
   id: 'id' as const,
   image: 'image' as const,
   liked: 'liked' as const,
   likes: 'likes' as const,
   user_id: 'user_id' as const
}

export const enumPhotosUpdateColumn = {
   category_id: 'category_id' as const,
   id: 'id' as const,
   image: 'image' as const,
   liked: 'liked' as const,
   likes: 'likes' as const,
   user_id: 'user_id' as const
}

export const enumUserConstraint = {
   user_pkey: 'user_pkey' as const
}

export const enumUserSelectColumn = {
   id: 'id' as const,
   image: 'image' as const,
   name: 'name' as const,
   nickname: 'nickname' as const
}

export const enumUserUpdateColumn = {
   id: 'id' as const,
   image: 'image' as const,
   name: 'name' as const,
   nickname: 'nickname' as const
}
