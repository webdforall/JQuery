$("h1").on("mouseover",function(){  // this is anonymous function which is given inside the brackets,fnc name can be given here also and
                                    // it can be declared outside the bracket also
  $("h1").css("color","purple");// $ works as querySelector only, here it will find h1 and change its css property of color to purple
})

//$("h1").addClass("big-title");   //we can insert css wali class here also