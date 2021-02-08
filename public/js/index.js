var numberOfDiseases;
var arrayDiseases;
typeof window;
var arrayMedForIllness;
var func;
var doc_id;

var firebaseConfig = {
  apiKey: "AIzaSyCEdwSS3HKDtbjyR_mz2gLdTfWG7qOZ_eQ",
  authDomain: "anti-sexual-harassment.firebaseapp.com",
  databaseURL: "https://anti-sexual-harassment.firebaseio.com",
  projectId: "anti-sexual-harassment",
  storageBucket: "anti-sexual-harassment.appspot.com",
  messagingSenderId: "406036343311",
  appId: "1:406036343311:web:bad8fb6117bbb388d1d17a",
  measurementId: "G-FGV4E5YEGX"
}; 
// Initialize Firebase  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
//db.settings({timestampsInSnapshots: true});
var provider = new firebase.auth.GoogleAuthProvider();


angular.module('NewApp', ['ngMaterial', 'ngMessages'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('red');
   
}).controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.toggleRight = buildToggler('right');
  $scope.isOpenRight = function(){
    return $mdSidenav('right').isOpen();
  };

  var displayName;
  var email;
  var emailVerified;
  var photoURL;
  var isAnonymous;
  var uid;
  var providerData; 
 
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) { 
                displayName = user.displayName;
                email = user.email;
                emailVerified = user.emailVerified;
                photoURL = user.photoURL;
                isAnonymous = user.isAnonymous;
                uid = user.uid;
                providerData = user.providerData;  
            }   

            console.log(uid) 
            let tasks = [];  
            let dates = [];  
                
            //Retrieve Recent Tasks
            db.collection("users").doc(uid).collection("recent_tasks")
              .orderBy("date", "desc")
              .get()
              .then((querySnapshot) => { 
                  querySnapshot.forEach((doc) => { 
                    const myTasks = doc.data();   
                    const taskName = myTasks.task; 
                    tasks.push(taskName); 
                    const taskDate = myTasks.date; 
                    dates.push(taskDate); 

                    $scope.allTasks = [
                      { task: tasks[0],
                        date: dates[0]}, 
                      { task: tasks[1],
                        date: dates[1]}, 
                      { task: tasks[2],
                        date: dates[2]}, 
                      { task: tasks[3],
                        date: dates[3]},   
                      { task: tasks[4],
                        date: dates[4]}, 
                      { task: tasks[5],
                        date: dates[5]}, 
                      { task: tasks[6],
                        date: dates[6]}, 
                      { task: tasks[7],
                        date: dates[7]},   
                      { task: tasks[8],
                        date: dates[8]},   
                      { task: tasks[9],
                        date: dates[9]}, 
                      { task: tasks[10],
                        date: dates[10]}, 
                      { task: tasks[11],
                        date: dates[11]}, 
                      { task: tasks[12],
                        date: dates[12]},   
                      { task: tasks[13],
                        date: dates[13]},
                      { task: tasks[14],
                        date: dates[14]},
                      { task: tasks[15],
                        date: dates[15]},       
                    ]; 
                  });
                  console.log(tasks);
              });
              $scope.recentTasks = [];  

            let postContents = [];  
            let postDates = [];   
            //Retrieve Recent Posts
            db.collection("users").doc(uid).collection("recent_posts")
            .orderBy("date", "desc")
            .get()
            .then((querySnapshot) => { 
                querySnapshot.forEach((doc) => { 
                  const myPosts = doc.data();   
                  const postContent = myPosts.post_content; 
                  postContents.push(postContent); 
                  const postDate = myPosts.date; 
                  postDates.push(postDate);  

                  $scope.allRecentPosts = [
                    { content: postContents[0],
                      date: postDates[0]}, 
                    { content: postContents[1],
                      date: postDates[1]}, 
                    { content: postContents[2],
                      date: postDates[2]}, 
                    { content: postContents[3],
                      date: postDates[3]},   
                    { content: postContents[4],
                      date: postDates[4]}, 
                    { content: postContents[5],
                      date: postDates[5]}, 
                    { content: postContents[6],
                      date: postDates[6]}, 
                    { content: postContents[7],
                      date: postDates[7]},   
                    { content: postContents[8],
                      date: postDates[8]},   
                    { content: postContents[9],
                      date: postDates[9]}, 
                    { content: postContents[10],
                      date: postDates[10]}, 
                    { content: postContents[11],
                      date: postDates[11]}, 
                    { content: postContents[12],
                      date: postDates[12]},   
                    { content: postContents[13],
                      date: postDates[13]},
                    { content: postContents[14],
                      date: postDates[14]},
                    { content: postContents[15],
                      date: postDates[15]},       
                  ]; 
                });
                console.log(postContents);
            });
            $scope.recentPosts = [];  

            $scope.add_comment_section=[]; 
            let AllPostContents = [];  
            let AllPostDates = [];   
            let AllPostUsernames = [];   
            //Retrieve Recent Posts
            db.collection("post_lists")
            .orderBy("date", "desc")
            .get()
            .then((querySnapshot) => { 
                querySnapshot.forEach((doc) => { 
                  const allPosts = doc.data();   
                  const AllPostContent = allPosts.post_content; 
                  AllPostContents.push(AllPostContent); 
                  const AllPostDate = allPosts.date; 
                  AllPostDates.push(AllPostDate);  
                  const AllPostUsername = allPosts.username; 
                  AllPostUsernames.push(AllPostUsername);  

                  $scope.allUserPosts = [
                    { content: AllPostContents[0],
                      date: AllPostDates[0], 
                      username: AllPostUsernames [0]},
                    { content: AllPostContents[1],
                      date: AllPostDates[1], 
                      username: AllPostUsernames [1]},
                    { content: AllPostContents[2],
                      date: AllPostDates[2], 
                      username: AllPostUsernames [2]}, 
                    { content: AllPostContents[3],
                      date: AllPostDates[3], 
                      username: AllPostUsernames [3]},  
                    { content: AllPostContents[4],
                      date: AllPostDates[4], 
                      username: AllPostUsernames [4]},
                    { content: AllPostContents[5],
                      date: AllPostDates[5], 
                      username: AllPostUsernames [5]},
                    { content: AllPostContents[6],
                      date: AllPostDates[6], 
                      username: AllPostUsernames [6]},
                    { content: AllPostContents[7],
                      date: AllPostDates[7], 
                      username: AllPostUsernames [7]},   
                    { content: AllPostContents[8],
                      date: AllPostDates[8], 
                      username: AllPostUsernames [8]},  
                    { content: AllPostContents[9],
                      date: AllPostDates[9], 
                      username: AllPostUsernames [9]},
                    { content: AllPostContents[10],
                      date: AllPostDates[10], 
                      username: AllPostUsernames [10]}, 
                    { content: AllPostContents[11],
                      date: AllPostDates[11], 
                      username: AllPostUsernames [11]}, 
                    { content: AllPostContents[12],
                      date: AllPostDates[12], 
                      username: AllPostUsernames [12]},  
                    { content: AllPostContents[13],
                      date: AllPostDates[13], 
                      username: AllPostUsernames [13]},
                    { content: AllPostContents[14],
                      date: AllPostDates[14], 
                      username: AllPostUsernames [14]},
                    { content: AllPostContents[15],
                      date: AllPostDates[15], 
                      username: AllPostUsernames [15]},       
                  ]; 

                  
                                    

                  $scope.onClick=function(index,row){
                    $scope.add_comment_section[index+'_'+row]=true;
                  };
      
                  $scope.openCommentBox = function (index, data) {
                    //$window.alert("Row Index: " + index);
                    $scope.add_comment_section[index]=true;
                    
                      

                                    
                  };

                  $scope.closeCommentBox = function (index) {
                    //$window.alert("Row Index: " + index);
                    $scope.add_comment_section[index]=false;
                    $scope.add_comment_btn[index]=true;
                  };

                  $scope.SaveComment = function (index) {
                    //$window.alert("Row Index: " + index);
                    $scope.add_comment_section[index]=false;
                  };

                  $scope.detailedSaveComment = function () {
                    //$window.alert("Row Index: " + index);
                    var db = firebase.firestore();
                    var user_name = document.getElementById("input-username").value; 
                    var post_comment = document.getElementById("post-comment").value; 

                    var detailed_username = document.getElementById('detailed_username').innerText;
                    var detailed_date= document.getElementById('detailed_date');
                    var detailed_contents = document.getElementById('detailed_contents');

                    var post_date = detailed_date.innerText;
                    var newDate = post_date.replace(/\//g, "-");
                    var pro_noun = newDate.replace('Posted on: ', "");
                    var final_comment_doc_id = pro_noun;
                    
                    var datetime = "Commented on: " + new Date().toLocaleString();
                    var docDateTime = new Date().toLocaleString();
                    var finalDocDateTime = docDateTime.replace(/\//g, "-");
      
                    const docRef1 = db.doc("post_lists/"+final_comment_doc_id+"/comments/"+finalDocDateTime);
                    const docRef2 = db.doc("users/"+uid+"/recent_posts/"+final_comment_doc_id+"/comments/"+finalDocDateTime);
                    const docRef3 = db.doc("users/"+uid+"/recent_tasks/"+finalDocDateTime);

                    docRef1.set({
                      username: user_name+"", 
                      post_comment: post_comment+"",
                      date: datetime+"",
                    }).then(function() {
                      if(detailed_username != user_name){
                        docRef3.set({
                          task: "You commented on "+detailed_username+"'s post.", 
                          date: datetime+"",
                        }).then(function() {
                        docRef2.set({
                          username: user_name+"", 
                          post_comment: post_comment+"",
                          date: datetime+"",
                        }).then(function() {
                          window.location.reload();
                          });
                        });
                      } else {
                        docRef2.set({
                          username: user_name+"", 
                          post_comment: post_comment+"",
                          date: datetime+"",
                        }).then(function() {
                          window.location.reload();
                          }); 
                      }
                      
                    });
                  };

                  var elementIsClicked = false; // declare the variable that tracks the state
                  function clickHandler(){ // declare a function that updates the state
                    elementIsClicked = true;
                    isElementClicked();
                  }

                                    

                  var tab1 = document.getElementById('account-info-btn'); // 
                  var tab2 = document.getElementById('recent-task-btn'); //  
                  var tab3 = document.getElementById('recent-posts-btn'); // 
                  var tab4 = document.getElementById('forum-btn'); //  
                  var tab5 = document.getElementById('assistant-btn'); // 
 

                  $scope.viewAllComments = function (data) {

                    var x1 = document.getElementById("account-info");
                    var x2 = document.getElementById("recent-tasks"); 
                    var x3 = document.getElementById("recent-posts"); 
                    var x4 = document.getElementById("forum"); 
                    var x5 = document.getElementById("legal-assistant"); 
                    var x6 = document.getElementById("post-detailed"); 

                    var sideNav =  document.getElementById('side_nav');
                    sideNav.style.display = "none";

                    x1.style.display = "none"; 
                    x2.style.display = "none";
                    x3.style.display = "none";
                    x4.style.display = "none";
                    x5.style.display = "none";

                    
                    x6.style.display = "block";

                    var comments_list = document.getElementById('comments-list');
                    comments_list.style.display = "block";
                    
                  
                    var db = firebase.firestore();
                    var user_name = document.getElementById("input-username").value; 
                    var post_comment = document.getElementById("post-comment").value; 

                    var post_date = data.date;
                    var post_username = data.username;
                    var post_content = data.content;

                    var detailed_username = document.getElementById('detailed_username');
                    var detailed_date= document.getElementById('detailed_date');
                    var detailed_contents = document.getElementById('detailed_contents');

                      
                    var newDate = post_date.replace(/\//g, "-");
                    var pro_noun = newDate.replace('Posted on: ', "");
                    var final_comment_doc_id = pro_noun;

                    detailed_username.innerText = post_username;
                    detailed_date.innerText = post_date;
                    detailed_contents.innerText = post_content;
                    
                    let AllCommentContents = [];  
                    let AllCommentDates = [];   
                    let AllCommentUsernames = [];   
                                    
                                    //Retrieve Recent Posts
                                    db.collection("post_lists").doc(final_comment_doc_id).collection('comments')
                                    .orderBy("date", "asc")
                                    .get()
                                    .then((querySnapshot) => { 
                                        querySnapshot.forEach((doc) => { 
                                          const allComments = doc.data();   
                                          const AllCommentContent = allComments.post_comment; 
                                          AllCommentContents.push(AllCommentContent); 
                                          const AllCommentDate = allComments.date; 
                                          AllCommentDates.push(AllCommentDate);  
                                          const AllCommentUsername = allComments.username; 
                                          AllCommentUsernames.push(AllCommentUsername);  

                                          $scope.allUserComments = [
                                            { content: AllCommentContents[0],
                                              date: AllCommentDates[0], 
                                              username: AllCommentUsernames [0]},
                                            { content: AllCommentContents[1],
                                              date: AllCommentDates[1], 
                                              username: AllCommentUsernames [1]},
                                            { content: AllCommentContents[2],
                                              date: AllCommentDates[2], 
                                              username: AllCommentUsernames [2]}, 
                                            { content: AllCommentContents[3],
                                              date: AllCommentDates[3], 
                                              username: AllCommentUsernames [3]},  
                                            { content: AllCommentContents[4],
                                              date: AllCommentDates[4], 
                                              username: AllCommentUsernames [4]},
                                            { content: AllCommentContents[5],
                                              date: AllCommentDates[5], 
                                              username: AllCommentUsernames [5]},      
                                          ]; 
                        
                                        });
                                        console.log(AllCommentUsernames);
                                    });
                                    $scope.userComments = [];  

                  
                };

                  $scope.saveComment = function (data) {
                    //alert(data.date); 

                    //var post_comment = document.getElementById('post-comment').value;
                    //if(post_comment  == ""){
                      //alert('Add somecomment before saving...');
                    //} else if (post_comment  != "") {
                      var db = firebase.firestore();
                      var user_name = document.getElementById("input-username").value; 
                      var post_comment = document.getElementById("post-comment").value; 

                      var post_date = data.date;
                      var newDate = post_date.replace(/\//g, "-");
                      var pro_noun = newDate.replace('Posted on: ', "");
                      var final_comment_doc_id = pro_noun;
                      
                      var datetime = "Commented on: " + new Date().toLocaleString();
                      var docDateTime = new Date().toLocaleString();
                      var finalDocDateTime = docDateTime.replace(/\//g, "-");
        
                      const docRef1 = db.doc("post_lists/"+final_comment_doc_id+"/comments/"+finalDocDateTime);
                      const docRef2 = db.doc("users/"+uid+"/recent_posts/"+final_comment_doc_id+"/comments/"+finalDocDateTime);
                      const docRef3 = db.doc("users/"+uid+"/recent_tasks/"+finalDocDateTime);

                      var poser_username = data.username;
                      if(user_name == "" || user_name == " "){
                        alert("Username must be set first before you can comment to any users' post." );
                      } else {
                        docRef1.set({
                        username: user_name+"", 
                        post_comment: post_comment+"",
                        date: datetime+"",
                      }).then(function() {
                         if(poser_username === user_name){
                          docRef2.set({
                            username: user_name+"", 
                            post_comment: post_comment+"",
                            date: datetime+"",
                          }).then(function() {
                            window.location.reload();
                            }); 
                        } if(poser_username != user_name) {
                          docRef3.set({
                            task: "You commented on "+poser_username+"'s post.", 
                            date: datetime+"",
                          }).then(function() {
                            
                          docRef2.set({
                            username: user_name+"", 
                            post_comment: post_comment+"",
                            date: datetime+"",
                          }).then(function() {
                            window.location.reload();
                            });
                          });


                        }
                        
                      });
                      }
                      
                    //}

                    
                  };
                });
                console.log(postContents);
            });
            $scope.userPosts = [];  

                                  
          });

          $scope.data = {
            cb1: 'enabled',
            cb4: 'enabled',
            cb5: 'disabled'
          };

          $scope.message = 'disabled';

          $scope.onChange = function(cbState) {
            $scope.message = 'enabled';
          };         

  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function() {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  } 

  function buildDelayedToggler(navID) {
    return debounce(function() { 
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
  }

  function buildToggler(navID) {
    return function() { 
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    };
  }
})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () { 
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });

  };
})
.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () { 
    $mdSidenav('right').close()
      .then(function () {
        $log.debug("close RIGHT is done");
      });
  };
}).controller('ListCtrl', function($scope) {
  var imagePath1 = "https://firebasestorage.googleapis.com/v0/b/anti-sexual-harassment.appspot.com/o/forums.png?alt=media&token=b023e193-be8f-4454-b507-28a916c409f9";
  var imagePath2 = "https://firebasestorage.googleapis.com/v0/b/anti-sexual-harassment.appspot.com/o/about.png?alt=media&token=8110940b-3da0-4351-b58f-d6a23b26b98d";
  var imagePath3 = "https://firebasestorage.googleapis.com/v0/b/anti-sexual-harassment.appspot.com/o/terms-conditions.png?alt=media&token=3368f021-ab62-40cb-95e0-6dd4fb77105f";
  var imagePath4 = "https://firebasestorage.googleapis.com/v0/b/anti-sexual-harassment.appspot.com/o/privacy-policy.png?alt=media&token=0d2d6898-a9ea-4f2a-9b50-217b827bbb42";
  var imagePath5 = "https://firebasestorage.googleapis.com/v0/b/anti-sexual-harassment.appspot.com/o/assistant.png?alt=media&token=1be63a0b-29df-4ab9-8c3f-f886a43fdce1";
  var imagePath6 = "https://firebasestorage.googleapis.com/v0/b/anti-sexual-harassment.appspot.com/o/home.png?alt=media&token=c7ef7bff-3945-40d1-b9e4-b85c93878b6a";
  $scope.todos = [
    {
      face : imagePath6,
      title: 'Home',
      description: 'View our features',
      href: 'index.html'
    }, 
    {
      face : imagePath1,
      title: 'Forum',
      description: 'Post your ideas or expierences',
      href: 'login.html'
    }, 
    {
      face : imagePath5,
      title: 'Assistant',
      description: 'Ask our AI Legal Assistant',
      href: 'legal-assistant.html'
    }, 
    {
      face : imagePath2,
      title: 'About',
      description: 'View our about page',
      href: 'about.html'
    }, 
    {
      face : imagePath3,
      title: 'Terms & Conditions',
      description: 'Read our terms and conditions',
      href: 'terms-conditions.html'
    }, 
    {
      face : imagePath4,
      title: 'Privacy Policy',
      description: 'View our privacy policy',
      href: 'privacy-policy.html'
    }, 
  ]; 

    $scope.selected = 'other'; 

    
    

                
                
 });



function loginGoogle(){
  firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}
function loginAccount(){
  
  firebase.auth()

  .signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    console.log(user)

    document.getElementById("btn_logout").disabled = false;

  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(error.code)
    console.log(error.message)
  });
}

function initApp(){
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;


        //document.getElementById("googleLogin").disabled = true;
        
            //document.getElementById("btn_logout").disabled = false;

        if(email != ""){
          try{
            document.getElementById("status").textContent = "Successfully logged in";
            setTimeout(function(){
              window.location.href = "https://sexualharassment.firebaseapp.com/forum.html";
           },3000);

            document.getElementById("googleLogin").disabled = true;
        
            document.getElementById("btn_logout").disabled = false;
          }catch(err){
            console.log("Element: status, not found")
          }
          
          
         
        }

        // ...
      } else {
        // User is signed out.
        // ...
        document.getElementById("status").textContent = "Signed out";
        document.getElementById("btn_logout").disabled = true;
      }
    });
}

window.onload = function() { 
try{
  initApp();
  
  document.getElementById("btn_logout").disabled = true;
}catch(err){
  console.log("error initialize.");
}
  
}; 
function logoutAccount(){
  firebase.auth().signOut().then(function() {
    //document.getElementById("status").textContent = "Signed out";
    //document.getElementById("btn_logout").disabled = true;
    //document.getElementById("googleLogin").disabled = false;
    window.location.href = "https://sexualharassment.firebaseapp.com/login.html";
     
  }).catch(function(error) {
    // An error happened.
  });
}


function logoutAccountInHome(){
  firebase.auth().signOut().then(function() {
    //document.getElementById("status").textContent = "Signed out";
    //document.getElementById("btn_logout").disabled = true;
    setTimeout(function(){
      window.location.href = "https://sexualharassment.firebaseapp.com/index.html";
   },3000);
    //document.getElementById("btn_login").disabled = false;
  }).catch(function(error) {
    // An error happened.
  });
}

