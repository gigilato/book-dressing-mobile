export const config = {
  api: {
    uri: 'http://192.168.1.96:3333/graphql',
    authorizationScheme: 'Bearer',
  },
  firebase: {
    apiKey: 'AIzaSyBGsbzK5F4l8hhYp7SjhaGTaYsqIq5ah6g',
    authDomain: 'book-dressing.firebaseapp.com',
    databaseURL: 'https://book-dressing.firebaseio.com',
    projectId: 'book-dressing',
    storageBucket: 'book-dressing.appspot.com',
    messagingSenderId: '102349844131',
    appId: '1:102349844131:web:6b0a0eb068f7074bd81916',
    measurementId: 'G-9T9PG2GEXQ',
  },
  googleBooks: {
    uri: 'https://www.googleapis.com/books/v1',
    endpoint: '/volumes',
    params: {
      query: {
        key: 'q',
      },
      offset: {
        key: 'startIndex',
        default: 0,
      },
      limit: {
        key: 'maxResults',
        default: 21,
      },
    },
  },
}
