class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}"
         name="${this.id}" placeholder="${this.placeholder}" />`;
    }
}
;
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}<button/>`;
    }
}
class Form extends UIElement {
    children = [];
    appnedChildren(child) {
        this.children.push(child);
    }
    render() {
        const html = this.children.map(child => child.render()).join("\n  ");
        return `<form id="${this.id}">${html}<form/>`;
    }
}
const formElement = new Form("login-form");
const emailInput = new Input("email", "email", "Enter your email: ");
const passwordInput = new Input("pass", "password", "Enter your password: ");
const submitButton = new Button("submit-btn", "Submit");
formElement.appnedChildren(emailInput);
formElement.appnedChildren(passwordInput);
formElement.appnedChildren(submitButton);
const rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
