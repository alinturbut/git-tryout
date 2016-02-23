'use strict';

angular.module('vcrawlApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


