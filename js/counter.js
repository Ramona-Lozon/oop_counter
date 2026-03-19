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

    increment() {
        this.count++;
        this.decrementButton.disabled = false;
        this.update();
    }

    decrement() {
        if (this.count==0){
            this.decrementButton.disabled = true;

            return;
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
        this.decrementButton.classList.toggle('disabled', this.count===0);
        this.resetButton.classList.toggle('disabled', this.count===0);
    }
}

export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step) {
        super(selector, initialValue);
        this.step = step;
    }

    increment() {
        this.count +=this.step;
        this.decrementButton.disabled = false;
        this.update();
    }

    decrement() {
        if (this.count===0){
            this.decrementButton.disabled = true;

            return;
        }
        this.count -= this.step;
        this.update();
    }

    update() {
        this.display.textContent = `Count: ${this.count}`;
        this.decrementButton.classList.toggle('disabled', this.count===0);
        this.resetButton.classList.toggle('disabled', this.count===0);
    }
}