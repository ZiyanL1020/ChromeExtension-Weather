angular.module('myApp.controllers',[])
    .controller("MainController", MainControllerFunc);

MainControllerFunc.$inject = ['$scope', '$timeout', 'Weather', 'UserService'];

function MainControllerFunc($scope, $timeout, Weather, UserService){
    
    $scope.date = {};
    $scope.weather = {};
    $scope.user = UserService.user;
    
    var updateTime = function () {
        $scope.date.raw = new Date();
        $timeout(updateTime, 1000);
    };

    updateTime();

    Weather.getWeatherForecast($scope.user.location).then(function (data) {
        $scope.weather.forecast = data;
    });
}

angular.module('myApp.controllers')
    .controller("SettingsController", SettingsControllerFunc);

SettingsControllerFunc.$inject = ['$scope', '$location', 'UserService'];

function SettingsControllerFunc($scope, $location, UserService){
    $scope.user = UserService.user;
    $scope.save = function () {
        UserService.save($scope.user.location);
        $location.path('/');
    };
}