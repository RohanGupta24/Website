(function(){
	var app = angular.module('personal', []);
	var projNum = 0;
	
	app.controller('Controller', ['$http', function($http){
	    var personal = this;
	    personal.projects = [];
	    $http.get('projects.json').success(function(data){
	    	personal.projects = data.reverse();
	    });
	    projNum = personal.projects.length;
    }]);
	
	app.controller('projectController', ['$timeout','$interval','$scope','$sce', function($interval,$timeout,$scope,$sce){
		console.log("hello");
		$scope.showResume = false;
		console.log($scope.showResume)
		this.type = 0;
		this.detail = 0;
		this.isSet = function(checkType){
			return this.type === checkType;
		};
		this.setType = function(setType){
			this.type = setType;
		};
		this.getDetail = function(){
			return this.detail;
		};
		this.setDetail = function(projid){
			this.detail = projid;
		};
		this.next = function(){
			this.detail++;
		};
		this.previous = function(){
			this.detail--;
		};
		this.hideDetail = function(){
			/*console.log("function is working?");
			var myEl = angular.element( document.querySelector( '#detailbox'+this.detail ) );
			console.log(myEl);
			myEl.removeClass('fadeIn');
			myEl.addClass('animated fadeOut'); 
			var detail;
			function resetDetail(){
				detail = 0;
				console.log("inside fn "+detail);
			}
			//setTimeout(resetDetail(),1000);
			setTimeout(function() { resetDetail() },1000);
			
			this.detail=detail
			//$timeout(this.detail=detail,1000);
			
			console.log("outside fn "+this.detail);*/
			//$(".ng-modal-overlay").hide('slow',function(){this.detail=0;});
   		};
   		
   		$scope.to_trusted = function(html_code) {
		    return $sce.trustAsHtml(html_code);
		}

		$scope.resumeButtonPressed = function() {
			console.log("reached")
			$scope.showResume = true;
		}
	}]);
	
	app.controller('formController', ['$scope','$http',function($scope,$http){
		$scope.status = "Submit";
		$scope.success = false;
		$scope.email = {
			name: "",
			email: "",
			body: ""
		};

		this.submitForm = function(){
			$scope.status = "Submitting...";
			$http.post('mail.php', $scope.email).
                        success(function(data, status) {
                            if(data.success === true){
							    $scope.status = "Submit";
							    $scope.success = true;
								console.log("OK", data);
						    }
						    else{
							    $scope.status = "Try Again";
								console.log(data);
						    }
                        })
			/* $http({
		        url: "http://nisarg.me/mail.php",
		        data: $scope.email,
		        method: 'POST',
		        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		
		    }).success(function(data){
			    if(data.success){
				    $scope.status = "Email Sent";
				    $scope.success = true;
					console.log("OK", data);
			    }
			    else{
				    $scope.status = "Error";
					console.log(data);
			    }
			    }).error(function(err){"ERR", console.log(err)})
*/
				
		
		    		    };
		
	}])
	
	app.directive('work', function(){
		return {
			restrict : 'E',
			templateUrl: 'work.html',
		};
	});
})();
