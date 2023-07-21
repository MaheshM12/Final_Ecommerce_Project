const product=[
    {
        id:0,
        image:'./resources/atta.jpeg',
        title:'Atta',
        price:9,
     },
    {
        id:1,
        image:'./resources/Coffe.jpeg',
        title:'Coffee',
        price:3,
     }, {
        id:2,
        image:'./resources/Rice.png',
        title:'Rice',
        price:4,
     }, {
        id:3,
        image:'./resources/salt.jpeg',
        title:'Salt',
        price:2,
    }
    , {
        id:4,
        image:'./resources/tomato_souce.png',
        title:'Tomato Souce',
        price:3,
     }
    
];
const catego =[...new Set(product.map((item)=>
    {return item}
    ))]
    let i=0;
    document.getElementById('root').innerHTML=catego.map((item)=>
    {
    var {image,title,price}=item;
    return(
      `<div class='box'>
      <div class="img-box">
          <img class="images" src=${image}></img>
      </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocard("+(i++)+")'>Add to card</button>"+
      "<button><a href='./resources/payment.html'>Buy</a></button>"+
      `</div>
      </div>`
      
    )
    }).join('')

   var card=[];
   function addtocard(a){
     card.push({...catego[a]});
     displaycard();
   }
   function delElement(a){
  //card.splice(a,1);
    card.pop({...catego[a]});
    displaycard();
   }

   function displaycard(a){
    let j=0,total=0;
    if(card.length==0){
        document.getElementById('cardItem').innerHTML="Your card is Empty";
        document.getElementById('total').innerHTML="$ "+0+ ".00";
    }
    else{
        document.getElementById("cardItem").innerHTML=card.map((items)=>{
            var {image,title,price}=items;
            total=total+price;
            document.getElementById('total').innerHTML="$ "+total+ ".00";
            return(
                `<div class="card-item">
                <div class="row-img">
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style="font-size:15px;">$ ${price}.00</h2>`+
                "<i onclick='delElement("+(j++)+")' ><p id='button'>Remove</p></i></div>"); 
            
        }).join('');
    }
   }

