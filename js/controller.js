/**
 * Created by WEB on 2016/1/11.
 */


var aService=angular.module('aService',['ngRoute','ui.bootstrap']);
var players=[
  {name:'斯蒂芬·库里',EnglishName:'Stephen Curry',nationality:'美国',homeplace:'美国俄亥俄州阿克伦',birthid:'1988年3月14日',jerseyNumber:'30号',id:1,image:'app/images/a1.jpg'},
  {name:'克莱·汤普森',EnglishName:'Klay Thompson',nationality:'美国',homeplace:'美国加利福尼亚州洛杉矶',birthid:'1990年2月8日',jerseyNumber:'11号',id:2,image:'app/images/a2.jpg'},
  {name:'安德烈·伊戈达拉',EnglishName:'Andre Iguodala',nationality:'美国',homeplace:'美国伊利诺伊州斯普林菲尔德',birthid:'1984年1月28日',jerseyNumber:'9号',id:3,image:'app/images/a3.jpg'},
  {name:'德雷蒙德·格林',EnglishName:'Draymond Green',nationality:'美国',homeplace:'美国密歇根州塞基诺',birthid:'1990年3月4日',jerseyNumber:'23号',id:4,image:'app/images/a4.jpg'},
  {name:'安德鲁·博古特',EnglishName:'Stephen Curry',nationality:'美国',homeplace:'美国俄亥俄州阿克伦',birthid:'1988年3月14日',jerseyNumber:'12号',id:5,image:'app/images/a5.jpg'}
];
aService.controller('main',function($scope){
  $scope.players=players;
});
aService.controller('a',function($scope){
  $scope.str=players[0];
  $scope.messages=[{value:'斯蒂芬·库里（Stephen Curry），1988年3月14日出生于美国俄亥俄州阿克伦（Akron, Ohio），美国职业篮球运动员，司职控球后卫，效力于NBA金州勇士队。'},{value:'斯蒂芬·库里于2009年通过选秀进入NBA后一直效力于勇士队，新秀赛季入选最佳新秀第一阵容，2014年、2015年入选全明星赛西部首发阵容，2014-15赛季当选常规赛MVP，入选最佳阵容第一阵容，并帮助勇士队获得NBA总冠军。'},{value:'斯蒂芬·库里2010年随美国队获土耳其世锦赛冠军，2014年随美国队获西班牙篮球世界杯冠军。'}];
  $scope.career=[{value:'2009年NBA选秀，斯蒂芬·库里在首轮第7顺位被金州勇士队选中。'},{value:'2011年2月20日，在全明星周末技巧挑战赛中，斯蒂芬·库里用时28.2秒，战胜拉塞尔·威斯布鲁克等对手，最终夺冠。'},{value:'2014-15赛季，斯蒂芬·库里合计命中了286记三分球，创造了NBA单赛季三分命中数新的纪录。'},{value:'2015年6月17日，勇士以总比分4-2战胜骑士，获得2014-15赛季NBA总冠军。'},{value:'2015年7月16日，一年一度的体育大奖ESPY评选结果揭晓，斯蒂芬·库里荣获最佳NBA运动员奖和最佳男运动员奖。'},{value:'2015年12月19日，斯蒂芬·库里当选《体育画报》评选的2015年度NBA最佳球员。'},{value:'太多啦，我库抢了詹狗所有的荣誉，我也是醉了'}];
  //图片轮播速度
  $scope.myInterval = 3000;
  // 轮播图数据初始化
  $scope.slides = [{src:'app/images/curry1.jpg',text:'Stephen Curry'},{src:'app/images/curry2.jpg',text:'Stephen Curry'},{src:'app/images/curry3.jpg',text:'Stephen Curry'},{src:'app/images/curry4.jpg',text:'Stephen Curry'},{src:'app/images/curry5.jpg',text:'Stephen Curry'},{src:'app/images/curry6.jpg',text:'Stephen Curry'},{src:'app/images/curry7.jpg',text:'Stephen Curry'}];
});
aService.controller('b',function($scope){
  $scope.str=players[1];
  $scope.messages=[{value:'克莱·汤普森（Klay Thompson），1990年2月8日出生于美国加利福尼亚州洛杉矶（Los Angeles, California），美国职业篮球运动员，司职得分后卫，效力于NBA金州勇士队。'},{value:'克莱·汤普森于2011年通过选秀进入NBA，新秀赛季入选最佳新秀第一阵容，2014年随美国队获得西班牙篮球世界杯冠军；2014-15赛季入选NBA全明星阵容和最佳阵容第三阵容，并随勇士队获得NBA总冠军。'}];
  $scope.career=[{value:'2011年NBA选秀，克莱·汤普森在首轮第11位被金州勇士队选中。'},{value:'2015年1月27日，克莱·汤普森当选西部周最佳球员。'},{value:'2015年6月17日，勇士以总比分4-2战胜骑士，获得2014-15赛季NBA总冠军。'}];
  //图片轮播速度
  $scope.myInterval = 3000;
  // 轮播图数据初始化
  $scope.slides =[{src:'app/images/thompson3.jpg',text:'Klay Thompson'},{src:'app/images/thompson2.jpg',text:'Klay Thompson'},{src:'app/images/thompson1.jpg',text:'Klay Thompson'},{src:'app/images/thompson4.jpg',text:'Klay Thompson'},{src:'app/images/thompson5.jpg',text:'Klay Thompson'}];
});
aService.controller('c',function($scope){
  $scope.str=players[2];
  $scope.messages=[{value:'安德烈·伊戈达拉（Andre Iguodala），1984年1月28日出生于美国伊利诺伊州斯普林菲尔德（Springfield, IL），美国职业篮球运动员，司职得分后卫/小前锋，效力于NBA金州勇士队。'},{value:'安德烈·伊戈达拉于2004年通过选秀进入NBA，新秀赛季入选最佳新秀第一阵容；2010年、2012年随美国队分获男篮世锦赛冠军和奥运会男篮冠军；2014-15赛季随勇士队获得NBA总冠军，并当选总决赛MVP。'}];
  $scope.career=[{value:'2004年NBA选秀，安德烈·伊戈达拉在首轮第9顺位被费城76人队选中。'},{value:'2012年8月11日，在湖人、魔术、掘金、76人四队关于德怀特·霍华德的交易中，安德烈·伊戈达拉被送至丹佛掘金队。'},{value:'2013年7月9日，金州勇士队和掘金、爵士达成三方交易，送出一个未来次轮选秀权，通过先签后换的方式得到安德烈·伊戈达拉。伊戈达拉的合同为期4年价值4800万美元。'},{value:'2015年6月17日，勇士以总比分4-2战胜骑士，获得2014-15赛季NBA总冠军。'}];
  //图片轮播速度
  $scope.myInterval = 3000;
  // 轮播图数据初始化
  $scope.slides =[{src:'app/images/iguodala1.jpg',text:'Andre Iguodala'},{src:'app/images/iguodala2.jpg',text:'Andre Iguodala'},{src:'app/images/iguodala3.jpg',text:'Andre Iguodala'},{src:'app/images/iguodala4.jpg',text:'Andre Iguodala'}];

});
aService.controller('d',function($scope){
  $scope.str=players[3];
  $scope.career=[{value:'2012年NBA选秀，德雷蒙德·格林在第二轮总第35顺位被金州勇士队选中。'},{value:'2015年7月10日，勇士宣布和德拉蒙德·格林正式签约，新合同为期5年价值8500万美元。'},{value:'球队顶梁柱！！！'}];
  $scope.messages=[{value:'德雷蒙德·格林（Draymond Green），1990年3月4日出生于美国密歇根州塞基诺（Saginaw, Michigan），美国职业篮球运动员，司职前锋，效力于NBA金州勇士队。'},{value:'德雷蒙德·格林于2012年通过选秀进入NBA后一直效力于勇士队，2014-15赛季入选最佳防守阵容第一阵容，并随勇士队获得NBA总冠军。'}];
  //图片轮播速度
  $scope.myInterval = 3000;
  // 轮播图数据初始化
  $scope.slides =[{src:'app/images/iguodala1.jpg',text:'Andre Iguodala'},{src:'app/images/iguodala2.jpg',text:'Andre Iguodala'},{src:'app/images/iguodala3.jpg',text:'Andre Iguodala'},{src:'app/images/iguodala4.jpg',text:'Andre Iguodala'}];

});
aService.controller('e',function($scope){
  $scope.str=players[4];
  $scope.messages=[{value:'安德鲁·博古特（Andrew Bogut），1984年11月28日出生于澳大利亚墨尔本（Melbourne, Australia），澳大利亚职业篮球运动员，司职中锋，效力于NBA金州勇士队。'},{value:'安德鲁·博古特2005年以选秀状元身份进入NBA，先后效力于雄鹿队和勇士队，新秀赛季入选最佳新秀阵容第一阵容；2009-10赛季入选最佳阵容第三阵容；2014-15赛季入选最佳防守阵容第二阵容，并随勇士队获得NBA总冠军。'},{value:'安德鲁·博古特多次代表澳大利亚国家队参加国际比赛。'}];
  $scope.career=[{value:'2005年NBA选秀，安德鲁·博古特在首轮第1顺位被密尔沃基雄鹿队选中。'},{value:'2012年3月14日，金州勇士队送出蒙塔-埃利斯、伊卡-尤度和夸梅-布朗，从雄鹿交易得到安德鲁·博古特和史蒂芬-杰克逊。'},{value:'2015年6月17日，勇士以总比分4-2战胜骑士，获得2014-15赛季NBA总冠军。'}];
});
aService.config(function($routeProvider){
  $routeProvider.
    when('/1',{
      controller:'a',
      templateUrl:'app/views/a1.html'
    }).when('/2',{
      controller:'b',
      templateUrl:'app/views/a2.html'
    }).when('/3',{
      controller:'c',
      templateUrl:'app/views/a3.html'
    }).when('/4',{
      controller:'d',
      templateUrl:'app/views/a4.html'
    }).when('/5',{
      controller:'e',
      templateUrl:'app/views/a5.html'
    })
    .otherwise({
      redirectTo:'/1'
    })
});
aService.controller('test',function($scope,$http){
  $scope.count = 0;
  $scope.data = {
    count:0,
    num:100
  }
});
aService.directive('mytest',function($http){
  return {
    scope: {
      id: "@",
      count:'='
    },
    restrict: 'E',
    template: '<input type="text" ng-model="input" ng-change="change()"/>',
    replace: true,
    link: function($scope, element, attrs, controller){
      $scope.getData = function(){
        $http.get('http://192.168.80.68:8091/api/museum/display/constantTH/count?token=token&id=54&sessionId=WEB-1465954979529-2').then(function(res){
          console.log(res.data);
          $scope.count = res.data.count;
          $scope.input = $scope.count;
        });
      }
      $scope.getData();
      $scope.change = function(){
        $scope.count = $scope.input;
      }
    }
  }
});