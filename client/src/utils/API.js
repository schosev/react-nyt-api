import axios from "axios";

export default {
  getArticles: function(query) {
    console.log("query ", query);
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931", { params: {q: query }})    
  },
  getArticle: function() {
    return axios.get("/api/articles");
  },
  //Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    console.log("articleData ", articleData);
    return axios.post("/api/articles", articleData);
  }
};

