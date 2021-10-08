// document.write("Where is my JS code?");
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out)

//A prompt box is used to prompt users to input a value before entering a page.
//user_name = window.prompt('Please enter your name', 'Type your name here');
//document.write(user_name);
// there are many ways to use the prompt feature
//sign = window.prompt(); // open the blank prompt window
//sign = prompt(); // open the blank prompt window
//sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
//sign = window.prompt('Are you feeling lucky', 'sure'); //open the window with Text "Are you feeling lucky" and default value "sure"

//x = 22;
//y =33;
//document.writeln(x + y);
//document.writeln("<br>");
//document.writeln(x += 33);

// document.writeln("<button onclick='condition()'>Conditional Test</button>")
// function condition()
// {
//  x = confirm("Are you sure you want to proceed?");
//  if(x)
//  {
//  document.writeln("You chose Okay!");
//  }
//  else
//  {
//  document.writeln("You chose Cancel!");
//  }
// }
//
// arr = ["Joe","April","Mark","Sara"];
// for (var i=0; i < arr.length; i++)
// {
//  document.writeln(arr[i],"<br>");
// // }
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here";

  user_name = window.prompt(a,b);

  message = "<h1>Hello, welcome to my webpage," + user_name + "!</h1>"

  return message
}

var webmaps =
[
  ["Migrations in Motion",
  "http://maps.tnc.org/migrations-in-motion/#4/19.00/-78.00/",
  "The Migrations in Motion map by the Nature Conservancy that shows the average direction mammals, birds, and amphibians need to move to track hospitable climates as they shift across the landscape."
],
["The Food Capitals of Instagram",
"https://www.cewe.co.uk/instagram-food-capitals.html/",
"The Food Capitals of Instagram map shows the location of photos with food hashtags obtained from Instagram and includes locations of over 10,000 photos posted on Instagram with relevant tags betwen 10th and 18th of March 2015."
  ]
];

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
