let menuBtn = false
function menu(){
    let containerMenu = document.querySelector('.containerMenu')

    if(menuBtn == false){
        menuBtn = true
        containerMenu.style.display = 'block'
        setTimeout(() => {
            containerMenu.style.right = '0px'
        }, 10);
      
    }else{
        menuBtn = false
        containerMenu.style.right = '-100%'
    
        setTimeout(() => {
            containerMenu.style.display = 'none' 
        }, 400);
    }

}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    const offset = 50; // Defina o valor do deslocamento desejado em pixels
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
    });
}


let linkMenu = document.querySelectorAll('.linkMenu')
linkMenu.forEach((a)=>{
    a.addEventListener('click', ()=>{
        menu()
    })
})








