import { BookFragment, BookStatus } from '@api/hooks/generated'

export const emptyBookData: BookFragment = {
  __typename: 'Book',
  uuid: 'DUMMY_BOOK',
  author: '',
  available: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  description: '',
  hasLiked: false,
  likeCount: 0,
  title: '',
  status: BookStatus.Active,
  owner: {
    __typename: 'User',
    email: '',
    username: '',
    uuid: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
}
