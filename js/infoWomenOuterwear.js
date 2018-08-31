function fun()
{
	var i;
	var desc = document.getElementById("desc");      //outer div

    //1st Child of outer div
	var image = document.createElement("div");       
	image.setAttribute("class","image");
	var link = document.createElement("img");
	link.setAttribute("src", information[0].image);
	link.setAttribute("class","pic");
	var id = document.getElementById("info");

	image.appendChild(link);
	desc.insertBefore(image,id);

    //2nd child of outer div
    ///1st child inside 2nd div
	var div = document.createElement("div");     //2.1
	var item = document.createElement("p");
	var cost = document.createElement("p");
	item.setAttribute("class","item");
	item.innerHTML = information[0].description;
	cost.setAttribute("class","cost");
	cost.innerHTML = information[0].cost;
	div.appendChild(item);
	div.appendChild(cost);
	id.prepend(div);

    var  button =document.getElementById("outerwear_tab");
	var div2 = document.createElement("div");
	var bold = document.createElement("b");
	bold.innerHTML = "Description";
	div2.appendChild(bold);
	var para = document.createElement("p");
	para.setAttribute("class","desc2");
	para.innerHTML = information[0].description;
	div2.appendChild(para);
	var para2 = document.createElement("p");
	para2.innerHTML = "Features: ";
	div2.appendChild(para2);

	var li = document.createElement("li");
	li.setAttribute("class","desc2");
	
	var ul1 = document.createElement("ul");
	ul1.innerHTML = "81% polyester, 19% spandex jersey knit.";
	li.appendChild(ul1);
	
	var ul2 = document.createElement("ul");
	ul2.innerHTML = "Textured knit fabric features a moisture-wicking finish.";
	li.appendChild(ul2);
	
	var ul3 = document.createElement("ul");
	ul3.innerHTML = "Exposed contrast reverse coil zipper with contrast inner collar.";
	li.appendChild(ul3);

	var ul4 = document.createElement("ul");
	ul4.innerHTML = "Lightweight design with added stretch.";
	li.appendChild(ul4);

	var ul5 = document.createElement("ul");
	ul5.innerHTML = "Available in heathered indigo with the white Google logo heat transferred vertically onto front right hip.";
	li.appendChild(ul5);
	div2.appendChild(li);

	id.insertBefore(div2,button);



//	localStorage.setItem("id",information[0].id);         //storing id of data
}

function send()
{

	//document.location.href=;
	//debugger;
	var url = window.location.href;
	var vars ={};
	var hashes = url.split('?')[1];
	var hash = hashes.split('&');
	for(var i=0; i<hash.length; i++)
	{
		params=hash[i].split("=");
		vars[params[0]]=params[1];
	}
	var x = vars["id"];

	var link = "../html/cart.html?" + x;
	var list = JSON.parse(localStorage.getItem("cartIds"));
	if(list==null)
	{
		list = [];
	}
	list.push(x);
	localStorage.setItem("cartIds",JSON.stringify(list));
	document.location.href = link;
	//save();
}
/*function save()
{
	var url = window.location.href,
	params = url.split('?')[1].split('&'),
	data = {}, temp;
	for(var i=0; i<params.length; i++)
	{
		tmp =params[i].split('=');
		data[tmp[0]] = tmp[1];
	}
	var x = data["id"];
	var list = JSON.parse(localStorage.getItem("information"));
	if(list==null)
	{
		list = [];
	}
	list.push(x);
	localStorage.setItem("id",JSON.stringify(list));
	retrieve();
}*/

/*function retrieve()
{
	var ids = JSON.parse(localStorage.getItem("information"));
	//var noOfIds = ids.length;
	for(var i=0; i<ids.length; i++)
	{
		var di = document.getElementById("image");
		var 
		tmp = params[i].split('=');
		data[tmp[0]] = tmp[1];
	}
	/*document.location.href="../html/cart.html";
	var url = document.location.href,
	params = url.split('?')[1].split('&'),
	data = {}, temp;
	for(var i=0; i<params.length; i++)
	{
		tmp =params[i].split('=');
		data[tmp[0]] = tmp[1];
	}
	var x = JSON.parse(localStorage.getItem(list));

}*/



