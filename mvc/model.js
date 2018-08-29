
(function(app){

    //object construction pattern 

    function Product(prodId,prodName,prodDesc){
        var self =this;
        self.prodId=prodId;
        self.prodName=prodName;
        self.prodDesc=prodDesc; 
    }

    app.Product = Product;

})(window.app);