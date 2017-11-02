angular.module('myApp.Ctrl',[])
.controller('Demo1Ctrl',function($scope){
$scope.name="Cordova App";
$sope.dialogAlert=function() {
   navigator.notification.confirm("cretae by FZ", alertCallback, "Notice", "确定,取消");
   function alertCallback() {
      console.log("Alert is Dismissed!");
   }
};
})
.controller('LoginCtrl',function ($scope,$state){
   $scope.showError=false;
   $scope.loginCheck=function(){
    var username=$scope.username;
    var pwd=$scope.pwd;
    if(username=='1'&&pwd=='2')
    {
      $state.go('home');
     // $("body").removeClass("backimg").addClass('backhome');
    }
    else{
          $scope.showError=true;
    }
   };
})
.controller('registerCtrl',function($scope,$state){
	$scope.goBack=function(){
    $state.go('login');
	};
	$scope.gohome = function () {
    $state.go('home');
    };
})
.controller('homeCtrl',function($scope,$state){
  $scope.toMain1=function(homeId){
   //  $state.go('home.main');
   $state.go('main',{homeId:homeId});
  };
  $scope.goMain1=function(){
   $state.go('home.main1');
  };
  $scope.goMain2=function(){
   $state.go('home.main2');
  };
  $scope.goMain3=function(){
   $state.go('home.main3');
  };
  $scope.toHome=function(){
  //var pid=$stateParams.homeId;
  //alert(pid);
  $state.go('home');
};
})
.controller('mainCtrl',function($scope,$state,$stateParams){
var model=document.getElementById('myModel');
var img=document.getElementById('myImg');
var modelImg=document.getElementById('img01');
var captionText=document.getElementById('caption');
img.onclick=function(){
  model.style.display='block';
  modelImg.src=this.src;
  modelImg.alt=this.alt;
  captionText.innerHTML=this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    model.style.display = "none";
}
})
.controller('main2Ctrl',function($scope){
$scope.name='aa';
})
.controller('main3Ctrl',function($scope){
$scope.name3='a';
});