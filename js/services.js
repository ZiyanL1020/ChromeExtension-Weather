angular.module('myApp.services',[])
    .provider('Weather', WeatherServiceFunc);

function WeatherServiceFunc(){
    
    var apiKey = "";
    
    this.setApiKey = function(key){
        this.apiKey = key;    
    }
    
    this.getUrl = function (type, ext) {
        return "http://api.wunderground.com/api/" +
            this.apiKey + "/" + type + "/q/" + ext + ".json";
    }
    
    this.$get = function ($q, $http) {
        var self = this;
        return {
            getWeatherForecast: function (city) {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: self.getUrl('forecast', city),
                    cache: true
                }).success(function (data) {
                    deferred.resolve(data.forecast.simpleforecast);
                }).error(function (err) {
                    deferred.reject(err)
                });
                return deferred.promise;
            }
        }
    }
}

angular.module('myApp.services').factory('UserService', UserServiceFunc);

function UserServiceFunc(){

    var service = {
        user: {
            location: "autoip"
        },
        save: function(destination){
            this.user.location = destination;
        }
    };
    
    return service;
}