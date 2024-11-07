alert("kaya was here!");

class Centre extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">
        ${this.innerHTML}</div>`
    }
}

customElements.define("x-center", Centre);

class Year extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", Year);

class Pink extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:pink">
        ${this.innerHTML}</div>`
    }
}

customElements.define("x-pink", Pink);