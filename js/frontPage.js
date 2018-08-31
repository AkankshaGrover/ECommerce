function fn()
		{ 
			var outerwear = document.createElement("div");
			outerwear.setAttribute("class", "outerwear");
			outerwear.setAttribute("id","outerwear");

			//var b = document.getElementById("outerwear");
			var link = document.createElement("a");
			link.setAttribute("class", info[0].class);
			link.setAttribute("alt", info[0].alt);
			link.setAttribute("href", info[0].link);

			var image = document.createElement("img");
			image.setAttribute("src", info[0].poster);
			
			//var e = document.getElementById("men");
			
			link.appendChild(image);
			outerwear.appendChild(link);

			/*d.setAttribute("class", info[1].class);
			d.setAttribute("alt", info[1].alt);
			d.setAttribute("href", info[1].link);
			image.setAttribute("src", info[1].poster);

			var f = document.getElementById("ladies");

			d.appendChild(c);
			b.insertBefore(d,f);*/
		
		}