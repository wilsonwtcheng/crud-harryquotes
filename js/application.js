$(document).ready(function() { 

var postContent;

  $('.searchButtonPost').click(function(){ // note: this will make the post even if some of the keys don't have any values.
    // console.log($('.movieName').val()); would also have worked
   // getURL();
  postContentTitle = $('.postNameTitle').val();
  postContentText = $('.postNameText').val();
  postContentUser = $('.postNameUser').val();

  var postRequest = { //note: the variable request1 has to be within the search button click function because you can't define a variable within request1. And you need to define movieName within the same scope.
    type: "POST",
    url: "http://ga-wdi-api.meteor.com/api/posts",
    data: {
      title: postContentTitle,
      text:  postContentText,
      user: postContentUser,
    },
    dataType: "JSON",
    success: function(response) {
      console.log("Great success", response);
      }
    }
    $.ajax(postRequest);
    }
  );

  $('.postTitleButton').click(function(){
  postContentTitle = $('.postNameTitle').val();
 
  var postRequest = { 
    type: "POST",
    url: "http://ga-wdi-api.meteor.com/api/posts",
    data: {
      title: postContentTitle,
    },
    dataType: "JSON",
    success: function(response) {
      console.log("Great post title success", response);
      }
    }     
    $.ajax(postRequest);
    }
  );

  $('.getButton').click(function(){
  getID = $('.getID').val();
 
  var getRequest = { //note: the variable request1 has to be within the search button click function because you can't define a variable within request1. And you need to define movieName within the same scope.
    type: "GET",
    url: "http://ga-wdi-api.meteor.com/api/posts/"+getID,
    data: {
    },
    dataType: "JSON",
    success: function(response) {
      console.log("Great get title success", response);
      // $('#getData').append(response);
      $('#getDataTitle').append(response["title"]);
      $('#getDataText').append(response["text"]);
      $('#getDataUser').append(response["user"]);
//      $('#getData').append(response); // this doesn't work because the response is an object. You need to go into each hash to get the relevant data.
        }
      }     
      $.ajax(getRequest);
    }
  );

  $('.putButton').click(function(){
  putID = $('.putID').val();
 
  putTitle = $('.putInputTitle').val();
  putText = $('.putInputText').val();
  putUser = $('.putInputUser').val();

  var putRequest = { 
    type: "PUT",
    url: "http://ga-wdi-api.meteor.com/api/posts/"+putID,
    data: {
      title: putTitle,
      text:  putText,
      user: putUser,  
    },
    dataType: "JSON",
    success: function(response) {
      console.log("Great put success", response);
        }
      }     
      $.ajax(putRequest);
    }
  );

  $('.deleteButton').click(function(){
  deleteID = $('.deleteID').val();
 
  var getRequest = { 
    type: "DELETE",
    url: "http://ga-wdi-api.meteor.com/api/posts/"+deleteID,
    data: {
    },
    dataType: "JSON",
    success: function(response) {
      console.log("Great delete success", response);
        }
      }     
      $.ajax(getRequest);
    }
  );


  $('.getListingButton').click(function(){
  var getListingRequest = { 
    type: "GET",
    url: "http://ga-wdi-api.meteor.com/api/posts/", //this URL is on GIT. If you should go Github, it's inside AJAX crud, 
    data: {
    },
    dataType: "JSON",
    success: function(response) {
      console.log("Great get list success", response);
      // $('#getData').append(response);
      var elements = ["title", "text", "user"];
      for (i=0; i<response.length; i++) {
      console.log(response.length);
        // $('#listTitle').append(response[i]["title"]);

        $('.bigTable').append("<tr>"+"hello"+"</tr>");
        // var newTableRow;


        $('#listTitle').append("<li>"+response[i]["title"]+"</li>");
        //$('#listTitle').append("<br>");
        $('#listText').append("<li>"+response[i]["text"]+"</li>");
        // $('#listText').append("<br>");
        $('#listUser').append("<li>"+response[i]["user"]+"</li>");
        // $('#listUser').append("<br>");
        }
      }     
    }
    $.ajax(getListingRequest);
    }
  )
});



// //**
// html:
// <table id="all-posts" class="table table-condensed">
// <thead>
// <tr>
// <th>TD</th>
// <th>Title</th>
// <th>Text</th>
// <th>User</th>
// </tr>
// <thead>
// <tbody>
// </tbody>
// //**

// //for each is a for loop that goes thru an array
// //for loop adds the new list
// response.forEach(function (post) {

//   $('#all-posts > tbody').append(
//     "<tr class='post-item'>"+
//       "<td>" + 
//         post._id + 
//       "</td>"+
//       "<td>"+ 
//         post.title + 
//       "</td>"+
//       "<td>" + 
//         post.text + 
//       "</td>"+
//       "<td>" + 
//         post.user + 
//       "</td>"+
//     "</tr>");
// });
// }
// }

// function listAllPost() {
//   $.ajax(listALlRequests)
// }



// // var postLog = {
// //   post1: {
// //     title: "",
// //     text: "", 
// //     user: "",
// //   },
// //   post2: {
// //     title: "",
// //     text: "",
// //     user: "",
// //   },
// //   post3: {
// //     title: "",
// //     text: "", 
// //     user: "",
// //    }, // note: more buttons/drinks can go here, if any
// // };



// var title; // define title outside so it can be read later...

//   $('.searchButton1').click(function(){
//     // console.log($('.movieName').val()); would also have worked
//    // getURL();
//   title = $('.movieName').val();

//   var request1 = { //note: the variable request1 has to be within the search button click function because you can't define a variable within request1. And you need to define movieName within the same scope.
//     type: "GET",
//     url: "http://www.omdbapi.com/?t="+title,
//     dataType: "JSON",
//     success: function(response) {
//       console.log("This is the response: ", response);
//       $('#title').append(response["Title"]);
//       $('#year').append(response["Year"]);
//       $('#country').append(response["Country"]);
//       $('#released').append(response["Released"]);
//       $('#poster').attr("src", response["Poster"]); // this is change the attribute of the ID "src", to the image link of the poster.
//     }
//   }

//     $.ajax(request1);
//   }
//   );

// });
