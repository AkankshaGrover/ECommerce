var noOfIds, source, target ;
function fetch()
{
	var ids = JSON.parse(localStorage.getItem("cartIds"));
	noOfIds = ids.length;
	for(var i=0; i<noOfIds; i++)
	{
		var cart = document.createElement("div");
		cart.setAttribute("class","cart");
		cart.setAttribute("id",i);

		var div1 = document.createElement("div");
		div1.setAttribute("class","div1");

		var img = document.createElement("div");
		img.setAttribute("class","image");

		var link = document.createElement("a");
		link.setAttribute("href","../html/infoWomenOuterwear.html");

		var image = document.createElement("img");
		image.setAttribute("src",information[0].image);
		image.setAttribute("class","pic");

		link.appendChild(image);
		img.appendChild(link);
		div1.appendChild(img);

		var desc = document.createElement("div");
		var link2 = document.createElement("a");
		link2.setAttribute("href","../html/infoWomenOuterwear.html");
		link2.setAttribute("class","line");
		link2.innerHTML = "Ladies Yerba knit quarter Zip";
		desc.appendChild(link2);
		div1.appendChild(desc);

		cart.appendChild(div1);

		var div2 = document.createElement("div");
		div2.setAttribute("class","div2");

		var info = document.createElement("div");
		info.innerHTML= "Qty: &nbsp";

		var select = document.createElement("select");
		select.setAttribute("class","quant");
		var option1 = document.createElement("option");
		option1.innerHTML = "1";
		select.appendChild(option1);

		var option2 = document.createElement("option");
		option2.innerHTML = "2";
		select.appendChild(option2);

		var option3 = document.createElement("option");
		option3.innerHTML = "3";
		select.appendChild(option3);

		var option4 = document.createElement("option");
		option4.innerHTML = "4";
		select.appendChild(option4);

		info.appendChild(select);
		div2.appendChild(info);

		var size = document.createElement("div");
		size.innerHTML = "Size: M";

		div2.appendChild(size);

		var cost = document.createElement("div");
		size.innerHTML = "$64.20";
		div2.appendChild(size);
		cart.appendChild(div2);

		//cart.setAttribute("id", i);
		cart.setAttribute("draggable","true");
		cart.setAttribute("ondragstart","drag(event)");

		cart.setAttribute("ondrop","drop(event)");
		cart.setAttribute("ondragover","allowDrop(event)");

		var main = document.getElementById("main");
		main.appendChild(cart);
	}
	var t = document.getElementById("total");
	var b = document.createElement("b");
	b.innerHTML = "$" + i*64.20;
	total.appendChild(b);
}

function allowDrop(ev) 
{
	ev.preventDefault();
}

function drag(ev)
{
	//ev.dataTransfer.setData("text", ev.target.id);
	//ev.preventDefault();
	source = ev.currentTarget.id;
	console.log(source);
}

function drop(ev) 
{
	var ids = JSON.parse(localStorage.getItem("cartIds"));

	ev.preventDefault();
	//var data = ev.dataTransfer.getData("text");
	target = ev.currentTarget.id;
	console.log(target);
	
	/*for(i=0;i<noOfIds;i++)
	{
		if(source == ids[i])
		{
			ids[i] = target;
		}
		if(target == ids[i])
		{
			ids[i] = source;
		}
	}*/

	var temp = ids[source];
	ids[source] = ids[target];
	ids[target]= temp;

	//console.log(ids);

	var b  = document.getElementById("main");
	var i = b.childNodes.length - 1;
	while (i >= 0) 
	{
		b.removeChild(b.childNodes[i--]);
	}	
	
	localStorage.setItem("cartIds", JSON.stringify(ids));


	fetch();
}
