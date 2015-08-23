(function() {
  var app = angular.module('store', ['store-directives']);

  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
    
    $http.get("./js/store-products.json").success(function(data){
       store.products = data; 
    });
  }]);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });


  app.controller('PanelController',function(){
    this.tab = 1;
    
    this.selectTab = function(setTab){
      this.tab = setTab;
    }
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });
  
  app.controller('ReviewController', function(){
    this.review = {};
    
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();