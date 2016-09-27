'use strict';

angular.module('mindInsuranceApp')
	.service('RestService',function($http,$q){

	var baseUrl = "http://192.168.58.132:8034/Umbraco/Api";

    function getTestData() {
        var url = baseUrl + "/test/GetTestData";
        var deferred = $q.defer();
        $http.get(url, { cache: true })
            .success(function (response) {
                deferred.resolve(response);
            }).error(function (err, status) {
                deferred.reject(err);
            });
        return deferred.promise;
    };

    function getUserDashboard(userId) {

    }

    function getAssessmentDetails(assessmentId) {

    }

 return {
        getTestData: getTestData
    };
})