export class Counter {
    constructor(selector, initialValue=0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);
        
        this.display = document.createElement('div');
        this.incrementButton = document.createElement('button');
        this.incrementButton.textContent = "increment";

        this.decrementButton = document.createElement('button');
        this.decrementButton.textContent = "decrement";

        this.resetButton = document.createElement('button');
        this.resetButton.textContent = "reset";

        container.appendChild(this.display);
        container.appendChild(this.incrementButton);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);

        this.incrementButton.addEventListener("click", ()=> this.increment());
        this.decrementButton.addEventListener("click", ()=> this.decrement());
        this.resetButton.addEventListener("click", ()=> this.reset());

        this.update();
    }

    // state methods
    increment() {
        this.count++;
        this.decrementButton.disabled = false;
        this.update();
    }

    decrement() {
        if (this.count===0){
            this.decrementButton.disabled = true;
            return
        }
        this.count--;
        this.update();
    }
        
    reset() {
        this.count = 0;
        this.update();
    }

    update() {
        this.display.textContent = `Count: ${this.count}`;
        //classList.toggle(disabled) = this.count===0
    }
}

//Counter is Super Class
//StepCounter is subclass

class StepCounter extends Counter {
    constructor(selector, initialValue = 0) {
        super(selector, initialValue);
        //add step property
        //this.step = step;

    }
    //increment(){}
    //decrement(){}
}

//homework for this stuff
//when counter goes to 0 add a class that will prevent user from dropping it to zero or resetting, as 0 is the base state
//design a full webpage that documents that component
//make website explain counter and how to use it
//create a new stepper class using inheritance
//takes a parameter called step which will dictate how much the counter will increment by
//minimum of 10 commits
//branch for each feature
//branch commits spaced out
//repo should show development

//repo should show:
//week 8 skeleton must be finished
//week 9 core logic must be finished
//week 10 must be finished
//PROGRESSION
//NO VIBE CODING

//someone should be able to go to site and learn how it is done so that they can add it to their project