$(document).ready(function() { 


  $(document).on('click','.searchButton', function(){
    getRequest();
  });
  
  $(document).on('click','.newButton', function(){
    postRequest();
  });
  
  $(document).on('click','.listButton', function(){
    listRequest();
  });

  $(document).on('click','.deleteButton', function(){
    deleteRequest();
  });

  //search request
  function getRequest() {
    $.ajax({
      type: "GET",
      url: 'http://harry-quotes-216770.apse1.nitrousbox.com:8080/quotes/search/' +  $('.search-value').val(),    
      dataType: "JSON",
      success: function(response) {
        console.log("Great success", response);
        $('#all-posts > tbody').text(''); 
        response.forEach(function (post) {
          $('#all-posts > tbody').append("<tr class='post-item'>" + "<td>" + post._id + "</td>" + "<td>" + post.quote + "</td>" + "<td>" + post.author + "</td></tr>" );
        });
      }
    }) 
  }

//post request
  function postRequest() {
    $.ajax({
      type: "POST",
      url: 'http://harry-quotes-216770.apse1.nitrousbox.com:8080/quotes',
      data: {
        quote: {
          quote:  $('.newQuote').val(),
          author: $('.newAuthor').val()
        }      
      },
      dataType: "JSON",
      success: function(response) {
        console.log("Great success", response);
        // $('#all-posts > tbody').text(''); 
        // response(function (post) {
        //   $('#all-posts > tbody').append("<tr class='post-item'>" + "<td>" + post._id + "</td>" + "<td>" + post.quote + "</td>" + "<td>" + post.author + "</td></tr>" );
          listRequest();
        }
      
    }) 
  }

  //list request
  function listRequest() {
    $.ajax({
      type: "GET",
      url: 'http://harry-quotes-216770.apse1.nitrousbox.com:8080/quotes',
      dataType: "JSON",
      success: function(response) {
        console.log("Great listing success", response);
        $('#all-posts > tbody').text(''); 
        response.forEach(function (post) {
          $('#all-posts > tbody').append("<tr class='post-item'>" + "<td>" + post._id + "</td>" + "<td>" + post.quote + "</td>" + "<td>" + post.author + "</td></tr>" );
        });
      }
    }) 
  }

//delete request
  // function deleteRequest() {
  //   $.ajax({
  //     type: "DELETE",
  //     url: 'http://harry-quotes-216770.apse1.nitrousbox.com:8080/quotes/' +  $('.delete-value').val(),    
  //     dataType: "JSON",
  //     success: function(response) {
  //       listRequest(); 
  //       console.log("Great delete success!", response);
  //     }
  //   })
  // }
  
  function deleteRequest() {
    $.ajax({
      type: "DELETE",
      url: 'http://harry-quotes-216770.apse1.nitrousbox.com:8080/quotes/' +  $('.delete-value').val(),    
      dataType: "JSON",
      success: function(response) {
          listRequest(); 
          console.log("Great delete success!", response);
      }
      // error: function(response) {
      //     console.log("you suck ass")
      // }
    })
  }


// success: function(response) {
//     if (response == 'success') 
//         window.location.replace("home");
//     else if (response == "failed") 
//         window.location.replace("failed");
//     else 
//         $("#message").html("<div class='error_log'><p class='error'>Invalid username and/or password.</p></div>");
// }​



//pills
 $('.add-div, .delete-div, .list-div').hide();

 $(document).on('click','.searchPillBut', function() {
   $('.delete-div, .list-div, .add-div').hide();
   $('.search-div').show();
 })

 $(document).on('click','.addPillBut', function() {
   // $(this).attr("class", "active");
   $('.search-div, .delete-div, .list-div').hide();
   $('.add-div').show();
 })

 $(document).on('click','.listPillBut', function() {
   $('.search-div, .add-div, .delete-div').hide();
   $('.list-div').show();
 })

 $(document).on('click','.deletePillBut', function() {
   $('.search-div, .list-div, .add-div').hide();
   $('.delete-div').show();
 })




 })
