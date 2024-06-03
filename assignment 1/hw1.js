

const func=e=> {
   e.preventDefault();
    const val=e.target;
    console.log(val);

    const username=val[0].value;
    const mail=val[1].value;
    const pass=val[2].value;
    const phn=val[3].value;

    console.log(username,mail,pass,phn);

    document.getElementById("divv1").style.display = "none";
    document.getElementById("datasubmit").style.display = "block";

    

    document.getElementById("p1").innerHTML = username;
    document.getElementById("p2").innerHTML = mail;
    document.getElementById("p3").innerHTML = pass;
    document.getElementById("p4").innerHTML = phn;

}

const parent =document.getElementById("div1");
     
    const image=document.createElement('img');
    image.src= thumb;
    
    const imagee=document.createElement('img');
    image.src= thumbb;

    parent.appendChild(image);
    parent.appendChild(imagee);

    for(let i=0;i<product.length;i++){
        const image=document.createElement('img');
        image.src= thumb;
    }