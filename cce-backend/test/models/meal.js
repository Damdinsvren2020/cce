class Meal {
  constructor(id,categoryIds,title,imageUrl,root1,quiz_id,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.root1 = root1;
    this.quiz_id = quiz_id;
  }
}

module.exports = Meal;
