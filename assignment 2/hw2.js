
const res= fetch('https://dummyjson.com/products');

res.then((data)=>{
   
    const obj = data.json();
  
    obj.then((js)=>{
       
        renderui(js);
    })
    .catch((err)=>{
        console.log("cannot parse",err);
    })
})
.catch((err)=>{
    console.log("err occured:", err)
})

function renderui(data1){
    const product=data1.products;
    const parent =document.getElementById("div1")

    for(let i=0;i<product.length;i++){
        const image=document.createElement('img');
        let thumb=product[i].thumbnail;
        image.src= thumb;
        parent.appendChild(image);
    }

   
}