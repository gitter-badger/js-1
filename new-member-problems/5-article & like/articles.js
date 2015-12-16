(function(){
  var Article = (function(){
    var _articleId = 0;

    function getFileName(title){
      return title
        .replace(/[(){}\[\]\/\.,;!?`@%^#$£]/g, '')
        .replace(/ +/g, '_')
        + ".txt";
    }

    return function Article(title){
      this.title = title;
      this.articleId = _articleId++;
      this.filename = getFileName(title);
      this.likes = {facebook: 0, twitter: 0, googlePlus: 0};
    };
  }());

  function Archive(){
    this._store = [];
  }

  Archive.prototype.addArticle = function(article){
    if (!(article instanceof Article)) {
      throw new Error('Types are incompatible');
    }
    this._store.push(article);
  };

  Archive.prototype.getArticles = function(){
    return this._store.slice();
  };

  Archive.prototype.like = function(title, network){
    var article = this._store.filter(function(article){
      return article.title = title;
    })[0];

    if (article && article.likes[network] >= 0)
      article.likes[network]++;
    return article.likes;
  };

}());
