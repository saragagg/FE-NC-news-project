import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-newsapp.onrender.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
    //array of topic objects
  });
};

export const getArticles = (topic) => {
  return newsApi.get("/articles", {params: {
    topic: topic
  }}).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const voteForArticle = (article_id, vote) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data: { updatedArticle } }) => {
      return updatedArticle;
    });
};

export const postArticleComment = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data: { posted_comment: newPostedComment } }) => {
      return newPostedComment;
    });
};
