class ProductFactory{
    
    constructor(){

    }

    btn = document.querySelector(".toggle-btn");
    mobile_nav = document.querySelector(".nav-menu-mobile");

    eachMaster = document.querySelectorAll(".masters-row-with-overlay");

    run(){
        //LISTEN FOR EVENTS HERE
        this.btn.addEventListener("click",this.showNav);

        Array.from(this.eachMaster).forEach((master) => {
            master.addEventListener("mouseover",this.showLayer);
        });

    }
    showNav = (e) => {
        this.mobile_nav.classList.toggle('show');
    }

    showLayer = (e)=> {
        console.log("Hi, you work");
        console.log(e.target.parentElement.children[1]);
        e.target.parentElement.children[1].classList.toggle('show');
    }
}

let decadev_one = new ProductFactory();
    decadev_one.run();

AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
});