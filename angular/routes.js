app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/',{
			// location of the template
			templateUrl		: "pages/home.html",
			// Which controller it should use
			controller		: "homeController",
			// What is the alias of that controller
			controllerAs	: "homeCtrl"
		})
		.when('/indiTeamOne/:parent/:child', {
			templateUrl		: "pages/self.html",

			controller 		: "selfController",

			controllerAs	: "selfCtrl"
		})
		.when('/indiTeamTwo/:big/:small', {
			templateUrl		: "pages/self.html",

			controller 		: "selfController",

			controllerAs	: "selfCtrl"
		})
		.when('/statsOne/:teamNameOne', {
			templateUrl		: "pages/stats.html",

			controller 		: "statsOneController",

			controllerAs	: "statsOneCtrl"
		})
		.when('/statsTwo/:teamNameTwo', {
			templateUrl		: "pages/stats.html",

			controller 		: "statsTwoController",

			controllerAs	: "statsTwoCtrl"
		})
		.otherwise(
		{
			//redirectTo:'/'
            template   : '<h1>404 page not found</h1>'
		}
		);
}]);