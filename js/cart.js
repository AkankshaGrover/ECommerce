var noOfIds, source, target ;
function fetch()
{
	var total=0;
	//var ids = JSON.parse(localStorage.getItem("cartIds"));
	//noOfIds = ids.length;
	/*var url = window.location.href;
	var vars = {};
	var hashes = url.split('?')[1];
	var hash = hashes.split('&');
	for (i = 0; i < hash.length; i++) {
		params = hash[i].split("=");
		vars[params[0]] = params[1];
	}
	var x = vars["id"];*/
	var ids = [];
	var qty = [];
	var array = JSON.parse(localStorage.getItem("cartIds"));
	for(var i=0;i<array.length;i++)
	{
		ids.push(JSON.parse(array[i]));
		qty.push(array[i]);
	}
	
	for(var i=0; i<array.length; i++)
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
	//	image.setAttribute("src", information[ids[i]-1].image);
		image.setAttribute("src", information[ids[i]-1].image);
		image.setAttribute("class","pic");

		link.appendChild(image);
		img.appendChild(link);
		div1.appendChild(img);

		var desc = document.createElement("div");
		var link2 = document.createElement("a");
		link2.setAttribute("href","../html/infoWomenOuterwear.html");
		link2.setAttribute("class","line");
		link2.innerHTML = information[ids[i] -1].description;
		desc.appendChild(link2);
		div1.appendChild(desc);

		cart.appendChild(div1);

		var div2 = document.createElement("div");
		div2.setAttribute("class","div2");

		var info = document.createElement("div");
		info.innerHTML= "Qty:   ";

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
		cost.innerHTML = '$' + information[ids[i]-1].cost;
		total = JSON.parse(information[ids[i]-1].cost) + total;
		div2.appendChild(cost);
		cart.appendChild(div2);

		cart.setAttribute("draggable","true");
		cart.setAttribute("ondragstart","drag(event)");

		cart.setAttribute("ondrop","drop(event)");
		cart.setAttribute("ondragover","allowDrop(event)");

		var main = document.getElementById("main");
		main.appendChild(cart);
	}
	var t = document.getElementById("total");
	var b = document.createElement("b");
	b.innerHTML = '$' + total;
	t.appendChild(b);
}

function allowDrop(ev) 
{
	ev.preventDefault();
}

function drag(ev)
{
	source = ev.currentTarget.id;
	console.log(source);
}

function drop(ev) 
{
	var ids = JSON.parse(localStorage.getItem("cartIds"));

	ev.preventDefault();
	target = ev.currentTarget.id;
	console.log(target);
	
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
