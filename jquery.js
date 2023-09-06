// let x = document.querySelector("p");
// x.onclick = function () {
//   x.style.display = "none";
// };

// $(document).ready(function () {
//   $("P").click(function () {
//     $(this).hide();
//   });
// });

// $(function () {
//   $("#test").click(function () {
//     $("*").hide();
//   });
// });

// $(function () {
//   $("button").click(function () {
//     $("ul li:first").hide();
//   });
// });

// $(function () {
//   $("#changeButton").click(function () {
//     $("tr:odd").css("background-color", "red");
//   });
// });

// $(function () {
//   $("#changeButton").click(function () {
//     $(":button").css("background-color", "red").css("width", "100px").css("height", "100px").css("margin-top", "20px").css("margin-left", "20px");
//   });
// });

// $(function () {
//   $("#changeButton").click(function () {
//     $(":checked").css("background-color", "red").css("width", "100px").css("height", "100px").css("margin-top", "20px").css("margin-left", "20px");
//   });
// });

// let i= 0;
// $(function () {
//   $("input").keypress(function () {
//     $("span").text(i+=1);
//   });
// });

// $(function () {
//   $("span").on({
//     mouseenter: function () {
//       $(this).css("background-color", "red").css("color", "green");
//     },
//     click: function () {
//       $(this).css("background-color", "green").css("color", "blue");
//     },
//   });
// });

// $(function () {
//   $("span").on("click", function () {
//       $(this).css("background-color", "red");
//   });
//   $("span").click(function () {
//       $(this).off("click");
//   });
// });

// $(function () {
//   $("input").change(function () {
//     alert('input is change')
//   });
//   $("input").select(function () {
//     $('span').text("why me");
//   });
// });

// $(function () {
//   $("span").one("click", function () {
//       $(this).animate({fontSize: "+=6px"});
//   });
// });

// $(function () {
//   let obj={
//     name:'Tural',
//     age:24,
//     test:function(){
//       $("span").text("name: " + this.name + " age: " +  this.age);
//     }
//   }
//  $(".btn").click($.proxy(obj, 'test'));
// });

// $(function () {
//   let w,h;
//   w = $(window).width();
//   h = $(window).height();
//   $('#width').text(w);
//   $("#height").text(h);
//   $(window).resize(function () {
//       w = $(window).width();
//       h = $(window).height();
//       $("#width").text(w);
//       $("#height").text(h);
//   });
// });

// $(function () {
//   $("#test, .test").click(function (e) {
//      alert(e.currentTarget === this)
//   });
// });

// $(function () {
//   $(".hide").mousemove(function () {
//     $("#exampleInputEmail1").hide(1000);
//   });
//   $(".show").mousemove(function () {
//     $("#exampleInputEmail1").show(1000);
//   });
// });

// $(function () {
//   $(".hide").click(function () {
//     $(".div").fadeToggle(1000, function(){
//       $(this).fadeIn(5000, function(){
//         $(this).fadeTo(1000, 0.5)
//       })
//     });
//   });
// });

// $(function () {
//   $(".hide").click(function () {
//     $(".div").fadeTo(1000,0.5);

//     $(".div").on("mouseover", function () {
//       $(this).fadeTo(2000,1);
//     });

//     $(".div").on("mouseleave", function () {
//       $(this).fadeTo(2000,0.5);
//     });

//   });
// });

// $(function () {
//   $("#click").click(function () {
//     $("#panel").slideToggle(2000);
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $(".box").animate({ height: "toggle", width: "toggle" });
//   });
// });

// $(function () {
//   $(".show").click(function () {
//       let box =  $(".box");
//       box.animate({ height: "300px", opacity: "0.4"}, 1500);
//       box.animate({ width: "400px", opacity: "0.4"}, 1000);
//       box.animate({ opacity: "0.8", width: "250px" }, 2000);
//   });

//   $('.stop').click(function () {
//     $(".box").stop();
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $(".box").animate({ height: "toggle", width: "toggle"}, function() {
//       alert("callback");
//     });
//   });
//   $(".show1").click(function () {
//     $(".box").animate({ height: "toggle", width: "toggle"});
//     alert('no callback')
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $(".box").css( "color", "yellow").slideUp("2000").slideDown(3000);
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     alert($(this).text());
//   });
//   $(".show1").click(function () {
//     alert($(this).html());
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     alert($("input:text").val());
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     alert($("a").attr("target"));
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $("a").attr("href",function(x,getValue){
//       return getValue + 'new-href';
//     });
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $('a').append('<b> new text </b>')
//   });

//   $(".show1").click(function () {
//     $("ol").append("<li> new text </li>");
//   });

//   $(".show2").click(function () {
//       $("a").prepend(" new text ");
//    });

//   $(".show3").click(function () {
//       $("ol").prepend("<li> new text </li>");
//    });
// });

// $(function () {
//   $(".show").click(function () {
//     let txt1 = $("<p></p>").text("new text");
//     $("ol").after(txt1);
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $("p").remove(".show");
//   });
//   $(".show1").click(function () {
//     $("ol").empty();
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $(".show1").toggleClass("red");
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     alert($(".show1").css({ "background-color": "red", "color": "white" }));
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     alert($(".show1").css({ "background-color": "red", "color": "white" }));
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     let newText = $("<b> Hello jQuery</b>");
//     newText.insertAfter(".show1");
//     newText.css("color", "red");
//   });
// });

// $(function () {
//   $(".show").click(function () {
//     $('.show1').detach();
//   });
// });

// $(function () {
//   $(".show").click(function () {
//    if($("p").hasClass('show1')){
//     alert('done');
//    }
//    else{
//     alert('no');
//    }
//   });
// });



// $ (function () {
//   $ ('.show').click (function () {
//     let x = $ ('.show1').position();
//     alert(" Top: " + x.top + " Left :" + x.left);
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     let x = $(".empety");
//     x.prop('color','ff0000');
//     x.append(" buraya odaklan: " + x.prop('color'));
//     x.removeProp("color");
//     x.append('<br> buraya odaklan: ' + x.prop('color'));
//   });
// });



// $ (function () {
//   $ ('.show').click (function () {
//     $("<h2> HI Jquery </h2>").replaceAll ("p");
//   });
// });



// $ (function () {
//   $ ('.show').click (function () {
//     $ ('p:first').replaceWith ('hello jquery');
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     let scrollTopValue = $(".show3").scrollTop();
//     $(".empety").text("ScrollTop: " + scrollTopValue + "px");
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("p").wrapInner("<b></b>");
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("a").parent().css({'color':'red',"border":"2px solid red"});
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("a").parents().css({ "color": "red", "border": "2px solid red" });
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("div").children().css({ "color": "red", "border": "2px solid red"});
//   });
// });



// $(function () {
//     $("li:last").siblings().css({"color": "red", "border": "2px solid green"});
// });



// $(function () {
//   $("li:first").next().css({"color": "red", "border": "2px solid green"});
// });



// $(function () {
//   $("li:first").nextAll().css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li:first").nextUntil("li:last").css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li:last").prev().css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li").eq(0).css({ color: "green", border: "2px solid green" });
// });



// $(function () {
//   $("li").filter(".demo").css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li").not(".demo").css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li").add("a").add('div').css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li").add("a").add("div").css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $("li").closest("ol").css({ "color": "green", "border": "2px solid green" });
// });



// $(function () {
//   $(".show").click(function () {
//     $("li").each(function () {
//       alert($(this).text());
//     });
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("ol").find("li:first").css("background-color", "green").end().find("li:last").css("background-color", "darkkhaki");
//   });
// });



// $(function () {
//   $(".show").click(function () {
//    if ($("li").parent().is("ul")) {
//     alert('true');
//    }
//    else{
//     alert('false');
//    }
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $(".empety").data('Data','Hello jquery')
//   });
//   $(".show1").click(function () {
//     alert($(".empety").data("Data"));
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $(".empety").data("Data", "Hello jquery");
//     alert($(".empety").data("Data"));
//   });
//   $(".show1").click(function () {
//     $(".empety").removeData("Data");
//     alert($(".empety").data("Data"));
//   });
// });



// $(function () {
//   $("li").click(function () {
//     alert($(this).index());
//   });
// });



// $(function () {
//   $("li").click(function () {
//     if ($(this).index() == 2) {
//       alert("done");
//     }
//   });
// });



// $.noConflict();
// jQuery(function () {
//   jQuery(".show").click(function () {
//     jQuery('.show1').toggle('fast');
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     alert($('li').length);
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     let i,x;
//     x = $('li').toArray();
//     for(i = 0; i < x.length; i++){
//         alert(x[i].innerHTML);
//     }
//   });
// });



// $(function () {
//   $("#exampleInputEmail1").on("keyup", function () {
//     let value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function () {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//     });
//   });
// });



// $(function () {
//   $(".show").click(function () {
//    $("#click").animate({ bottom: "20px" })
//               .animate({ left: "100px" })
//               .animate({ opacity: 0.5 });
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("#click").animate({
//       left: "250px",
//       opacity: "0.5",
//       height: "150px",
//       width: "150px",
//     });
//   });
// });



// $(function () {
//   $(".show").click(function () {
//     $("#test1").text("Hello world!");
//   });
//   $(".show1").click(function () {
//     $("#test2").html("<b>Hello world!</b>");
//   });
//   $(".show2").click(function () {
//     $("#test3").val("Dolly Duck");
//   });
// });



// $(function(){
//   $('.show').click(function () {
//     $('#test1').text(function (i,origText) {
//        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")";
//     })
//     $("#test2").text(function (i, origText) {
//        return "Old text: " + origText + " New text: hi world! (index: " + i + ")";
//     });
//   })
// })



// $ (function () {
//   $ ('.show').click (function () {
//     let txt1 = '<span>Text.</span> <br></br>';
//     let txt2 = $("<span></span> <br></br>").text("Text.").css({ "background-color": "red", "color": "green" });
//     let txt3 = document.createElement ('span');
//     txt3.innerHTML = "Text. <br></br>";
//     $ ('body').append (txt1, txt2, txt3);
//   });
// });



// $(function () {
//   $("#test").click(function () {
//     let username, pass;
//     username = $("#exampleInputEmail1").val();
//     pass = $("#exampleInputPassword1").val();
//     if (username == "") {
//       $("#exampleInputEmail1").css({"border": "2px solid red", "box-shadow": "0 0 3px red",'background-color':'red'});
//     }
//   });
// });



// $(function () {
//   $("#test").click(function () {
//     let username, pass;
//     username = $("#exampleInputEmail1").val();
//     pass = $("#exampleInputPassword1").val();
//     if (username == "") {
//       $("#exampleInputEmail1").css({ border: "2px solid red", "box-shadow": "0 0 3px red", "background-color": "red" });
//     }
//   });
// });



// $(function (){
//   $("#changeButton").click(function(){
//     if (!inpObj.checkValidity()) {
//       alert(inpObj);
//       validationMessage;
//     }
//   })
// })