app.controller('RecieveBoxController', function($scope, RecieveData, SendData){
    $scope.recieveData = [];
    $scope.sendData = [];
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            //$scope.items = Data.items;
            $scope.recieveData = RecieveData.items;
            $scope.sendData = SendData.items;
        }
    };
    $scope.rLinkClick = function(name){
        console.log(name);
        recieve.pushPage("views/menu/RecieveContext.html", {data:name});
    };
    $scope.sLinkClick = function(name){
        console.log(name);
        recieve.pushPage("views/menu/SendContext.html", {data:name});
    };
});