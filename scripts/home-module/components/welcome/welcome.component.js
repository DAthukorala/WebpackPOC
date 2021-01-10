export default function welcome() {
    return {
        template: require('../welcome/welcome.component.html'),
        controller: ('welcomeController', welcomeController),
        controllerAs: 'ctrl'
    };
}

function welcomeController() {
    let self = this;
}