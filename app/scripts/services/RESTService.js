'use strict';

angular.module('mindInsuranceApp')
	.service('RestService',function($http,$q){

	var baseUrl = "http://192.168.58.142:8034/Umbraco/Api";

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

    function getUserDashboard() {
        var url = baseUrl + "/user/GetDashboard";
        var deferred = $q.defer();
        $http.get(url, { cache: true })
            .success(function (response) {
                deferred.resolve(response);
            }).error(function (err, status) {
                deferred.reject(err);
            });
        return deferred.promise;
    };


    function submitAssessment(args) {
        var url = baseUrl + "/Assessment/SubmitAsssment";
        var deferred = $q.defer();
        $http.post(url, args)
            .success(function (response) {
                deferred.resolve(response);
            }).error(function(err, status) {
                deferred.reject(err);
            });
        return deferred.promise;
    };

    function getAssessmentDetails(id) {
        var url = baseUrl + "/Assessment/GetAsssmentDetails/" + id ;
        var deferred = $q.defer();
        $http.get(url, { cache: true })
            .success(function (response) {
                deferred.resolve(response);
            }).error(function (err, status) {
                deferred.reject(err);
            });
        return deferred.promise;
    };

 return {
        getTestData: getTestData,
        getUserDashboard: getUserDashboard,
        getAssessmentDetails : getAssessmentDetails,
        submitAssessment :submitAssessment
    };
})