/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
      id
      title
      content
      like
      coverImage
      username
      comments {
        items {
          id
          postId
          message
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          tag
          postTag
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($username: String) {
    onUpdatePost(username: $username) {
      id
      title
      content
      like
      coverImage
      username
      comments {
        items {
          id
          postId
          message
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          tag
          postTag
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($username: String) {
    onDeletePost(username: $username) {
      id
      title
      content
      like
      coverImage
      username
      comments {
        items {
          id
          postId
          message
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          tag
          postTag
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($username: String) {
    onCreateComment(username: $username) {
      id
      postId
      message
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($username: String) {
    onUpdateComment(username: $username) {
      id
      postId
      message
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($username: String) {
    onDeleteComment(username: $username) {
      id
      postId
      message
      username
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($username: String) {
    onCreateTag(username: $username) {
      id
      tag
      postTag
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($username: String) {
    onUpdateTag(username: $username) {
      id
      tag
      postTag
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($username: String) {
    onDeleteTag(username: $username) {
      id
      tag
      postTag
      username
      createdAt
      updatedAt
    }
  }
`;
