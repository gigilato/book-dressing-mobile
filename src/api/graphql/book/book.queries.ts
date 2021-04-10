import { gql } from '@apollo/client'
import { bookFragment, bookConnectionFragment } from './book.fragments'

export const bookQuery = gql`
  query book($bookUuid: ID!) {
    book(bookUuid: $bookUuid) {
      ...BookFragment
    }
  }
  ${bookFragment}
`

export const booksQuery = gql`
  query books($limit: Int, $offset: Int, $where: BooksWhereInput) {
    books(where: $where, limit: $limit, offset: $offset) {
      ...BookConnectionFragment
    }
  }
  ${bookConnectionFragment}
`

export const userBooksQuery = gql`
  query userBooks($limit: Int, $offset: Int, $where: UserBooksWhereInput!) {
    userBooks(where: $where, limit: $limit, offset: $offset) {
      ...BookConnectionFragment
    }
  }
  ${bookConnectionFragment}
`

export const myBooksQuery = gql`
  query myBooks($limit: Int, $offset: Int, $where: BooksWhereInput) {
    myBooks(where: $where, limit: $limit, offset: $offset) {
      ...BookConnectionFragment
    }
  }
  ${bookConnectionFragment}
`

export const createBookMutation = gql`
  mutation createBook(
    $uuid: ID
    $isbn: String
    $title: String!
    $author: String!
    $description: String!
    $pictureUrl: String
  ) {
    createBook(
      uuid: $uuid
      isbn: $isbn
      title: $title
      author: $author
      description: $description
      pictureUrl: $pictureUrl
    ) {
      ...BookFragment
    }
  }
  ${bookFragment}
`

export const updateBookMutation = gql`
  mutation updateBook($where: BookWhereUniqueInput!, $data: UpdateBookDataInput!) {
    updateBook(where: $where, data: $data) {
      ...BookFragment
    }
  }
  ${bookFragment}
`

export const removeBookMutation = gql`
  mutation removeBook($bookUuid: ID!) {
    removeBook(bookUuid: $bookUuid) {
      ...BookFragment
    }
  }
  ${bookFragment}
`

export const likeBookMutation = gql`
  mutation likeBook($bookUuid: ID!) {
    likeBook(bookUuid: $bookUuid) {
      ...BookFragment
    }
  }
  ${bookFragment}
`
