var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

cart=[];
 $(document).ready(function(){   
        display();
        displaycart();

    $(".add-to-cart").on("click",function(){

    console.log("click");
    var id1 =$(this).parent("div").attr("id");
     console.log(id1);
     var oid=id1.substring(8);
     console.log(oid);
     addtocart(oid);
     console.log(cart);
     displaycart();
     //correct
     $("#result").on("click", ".update",function(){
         var pid= $(this).data(pid);
        console.log(pid);
        var product=getProduct(pid);
        console.log(product);
        $('#pid').val()
     })

    
       
    
    })
    });
     

    function display(){
    var temp=" ";
    for(var i=0;i<products.length;i++){

        temp+='<div id='+"product-"+products[i].id+' class='+"product"+'><img src=images/'+products[i].image+'><h3 class='+"title"+'><a href="#">'+products[i].name+'</a></h3><span>'+products[i].price+'</span><a class='+"add-to-cart"+' href="#">Add To Cart</a></div>';
    
    }
    $("#products").html(temp);

    
}
    
        
        
    
    function addtocart(oid){

        for(var i=0;i<products.length;i++){
            isBroken=false;
        if(products[i].id==oid){
            console.log(cart.length);
            for(var j=0;j<cart.length;j++){
            if(cart.length>0 && cart[j].id==oid){
                cart[j].quantity++;
                isBroken=true;
                break;            
            }
        } if(!isBroken){
            var obj={};
            obj.id=products[i].id;
            obj.name=products[i].name;
            obj.price=products[i].price;
            obj.quantity=1;
            cart.push(obj)}   
            }
    }
}
function displaycart()
{
    
        var html1=" ";
        html1+='<table><tr><th>ID</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th><tr>';
        for(var i=0;i<cart.length;i++){
            html1+="<tr><td>"+cart[i].id+"</td><td>"+cart[i].name+"</td><td>"+cart[i].price+"<td>"+cart[i].quantity+"</td></td><td><input type=text class='up'><a href='#' class='update' data-pid='"+cart[i].id+"'>Update</a><a href='#' class='delete' data-pid='"+cart[i].id+"' >Delete</td><tr></tr>";
        }
        html1 += '</table>';
        $("#result").html(html1);
    }


    function getProduct(pid) {
        for(var i=0;i<cart.length;i++){
            if(pid==cart[i].id){
                return cart[i];
            }
        }

    }

    
    