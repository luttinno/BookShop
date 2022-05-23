     fetch("./assets/JSON.json")
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR")
        }
        return response.json()
    })
    .then((data) => {
        
        let content = data;
        
        content.map(function(apiData) {

            var wrap =document.createElement("main")
            
   
            var mainDiv = document.createElement("div")
            mainDiv.classList= "main-div"
            wrap.appendChild(mainDiv);
            container.appendChild(mainDiv)


            
            var div = document.createElement("div")
            div.id = "book-card";
            div.className = "Book-card";
            mainDiv.appendChild(div)
         
            var leftDiv = document.createElement("div")
            leftDiv.className = "Left-wrap";
            div.appendChild(leftDiv)
            
           
            var img = document.createElement("img")
            img.className = "bookImg";
            img.src = `${apiData.imageLink}`;
            leftDiv.appendChild(img);
       
            var rightDiv = document.createElement("div")
            rightDiv.className = "rightWrap"
            div.appendChild(rightDiv)

            var bookTitle = document.createElement("h2")
            bookTitle.className = "book-title";
            rightDiv.appendChild(bookTitle)
            bookTitle.innerHTML = `${apiData.title}`;

            var h3 = document.createElement("h3");
            h3.className = "h3";
            rightDiv.appendChild(h3);
            h3.innerHTML = `${apiData.author}`

            var h4 = document.createElement("h4");
            h4.className = "h4"
            h4.id = "h4"
            rightDiv.appendChild(h4)
            h4.innerHTML = ` ${apiData.price}` + " $"
            
            

            var buttonDiv = document.createElement("div");
            buttonDiv.className = "button-div";
            rightDiv.appendChild(buttonDiv);
            

            var showMoreBtn = document.createElement("button");
            showMoreBtn.className = "showMoreBtn";
            showMoreBtn.textContent = "Show more ";
            buttonDiv.appendChild(showMoreBtn);
            
            var addCartBtn = document.createElement("button");
            addCartBtn.className = "add-cart-btn";
            addCartBtn.textContent = "add To Cart";
            buttonDiv.appendChild(addCartBtn);

              
    
            var modal = document.createElement("div");
            modal.className = "modal";
            modal.id = "myModal";
            container.appendChild(modal)


            var modalContent = document.createElement("div");
            modalContent.className = "modal-content";
            modal.appendChild(modalContent);

            var modalImg =document.createElement("img");
            modalImg.className ="modal-img";
            modalImg.src=`${apiData.imageLink}`;
            modalContent.appendChild(modalImg);
            
            var modalRightWrap = document.createElement("div")
            modalRightWrap.className = "modal-right-wrap";
            modalContent.appendChild(modalRightWrap);

            var modalAuthor = document.createElement("h2");
            modalAuthor.className = "modal-title";
            modalAuthor.innerHTML = `${apiData.author}`
            modalRightWrap.appendChild(modalAuthor);

            var modalText = document.createElement("p");
            modalText.className="modal-text";
            modalText.innerHTML = `${apiData.description}`
            modalRightWrap.appendChild(modalText);

            var close = document.createElement("span");
            close.className = "close";
            close.textContent= "X"
            modalContent.appendChild(close);

        
       
                    
            showMoreBtn.onclick = function(){
                modal.style.display = "block";
            }
            close.onclick = function(){
                modal.style.display = "none";
            }
            window.onclick =function(event){
                if(event.target == modal){
                    modal.style.display="none";
                }
            }
            var cartMainDiv =document.createElement("div")
            cartMainDiv.className = "cart-main-div";
            cartContainer.appendChild(cartMainDiv)

            var cartdiv = document.createElement("div");
            cartdiv.className = "cart-div";
            cartMainDiv.appendChild(cartdiv);


            var cartImg = document.createElement("img")
            cartImg.classList="cartImg";
            cartImg.style.width ="100px"
            cartImg.style.paddingLeft = "20px"
            cartImg.style.paddingTop = "20px"
            cartImg.style.paddingBottom = "20px"
            cartImg.src=`${apiData.imageLink}`
            cartdiv.appendChild(cartImg)

            var cartPrice = document.createElement("h2");
            cartPrice.classList = "cart-price";
            cartPrice.textContent = `${apiData.price}`
            cartdiv.appendChild(cartPrice);
    
            var deleteFromCart = document.createElement("p")
            deleteFromCart.className="Xcard";
            deleteFromCart.textContent= "X"
            cartdiv.appendChild(deleteFromCart)

            addCartBtn.onclick = function() {
                cartMainDiv.style.display= "block"
            }
            deleteFromCart.onclick = function(){
                cartMainDiv.style.display="none"
            }
        })
    })

    var cartContainer = document.createElement("div")
cartContainer.classList.add("myBooks");
document.getElementsByTagName('body')[0].prepend(cartContainer);

var container = document.createElement("div")
container.classList.add('content-container');
document.getElementsByTagName('body')[0].prepend(container);

var cartTitle =document.createElement("h3")
cartTitle.className= "cart-title";
cartTitle.textContent = "Selected Books"
cartContainer.appendChild(cartTitle)

var cartBtn = document.createElement("button")
cartBtn.className ="buyButton"
cartContainer.appendChild(cartBtn)
cartBtn.textContent = "buy now";

let formi = document.getElementsByClassName("delivery-service")

    cartBtn.onclick = function() {
        formi[0].style.display = "block";
        console.log(formi);
    }


function checkboxFunc() {
    var a = document.getElementsByClassName("gift");
    var newvar = 0;
    var count;
    for (count = 0; count<a.length; count++) {
      if (a[count].checked == true) {
        newvar = newvar + 1;
      }
    }
    if (newvar >=3) {
      return false;
    }
  }