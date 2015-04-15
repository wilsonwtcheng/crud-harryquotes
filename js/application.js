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
        $('.newQuote').val("");
        $('.newAuthor').val("");
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
  
  function deleteRequest() {
    $.ajax({
      type: "DELETE",
      url: 'http://harry-quotes-216770.apse1.nitrousbox.com:8080/quotes/' +  $('.delete-value').val(),    
      dataType: "JSON",
      error: function(xhr, textStatus, errorThrown){
        alert("Deletion Error!");
      },
      success: function(response) {
          $('.delete-value').val("");
          listRequest();
          console.log("Great delete success!", response);
      }
    })
  }

//pills
 $('.add-div, .delete-div, .search-div').hide();

 $('.listPillBut').css("background","#EFEFEC");

 $(document).on('click','.searchPillBut', function() {
   $('.delete-div, .list-div, .add-div').hide();
   $('.listPillBut').css("background","transparent");
   $('.search-div').show();
 })

 $(document).on('click','.addPillBut', function() {
   // $(this).attr("class", "active");
   $('.search-div, .delete-div, .list-div').hide();
   $('.listPillBut').css("background","transparent");
   $('.add-div').show();
 })

 $(document).on('click','.listPillBut', function() {
   $('.search-div, .add-div, .delete-div').hide();
   $('.listPillBut').css("background","transparent");
   $('.list-div').show();
 })

 $(document).on('click','.deletePillBut', function() {
   $('.search-div, .list-div, .add-div').hide();
   $('.delete-div').show();
 })

//awesome video pill
  $('.awesome-div').hide();  
  $(document).on('click','.awesomeBut', function() {
   $('.awesome-div').toggle();
 })



 })
