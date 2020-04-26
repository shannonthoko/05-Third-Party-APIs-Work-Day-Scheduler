$(document).ready (function(){

   var time = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];


   //displaying time and date on page
   var timeMoment = moment().format('MMMM Do YYYY, hh:mm a');
   $("#currentDay").append(timeMoment);

   var liveHour = moment().format("hha");


  
   var divOne = $("<div>");
   $(".container").append(divOne);
   
   //creating elements on the page
   for( var i = 0; i <time.length; i++){
       
       var row = $("<div>").addClass("row");
       divOne.append(row);
       
       var hour = $("<span>").text(time[i]).addClass("hour");
       
       var input = $("<textarea>").attr("id", time[i]).addClass("time-block");
       
       
       var saveBtn = $("<button>").addClass("saveBtn").text("Save");
       
       row.append(hour,input,saveBtn);
       
       var task = $("#time" + [i]).val();
       
       
       
   };   

        //conditional statement to chan ge class based on time
      //trying to use live hour pm/am to determine classes
      if(liveHour.charAt(2) === "p"){
   
         $(".time-block").addClass("future");
   
   
      }  else if ( liveHour.charAt(2) === "a") {


         $(".time-block").addClass("past");
         
      }else {

         $(".time-block").addClass("present");

      };
   

   //event listener to save user input to local storage
   $(".saveBtn").on("click", function(event){
      
       var nineAm = $("#9am").val().trim();
       var tenAm = $("#10am").val().trim();
       var elevenAm = $("#11am").val().trim();
       var twelvePm = $("#12pm").val().trim();
       var onePm = $("#1pm").val().trim();
       var twoPm = $("#2pm").val().trim();
       var threePm = $("#3pm").val().trim();
       var fourPm = $("#4pm").val().trim();
       console.log(nineAm);
       var fivePm = $("#5pm").val().trim();

       localStorage.setItem("taskone", nineAm);
       localStorage.setItem("tasktwo", tenAm);
       localStorage.setItem("taskthree", elevenAm);
       localStorage.setItem("taskfour", twelvePm);
       localStorage.setItem("taskfive", onePm);
       localStorage.setItem("tasksix", twoPm);
       localStorage.setItem("taskseven", threePm);
       localStorage.setItem("taskeight", fourPm);
       localStorage.setItem("tasknine", fivePm);
       

   }); 

   //event persists if saved 
   if(localStorage.getItem("taskone")) { 
      
       $("#9am").text(localStorage.getItem("taskone"));

       }; 

   if(localStorage.getItem("tasktwo")) { 
      
       $("#10am").text(localStorage.getItem("tasktwo"));

   };     

   if(localStorage.getItem("taskthree")) { 
       
       $("#11am").text(localStorage.getItem("taskthree"));

    }; 

   
    if(localStorage.getItem("taskfour")) { 
      
       $("#12pm").text(localStorage.getItem("taskfour"));

    };  

    if(localStorage.getItem("taskfive")) { 
       
       $("#1pm").text(localStorage.getItem("taskfive"));

    };  

    if(localStorage.getItem("tasksix")) { 
       
       $("#2pm").text(localStorage.getItem("tasksix"));

    };  

    if(localStorage.getItem("taskseven")) { 
       
       $("#3pm").text(localStorage.getItem("taskseven"));

    };  

    if(localStorage.getItem("taskeight")) { 
       
       $("#4pm").text(localStorage.getItem("taskeight"));

    };  

    if(localStorage.getItem("tasknine")) { 
       
       $("#5pm").text(localStorage.getItem("tasknine"));

    };  

   });

      