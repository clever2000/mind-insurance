"use strict";angular.module("mindInsuranceApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.bootstrap","ui.router","slick"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("main",{cache:!1,url:"/main","abstract":!0,templateUrl:"views/main.html",controller:"MainCtrl as vm"}).state("main.happinessLab",{url:"/happinessLab",views:{content:{templateUrl:"views/happinessLab.html",controller:"HappinessLabCtrl as vm"}}}).state("main.profile",{url:"/profile",views:{content:{templateUrl:"views/profile.html",controller:"ProfileCtrl as vm"}}}).state("main.upgrade",{url:"/upgrade",views:{content:{templateUrl:"views/upgrade.html",controller:"UpgradeCtrl as vm"}}}),b.otherwise("/main/happinessLab")}]),angular.module("mindInsuranceApp").controller("MainCtrl",function(){}),angular.module("mindInsuranceApp").controller("HappinessLabCtrl",function(){var a=this;a.step=1,a.activityTiles=[];for(var b=1;4>=b;b++)a.activityTiles.push({step:b})}),angular.module("mindInsuranceApp").controller("ProfileCtrl",function(){}),angular.module("mindInsuranceApp").controller("UpgradeCtrl",function(){}),angular.module("mindInsuranceApp").directive("header",function(){return{templateUrl:"views/directives/header.html",restrict:"E",replace:!0,scope:{avatarUrl:"@",name:"@",tabLabel:"@"},link:function(a,b,c){}}}),angular.module("mindInsuranceApp").directive("tabbar",function(){return{templateUrl:"views/directives/tabbar.html",restrict:"E",replace:!0,scope:{viewport:"@"},link:function(a,b,c){a.uiStates=["main.happinessLab","main.profile","main.upgrade"],a.classNames=["happiness-lab","profile","upgrade"],"xs"===a.viewport?a.tabLabels=["Happiness Lab","Profile","Upgrade"]:a.tabLabels=["My Happiness Lab","My Profile","Upgrade"]}}}),angular.module("mindInsuranceApp").directive("activityTile",["$uibModal",function(a){return{templateUrl:"views/directives/activity-tile.html",restrict:"E",replace:!0,scope:{},bindToController:{step:"="},controller:function(){var b=this;switch(b.step){case 1:Object.assign(b,{count:12,stepTitle:"My Daily Mindfulness Practice"});break;case 2:Object.assign(b,{count:0,stepTitle:"Subjective Wellbeing Assessment"});break;case 3:Object.assign(b,{count:0,stepTitle:"My Goals Insights & Actions"});break;case 4:Object.assign(b,{count:0,stepTitle:"Positive Goal Setting, Theory & Science"});break;default:Object.assign(b,{count:12,stepTitle:"My Daily Mindfulness"})}Object.assign(b,{bgImageUrl:"assets/images/tile_bg_"+b.step+".jpg"}),1===b.step||2===b.step||3===b.step?(b.button1={label:"Whats this?",onClick:function(){console.log("Whats this")}},b.button2={label:"Begin",onClick:function(){console.log("Begin")}},2===b.step&&(b.button2.onClick=function(){a.open({animation:!0,templateUrl:"views/modals/assessment.html",controller:"ModalAssessmentCtrl",controllerAs:"$ctrl",windowClass:"modal-background",resolve:{step:b.step}})})):b.button1={label:"View All",onClick:function(){console.log("View All")}}},controllerAs:"vm"}}]),angular.module("mindInsuranceApp").directive("activityIndicator",["$uibModal",function(a){return{templateUrl:"views/directives/activity-indicator.html",restrict:"E",replace:!0,scope:{},bindToController:{},controller:function(){var b=this,c=1;Object.assign(b,{step:c,stepTitle:"Values Assessment"}),b.openWhatsThis=function(){var b=a.open({animation:!0,templateUrl:"views/modals/whats-this.html",controller:"ModalWhatsThisCtrl",controllerAs:"$ctrl",windowClass:"modal-background",resolve:{step:c}});b.result.then(function(a){},function(){})},b.openAssessment=function(){a.open({animation:!0,templateUrl:"views/modals/assessment.html",controller:"ModalAssessmentCtrl",controllerAs:"$ctrl",windowClass:"modal-background",resolve:{step:c}})}},controllerAs:"vm"}}]),angular.module("mindInsuranceApp").directive("upgradeBanner",["$uibModal",function(a){return{templateUrl:"views/directives/upgrade-banner.html",restrict:"E",replace:!0,scope:{},bindToController:{},controller:function(){},controllerAs:"vm"}}]),angular.module("mindInsuranceApp").directive("hexagon",function(){return{templateUrl:"views/directives/hexagon.html",restrict:"E",replace:!0,scope:{},bindToController:{ngModel:"=",ngValue:"=",type:"@",filled:"="},controller:function(){},controllerAs:"vm"}}),angular.module("mindInsuranceApp").controller("ModalWhatsThisCtrl",["$uibModal","$uibModalInstance","step",function(a,b,c){var d=this;switch(d.step=c,d.beginLabel="Let's Begin",c){case 1:Object.assign(d,{title1:"What is",title2:"Values Assessment?",direction:"The Values Assessment, is a tool to help you gain insight into your current avlues hierarchy and the motivations behind your values.             It will also help you to identify, understand and respond to the impact of both congruence and conflict among your values."});break;case 3:Object.assign(d,{title1:"What is",title2:"Goal Insights And Actions?",direction:"The Goals Insight and Actions is "});break;case 4:Object.assign(d,{title1:"What is",title2:"Values Insights And Actions?",direction:"The Values Insight and Actions is lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei- is a tool to help you gain insight into your current avlues hierarchy and the motivations behind your values.             It will also help you to identify, understand and respond to the impact of both congruence and conflict among your values."})}d.begin=function(){a.open({animation:!0,templateUrl:"views/modals/assessment.html",controller:"ModalAssessmentCtrl",controllerAs:"$ctrl",windowClass:"modal-background",resolve:{step:c}}),b.close()},d.close=function(){b.close()}}]),angular.module("mindInsuranceApp").controller("ModalAssessmentCtrl",["$uibModalInstance","$uibModal","detectDevice","step",function(a,b,c,d){var e=this;switch(e.intro=!1,e.step=d,e.questionIndex=0,e.questions=[],e.responses=[],e.nextLabel="Next",d){case 1:Object.assign(e,{title:"Values Assessment",direction:"Below are a series of statements. Please read each statement carefully and think about how much each statement is or is not like you. Select a response that represents how much the statement is like you.",nQuestions:21,responseSelectors:["Not at all like me","Not much like me","A little like me","Somewhat like me","Like me","Very much like me"]});for(var f=0;f<e.nQuestions;f++)e.questions.push("Thinking up new ideas and being creative is important to me.\n I like to do things in my own original way."),e.responses.push(0);break;case 2:Object.assign(e,{title:"Subjective Wellbeing Assessment",direction:"On the following screens are five statements that you may agree or disagree with. Select the option that most meets your agreement. Please be open and honest in your responding.",nQuestions:5,responseSelectors:["Not at all like me","Not much like me","A little like me","Somewhat like me","Like me","Very much like me"]});for(var f=0;f<e.nQuestions;f++)e.questions.push("If I could live my life over, I would change almost nothing."),e.responses.push(0)}c.isPhone()&&(e.intro=!0,Object.assign(e,{title1:"Step "+d,title2:e.title,beginLabel:"Continue"})),e.begin=function(){e.intro=!1},e.next=function(){return 0==e.questionIndex&&(e.questionIndex=e.questions.length-2),e.questionIndex===e.questions.length-1?void b.open({animation:!0,templateUrl:"views/modals/complete.html",controller:"ModalCompleteCtrl",controllerAs:"$ctrl",windowClass:"backdrop",resolve:{step:d,warning:!1,title:function(){return e.title}}}).result.then(function(){a.close(!0)}):(e.questionIndex++,e.questionIndex===e.questions.length-1&&(e.nextLabel="Finish"),void console.log(e.questionIndex,e.responses))},e.close=function(){return e.intro?void a.close(!1):void b.open({animation:!0,templateUrl:"views/modals/complete.html",controller:"ModalCompleteCtrl",controllerAs:"$ctrl",windowClass:"backdrop",resolve:{step:d,warning:!0,title:null}}).result.then(function(b){b&&a.close(!1)})}}]),angular.module("mindInsuranceApp").controller("ModalCompleteCtrl",["$uibModalInstance","warning","step","title",function(a,b,c,d){var e=this;e.warning=b,b?(e.leave=function(){a.close(!0)},e.cancel=function(){a.close(!1)}):(e.step=c,e.title=d,e.ok=function(){a.close()})}]),angular.module("mindInsuranceApp").service("detectDevice",function(){return{isPhone:function(){return $(window).width()<768}}}),angular.module("mindInsuranceApp").run(["$templateCache",function(a){a.put("views/directives/activity-indicator.html",'<div class="activity-indicator">\n  <div>\n    <div class="step-label">Step 0{{vm.step}} out of 04</div>\n    <div class="description-label">{{vm.stepTitle}}</div>\n  </div>\n  <div class="button-container">\n    <button class="whats-this" ng-click="vm.openWhatsThis()">What\'s this</button>\n    <button class="begin">Begin</button>\n  </div>\n  <!-- <Modal\n    show={this.state.whatsThisModalVisible}\n    onHide={()=>this.handleWhatsThisModalVisibility(false)}\n    dialogClassName="pattern-background"\n  >\n    <button onClick={()=>this.handleWhatsThisModalVisibility(false)}>Close</button>\n  </Modal> -->\n</div>\n'),a.put("views/directives/activity-tile.html",'<div class="activity-tile">\n  <div class="content-tile" ng-style="{\'background-image\':\'url(\'+vm.bgImageUrl+\')\'}">\n    <div class="count-box-wrapper">\n      <span ng-class="{\'invisible\':!vm.count}" class="count-box">{{vm.count}}</span>\n    </div>\n    <div class="description-tile">{{vm.stepTitle}}</div>\n    <div class="button-container">\n      <button class="button1" ng-click="vm.button1.onClick()">{{vm.button1.label}}</button>\n      <button class="button2" ng-class="{\'invisible\': !vm.button2}" ng-click="vm.button2.onClick()">{{vm.button2.label}}</button>\n    </div>\n  </div>\n</div>\n'),a.put("views/directives/header.html",'<div class="row header no-margin">\n  <div class="col-xs-12 col-sm-7 no-padding">\n    <div class="left-box">\n      <div id="avatar" ng-style="{\'background-image\': \'url(\'+avatarUrl+\')\'}"/>\n      <div>\n        <div class="welcome-label">Welcome to your</div>\n        <div class="name-label">{{tabLabel}} {{name}}</div>\n      </div>\n    </div>\n  </div>\n  <div class="col-sm-5 hidden-xs no-padding">\n    <div class="right-box">\n      <div class="swb-score animated zoomIn">\n        <div class="circle">3</div>\n        <div class="swb-score-label">My SWB Score</div>\n      </div>\n      <div class="subscription-level animated zoomIn">\n        <div class="circle">Happy</div>\n        <div class="subscription-level-label">Subscription Level</div>\n      </div>\n      <button class="btn-logout animated zoomIn">Log out</button>\n    </div>\n  </Col>\n</div>\n'),a.put("views/directives/hexagon.html",'<div class="hexagon-wrapper">\n  <label class="hexagon-label">\n    <input ng-if="vm.type==\'radio\'" type="radio" ng-model="vm.ngModel" ng-value="vm.ngValue.key">\n    <input ng-if="vm.type==\'checkbox\'" type="checkbox" ng-value="vm.ngValue" ng-checked="vm.filled" disabled>\n    <div class="hexagon">\n      <span ng-if="vm.type==\'checkbox\'" class="figure">{{vm.ngValue}}</span>\n    </div>\n    <span ng-if="vm.type==\'radio\'" class="hexagon-description">{{vm.ngValue.value}}</span>\n  </label>\n  <div ng-if="vm.type==\'radio\'" class="line"/>\n  <div ng-if="vm.type==\'radio\'" class="border-line"/>\n</div>\n'),a.put("views/directives/tabbar.html",'<div class="tab-bar gray-border">\n  <a ui-sref="{{uiStates[i]}}" ng-repeat="i in [0,1,2]" ui-sref-active="active-tab">\n    <div class="tab gray-border" ng-class="classNames[i]">\n      <div class="tab-image" />\n      <!-- <picture>\n\n      <source media="(max-width: 400px)" srcset="/assets/images/my_happiness_lab.png">\n\n      <source media="(max-width: 800px)" srcset="/assets/images/my_profile.png">\n\n      <img src="/assets/images/upgrade.png" alt="Space Needle">\n\n      </picture> -->\n\n      <div class="tab-label">{{tabLabels[i]}}</div>\n    </div>\n  </a>\n</div>\n'),a.put("views/directives/upgrade-banner.html",'<div class="upgrade-banner">\n  <div class="upgrade-content">\n    <div class="bordered">\n      <div class="first-line">Take control of your health and wellbeing</div>\n      <div class="wrapper">\n        <div class="second-line">Upgrade to Happier</div>\n        <div class="button-wrapper">\n          <button>See all packages</button>\n          <button>Sign me up</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'),a.put("views/happinessLab.html",'<div class="happiness-lab">\n  <div class="hidden-xs hidden-sm">\n    <div class="top-bar">\n      <div class="indicator">\n        <activity-indicator />\n      </div>\n      <div class="mindfulness">\n        <activity-tile step="1"/>\n      </div>\n    </div>\n    <table>\n      <tr>\n        <td><activity-tile step="2" /></td>\n        <td><activity-tile step="3" /></td>\n      </tr>\n      <tr>\n        <td><activity-tile step="4" /></td>\n      </tr>\n      <tr>\n        <td><upgrade-banner /></td>\n      </tr>\n    </table>\n  </div>\n\n  <div class="visible-xs-block visible-sm-block">\n    <activity-indicator />\n    <div class="hidden-xs">\n      <slick arrows=false dots=true infinite=false speed=300 slides-to-show=2 slides-to-scroll=1>\n        <activity-tile ng-repeat="at in vm.activityTiles" step="at.step" />\n      </slick>\n    </div>\n    <div class="visible-xs-block">\n      <activity-tile ng-repeat="at in vm.activityTiles" step="at.step" />\n    </div>\n    <upgrade-banner />\n  </div>\n\n</div>\n'),a.put("views/main.html",'<header avatar-url="/assets/images/profile.jpg" name="Carl" tab-label="Happiness Lab" />\n\n<div class="row no-margin bottom-area">\n  <div class="visible-xs-block tab-bar-area">\n    <tabbar viewport="xs" />\n  </div>\n  <div class="hidden-xs tab-bar-area">\n    <tabbar viewport="sm" />\n  </div>\n  <div ui-view="content" class="content-area gray-border" />  \n</div>\n'),a.put("views/modals/assessment.html",'<div class="assessment-modal">\n  <div class="close-box">\n    <button class="btn btn-close" type="button" ng-click="$ctrl.close()">&times;</button>\n  </div>\n  <div ng-if="$ctrl.intro" ng-include="\'views/partials/intro.html\'">\n  </div>\n  <div ng-if="!$ctrl.intro" class="content-wrapper">\n    <div class="title">\n      {{$ctrl.title}}\n    </div>\n    <div class="direction">\n      {{$ctrl.direction}}\n    </div>\n    <div class="divider gray-border" />\n    <div class="question-indicator-box">\n      <div class="question-indicator" ng-class="{\'scroll\': $ctrl.step===1, \'non-scroll\': $ctrl.step===2}">\n        <hexagon ng-repeat="question in $ctrl.questions track by $index" type="checkbox" filled="$index<=$ctrl.questionIndex" ng-value="$index+1" />\n      </div>\n    </div>\n\n    <div class="question-index">\n      Question {{$ctrl.questionIndex+1}} of {{$ctrl.nQuestions}}\n    </div>\n    <div class="question">{{$ctrl.questions[$ctrl.questionIndex]}}</div>\n    <div class="answer-box">\n      <div class="answers">\n        <span class="leftmost-answer">{{$ctrl.responseSelectors[0]}}</span>\n        <hexagon ng-repeat="r in $ctrl.responseSelectors track by $index" type="radio" ng-model="$ctrl.responses[$ctrl.questionIndex]" ng-value="{key:$index+1,value:r}" />\n        <span class="rightmost-answer">{{$ctrl.responseSelectors[$ctrl.responseSelectors.length-1]}}</span>\n      </div>\n      <button class="btn btn-next" ng-click="$ctrl.next()" ng-disabled="$ctrl.responses[$ctrl.questionIndex]==0">\n        {{$ctrl.nextLabel}}\n      </button>\n    </div>\n  </div>\n</div>\n'),a.put("views/modals/complete.html",'<div class="complete-modal">\n  <div class="content-wrapper">\n    <div class="icon-box"></div>\n    <div ng-if="!$ctrl.warning" class="step">Step {{$ctrl.step}}</div>\n    <div class="title">{{$ctrl.warning ? \'Your about to leave this assessment\' : $ctrl.title + \' Complete\'}}</div>\n    <div class="detail">If you choose not to continue, the questions you have completed will not be saved</div>\n    <div class="button-box">\n      <button ng-if="$ctrl.warning" class="btn btn-cancel" ng-click="$ctrl.cancel()">Cancel</button>\n      <button ng-if="$ctrl.warning" class="btn btn-leave" ng-click="$ctrl.leave()">Yes I want to leave</button>\n      <button ng-if="!$ctrl.warning" class="btn btn-ok" ng-click="$ctrl.ok()">OK</button>\n    </div>\n  </div>\n</div>\n'),a.put("views/modals/whats-this.html",'<div class="whats-this-modal">\n  <div class="close-box">\n    <button class="btn btn-close" type="button" ng-click="$ctrl.close()">&times;</button>\n  </div>\n  <div ng-include="\'views/partials/intro.html\'"></div>\n</div>\n'),a.put("views/partials/intro.html",'<div class="_intro">\n  <div class="modal-title">\n    <span class="title1">{{$ctrl.title1}}</span>\n    &nbsp;\n    <span class="title2">{{$ctrl.title2}}</span>\n  </div>\n  <div class="intro-direction">\n    {{$ctrl.direction}}\n  </div>\n  <button class="btn btn-begin" type="button" ng-click="$ctrl.begin()">{{$ctrl.beginLabel}}</button>\n</div>\n'),a.put("views/profile.html",""),a.put("views/upgrade.html","")}]);