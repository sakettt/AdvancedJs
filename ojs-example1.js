
// objects in es5.0 

 var module = (function(){
    function Book(isbn, bookTitle, bookAuthor,bookPrice, isOnSale){
        this.isbn=isbn;
        this.bookTitle=bookTitle;
        this.bookAuthor=bookAuthor;
        this.bookPrice = bookPrice; 
        this.isOnSale = isOnSale;
        //getter 
        this.getIsbn = function(){
            return this.isbn;
        }
        //setter 
        this.setIsbn= function(ibn){
            this.isbn= ibn;

        }
}

// instance of 

var fh = new Book("1237878123783", "FountainHead", "Ayn Rand", 25, true);

typeof(fh); //=> object 
typeof(Book); //=> function 

console.log(typeof(fh));
console.log(typeof(Book));
console.log(Object.keys(fh));
console.log(fh.hasOwnProperty("isbn"));

 // used to expose objects/ object method based on requirement
 return{
    getBookId:fh.getIsbn(),
    setBookId:fh.setIsbn
 }

 })();




