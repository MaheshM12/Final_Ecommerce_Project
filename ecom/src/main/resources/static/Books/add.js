const product=[
    {
        id:0,
        image:'./resources/Automic_habit.jpeg',
        title:'Automic_Habit',
        price:10,
        para:'Book is all about how to build habits',
    },
    {
        id:1,
        image:'./resources/Eat_that_frog.jpeg',
        title:'Eat That Frog',
        price:8,
        para:'The book is related to the time management.',
    }, {
        id:2,
        image:'./resources/ikikai.jpeg',
        title:'Ikikai',
        price:6,
        para:'Book is related to the Live Healthy And Long Life',
    }, {
        id:3,
        image:'./resources/panipath.jpeg',
        title:'Panipath',
        price:5,
        para:'The Maratha battle',
    }
    , {
        id:4,
        image:'./resources/the_alchemist.jpeg',
        title:'The Alchemist',
        price:4,
        para:'The book is all about perspective',
    }
    , {
        id:5,
        image:'./resources/rich_dad_poor_dad.jpeg',
        title:'Rich Dad Poor Dad',
        price:7,
        para:'The book is all about money',
    }
    
];
const catego =[...new Set(product.map((item)=>
    {return item}
    ))]
    let i=0;
    document.getElementById('root').innerHTML=catego.map((item)=>
    {
    var {image,title,price,para}=item;
    return(
      `<div class='box'>
      <div class="img-box">
          <img class="images" src=${image}></img>
      </div>
      <div class='bottom'>
      <p>${title}</p>
      <p>${para}</p>
      <h2>$ ${price}.00</h2>`+
      "<button onclick='addtocard("+(i++)+")'>Add to card</button>"+
      "<button ><a href='./payment.html'>Buy</a></button>"+
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

