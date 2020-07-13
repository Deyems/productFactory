class ProductFactory{
    
    constructor(){

    }

    btn = document.querySelector('harmburger');

    run(){
        //LISTEN FOR EVENTS HERE
        this.btn.addEventListener("click",this.showToLog);
    }
    showToLog(){
        console.log('working!');
    }
}

let decadev_one = new ProductFactory();
    decadev_one.run();

AOS.init();