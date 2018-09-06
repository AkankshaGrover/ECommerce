/*function fn(info)
{
	var i;
	for(i=0; i<16; i++)
	{
		var main = document.getElementById("images");

		var div = document.createElement("div");
		div.setAttribute("class","pic");

		var link  = document.createElement("a");
		var ln = info[0].link1+info[0].id;
		link.setAttribute("href", ln);
	
		
		var image = document.createElement("img");
		image.setAttribute("class","picture");
		image.setAttribute("src",info[0].posterImg);

		link.appendChild(image);
		div.appendChild(link);           ////  1st child
			var main = document.ge
			var main = document.ge div

		var para = document.createElement("p");             
		para.setAttribute("class","description");			


		para.innerHTML = info[0].description;

		div.appendChild(para);      ////  2nd child of div

		var para2 = document.createElement("p");
		para2.setAttribute("class","cost");
		para2.innerHTML = info[0].cost;
        
		div.appendChild(para2);       ////3rd child of div

		main.appendChild(div);
	}
}*/

function fun()
{
	
//	$.get("http://localhost:3000/",function(info) 
	fetch("http://localhost:3000")
	.then((res)=> res.json())

	.then(function(info)
	{
		//debugger;
		var i;
		for (i = 0; i < 16; i++) {
			var main = document.getElementById("images");

			var div = document.createElement("div");
			div.setAttribute("class", "pic");

			var link = document.createElement("a");
			var ln = info[0].link1 + info[0].id;
			link.setAttribute("href", ln);


			var image = document.createElement("img");
			image.setAttribute("class", "picture");
			image.setAttribute("src", info[0].posterImg);

			link.appendChild(image);
			div.appendChild(link);           ////  1st child of div

			var para = document.createElement("p");
			para.setAttribute("class", "description");


			para.innerHTML = info[0].description;

			div.appendChild(para);      ////  2nd child of div

			var para2 = document.createElement("p");
			para2.setAttribute("class", "cost");
			para2.innerHTML = info[0].cost;

			div.appendChild(para2);       ////3rd child of div

			main.appendChild(div);
		}
	})
}

	

/*$(document).ready(function()
{
	var i;
	for(i=0; i<16; i++)
	{
		var div = $("<div></div>");
		div.addClass("pic");

		var link = $("<a></a>");
		var ln = info[0].link1 + info[0].id;
		link.attr("href",ln);

		var image = $("<img>");
		image.addClass("picture");
		image.attr("src",info[0].posterImg);

		link.append(image);
		div.append(link);

		var para = $("<p>");
		para.addClass("description");

		para.text(info[0].description);
		div.append(para);

		var para2 = $("<p></p>");
		para2.addClass("cost");
		para2.text(info[0].cost);
		div.append(para2);

		$("#images").append(div);
	}

	fetch(http://localhost:3000/)
	{
		.then(function(){

		})
	}
});*/