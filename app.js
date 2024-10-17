let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click", function (){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    console.log(inp.value );

    let delbtn= document.createElement("button");
    delbtn.innerText ="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    inp.value="";
});
ul.addEventListener("click", function (event){
      if(event.target.nodeName = "Button"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console,log("deleted");
      }
});


//let delbtns=document.querySelectorAll(".delete");
//for(delbtn of delbtns) {
  //  delbtn.addEventListener("click", function () {
    //    console.log("element deleted");
      //  let par = this.parentElement;
       // console.log(par);
        //par.remove();
    //});
//}
