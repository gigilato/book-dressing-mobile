import { gql } from '@apollo/client'
import * as ApolloReactCommon from '@apollo/client'
import * as ApolloReactHooks from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  json: any
  timestamptz: any
  uuid: any
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "book" */
export interface Book {
  __typename?: 'book'
  authors: Scalars['json']
  categories: Scalars['json']
  createdAt: Scalars['timestamptz']
  description: Scalars['String']
  id: Scalars['String']
  pageCount: Scalars['Int']
  publisher: Scalars['String']
  thumbnailUrl?: Maybe<Scalars['String']>
  title: Scalars['String']
}

/** columns and relationships of "book" */
export interface BookAuthorsArgs {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "book" */
export interface BookCategoriesArgs {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "book" */
export interface Book_Aggregate {
  __typename?: 'book_aggregate'
  aggregate?: Maybe<Book_Aggregate_Fields>
  nodes: Array<Book>
}

/** aggregate fields of "book" */
export interface Book_Aggregate_Fields {
  __typename?: 'book_aggregate_fields'
  avg?: Maybe<Book_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Book_Max_Fields>
  min?: Maybe<Book_Min_Fields>
  stddev?: Maybe<Book_Stddev_Fields>
  stddev_pop?: Maybe<Book_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Book_Stddev_Samp_Fields>
  sum?: Maybe<Book_Sum_Fields>
  var_pop?: Maybe<Book_Var_Pop_Fields>
  var_samp?: Maybe<Book_Var_Samp_Fields>
  variance?: Maybe<Book_Variance_Fields>
}

/** aggregate fields of "book" */
export interface Book_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Book_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "book" */
export interface Book_Aggregate_Order_By {
  avg?: Maybe<Book_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Book_Max_Order_By>
  min?: Maybe<Book_Min_Order_By>
  stddev?: Maybe<Book_Stddev_Order_By>
  stddev_pop?: Maybe<Book_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Book_Stddev_Samp_Order_By>
  sum?: Maybe<Book_Sum_Order_By>
  var_pop?: Maybe<Book_Var_Pop_Order_By>
  var_samp?: Maybe<Book_Var_Samp_Order_By>
  variance?: Maybe<Book_Variance_Order_By>
}

/** input type for inserting array relation for remote table "book" */
export interface Book_Arr_Rel_Insert_Input {
  data: Array<Book_Insert_Input>
  on_conflict?: Maybe<Book_On_Conflict>
}

/** aggregate avg on columns */
export interface Book_Avg_Fields {
  __typename?: 'book_avg_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "book" */
export interface Book_Avg_Order_By {
  pageCount?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "book". All fields are combined with a logical 'AND'. */
export interface Book_Bool_Exp {
  _and?: Maybe<Array<Maybe<Book_Bool_Exp>>>
  _not?: Maybe<Book_Bool_Exp>
  _or?: Maybe<Array<Maybe<Book_Bool_Exp>>>
  authors?: Maybe<Json_Comparison_Exp>
  categories?: Maybe<Json_Comparison_Exp>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  pageCount?: Maybe<Int_Comparison_Exp>
  publisher?: Maybe<String_Comparison_Exp>
  thumbnailUrl?: Maybe<String_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "book" */
export enum Book_Constraint {
  /** unique or primary key constraint */
  BookPkey = 'book_pkey',
}

/** input type for incrementing integer column in table "book" */
export interface Book_Inc_Input {
  pageCount?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "book" */
export interface Book_Insert_Input {
  authors?: Maybe<Scalars['json']>
  categories?: Maybe<Scalars['json']>
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pageCount?: Maybe<Scalars['Int']>
  publisher?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Book_Max_Fields {
  __typename?: 'book_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pageCount?: Maybe<Scalars['Int']>
  publisher?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "book" */
export interface Book_Max_Order_By {
  createdAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  id?: Maybe<Order_By>
  pageCount?: Maybe<Order_By>
  publisher?: Maybe<Order_By>
  thumbnailUrl?: Maybe<Order_By>
  title?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Book_Min_Fields {
  __typename?: 'book_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pageCount?: Maybe<Scalars['Int']>
  publisher?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "book" */
export interface Book_Min_Order_By {
  createdAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  id?: Maybe<Order_By>
  pageCount?: Maybe<Order_By>
  publisher?: Maybe<Order_By>
  thumbnailUrl?: Maybe<Order_By>
  title?: Maybe<Order_By>
}

/** response of any mutation on the table "book" */
export interface Book_Mutation_Response {
  __typename?: 'book_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Book>
}

/** input type for inserting object relation for remote table "book" */
export interface Book_Obj_Rel_Insert_Input {
  data: Book_Insert_Input
  on_conflict?: Maybe<Book_On_Conflict>
}

/** on conflict condition type for table "book" */
export interface Book_On_Conflict {
  constraint: Book_Constraint
  update_columns: Array<Book_Update_Column>
  where?: Maybe<Book_Bool_Exp>
}

/** ordering options when selecting data from "book" */
export interface Book_Order_By {
  authors?: Maybe<Order_By>
  categories?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  id?: Maybe<Order_By>
  pageCount?: Maybe<Order_By>
  publisher?: Maybe<Order_By>
  thumbnailUrl?: Maybe<Order_By>
  title?: Maybe<Order_By>
}

/** primary key columns input for table: "book" */
export interface Book_Pk_Columns_Input {
  id: Scalars['String']
}

/** select columns of table "book" */
export enum Book_Select_Column {
  /** column name */
  Authors = 'authors',
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PageCount = 'pageCount',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  ThumbnailUrl = 'thumbnailUrl',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "book" */
export interface Book_Set_Input {
  authors?: Maybe<Scalars['json']>
  categories?: Maybe<Scalars['json']>
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pageCount?: Maybe<Scalars['Int']>
  publisher?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export interface Book_Stddev_Fields {
  __typename?: 'book_stddev_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "book" */
export interface Book_Stddev_Order_By {
  pageCount?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export interface Book_Stddev_Pop_Fields {
  __typename?: 'book_stddev_pop_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "book" */
export interface Book_Stddev_Pop_Order_By {
  pageCount?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export interface Book_Stddev_Samp_Fields {
  __typename?: 'book_stddev_samp_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "book" */
export interface Book_Stddev_Samp_Order_By {
  pageCount?: Maybe<Order_By>
}

/** aggregate sum on columns */
export interface Book_Sum_Fields {
  __typename?: 'book_sum_fields'
  pageCount?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "book" */
export interface Book_Sum_Order_By {
  pageCount?: Maybe<Order_By>
}

/** update columns of table "book" */
export enum Book_Update_Column {
  /** column name */
  Authors = 'authors',
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PageCount = 'pageCount',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  ThumbnailUrl = 'thumbnailUrl',
  /** column name */
  Title = 'title',
}

/** aggregate var_pop on columns */
export interface Book_Var_Pop_Fields {
  __typename?: 'book_var_pop_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "book" */
export interface Book_Var_Pop_Order_By {
  pageCount?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export interface Book_Var_Samp_Fields {
  __typename?: 'book_var_samp_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "book" */
export interface Book_Var_Samp_Order_By {
  pageCount?: Maybe<Order_By>
}

/** aggregate variance on columns */
export interface Book_Variance_Fields {
  __typename?: 'book_variance_fields'
  pageCount?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "book" */
export interface Book_Variance_Order_By {
  pageCount?: Maybe<Order_By>
}

/** columns and relationships of "borrow" */
export interface Borrow {
  __typename?: 'borrow'
  /** An object relationship */
  borrower: User
  borrowerId: Scalars['String']
  /** An object relationship */
  copy: Copy
  copyId: Scalars['uuid']
  createdAt: Scalars['timestamptz']
  id: Scalars['uuid']
  status: Scalars['String']
}

/** aggregated selection of "borrow" */
export interface Borrow_Aggregate {
  __typename?: 'borrow_aggregate'
  aggregate?: Maybe<Borrow_Aggregate_Fields>
  nodes: Array<Borrow>
}

/** aggregate fields of "borrow" */
export interface Borrow_Aggregate_Fields {
  __typename?: 'borrow_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Borrow_Max_Fields>
  min?: Maybe<Borrow_Min_Fields>
}

/** aggregate fields of "borrow" */
export interface Borrow_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Borrow_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "borrow" */
export interface Borrow_Aggregate_Order_By {
  count?: Maybe<Order_By>
  max?: Maybe<Borrow_Max_Order_By>
  min?: Maybe<Borrow_Min_Order_By>
}

/** input type for inserting array relation for remote table "borrow" */
export interface Borrow_Arr_Rel_Insert_Input {
  data: Array<Borrow_Insert_Input>
  on_conflict?: Maybe<Borrow_On_Conflict>
}

/** Boolean expression to filter rows from the table "borrow". All fields are combined with a logical 'AND'. */
export interface Borrow_Bool_Exp {
  _and?: Maybe<Array<Maybe<Borrow_Bool_Exp>>>
  _not?: Maybe<Borrow_Bool_Exp>
  _or?: Maybe<Array<Maybe<Borrow_Bool_Exp>>>
  borrower?: Maybe<User_Bool_Exp>
  borrowerId?: Maybe<String_Comparison_Exp>
  copy?: Maybe<Copy_Bool_Exp>
  copyId?: Maybe<Uuid_Comparison_Exp>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "borrow" */
export enum Borrow_Constraint {
  /** unique or primary key constraint */
  BorrowPkey = 'borrow_pkey',
}

/** input type for inserting data into table "borrow" */
export interface Borrow_Insert_Input {
  borrower?: Maybe<User_Obj_Rel_Insert_Input>
  borrowerId?: Maybe<Scalars['String']>
  copy?: Maybe<Copy_Obj_Rel_Insert_Input>
  copyId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Borrow_Max_Fields {
  __typename?: 'borrow_max_fields'
  borrowerId?: Maybe<Scalars['String']>
  copyId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "borrow" */
export interface Borrow_Max_Order_By {
  borrowerId?: Maybe<Order_By>
  copyId?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Borrow_Min_Fields {
  __typename?: 'borrow_min_fields'
  borrowerId?: Maybe<Scalars['String']>
  copyId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "borrow" */
export interface Borrow_Min_Order_By {
  borrowerId?: Maybe<Order_By>
  copyId?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
}

/** response of any mutation on the table "borrow" */
export interface Borrow_Mutation_Response {
  __typename?: 'borrow_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Borrow>
}

/** input type for inserting object relation for remote table "borrow" */
export interface Borrow_Obj_Rel_Insert_Input {
  data: Borrow_Insert_Input
  on_conflict?: Maybe<Borrow_On_Conflict>
}

/** on conflict condition type for table "borrow" */
export interface Borrow_On_Conflict {
  constraint: Borrow_Constraint
  update_columns: Array<Borrow_Update_Column>
  where?: Maybe<Borrow_Bool_Exp>
}

/** ordering options when selecting data from "borrow" */
export interface Borrow_Order_By {
  borrower?: Maybe<User_Order_By>
  borrowerId?: Maybe<Order_By>
  copy?: Maybe<Copy_Order_By>
  copyId?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  status?: Maybe<Order_By>
}

/** primary key columns input for table: "borrow" */
export interface Borrow_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "borrow" */
export enum Borrow_Select_Column {
  /** column name */
  BorrowerId = 'borrowerId',
  /** column name */
  CopyId = 'copyId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
}

/** input type for updating data in table "borrow" */
export interface Borrow_Set_Input {
  borrowerId?: Maybe<Scalars['String']>
  copyId?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['String']>
}

/** update columns of table "borrow" */
export enum Borrow_Update_Column {
  /** column name */
  BorrowerId = 'borrowerId',
  /** column name */
  CopyId = 'copyId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
}

/** columns and relationships of "comment" */
export interface Comment {
  __typename?: 'comment'
  /** An object relationship */
  author: User
  authorId: Scalars['String']
  /** An object relationship */
  book: Book
  bookId: Scalars['String']
  content: Scalars['String']
  createdAt: Scalars['timestamptz']
  id: Scalars['uuid']
}

/** aggregated selection of "comment" */
export interface Comment_Aggregate {
  __typename?: 'comment_aggregate'
  aggregate?: Maybe<Comment_Aggregate_Fields>
  nodes: Array<Comment>
}

/** aggregate fields of "comment" */
export interface Comment_Aggregate_Fields {
  __typename?: 'comment_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Comment_Max_Fields>
  min?: Maybe<Comment_Min_Fields>
}

/** aggregate fields of "comment" */
export interface Comment_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Comment_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "comment" */
export interface Comment_Aggregate_Order_By {
  count?: Maybe<Order_By>
  max?: Maybe<Comment_Max_Order_By>
  min?: Maybe<Comment_Min_Order_By>
}

/** input type for inserting array relation for remote table "comment" */
export interface Comment_Arr_Rel_Insert_Input {
  data: Array<Comment_Insert_Input>
  on_conflict?: Maybe<Comment_On_Conflict>
}

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export interface Comment_Bool_Exp {
  _and?: Maybe<Array<Maybe<Comment_Bool_Exp>>>
  _not?: Maybe<Comment_Bool_Exp>
  _or?: Maybe<Array<Maybe<Comment_Bool_Exp>>>
  author?: Maybe<User_Bool_Exp>
  authorId?: Maybe<String_Comparison_Exp>
  book?: Maybe<Book_Bool_Exp>
  bookId?: Maybe<String_Comparison_Exp>
  content?: Maybe<String_Comparison_Exp>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey',
}

/** input type for inserting data into table "comment" */
export interface Comment_Insert_Input {
  author?: Maybe<User_Obj_Rel_Insert_Input>
  authorId?: Maybe<Scalars['String']>
  book?: Maybe<Book_Obj_Rel_Insert_Input>
  bookId?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export interface Comment_Max_Fields {
  __typename?: 'comment_max_fields'
  authorId?: Maybe<Scalars['String']>
  bookId?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "comment" */
export interface Comment_Max_Order_By {
  authorId?: Maybe<Order_By>
  bookId?: Maybe<Order_By>
  content?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Comment_Min_Fields {
  __typename?: 'comment_min_fields'
  authorId?: Maybe<Scalars['String']>
  bookId?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "comment" */
export interface Comment_Min_Order_By {
  authorId?: Maybe<Order_By>
  bookId?: Maybe<Order_By>
  content?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** response of any mutation on the table "comment" */
export interface Comment_Mutation_Response {
  __typename?: 'comment_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Comment>
}

/** input type for inserting object relation for remote table "comment" */
export interface Comment_Obj_Rel_Insert_Input {
  data: Comment_Insert_Input
  on_conflict?: Maybe<Comment_On_Conflict>
}

/** on conflict condition type for table "comment" */
export interface Comment_On_Conflict {
  constraint: Comment_Constraint
  update_columns: Array<Comment_Update_Column>
  where?: Maybe<Comment_Bool_Exp>
}

/** ordering options when selecting data from "comment" */
export interface Comment_Order_By {
  author?: Maybe<User_Order_By>
  authorId?: Maybe<Order_By>
  book?: Maybe<Book_Order_By>
  bookId?: Maybe<Order_By>
  content?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** primary key columns input for table: "comment" */
export interface Comment_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "comment" */
export enum Comment_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  BookId = 'bookId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "comment" */
export interface Comment_Set_Input {
  authorId?: Maybe<Scalars['String']>
  bookId?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
}

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  BookId = 'bookId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
}

/** columns and relationships of "copy" */
export interface Copy {
  __typename?: 'copy'
  /** An object relationship */
  book: Book
  bookId: Scalars['String']
  condition: Scalars['String']
  createdAt: Scalars['timestamptz']
  id: Scalars['uuid']
  /** An object relationship */
  owner: User
  ownerId: Scalars['String']
}

/** aggregated selection of "copy" */
export interface Copy_Aggregate {
  __typename?: 'copy_aggregate'
  aggregate?: Maybe<Copy_Aggregate_Fields>
  nodes: Array<Copy>
}

/** aggregate fields of "copy" */
export interface Copy_Aggregate_Fields {
  __typename?: 'copy_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Copy_Max_Fields>
  min?: Maybe<Copy_Min_Fields>
}

/** aggregate fields of "copy" */
export interface Copy_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<Copy_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "copy" */
export interface Copy_Aggregate_Order_By {
  count?: Maybe<Order_By>
  max?: Maybe<Copy_Max_Order_By>
  min?: Maybe<Copy_Min_Order_By>
}

/** input type for inserting array relation for remote table "copy" */
export interface Copy_Arr_Rel_Insert_Input {
  data: Array<Copy_Insert_Input>
  on_conflict?: Maybe<Copy_On_Conflict>
}

/** Boolean expression to filter rows from the table "copy". All fields are combined with a logical 'AND'. */
export interface Copy_Bool_Exp {
  _and?: Maybe<Array<Maybe<Copy_Bool_Exp>>>
  _not?: Maybe<Copy_Bool_Exp>
  _or?: Maybe<Array<Maybe<Copy_Bool_Exp>>>
  book?: Maybe<Book_Bool_Exp>
  bookId?: Maybe<String_Comparison_Exp>
  condition?: Maybe<String_Comparison_Exp>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  owner?: Maybe<User_Bool_Exp>
  ownerId?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "copy" */
export enum Copy_Constraint {
  /** unique or primary key constraint */
  CopyPkey = 'copy_pkey',
}

/** input type for inserting data into table "copy" */
export interface Copy_Insert_Input {
  book?: Maybe<Book_Obj_Rel_Insert_Input>
  bookId?: Maybe<Scalars['String']>
  condition?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  owner?: Maybe<User_Obj_Rel_Insert_Input>
  ownerId?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface Copy_Max_Fields {
  __typename?: 'copy_max_fields'
  bookId?: Maybe<Scalars['String']>
  condition?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "copy" */
export interface Copy_Max_Order_By {
  bookId?: Maybe<Order_By>
  condition?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface Copy_Min_Fields {
  __typename?: 'copy_min_fields'
  bookId?: Maybe<Scalars['String']>
  condition?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "copy" */
export interface Copy_Min_Order_By {
  bookId?: Maybe<Order_By>
  condition?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
}

/** response of any mutation on the table "copy" */
export interface Copy_Mutation_Response {
  __typename?: 'copy_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Copy>
}

/** input type for inserting object relation for remote table "copy" */
export interface Copy_Obj_Rel_Insert_Input {
  data: Copy_Insert_Input
  on_conflict?: Maybe<Copy_On_Conflict>
}

/** on conflict condition type for table "copy" */
export interface Copy_On_Conflict {
  constraint: Copy_Constraint
  update_columns: Array<Copy_Update_Column>
  where?: Maybe<Copy_Bool_Exp>
}

/** ordering options when selecting data from "copy" */
export interface Copy_Order_By {
  book?: Maybe<Book_Order_By>
  bookId?: Maybe<Order_By>
  condition?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  owner?: Maybe<User_Order_By>
  ownerId?: Maybe<Order_By>
}

/** primary key columns input for table: "copy" */
export interface Copy_Pk_Columns_Input {
  id: Scalars['uuid']
}

/** select columns of table "copy" */
export enum Copy_Select_Column {
  /** column name */
  BookId = 'bookId',
  /** column name */
  Condition = 'condition',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
}

/** input type for updating data in table "copy" */
export interface Copy_Set_Input {
  bookId?: Maybe<Scalars['String']>
  condition?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['String']>
}

/** update columns of table "copy" */
export enum Copy_Update_Column {
  /** column name */
  BookId = 'bookId',
  /** column name */
  Condition = 'condition',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'ownerId',
}

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export interface Json_Comparison_Exp {
  _eq?: Maybe<Scalars['json']>
  _gt?: Maybe<Scalars['json']>
  _gte?: Maybe<Scalars['json']>
  _in?: Maybe<Array<Scalars['json']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['json']>
  _lte?: Maybe<Scalars['json']>
  _neq?: Maybe<Scalars['json']>
  _nin?: Maybe<Array<Scalars['json']>>
}

/** mutation root */
export interface Mutation_Root {
  __typename?: 'mutation_root'
  /** delete data from the table: "book" */
  delete_book?: Maybe<Book_Mutation_Response>
  /** delete single row from the table: "book" */
  delete_book_by_pk?: Maybe<Book>
  /** delete data from the table: "borrow" */
  delete_borrow?: Maybe<Borrow_Mutation_Response>
  /** delete single row from the table: "borrow" */
  delete_borrow_by_pk?: Maybe<Borrow>
  /** delete data from the table: "comment" */
  delete_comment?: Maybe<Comment_Mutation_Response>
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>
  /** delete data from the table: "copy" */
  delete_copy?: Maybe<Copy_Mutation_Response>
  /** delete single row from the table: "copy" */
  delete_copy_by_pk?: Maybe<Copy>
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>
  /** insert data into the table: "book" */
  insert_book?: Maybe<Book_Mutation_Response>
  /** insert a single row into the table: "book" */
  insert_book_one?: Maybe<Book>
  /** insert data into the table: "borrow" */
  insert_borrow?: Maybe<Borrow_Mutation_Response>
  /** insert a single row into the table: "borrow" */
  insert_borrow_one?: Maybe<Borrow>
  /** insert data into the table: "comment" */
  insert_comment?: Maybe<Comment_Mutation_Response>
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>
  /** insert data into the table: "copy" */
  insert_copy?: Maybe<Copy_Mutation_Response>
  /** insert a single row into the table: "copy" */
  insert_copy_one?: Maybe<Copy>
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>
  /** update data of the table: "book" */
  update_book?: Maybe<Book_Mutation_Response>
  /** update single row of the table: "book" */
  update_book_by_pk?: Maybe<Book>
  /** update data of the table: "borrow" */
  update_borrow?: Maybe<Borrow_Mutation_Response>
  /** update single row of the table: "borrow" */
  update_borrow_by_pk?: Maybe<Borrow>
  /** update data of the table: "comment" */
  update_comment?: Maybe<Comment_Mutation_Response>
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>
  /** update data of the table: "copy" */
  update_copy?: Maybe<Copy_Mutation_Response>
  /** update single row of the table: "copy" */
  update_copy_by_pk?: Maybe<Copy>
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>
}

/** mutation root */
export interface Mutation_RootDelete_BookArgs {
  where: Book_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Book_By_PkArgs {
  id: Scalars['String']
}

/** mutation root */
export interface Mutation_RootDelete_BorrowArgs {
  where: Borrow_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Borrow_By_PkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDelete_CommentArgs {
  where: Comment_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Comment_By_PkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDelete_CopyArgs {
  where: Copy_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_Copy_By_PkArgs {
  id: Scalars['uuid']
}

/** mutation root */
export interface Mutation_RootDelete_UserArgs {
  where: User_Bool_Exp
}

/** mutation root */
export interface Mutation_RootDelete_User_By_PkArgs {
  id: Scalars['String']
}

/** mutation root */
export interface Mutation_RootInsert_BookArgs {
  objects: Array<Book_Insert_Input>
  on_conflict?: Maybe<Book_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Book_OneArgs {
  object: Book_Insert_Input
  on_conflict?: Maybe<Book_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_BorrowArgs {
  objects: Array<Borrow_Insert_Input>
  on_conflict?: Maybe<Borrow_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Borrow_OneArgs {
  object: Borrow_Insert_Input
  on_conflict?: Maybe<Borrow_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_CommentArgs {
  objects: Array<Comment_Insert_Input>
  on_conflict?: Maybe<Comment_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Comment_OneArgs {
  object: Comment_Insert_Input
  on_conflict?: Maybe<Comment_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_CopyArgs {
  objects: Array<Copy_Insert_Input>
  on_conflict?: Maybe<Copy_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_Copy_OneArgs {
  object: Copy_Insert_Input
  on_conflict?: Maybe<Copy_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_UserArgs {
  objects: Array<User_Insert_Input>
  on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export interface Mutation_RootInsert_User_OneArgs {
  object: User_Insert_Input
  on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export interface Mutation_RootUpdate_BookArgs {
  _inc?: Maybe<Book_Inc_Input>
  _set?: Maybe<Book_Set_Input>
  where: Book_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_Book_By_PkArgs {
  _inc?: Maybe<Book_Inc_Input>
  _set?: Maybe<Book_Set_Input>
  pk_columns: Book_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdate_BorrowArgs {
  _set?: Maybe<Borrow_Set_Input>
  where: Borrow_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_Borrow_By_PkArgs {
  _set?: Maybe<Borrow_Set_Input>
  pk_columns: Borrow_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdate_CommentArgs {
  _set?: Maybe<Comment_Set_Input>
  where: Comment_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_Comment_By_PkArgs {
  _set?: Maybe<Comment_Set_Input>
  pk_columns: Comment_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdate_CopyArgs {
  _set?: Maybe<Copy_Set_Input>
  where: Copy_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_Copy_By_PkArgs {
  _set?: Maybe<Copy_Set_Input>
  pk_columns: Copy_Pk_Columns_Input
}

/** mutation root */
export interface Mutation_RootUpdate_UserArgs {
  _set?: Maybe<User_Set_Input>
  where: User_Bool_Exp
}

/** mutation root */
export interface Mutation_RootUpdate_User_By_PkArgs {
  _set?: Maybe<User_Set_Input>
  pk_columns: User_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export interface Query_Root {
  __typename?: 'query_root'
  /** fetch data from the table: "book" */
  book: Array<Book>
  /** fetch aggregated fields from the table: "book" */
  book_aggregate: Book_Aggregate
  /** fetch data from the table: "book" using primary key columns */
  book_by_pk?: Maybe<Book>
  /** fetch data from the table: "borrow" */
  borrow: Array<Borrow>
  /** fetch aggregated fields from the table: "borrow" */
  borrow_aggregate: Borrow_Aggregate
  /** fetch data from the table: "borrow" using primary key columns */
  borrow_by_pk?: Maybe<Borrow>
  /** fetch data from the table: "comment" */
  comment: Array<Comment>
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>
  /** fetch data from the table: "copy" */
  copy: Array<Copy>
  /** fetch aggregated fields from the table: "copy" */
  copy_aggregate: Copy_Aggregate
  /** fetch data from the table: "copy" using primary key columns */
  copy_by_pk?: Maybe<Copy>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
}

/** query root */
export interface Query_RootBookArgs {
  distinct_on?: Maybe<Array<Book_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Book_Order_By>>
  where?: Maybe<Book_Bool_Exp>
}

/** query root */
export interface Query_RootBook_AggregateArgs {
  distinct_on?: Maybe<Array<Book_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Book_Order_By>>
  where?: Maybe<Book_Bool_Exp>
}

/** query root */
export interface Query_RootBook_By_PkArgs {
  id: Scalars['String']
}

/** query root */
export interface Query_RootBorrowArgs {
  distinct_on?: Maybe<Array<Borrow_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Borrow_Order_By>>
  where?: Maybe<Borrow_Bool_Exp>
}

/** query root */
export interface Query_RootBorrow_AggregateArgs {
  distinct_on?: Maybe<Array<Borrow_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Borrow_Order_By>>
  where?: Maybe<Borrow_Bool_Exp>
}

/** query root */
export interface Query_RootBorrow_By_PkArgs {
  id: Scalars['uuid']
}

/** query root */
export interface Query_RootCommentArgs {
  distinct_on?: Maybe<Array<Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comment_Order_By>>
  where?: Maybe<Comment_Bool_Exp>
}

/** query root */
export interface Query_RootComment_AggregateArgs {
  distinct_on?: Maybe<Array<Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comment_Order_By>>
  where?: Maybe<Comment_Bool_Exp>
}

/** query root */
export interface Query_RootComment_By_PkArgs {
  id: Scalars['uuid']
}

/** query root */
export interface Query_RootCopyArgs {
  distinct_on?: Maybe<Array<Copy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Copy_Order_By>>
  where?: Maybe<Copy_Bool_Exp>
}

/** query root */
export interface Query_RootCopy_AggregateArgs {
  distinct_on?: Maybe<Array<Copy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Copy_Order_By>>
  where?: Maybe<Copy_Bool_Exp>
}

/** query root */
export interface Query_RootCopy_By_PkArgs {
  id: Scalars['uuid']
}

/** query root */
export interface Query_RootUserArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** query root */
export interface Query_RootUser_AggregateArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** query root */
export interface Query_RootUser_By_PkArgs {
  id: Scalars['String']
}

/** subscription root */
export interface Subscription_Root {
  __typename?: 'subscription_root'
  /** fetch data from the table: "book" */
  book: Array<Book>
  /** fetch aggregated fields from the table: "book" */
  book_aggregate: Book_Aggregate
  /** fetch data from the table: "book" using primary key columns */
  book_by_pk?: Maybe<Book>
  /** fetch data from the table: "borrow" */
  borrow: Array<Borrow>
  /** fetch aggregated fields from the table: "borrow" */
  borrow_aggregate: Borrow_Aggregate
  /** fetch data from the table: "borrow" using primary key columns */
  borrow_by_pk?: Maybe<Borrow>
  /** fetch data from the table: "comment" */
  comment: Array<Comment>
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>
  /** fetch data from the table: "copy" */
  copy: Array<Copy>
  /** fetch aggregated fields from the table: "copy" */
  copy_aggregate: Copy_Aggregate
  /** fetch data from the table: "copy" using primary key columns */
  copy_by_pk?: Maybe<Copy>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
}

/** subscription root */
export interface Subscription_RootBookArgs {
  distinct_on?: Maybe<Array<Book_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Book_Order_By>>
  where?: Maybe<Book_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootBook_AggregateArgs {
  distinct_on?: Maybe<Array<Book_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Book_Order_By>>
  where?: Maybe<Book_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootBook_By_PkArgs {
  id: Scalars['String']
}

/** subscription root */
export interface Subscription_RootBorrowArgs {
  distinct_on?: Maybe<Array<Borrow_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Borrow_Order_By>>
  where?: Maybe<Borrow_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootBorrow_AggregateArgs {
  distinct_on?: Maybe<Array<Borrow_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Borrow_Order_By>>
  where?: Maybe<Borrow_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootBorrow_By_PkArgs {
  id: Scalars['uuid']
}

/** subscription root */
export interface Subscription_RootCommentArgs {
  distinct_on?: Maybe<Array<Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comment_Order_By>>
  where?: Maybe<Comment_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootComment_AggregateArgs {
  distinct_on?: Maybe<Array<Comment_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comment_Order_By>>
  where?: Maybe<Comment_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootComment_By_PkArgs {
  id: Scalars['uuid']
}

/** subscription root */
export interface Subscription_RootCopyArgs {
  distinct_on?: Maybe<Array<Copy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Copy_Order_By>>
  where?: Maybe<Copy_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootCopy_AggregateArgs {
  distinct_on?: Maybe<Array<Copy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Copy_Order_By>>
  where?: Maybe<Copy_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootCopy_By_PkArgs {
  id: Scalars['uuid']
}

/** subscription root */
export interface Subscription_RootUserArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootUser_AggregateArgs {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** subscription root */
export interface Subscription_RootUser_By_PkArgs {
  id: Scalars['String']
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user" */
export interface User {
  __typename?: 'user'
  createdAt: Scalars['timestamptz']
  description?: Maybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['String']
  pictureUrl?: Maybe<Scalars['String']>
  username: Scalars['String']
}

/** aggregated selection of "user" */
export interface User_Aggregate {
  __typename?: 'user_aggregate'
  aggregate?: Maybe<User_Aggregate_Fields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export interface User_Aggregate_Fields {
  __typename?: 'user_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<User_Max_Fields>
  min?: Maybe<User_Min_Fields>
}

/** aggregate fields of "user" */
export interface User_Aggregate_FieldsCountArgs {
  columns?: Maybe<Array<User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user" */
export interface User_Aggregate_Order_By {
  count?: Maybe<Order_By>
  max?: Maybe<User_Max_Order_By>
  min?: Maybe<User_Min_Order_By>
}

/** input type for inserting array relation for remote table "user" */
export interface User_Arr_Rel_Insert_Input {
  data: Array<User_Insert_Input>
  on_conflict?: Maybe<User_On_Conflict>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface User_Bool_Exp {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>
  _not?: Maybe<User_Bool_Exp>
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>
  createdAt?: Maybe<Timestamptz_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  pictureUrl?: Maybe<String_Comparison_Exp>
  username?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'users_username_key',
}

/** input type for inserting data into table "user" */
export interface User_Insert_Input {
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pictureUrl?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export interface User_Max_Fields {
  __typename?: 'user_max_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pictureUrl?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "user" */
export interface User_Max_Order_By {
  createdAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  pictureUrl?: Maybe<Order_By>
  username?: Maybe<Order_By>
}

/** aggregate min on columns */
export interface User_Min_Fields {
  __typename?: 'user_min_fields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pictureUrl?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "user" */
export interface User_Min_Order_By {
  createdAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  pictureUrl?: Maybe<Order_By>
  username?: Maybe<Order_By>
}

/** response of any mutation on the table "user" */
export interface User_Mutation_Response {
  __typename?: 'user_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export interface User_Obj_Rel_Insert_Input {
  data: User_Insert_Input
  on_conflict?: Maybe<User_On_Conflict>
}

/** on conflict condition type for table "user" */
export interface User_On_Conflict {
  constraint: User_Constraint
  update_columns: Array<User_Update_Column>
  where?: Maybe<User_Bool_Exp>
}

/** ordering options when selecting data from "user" */
export interface User_Order_By {
  createdAt?: Maybe<Order_By>
  description?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  pictureUrl?: Maybe<Order_By>
  username?: Maybe<Order_By>
}

/** primary key columns input for table: "user" */
export interface User_Pk_Columns_Input {
  id: Scalars['String']
}

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  PictureUrl = 'pictureUrl',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "user" */
export interface User_Set_Input {
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  pictureUrl?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  PictureUrl = 'pictureUrl',
  /** column name */
  Username = 'username',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type MeQueryVariables = Exact<{
  id: Scalars['String']
}>

export type MeQuery = { __typename?: 'query_root' } & {
  user_by_pk?: Maybe<{ __typename?: 'user' } & UserFragment>
}

export type UserFragment = { __typename?: 'user' } & Pick<
  User,
  'id' | 'email' | 'username' | 'description' | 'pictureUrl' | 'createdAt'
>

export const UserFragmentDoc = gql`
  fragment user on user {
    id
    email
    username
    description
    pictureUrl
    createdAt
  }
`
export const MeDocument = gql`
  query me($id: String!) {
    user_by_pk(id: $id) {
      ...user
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>
