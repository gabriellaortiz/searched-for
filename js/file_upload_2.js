var allData = [];
var searches = [];
var visits = [];

var searchHistory = document.createElement('p');
searchHistory.setAttribute("id", "searchHistory");
var newParagraph = document.createElement('p');
newParagraph.setAttribute("id", "ipParagraph");


window.addEventListener('load', function() {
var upload = document.getElementById('fileInput');
// Make sure the DOM element exists
if (upload) {
upload.addEventListener('change', function() {
// Make sure a file was selected
if (upload.files.length > 0) {
var reader = new FileReader(); // File reader to read the file 
// This event listener will happen when the reader has read the file
reader.addEventListener('load', function() {
var result = JSON.parse(reader.result); // Parse the result into an object 


// if result has visited, visits.push(result)
// elseif result has searched for, visits.push(result)

// result.forEach(function (searches) {
//   if (result.title.indexOf("Searched for") !== -1) {
//     searches.push(searches);
//     loadIncrement = seperateEntries.length;
//   } 
//   else (result.title.indexOf("Visited") !== -1) {
//     searches.push(visits);
//     loadIncrement = seperateEntries.length;
//   }
// });
// console.log(searches);
// console.log(visits);

// for(var i = 0; i < 10; i += 1) {
// 	console.log(searches[i].title);
// 	console.log(visits[i].title);
// }

// // to parse through and log ALL searches
// for(var i = 0; i < result.length; i += 1) {
//   console.log(result[i].title);
// }
// for(var i = 0; i < result.length; i += 1) {
//   console.log(result[i].title);
// }

// adds title to section with searches displayed
// var h1 = document.createElement('H1');
// h1.innerHTML = "Your data:";
// document.getElementById("loaded-searches").appendChild(h1); 

searchHistory.setAttribute('style', 'white-space: pre;');

// for(var i = 55; i < 105; i += 1) {
// 	// var single_search = result[i].title;
// 	searchHistory.textContent += result[i].title + "\r\n";
// 	console.log(result[i].title);
// }

for(var i = 0; i < 10000; i += 1) {
	if (result[i].title.includes('Searched')) {
			searchHistory.textContent += result[i].title + "\r\n";
			console.log(result[i].title);
	}
}

// document.getElementById("view-searches").element.style.visibility = 'visible'; 

document.getElementById("view-searches").style.display = "block";


//THIS WORKS
		$(function(){
			$('#clicker').click(function(){
				var popUp = window.open('about:blank');
	 
	    // Catch any exceptions and log them to the console, for debugging purposes
	    try 
	    {
	        // Make sure you have a body document when creating the new window....   
	        popUp.document.write("YOUR SEARCHES:");
	        popUp.document.body.appendChild(searchHistory);
	    } catch (e) 
	    {
	        $('console').log(e);
	    }
	});
	});





	// THIS WORKS TO ADD SEARCHES TO MAIN PAGE
	// document.getElementById("loaded-searches").appendChild(searchHistory); 

 //    newWindow = window.open("about:blank");
	// newWindow.onload.document.write("<!DOCTYPE html>\n<body></body>");
	// var text = document.createTextNode('YOUR SEARCHES:');
	// newWindow.document.body.appendChild(searchHistory);


	// var myWindow = window.open("../html/searches.html", "newWindow", "width=500");
	// var h1 = document.createElement('H1');
	// h1.innerHTML = "Your data:";
	// myWindow.getElementById("mainBody").appendChild(h1); 
	// myWindow.getElementById("mainBody").appendChild(searchHistory);


	// var url = '../html/searches.html';
	// var myWindow = window.open(url, "", "width=800");
	// myWindow.document.body.appendChild(searchHistory);

 //    newWindow = window.open("about:blank");
	// // var text = document.createTextNode('YOUR SEARCHES:');
	// newWindow.document.body.appendChild(searchHistory);


 //    newWindow = window.open("about:blank");
 //    newWindow.document.write("<!DOCTYPE html>\n<body><div id='loaded-searches'></div></body>");
	// var text = document.createTextNode('YOUR SEARCHES:');
	// newWindow.document.getElementById("loaded-searches").appendChild(searchHistory); 



	// var myWindow = window.open("", "MsgWindow", "width=200");
	// myWindow.document.append(searchHistory);



// console.log(result.title);
});


reader.readAsText(upload.files[0]); // Read the uploaded file
}
});
}
});




// NEED TO PARSE JSON DATA INTO ARRAY, THEN SEPERATE ARRAY INTO SEARCHES AND VISITED ARRAYS AND PRINT


