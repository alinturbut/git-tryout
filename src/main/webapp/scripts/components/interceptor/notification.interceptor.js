 'use strict';

angular.module('vcrawlApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-vcrawlApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-vcrawlApp-params')});
                }
                return response;
            }
        };
    });
