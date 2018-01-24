app.controller('RecieveContextController', function($scope, RecieveData){
    //$scope.recieveData = [];
    $scope.rdata = null; 
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
                var options = $scope.recieve.topPage.data;
                if(options !== undefined){
                $scope.rdata = options;
            }
        }
    };  
});