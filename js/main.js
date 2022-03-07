let btnPlus = document.getElementsByClassName("fa-plus")
let total=[]
let priceitem = document.getElementsByClassName("price")

for (let key of btnPlus) {
    key.addEventListener("click", function(){ 
        if(isNaN(this.nextElementSibling.innerHTML)){
        this.nextElementSibling.innerHTML = '0'
    }
    this.nextElementSibling.innerHTML++
    let qtn = Number(this.parentNode.nextElementSibling.childNodes[1].childNodes[2].innerHTML)
    // let qtn = Number(this.parentNode.parentNode.getElementsByClassName("price")[0].innerText);
    let nameProduct = this.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id");
    total[nameProduct] = qtn * Number(this.nextElementSibling.innerHTML);
    console.log(document.getElementById("total").innerText  = total.reduce((acc, item) => acc + item, 0));
    
    })
}

let btnminus = document.getElementsByClassName("fa-minus")

for (let key of btnminus) {
    key.addEventListener("click", function(){
        if(isNaN(this.previousElementSibling.innerHTML)){
            this.previousElementSibling.innerHTML = '0'
        }else{
            if (this.previousElementSibling.innerHTML > 0){
                this.previousElementSibling.innerHTML--    
            }  
        }
    })

}

let heart = document.getElementsByClassName("fa-heart")
for (let fav of heart) {
    fav.addEventListener("click", function(){
        if(this.style.color==""){
            this.style.color = "red"
        }else{
            this.style.color = ""
        }
})
}

//remove with dom
/*let btnTrash = document.getElementsByClassName("fa-trash-alt")
for(let del of btnTrash) {
    del.addEventListener("click", function(){
        //alert (123)
       this.parentNode.parentNode.parentNode.remove()
})
}*/

 const removetag = (data) =>{
document.getElementById(data).remove()
}







