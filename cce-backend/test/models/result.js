class Result {
    constructor(categoryId, id, score, imageUrl, title, text, hyperText) {
      this.categoryId = categoryId;
      this.id = id;
      this.score = score;
      this.imageUrl = imageUrl;
      this.title = title;
      this.text = text;
      this.hyperText = hyperText;
    }
  }
  
  module.exports = Result;