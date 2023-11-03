let navbar=document.querySelector(".header .navbar");

document.querySelector("#menu-btn").addEventListener("click",()=>{
    navbar.classList.toggle('active');
});

let readMore=document.querySelectorAll(".read-more");
readMore.forEach(button=>{
    button.addEventListener("click",()=>{
        button.previousElementSibling.classList.toggle("dis");
    });
});


let hearts=document.querySelectorAll(".heart");
hearts.forEach(heart=>{
    heart.addEventListener("click",()=>{
        heart.classList.toggle("faverate");
    });
});
// change


let selectedFood=document.getElementById("snacks");
selectedFood.classList.add("selected-option-box");
let optionBoxes=document.querySelectorAll(".option-box");
optionBoxes.forEach(optionBox=>{
    optionBox.addEventListener("click",()=>{
        document.querySelector("."+selectedFood.id).classList.add("dis");
        selectedFood.classList.remove("selected-option-box")
        selectedFood=optionBox;
        document.querySelector("."+selectedFood.id).classList.remove("dis");
        selectedFood.classList.add("selected-option-box");
    });
});

let add=document.querySelectorAll("#add");
let remove=document.querySelectorAll("#remove");
add.forEach(i=>{
    i.addEventListener("click",()=>{
        let quantity=i.previousElementSibling;
        quantity.textContent=parseInt(quantity.textContent)+1;
    });
});
remove.forEach(i=>{
    i.addEventListener("click",()=>{
        let quantity=i.nextElementSibling;
        if(parseInt(quantity.textContent)> 1){
            quantity.textContent=parseInt(quantity.textContent)-1;
        }
    });
});


let amount=0;
let addToCart=document.querySelectorAll(".add-to-cart");
addToCart.forEach(btn=>{
    btn.addEventListener("click",()=>{
        let foodItem=btn.closest(".box");
        if(foodItem){   
            const clone = foodItem.cloneNode(true);
            let n=parseInt(clone.querySelector(".quantity p").textContent);
            clone.querySelector(".control-box").remove();
            let priceElement=clone.querySelector(".price");
            let price=parseInt(priceElement.textContent);

            let deleteitem=document.createElement("div");
            deleteitem.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`;
            deleteitem.classList.add("delete");
            clone.appendChild(deleteitem);
            deleteitem.addEventListener("click",()=>{
                const box = deleteitem.parentElement;
                console.log(box);
                amount=amount-(n*price);
                console.log(amount);
                box.remove();
                document.querySelector("#amount").innerHTML=`<i class="fa-solid fa-indian-rupee-sign"></i> ${amount}.00`;
            });
    
            amount=amount+(n*price);
            priceElement.innerHTML=`<P>${n}x${price}</p>=<p><i class="fa-solid fa-indian-rupee-sign"></i>${n*price}</p>`;
            document.querySelector("#amount").innerHTML=`<i class="fa-solid fa-indian-rupee-sign"></i> ${amount}.00`;
            document.querySelector(".cart-box .foodItems").append(clone);            
        }
    });
});

document.querySelector("#cart").addEventListener("click",()=>{
    let cartBox=document.querySelector(".cart-box");
    cartBox.classList.toggle("dis");
    cartBox.classList.toggle("slide");
});
let icons=document.querySelectorAll(".icon");
    icons.forEach(icon=>{
        icon.addEventListener("click",()=>{
            icon.classList.toggle("click");
        });
});
document.querySelector("#order").addEventListener("click",()=>{
    if(amount!=0){
        document.querySelector(".fooditem-container").classList.toggle("dis");
        document.querySelector(".success").classList.toggle("dis");
    }
});




// navbarscroll
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        const id = entry.target.id;
        const navLink = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLink.classList.add('active'); 
        } else {
            navLink.classList.remove('active'); 
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
};

const observer = new IntersectionObserver(handleIntersection, options);

const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});









  
  
  
