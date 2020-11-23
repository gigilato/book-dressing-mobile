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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
  /** The Any scalar type is used in operations and types that involve any type of value. */
  Any: any
  /** The Object scalar type is used in operations and types that involve objects. */
  Object: any
  /** The Date scalar type is used in operations and types that involve dates. */
  Date: any
  /** The Bytes scalar type is used in operations and types that involve base 64 binary data. */
  Bytes: any
  /** The File scalar type is used in operations and types that involve files. */
  File: any
}

/** The FileInfo object type is used to return the information about files. */
export interface FileInfo {
  __typename?: 'FileInfo'
  /** This is the file name. */
  name: Scalars['String']
  /** This is the url in which the file can be downloaded. */
  url: Scalars['String']
}

export interface FileInput {
  /** A File Scalar can be an url or a FileInfo object. If this field is set to null the file will be unlinked. */
  file?: Maybe<Scalars['File']>
  /** Use this field if you want to create a new file. */
  upload?: Maybe<Scalars['Upload']>
  /** Use this field if you want to unlink the file (the file will not be deleted on cloud storage) */
  unlink?: Maybe<Scalars['Boolean']>
}

/** The GeoPointInput type is used in operations that involve inputting fields of type geo point. */
export interface GeoPointInput {
  /** This is the latitude. */
  latitude: Scalars['Float']
  /** This is the longitude. */
  longitude: Scalars['Float']
}

/** The GeoPoint object type is used to return the information about geo point fields. */
export interface GeoPoint {
  __typename?: 'GeoPoint'
  /** This is the latitude. */
  latitude: Scalars['Float']
  /** This is the longitude. */
  longitude: Scalars['Float']
}

/** The ParseObject interface type is used as a base type for the auto generated object types. */
export interface ParseObject {
  /** This is the object id. */
  objectId: Scalars['ID']
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']
  ACL: Acl
}

/** The ReadPreference enum type is used in queries in order to select in which database replica the operation must run. */
export enum ReadPreference {
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED',
  Nearest = 'NEAREST',
}

/** The ReadOptionsInputt type is used in queries in order to set the read preferences. */
export interface ReadOptionsInput {
  /** The read preference for the main query to be executed. */
  readPreference?: Maybe<ReadPreference>
  /** The read preference for the queries to be executed to include fields. */
  includeReadPreference?: Maybe<ReadPreference>
  /** The read preference for the subqueries that may be required. */
  subqueryReadPreference?: Maybe<ReadPreference>
}

/** The SearchInput type is used to specifiy a search operation on a full text search. */
export interface SearchInput {
  /** This is the term to be searched. */
  term: Scalars['String']
  /** This is the language to tetermine the list of stop words and the rules for tokenizer. */
  language?: Maybe<Scalars['String']>
  /** This is the flag to enable or disable case sensitive search. */
  caseSensitive?: Maybe<Scalars['Boolean']>
  /** This is the flag to enable or disable diacritic sensitive search. */
  diacriticSensitive?: Maybe<Scalars['Boolean']>
}

/** The TextInput type is used to specify a text operation on a constraint. */
export interface TextInput {
  /** This is the search to be executed. */
  search: SearchInput
}

/** The BoxInput type is used to specifiy a box operation on a within geo query. */
export interface BoxInput {
  /** This is the bottom left coordinates of the box. */
  bottomLeft: GeoPointInput
  /** This is the upper right coordinates of the box. */
  upperRight: GeoPointInput
}

/** The WithinInput type is used to specify a within operation on a constraint. */
export interface WithinInput {
  /** This is the box to be specified. */
  box: BoxInput
}

/** The CenterSphereInput type is used to specifiy a centerSphere operation on a geoWithin query. */
export interface CenterSphereInput {
  /** This is the center of the sphere. */
  center: GeoPointInput
  /** This is the radius of the sphere. */
  distance: Scalars['Float']
}

/** The GeoWithinInput type is used to specify a geoWithin operation on a constraint. */
export interface GeoWithinInput {
  /** This is the polygon to be specified. */
  polygon?: Maybe<Array<GeoPointInput>>
  /** This is the sphere to be specified. */
  centerSphere?: Maybe<CenterSphereInput>
}

/** The GeoIntersectsInput type is used to specify a geoIntersects operation on a constraint. */
export interface GeoIntersectsInput {
  /** This is the point to be specified. */
  point?: Maybe<GeoPointInput>
}

/** The IdWhereInput input type is used in operations that involve filtering objects by an id. */
export interface IdWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['ID']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['ID']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['ID']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['ID']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['ID']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['ID']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The StringWhereInput input type is used in operations that involve filtering objects by a field of type String. */
export interface StringWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['String']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['String']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['String']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['String']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: Maybe<Scalars['String']>
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: Maybe<Scalars['String']>
  /** This is the $text operator to specify a full text search constraint. */
  text?: Maybe<TextInput>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The NumberWhereInput input type is used in operations that involve filtering objects by a field of type Number. */
export interface NumberWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['Float']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['Float']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['Float']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Float']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['Float']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Float']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The BooleanWhereInput input type is used in operations that involve filtering objects by a field of type Boolean. */
export interface BooleanWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['Boolean']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['Boolean']>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The ArrayWhereInput input type is used in operations that involve filtering objects by a field of type Array. */
export interface ArrayWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['Any']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['Any']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['Any']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Any']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['Any']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Any']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['Any']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['Any']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the containedBy operator to specify a constraint to select the objects where the values of an array field is contained by another specified array. */
  containedBy?: Maybe<Array<Maybe<Scalars['Any']>>>
  /** This is the contains operator to specify a constraint to select the objects where the values of an array field contain all elements of another specified array. */
  contains?: Maybe<Array<Maybe<Scalars['Any']>>>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** An entry from an object, i.e., a pair of key and value. */
export interface KeyValueInput {
  /** The key used to retrieve the value of this entry. */
  key: Scalars['String']
  /** The value of the entry. Could be any type of scalar data. */
  value: Scalars['Any']
}

/** The ObjectWhereInput input type is used in operations that involve filtering result by a field of type Object. */
export interface ObjectWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<KeyValueInput>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<KeyValueInput>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<KeyValueInput>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<KeyValueInput>>>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<KeyValueInput>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<KeyValueInput>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<KeyValueInput>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<KeyValueInput>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The DateWhereInput input type is used in operations that involve filtering objects by a field of type Date. */
export interface DateWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['Date']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['Date']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['Date']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Date']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['Date']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Date']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['Date']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The BytesWhereInput input type is used in operations that involve filtering objects by a field of type Bytes. */
export interface BytesWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['Bytes']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['Bytes']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['Bytes']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Bytes']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['Bytes']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Bytes']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['Bytes']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['Bytes']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The FileWhereInput input type is used in operations that involve filtering objects by a field of type File. */
export interface FileWhereInput {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: Maybe<Scalars['File']>
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: Maybe<Scalars['File']>
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: Maybe<Scalars['File']>
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['File']>
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: Maybe<Scalars['File']>
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['File']>
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: Maybe<Array<Maybe<Scalars['File']>>>
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: Maybe<Array<Maybe<Scalars['File']>>>
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: Maybe<Scalars['String']>
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: Maybe<Scalars['String']>
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: Maybe<SelectInput>
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: Maybe<SelectInput>
}

/** The GeoPointWhereInput input type is used in operations that involve filtering objects by a field of type GeoPoint. */
export interface GeoPointWhereInput {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the nearSphere operator to specify a constraint to select the objects where the values of a geo point field is near to another geo point. */
  nearSphere?: Maybe<GeoPointInput>
  /** This is the maxDistance operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistance?: Maybe<Scalars['Float']>
  /** This is the maxDistanceInRadians operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistanceInRadians?: Maybe<Scalars['Float']>
  /** This is the maxDistanceInMiles operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in miles) from the geo point specified in the $nearSphere operator. */
  maxDistanceInMiles?: Maybe<Scalars['Float']>
  /** This is the maxDistanceInKilometers operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in kilometers) from the geo point specified in the $nearSphere operator. */
  maxDistanceInKilometers?: Maybe<Scalars['Float']>
  /** This is the within operator to specify a constraint to select the objects where the values of a geo point field is within a specified box. */
  within?: Maybe<WithinInput>
  /** This is the geoWithin operator to specify a constraint to select the objects where the values of a geo point field is within a specified polygon or sphere. */
  geoWithin?: Maybe<GeoWithinInput>
}

/** The PolygonWhereInput input type is used in operations that involve filtering objects by a field of type Polygon. */
export interface PolygonWhereInput {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: Maybe<Scalars['Boolean']>
  /** This is the geoIntersects operator to specify a constraint to select the objects where the values of a polygon field intersect a specified point. */
  geoIntersects?: Maybe<GeoIntersectsInput>
}

/** The Element object type is used to return array items' value. */
export interface Element {
  __typename?: 'Element'
  /** Return the value of the element in the array */
  value: Scalars['Any']
}

/** Allow to manage access rights. If not provided object will be publicly readable and writable */
export interface AclInput {
  /** Access control list for users. */
  users?: Maybe<Array<UserAclInput>>
  /** Access control list for roles. */
  roles?: Maybe<Array<RoleAclInput>>
  /** Public access control list. */
  public?: Maybe<PublicAclInput>
}

/** Allow to manage users in ACL. */
export interface UserAclInput {
  /** ID of the targetted User. */
  userId: Scalars['ID']
  /** Allow the user to read the current object. */
  read: Scalars['Boolean']
  /** Allow the user to write on the current object. */
  write: Scalars['Boolean']
}

/** Allow to manage roles in ACL. */
export interface RoleAclInput {
  /** Name of the targetted Role. */
  roleName: Scalars['String']
  /** Allow users who are members of the role to read the current object. */
  read: Scalars['Boolean']
  /** Allow users who are members of the role to write on the current object. */
  write: Scalars['Boolean']
}

/** Allow to manage public rights. */
export interface PublicAclInput {
  /** Allow anyone to read the current object. */
  read: Scalars['Boolean']
  /** Allow anyone to write on the current object. */
  write: Scalars['Boolean']
}

/** Current access control list of the current object. */
export interface Acl {
  __typename?: 'ACL'
  /** Access control list for users. */
  users?: Maybe<Array<UserAcl>>
  /** Access control list for roles. */
  roles?: Maybe<Array<RoleAcl>>
  /** Public access control list. */
  public?: Maybe<PublicAcl>
}

/** Allow to manage users in ACL. If read and write are null the users have read and write rights. */
export interface UserAcl {
  __typename?: 'UserACL'
  /** ID of the targetted User. */
  userId: Scalars['ID']
  /** Allow the user to read the current object. */
  read: Scalars['Boolean']
  /** Allow the user to write on the current object. */
  write: Scalars['Boolean']
}

/** Allow to manage roles in ACL. If read and write are null the role have read and write rights. */
export interface RoleAcl {
  __typename?: 'RoleACL'
  /** Name of the targetted Role. */
  roleName: Scalars['ID']
  /** Allow users who are members of the role to read the current object. */
  read: Scalars['Boolean']
  /** Allow users who are members of the role to write on the current object. */
  write: Scalars['Boolean']
}

/** Allow to manage public rights. */
export interface PublicAcl {
  __typename?: 'PublicACL'
  /** Allow anyone to read the current object. */
  read?: Maybe<Scalars['Boolean']>
  /** Allow anyone to write on the current object. */
  write?: Maybe<Scalars['Boolean']>
}

/** The SubqueryInput type is used to specify a sub query to another class. */
export interface SubqueryInput {
  /** This is the class name of the object. */
  className: Scalars['String']
  /** These are the conditions that the objects need to match in order to be found */
  where: Scalars['Object']
}

/** The SelectInput type is used to specify an inQueryKey or a notInQueryKey operation on a constraint. */
export interface SelectInput {
  /** This is the subquery to be executed. */
  query: SubqueryInput
  /** This is the key in the result of the subquery that must match (not match) the field. */
  key: Scalars['String']
}

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: Scalars['ID']
}

/** The SchemaFieldInput is used to specify a field of an object class schema. */
export interface SchemaFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaStringFieldInput is used to specify a field of type string for an object class schema. */
export interface SchemaStringFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaStringField is used to return information of a String field. */
export interface SchemaStringField extends SchemaField {
  __typename?: 'SchemaStringField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaField interface type is used as a base type for the different supported fields of an object class schema. */
export interface SchemaField {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaNumberFieldInput is used to specify a field of type number for an object class schema. */
export interface SchemaNumberFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaNumberField is used to return information of a Number field. */
export interface SchemaNumberField extends SchemaField {
  __typename?: 'SchemaNumberField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaBooleanFieldInput is used to specify a field of type boolean for an object class schema. */
export interface SchemaBooleanFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaBooleanField is used to return information of a Boolean field. */
export interface SchemaBooleanField extends SchemaField {
  __typename?: 'SchemaBooleanField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaArrayFieldInput is used to specify a field of type array for an object class schema. */
export interface SchemaArrayFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaArrayField is used to return information of an Array field. */
export interface SchemaArrayField extends SchemaField {
  __typename?: 'SchemaArrayField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaObjectFieldInput is used to specify a field of type object for an object class schema. */
export interface SchemaObjectFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaObjectField is used to return information of an Object field. */
export interface SchemaObjectField extends SchemaField {
  __typename?: 'SchemaObjectField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaDateFieldInput is used to specify a field of type date for an object class schema. */
export interface SchemaDateFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaDateField is used to return information of a Date field. */
export interface SchemaDateField extends SchemaField {
  __typename?: 'SchemaDateField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaFileFieldInput is used to specify a field of type file for an object class schema. */
export interface SchemaFileFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaFileField is used to return information of a File field. */
export interface SchemaFileField extends SchemaField {
  __typename?: 'SchemaFileField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaGeoPointFieldInput is used to specify a field of type geo point for an object class schema. */
export interface SchemaGeoPointFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaGeoPointField is used to return information of a Geo Point field. */
export interface SchemaGeoPointField extends SchemaField {
  __typename?: 'SchemaGeoPointField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaPolygonFieldInput is used to specify a field of type polygon for an object class schema. */
export interface SchemaPolygonFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaPolygonField is used to return information of a Polygon field. */
export interface SchemaPolygonField extends SchemaField {
  __typename?: 'SchemaPolygonField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaBytesFieldInput is used to specify a field of type bytes for an object class schema. */
export interface SchemaBytesFieldInput {
  /** This is the field name. */
  name: Scalars['String']
}

/** The SchemaBytesField is used to return information of a Bytes field. */
export interface SchemaBytesField extends SchemaField {
  __typename?: 'SchemaBytesField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The PointerFieldInput is used to specify a field of type pointer for an object class schema. */
export interface PointerFieldInput {
  /** This is the field name. */
  name: Scalars['String']
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']
}

/** The SchemaPointerField is used to return information of a Pointer field. */
export interface SchemaPointerField extends SchemaField {
  __typename?: 'SchemaPointerField'
  /** This is the field name. */
  name: Scalars['String']
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']
}

/** The RelationFieldInput is used to specify a field of type relation for an object class schema. */
export interface RelationFieldInput {
  /** This is the field name. */
  name: Scalars['String']
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']
}

/** The SchemaRelationField is used to return information of a Relation field. */
export interface SchemaRelationField extends SchemaField {
  __typename?: 'SchemaRelationField'
  /** This is the field name. */
  name: Scalars['String']
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']
}

/** The SchemaACLField is used to return information of an ACL field. */
export interface SchemaAclField extends SchemaField {
  __typename?: 'SchemaACLField'
  /** This is the field name. */
  name: Scalars['String']
}

/** The CreateClassSchemaInput type is used to specify the schema for a new object class to be created. */
export interface SchemaFieldsInput {
  /** These are the String fields to be added to the class schema. */
  addStrings?: Maybe<Array<SchemaStringFieldInput>>
  /** These are the Number fields to be added to the class schema. */
  addNumbers?: Maybe<Array<SchemaNumberFieldInput>>
  /** These are the Boolean fields to be added to the class schema. */
  addBooleans?: Maybe<Array<SchemaBooleanFieldInput>>
  /** These are the Array fields to be added to the class schema. */
  addArrays?: Maybe<Array<SchemaArrayFieldInput>>
  /** These are the Object fields to be added to the class schema. */
  addObjects?: Maybe<Array<SchemaObjectFieldInput>>
  /** These are the Date fields to be added to the class schema. */
  addDates?: Maybe<Array<SchemaDateFieldInput>>
  /** These are the File fields to be added to the class schema. */
  addFiles?: Maybe<Array<SchemaFileFieldInput>>
  /** This is the Geo Point field to be added to the class schema. Currently it is supported only one GeoPoint field per Class. */
  addGeoPoint?: Maybe<SchemaGeoPointFieldInput>
  /** These are the Polygon fields to be added to the class schema. */
  addPolygons?: Maybe<Array<SchemaPolygonFieldInput>>
  /** These are the Bytes fields to be added to the class schema. */
  addBytes?: Maybe<Array<SchemaBytesFieldInput>>
  /** These are the Pointer fields to be added to the class schema. */
  addPointers?: Maybe<Array<PointerFieldInput>>
  /** These are the Relation fields to be added to the class schema. */
  addRelations?: Maybe<Array<RelationFieldInput>>
  /** These are the fields to be removed from the class schema. */
  remove?: Maybe<Array<SchemaFieldInput>>
}

/** The Class type is used to return the information about an object class. */
export interface Class {
  __typename?: 'Class'
  /** This is the name of the object class. */
  name: Scalars['String']
  /** These are the schema's fields of the object class. */
  schemaFields: Array<SchemaField>
}

/** The CreateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export interface CreateRoleFieldsInput {
  ACL?: Maybe<AclInput>
  /** This is the object name. */
  name?: Maybe<Scalars['String']>
  /** This is the object users. */
  users?: Maybe<UserRelationInput>
  /** This is the object roles. */
  roles?: Maybe<RoleRelationInput>
}

/** The UpdateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export interface UpdateRoleFieldsInput {
  ACL?: Maybe<AclInput>
  /** This is the object name. */
  name?: Maybe<Scalars['String']>
  /** This is the object users. */
  users?: Maybe<UserRelationInput>
  /** This is the object roles. */
  roles?: Maybe<RoleRelationInput>
}

/** Allow to link OR add and link an object of the Role class. */
export interface RolePointerInput {
  /** Link an existing object from Role class. You can use either the global or the object id. */
  link?: Maybe<Scalars['ID']>
  /** Create and link an object from Role class. */
  createAndLink?: Maybe<CreateRoleFieldsInput>
}

/** Allow to add, remove, createAndAdd objects of the Role class into a relation field. */
export interface RoleRelationInput {
  /** Add existing objects from the Role class into the relation. You can use either the global or the object ids. */
  add?: Maybe<Array<Scalars['ID']>>
  /** Remove existing objects from the Role class out of the relation. You can use either the global or the object ids. */
  remove?: Maybe<Array<Scalars['ID']>>
  /** Create and add objects of the Role class into the relation. */
  createAndAdd?: Maybe<Array<CreateRoleFieldsInput>>
}

/** The RoleWhereInput input type is used in operations that involve filtering objects of Role class. */
export interface RoleWhereInput {
  /** This is the object objectId. */
  objectId?: Maybe<IdWhereInput>
  /** This is the object createdAt. */
  createdAt?: Maybe<DateWhereInput>
  /** This is the object updatedAt. */
  updatedAt?: Maybe<DateWhereInput>
  /** This is the object ACL. */
  ACL?: Maybe<ObjectWhereInput>
  /** This is the object name. */
  name?: Maybe<StringWhereInput>
  /** This is the object users. */
  users?: Maybe<UserRelationWhereInput>
  /** This is the object roles. */
  roles?: Maybe<RoleRelationWhereInput>
  /** This is the object id. */
  id?: Maybe<IdWhereInput>
  /** This is the OR operator to compound constraints. */
  OR?: Maybe<Array<RoleWhereInput>>
  /** This is the AND operator to compound constraints. */
  AND?: Maybe<Array<RoleWhereInput>>
  /** This is the NOR operator to compound constraints. */
  NOR?: Maybe<Array<RoleWhereInput>>
}

/** The RoleRelationWhereInput input type is used in operations that involve filtering objects of Role class. */
export interface RoleRelationWhereInput {
  /** Run a relational/pointer query where at least one child object can match. */
  have?: Maybe<RoleWhereInput>
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: Maybe<RoleWhereInput>
  /** Check if the relation/pointer contains objects. */
  exists?: Maybe<Scalars['Boolean']>
}

/** The RoleOrder input type is used when sorting objects of the Role class. */
export enum RoleOrder {
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

/** The Role object type is used in operations that involve outputting objects of Role class. */
export interface Role extends ParseObject, Node {
  __typename?: 'Role'
  /** The ID of an object */
  id: Scalars['ID']
  /** This is the object id. */
  objectId: Scalars['ID']
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']
  ACL: Acl
  /** This is the object name. */
  name?: Maybe<Scalars['String']>
  /** This is the object users. */
  users: UserConnection
  /** This is the object roles. */
  roles: RoleConnection
}

/** The Role object type is used in operations that involve outputting objects of Role class. */
export interface RoleUsersArgs {
  where?: Maybe<UserWhereInput>
  order?: Maybe<Array<UserOrder>>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  options?: Maybe<ReadOptionsInput>
}

/** The Role object type is used in operations that involve outputting objects of Role class. */
export interface RoleRolesArgs {
  where?: Maybe<RoleWhereInput>
  order?: Maybe<Array<RoleOrder>>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  options?: Maybe<ReadOptionsInput>
}

/** An edge in a connection. */
export interface RoleEdge {
  __typename?: 'RoleEdge'
  /** The item at the end of the edge */
  node?: Maybe<Role>
  /** A cursor for use in pagination */
  cursor: Scalars['String']
}

/** A connection to a list of items. */
export interface RoleConnection {
  __typename?: 'RoleConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoleEdge>>>
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']
}

/** Information about pagination in a connection. */
export interface PageInfo {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
}

export interface CreateRoleInput {
  /** These are the fields that will be used to create the new object. */
  fields?: Maybe<CreateRoleFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface CreateRolePayload {
  __typename?: 'CreateRolePayload'
  /** This is the created object. */
  role: Role
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UpdateRoleInput {
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']
  /** These are the fields that will be used to update the object. */
  fields?: Maybe<UpdateRoleFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UpdateRolePayload {
  __typename?: 'UpdateRolePayload'
  /** This is the updated object. */
  role: Role
  clientMutationId?: Maybe<Scalars['String']>
}

export interface DeleteRoleInput {
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface DeleteRolePayload {
  __typename?: 'DeleteRolePayload'
  /** This is the deleted object. */
  role: Role
  clientMutationId?: Maybe<Scalars['String']>
}

/** The CreateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export interface CreateUserFieldsInput {
  ACL?: Maybe<AclInput>
  /** This is the object username. */
  username: Scalars['String']
  /** This is the object password. */
  password: Scalars['String']
  /** This is the object email. */
  email?: Maybe<Scalars['String']>
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']>
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']>
}

/** The UpdateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export interface UpdateUserFieldsInput {
  ACL?: Maybe<AclInput>
  /** This is the object username. */
  username?: Maybe<Scalars['String']>
  /** This is the object password. */
  password?: Maybe<Scalars['String']>
  /** This is the object email. */
  email?: Maybe<Scalars['String']>
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']>
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']>
}

/** Allow to link OR add and link an object of the User class. */
export interface UserPointerInput {
  /** Link an existing object from User class. You can use either the global or the object id. */
  link?: Maybe<Scalars['ID']>
  /** Create and link an object from User class. */
  createAndLink?: Maybe<CreateUserFieldsInput>
}

/** Allow to add, remove, createAndAdd objects of the User class into a relation field. */
export interface UserRelationInput {
  /** Add existing objects from the User class into the relation. You can use either the global or the object ids. */
  add?: Maybe<Array<Scalars['ID']>>
  /** Remove existing objects from the User class out of the relation. You can use either the global or the object ids. */
  remove?: Maybe<Array<Scalars['ID']>>
  /** Create and add objects of the User class into the relation. */
  createAndAdd?: Maybe<Array<CreateUserFieldsInput>>
}

/** The UserWhereInput input type is used in operations that involve filtering objects of User class. */
export interface UserWhereInput {
  /** This is the object objectId. */
  objectId?: Maybe<IdWhereInput>
  /** This is the object createdAt. */
  createdAt?: Maybe<DateWhereInput>
  /** This is the object updatedAt. */
  updatedAt?: Maybe<DateWhereInput>
  /** This is the object ACL. */
  ACL?: Maybe<ObjectWhereInput>
  /** This is the object username. */
  username?: Maybe<StringWhereInput>
  /** This is the object password. */
  password?: Maybe<StringWhereInput>
  /** This is the object email. */
  email?: Maybe<StringWhereInput>
  /** This is the object emailVerified. */
  emailVerified?: Maybe<BooleanWhereInput>
  /** This is the object authData. */
  authData?: Maybe<ObjectWhereInput>
  /** This is the object id. */
  id?: Maybe<IdWhereInput>
  /** This is the OR operator to compound constraints. */
  OR?: Maybe<Array<UserWhereInput>>
  /** This is the AND operator to compound constraints. */
  AND?: Maybe<Array<UserWhereInput>>
  /** This is the NOR operator to compound constraints. */
  NOR?: Maybe<Array<UserWhereInput>>
}

/** The UserRelationWhereInput input type is used in operations that involve filtering objects of User class. */
export interface UserRelationWhereInput {
  /** Run a relational/pointer query where at least one child object can match. */
  have?: Maybe<UserWhereInput>
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: Maybe<UserWhereInput>
  /** Check if the relation/pointer contains objects. */
  exists?: Maybe<Scalars['Boolean']>
}

/** The UserOrder input type is used when sorting objects of the User class. */
export enum UserOrder {
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

/** The User object type is used in operations that involve outputting objects of User class. */
export interface User extends ParseObject, Node {
  __typename?: 'User'
  /** The ID of an object */
  id: Scalars['ID']
  /** This is the object id. */
  objectId: Scalars['ID']
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']
  ACL: Acl
  /** This is the object username. */
  username?: Maybe<Scalars['String']>
  /** This is the object email. */
  email?: Maybe<Scalars['String']>
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']>
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']>
}

/** An edge in a connection. */
export interface UserEdge {
  __typename?: 'UserEdge'
  /** The item at the end of the edge */
  node?: Maybe<User>
  /** A cursor for use in pagination */
  cursor: Scalars['String']
}

/** A connection to a list of items. */
export interface UserConnection {
  __typename?: 'UserConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']
}

/** The Viewer object type is used in operations that involve outputting the current user data. */
export interface Viewer {
  __typename?: 'Viewer'
  /** The current user session token. */
  sessionToken: Scalars['String']
  /** This is the current user. */
  user: User
}

export interface CreateUserInput {
  /** These are the fields that will be used to create the new object. */
  fields?: Maybe<CreateUserFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface CreateUserPayload {
  __typename?: 'CreateUserPayload'
  /** This is the created object. */
  user: User
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UpdateUserInput {
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']
  /** These are the fields that will be used to update the object. */
  fields?: Maybe<UpdateUserFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UpdateUserPayload {
  __typename?: 'UpdateUserPayload'
  /** This is the updated object. */
  user: User
  clientMutationId?: Maybe<Scalars['String']>
}

export interface DeleteUserInput {
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface DeleteUserPayload {
  __typename?: 'DeleteUserPayload'
  /** This is the deleted object. */
  user: User
  clientMutationId?: Maybe<Scalars['String']>
}

/** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
export type ArrayResult = Element | Role | User

export interface CreateFileInput {
  /** This is the new file to be created and uploaded. */
  upload: Scalars['Upload']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface CreateFilePayload {
  __typename?: 'CreateFilePayload'
  /** This is the created file info. */
  fileInfo: FileInfo
  clientMutationId?: Maybe<Scalars['String']>
}

export interface SignUpInput {
  fields?: Maybe<CreateUserFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface SignUpPayload {
  __typename?: 'SignUpPayload'
  /** This is the new user that was created, signed up and returned as a viewer. */
  viewer: Viewer
  clientMutationId?: Maybe<Scalars['String']>
}

export interface LogInWithInput {
  authData: Scalars['Object']
  fields?: Maybe<UserLoginWithInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UserLoginWithInput {
  ACL?: Maybe<AclInput>
  /** This is the object email. */
  email?: Maybe<Scalars['String']>
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']>
}

export interface LogInWithPayload {
  __typename?: 'LogInWithPayload'
  /** This is the new user that was created, signed up and returned as a viewer. */
  viewer: Viewer
  clientMutationId?: Maybe<Scalars['String']>
}

export interface LogInInput {
  /** This is the username used to log in the user. */
  username: Scalars['String']
  /** This is the password used to log in the user. */
  password: Scalars['String']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface LogInPayload {
  __typename?: 'LogInPayload'
  /** This is the existing user that was logged in and returned as a viewer. */
  viewer: Viewer
  clientMutationId?: Maybe<Scalars['String']>
}

export interface LogOutInput {
  clientMutationId?: Maybe<Scalars['String']>
}

export interface LogOutPayload {
  __typename?: 'LogOutPayload'
  /** This is the existing user that was logged out and returned as a viewer. */
  viewer: Viewer
  clientMutationId?: Maybe<Scalars['String']>
}

export interface ResetPasswordInput {
  email: Scalars['String']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface ResetPasswordPayload {
  __typename?: 'ResetPasswordPayload'
  /** It's always true. */
  ok: Scalars['Boolean']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface SendVerificationEmailInput {
  email: Scalars['String']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface SendVerificationEmailPayload {
  __typename?: 'SendVerificationEmailPayload'
  /** It's always true. */
  ok: Scalars['Boolean']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface CreateClassInput {
  /** This is the name of the object class. */
  name: Scalars['String']
  /** These are the schema's fields of the object class. */
  schemaFields?: Maybe<SchemaFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface CreateClassPayload {
  __typename?: 'CreateClassPayload'
  /** This is the created class. */
  class: Class
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UpdateClassInput {
  /** This is the name of the object class. */
  name: Scalars['String']
  /** These are the schema's fields of the object class. */
  schemaFields?: Maybe<SchemaFieldsInput>
  clientMutationId?: Maybe<Scalars['String']>
}

export interface UpdateClassPayload {
  __typename?: 'UpdateClassPayload'
  /** This is the updated class. */
  class: Class
  clientMutationId?: Maybe<Scalars['String']>
}

export interface DeleteClassInput {
  /** This is the name of the object class. */
  name: Scalars['String']
  clientMutationId?: Maybe<Scalars['String']>
}

export interface DeleteClassPayload {
  __typename?: 'DeleteClassPayload'
  /** This is the deleted class. */
  class: Class
  clientMutationId?: Maybe<Scalars['String']>
}

/** Query is the top level type for queries. */
export interface Query {
  __typename?: 'Query'
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** The role query can be used to get an object of the Role class by its id. */
  role: Role
  /** The roles query can be used to find objects of the Role class. */
  roles: RoleConnection
  /** The user query can be used to get an object of the User class by its id. */
  user: User
  /** The users query can be used to find objects of the User class. */
  users: UserConnection
  /** The health query can be used to check if the server is up and running. */
  health: Scalars['Boolean']
  /** The viewer query can be used to return the current user data. */
  viewer: Viewer
  /** The class query can be used to retrieve an existing object class. */
  class: Class
  /** The classes query can be used to retrieve the existing object classes. */
  classes: Array<Class>
}

/** Query is the top level type for queries. */
export interface QueryNodeArgs {
  id: Scalars['ID']
}

/** Query is the top level type for queries. */
export interface QueryRoleArgs {
  id: Scalars['ID']
  options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export interface QueryRolesArgs {
  where?: Maybe<RoleWhereInput>
  order?: Maybe<Array<RoleOrder>>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export interface QueryUserArgs {
  id: Scalars['ID']
  options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export interface QueryUsersArgs {
  where?: Maybe<UserWhereInput>
  order?: Maybe<Array<UserOrder>>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  options?: Maybe<ReadOptionsInput>
}

/** Query is the top level type for queries. */
export interface QueryClassArgs {
  name: Scalars['String']
}

/** Mutation is the top level type for mutations. */
export interface Mutation {
  __typename?: 'Mutation'
  /** The createRole mutation can be used to create a new object of the Role class. */
  createRole?: Maybe<CreateRolePayload>
  /** The updateRole mutation can be used to update an object of the Role class. */
  updateRole?: Maybe<UpdateRolePayload>
  /** The deleteRole mutation can be used to delete an object of the Role class. */
  deleteRole?: Maybe<DeleteRolePayload>
  /** The createUser mutation can be used to create a new object of the User class. */
  createUser?: Maybe<CreateUserPayload>
  /** The updateUser mutation can be used to update an object of the User class. */
  updateUser?: Maybe<UpdateUserPayload>
  /** The deleteUser mutation can be used to delete an object of the User class. */
  deleteUser?: Maybe<DeleteUserPayload>
  /** The createFile mutation can be used to create and upload a new file. */
  createFile?: Maybe<CreateFilePayload>
  /** The signUp mutation can be used to create and sign up a new user. */
  signUp?: Maybe<SignUpPayload>
  /** The logInWith mutation can be used to signup, login user with 3rd party authentication system. This mutation create a user if the authData do not correspond to an existing one. */
  logInWith?: Maybe<LogInWithPayload>
  /** The logIn mutation can be used to log in an existing user. */
  logIn?: Maybe<LogInPayload>
  /** The logOut mutation can be used to log out an existing user. */
  logOut?: Maybe<LogOutPayload>
  /** The resetPassword mutation can be used to reset the password of an existing user. */
  resetPassword?: Maybe<ResetPasswordPayload>
  /** The sendVerificationEmail mutation can be used to send the verification email again. */
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>
  /** The createClass mutation can be used to create the schema for a new object class. */
  createClass?: Maybe<CreateClassPayload>
  /** The updateClass mutation can be used to update the schema for an existing object class. */
  updateClass?: Maybe<UpdateClassPayload>
  /** The deleteClass mutation can be used to delete an existing object class. */
  deleteClass?: Maybe<DeleteClassPayload>
}

/** Mutation is the top level type for mutations. */
export interface MutationCreateRoleArgs {
  input: CreateRoleInput
}

/** Mutation is the top level type for mutations. */
export interface MutationUpdateRoleArgs {
  input: UpdateRoleInput
}

/** Mutation is the top level type for mutations. */
export interface MutationDeleteRoleArgs {
  input: DeleteRoleInput
}

/** Mutation is the top level type for mutations. */
export interface MutationCreateUserArgs {
  input: CreateUserInput
}

/** Mutation is the top level type for mutations. */
export interface MutationUpdateUserArgs {
  input: UpdateUserInput
}

/** Mutation is the top level type for mutations. */
export interface MutationDeleteUserArgs {
  input: DeleteUserInput
}

/** Mutation is the top level type for mutations. */
export interface MutationCreateFileArgs {
  input: CreateFileInput
}

/** Mutation is the top level type for mutations. */
export interface MutationSignUpArgs {
  input: SignUpInput
}

/** Mutation is the top level type for mutations. */
export interface MutationLogInWithArgs {
  input: LogInWithInput
}

/** Mutation is the top level type for mutations. */
export interface MutationLogInArgs {
  input: LogInInput
}

/** Mutation is the top level type for mutations. */
export interface MutationLogOutArgs {
  input: LogOutInput
}

/** Mutation is the top level type for mutations. */
export interface MutationResetPasswordArgs {
  input: ResetPasswordInput
}

/** Mutation is the top level type for mutations. */
export interface MutationSendVerificationEmailArgs {
  input: SendVerificationEmailInput
}

/** Mutation is the top level type for mutations. */
export interface MutationCreateClassArgs {
  input: CreateClassInput
}

/** Mutation is the top level type for mutations. */
export interface MutationUpdateClassArgs {
  input: UpdateClassInput
}

/** Mutation is the top level type for mutations. */
export interface MutationDeleteClassArgs {
  input: DeleteClassInput
}

export type LogInMutationVariables = Exact<{
  username: Scalars['String']
  password: Scalars['String']
}>

export type LogInMutation = { __typename?: 'Mutation' } & {
  logIn?: Maybe<
    { __typename?: 'LogInPayload' } & {
      viewer: { __typename?: 'Viewer' } & Pick<Viewer, 'sessionToken'> & {
          user: { __typename?: 'User' } & Pick<User, 'id' | 'username'>
        }
    }
  >
}

export type MeFragment = { __typename?: 'User' } & Pick<User, 'id' | 'username'>

export const MeFragmentDoc = gql`
  fragment Me on User {
    id
    username
  }
`
export const LogInDocument = gql`
  mutation logIn($username: String!, $password: String!) {
    logIn(input: { username: $username, password: $password }) {
      viewer {
        sessionToken
        user {
          id
          username
        }
      }
    }
  }
`
export type LogInMutationFn = ApolloReactCommon.MutationFunction<
  LogInMutation,
  LogInMutationVariables
>

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LogInMutation, LogInMutationVariables>
) {
  return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(
    LogInDocument,
    baseOptions
  )
}
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>
export type LogInMutationResult = ApolloReactCommon.MutationResult<LogInMutation>
export type LogInMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogInMutation,
  LogInMutationVariables
>
