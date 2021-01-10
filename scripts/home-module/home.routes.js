  routes.$inject = ['$stateProvider'];

  export default function routes($stateProvider) {
      $stateProvider
          .state('welcome', {
              url: '/welcome',
              template: require('./components/welcome/welcome.component')
          });
  }