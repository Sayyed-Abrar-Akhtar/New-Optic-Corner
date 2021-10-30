class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const search = this.queryStr.search
      ? {
          title: {
            $regex: this.queryStr.search,
            $options: 'i',
          },
        }
      : {};

    this.query = this.query.find({ ...search });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ['search'];

    removeFields.forEach((el) => delete queryCopy[el]);

    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(resPerPage) {
    const currentpage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentpage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFeatures;
