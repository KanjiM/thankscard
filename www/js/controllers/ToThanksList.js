app.controller('ToThanksListController', function($scope, ToThanksUser){
    $scope.users = [];
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            //$scope.items = Data.items;
            $scope.users = ToThanksUser.users;
        }
    };
    $scope.linkClick = function(name){
        console.log(name);
        thanks.pushPage("views/menu/ChooseDesign.html", {data:name});
    };
    
});

