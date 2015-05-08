var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {
	
	$scope.quotes = dataService.getData();
	$scope.addQuotes = function () {
		var quote = {
			text: $scope.newQuote,
			author: $scope.newAuthor
		};
		dataService.addData(quote); 
		$scope.newQuote = "";
		$scope.newAuthor = "";
	};
	$scope.removeQuotes = function() {
		var quote = $scope.oldQuote;
		dataService.removeData(quote);
		$scope.oldQuote = "";
	};
	$scope.hasInput = function (input) {
		
		
	}
});

