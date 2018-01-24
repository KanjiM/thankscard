
app.controller('ChooseDesignController', function($scope){
    $scope.user = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            var options = $scope.thanks.topPage.data;
            if(options !== undefined){
                $scope.user = options;
            }
        }
    };  
});

