const product=[
    {
        id:0,
        image:'./resources/camera.jpg',
        title:'Cannon HD Camera',
        price:120,
        para:'Self-Timer, Type C and Mini HDMI, 9 Auto Focus Points, 3x Optical Zoom, WiFi, Full HD, Video Recording at 1080 p on 30fps, APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor.Effective Pixels: 18 MP',
    },
    {
        id:1,
        image:'./resources/OPPO-K3-Aurora-Blue-8GB-RAM-AMOLED-Display-128GB-Storage-3765mAH-Battery-B07HGLBZ9J-1100x1100.jpg',
        title:'OPPO-K3',
        price:80,
        para:'50MP + 0.3MP | 5MP Front Camera 5000 mAh Lithium Ion Battery Unisoc T612 Processor',
    }, {
        id:2,
        image:'./resources/redmi-5.jpg',
        title:'canon hd camera',
        price:60,
        para:'40MP + 5MP | 10MP Front Camera 4000 mAh Lithium Ion Battery Unisoc T912 Processor',
    }, {
        id:3,
        image:'./resources/ipad-10th-gen-finish-select-202212-pink-wifi_FMT_WHH.jpeg',
        title:'I-Pad',
        price:100,
        para:'Serial number Network (Wi-Fi + Cellular models) Number of songs, videos, photos, and apps Capacity and available storage space Cellular Data Number (Wi-Fi + Cellular models)',
    }
    , {
        id:4,
        image:'./resources/G398858_View_1.jpg',
        title:'Apple Watch',
        price:20,
        para:'Water Proof | Flexxible | Robust | Digital | Blutooth Coonect',
    }
    , {
        id:4,
        image:'./resources/image-8.jpg',
        title:'Mac',
        price:110,
        para:'Chat with a Mac Specialist(opens in new window)   Apple M2 chip with 8-core CPU, 10-core GPU and 16-core Neural Engine  8GB unified memory 256GB SSD storage 33.02 cm (13-inch) Retina display with True Tone',
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

