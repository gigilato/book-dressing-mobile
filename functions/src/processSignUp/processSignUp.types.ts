export type Data = {
  insert_user: {
    returning: [
      {
        description: string
        email: string
        id: string
        pictureUrl: string
        username: string
      }
    ]
  }
}

export type Variables = {
  email: string
  username: string
  id: string
}