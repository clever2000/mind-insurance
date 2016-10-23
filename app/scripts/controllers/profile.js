'use strict';

/**
 * @ngdoc function
 * @name mindInsuranceApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the mindInsuranceApp
 */
angular.module('mindInsuranceApp')
  .controller('ProfileCtrl', function (detectDevice) {
    var vm = this;

    vm.editProfileButton = {
      label: detectDevice.isPhone() ? 'Edit' : 'Edit Profile',
      onClick: function() {
        console.log('edit profile clicked');
      }
    }
    vm.changeButton = {
      label: 'Change',
      onClick: function() {
        console.log('change button clicked');
      }
    }

    var person = {
      firstName: 'Carl',
      lastName: 'Fredricksen',
      street: 'Kevin Parade',
      suburb: 'Paradise Falls',
      postcode: '1001',
      state: 'Amazon Vally',
      country: 'South America',
      username: 'Carlfredricksen@up.com.au',
      password: '********'
    }
    var company = {

    }

    _.assign(vm, {
      person: person
    })
  });
