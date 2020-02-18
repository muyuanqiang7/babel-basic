angular.module('babelBaic', []).controller('index', function ($scope) {
    $scope.name = 'muyuanqiang';
    $scope.addresses = [1, 2, 3, 4, 5, 6, 7];
    let foo = () => {
        console.log($scope.addresses);
    };
    $scope.test = function () {
        $scope.addresses.forEach(item => {
            console.log(item);
        });
        foo();
    }
});
