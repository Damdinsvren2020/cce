class Quiz {
    constructor(categoryId, id, title, answer, question, a, b, c, d, e) {
      this.categoryId = categoryId;
      this.id = id;
      this.title = title;
      this.answer = answer;
      this.question = question;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.e = e;
    }
  }
  
  module.exports = Quiz;