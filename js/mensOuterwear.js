function fn()
{
	var i;
	for(i=0; i<16; i++)
	{
		var main = document.getElementById("images");

		var div = document.createElement("div");
		div.setAttribute("class","pic");

		var link  = document.createElement("a");
		//debugger;
		var ln = info[0].link1+info[0].id;
		link.setAttribute("href", ln);
	
		
		var image = document.createElement("img");
		image.setAttribute("class","picture");
		image.setAttribute("src",info[0].posterImg);

		link.appendChild(image);
		div.appendChild(link);           ////  1st child of div

		var para = document.createElement("p");            ////////
		para.setAttribute("class","description");


		para.innerHTML = info[0].description;

		div.appendChild(para);      ////  2nd child of div

		var para2 = document.createElement("p");
		para2.setAttribute("class","cost");
		para2.innerHTML = info[0].cost;
        
		div.appendChild(para2);       ////3rd child of div

		main.appendChild(div);
	}

}