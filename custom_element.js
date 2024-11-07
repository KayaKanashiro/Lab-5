alert("kaya was here!");

class Centre extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">
        ${this.innerHTML}</div>`
    }
}

customElements.define("x-center", Centre);