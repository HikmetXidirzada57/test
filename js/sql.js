$(function () {
    $.ajax({
        url: "../product.json",
        contentType: "JSON",
        success: function (res) {
            console.log(res)

            for (var product of res) {
                $("#products .product-list .row").append(
                    `
             <div class="col-lg-4">
             <div class="product-item">
             <img class="img-fluid" src="${product.image}"/>
             <h4 class="product-name">${product.name}</h4>
             <p class="product-price">${product.price} Azn</p>
             <button class="btn btn-success btn-add-cart" product-id="${product.id}">Add Cart</button>
             </div>
             </div>
             `
                )
            }
            $(".btn-add-cart").on("click", function () {
                const productId = $(this).attr("product-id")
                $.ajax({
                    url: "../product.json",
                    contentType: "JSON",
                    success: function (res) {
                        // console.log(res)

                        for (var pro of res) {
                            if (pro.id == productId) {
                                $("#exampleModal .modal-body").append(`
                                    
                          <div class="col-12">
                          <div class="product-card-item mt-3 d-flex justify-content-between">
                          <img width="40" class="img-fluid cart-img" src="${pro.image}"/>
                          <h4 font-size="20px" class="product-cart-name">${pro.name}</h4>
                          <p font-weight="500" class="product-cart-price">${pro.price} Azn</p>
                          </div>
                          </div>
                     `
                                )
                            }
                        }
                    }
                })
            })
        }
    })
})
$(function(){
 $.ajax({
   url:"...product.json",
   success:function(){
       for(var res of product){
           $("#products product-list .row").append(
            `<div class="col-lg-4">
            <div class="product-item">
            <img class="img-fluid" src="${product.image}">
            <h4 class"product-mame">${product.name}</h4>
            <p class="product-price">${product.price}</p>
            <button class="btn btn-succes btn-add-cart">${product.id}</button>
            </div>
            </div>`
            
           )
       }
   }

 })


})
