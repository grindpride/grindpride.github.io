
	console.log("Poehali!");


	function location(name, decription, choises, links){
		this.name = name;
		this.decription = decription;
		this.choises=choises;
		this.links = links;
	};
	var locationArray = [];
	locationArray[0] = new location('street','Улица описание',
		[['говнари', '1'],
		['охрана','2'],
		['байкеры','3']]
		);
	locationArray[1] = new location('scum','Говнари описание',
		[['Назад', '0'],
		['Байкеры','3']]
		);
	locationArray[2] = new location('security','Охрана описание',
		[['Назад', '0']]
		);
	locationArray[3] = new location('bikers','Байкеры описание',
		[['Назад', '0'],
		['Говнари','1']]
		);
	
	var currentLocation = locationArray[0];
	var newLocation = "Bar";
	$('.control').delegate('.control__item','click', function(){
		var i = $(this).index();
		console.log(locationArray[i]);
		var x = currentLocation.choises[i][1];
		currentLocation = locationArray[x];
		function render() {
			var text = $('.text');
			text.html(currentLocation.decription);
			$('.control').empty();
			// console.log(currentLocation.choises.length)
			for(var z=0;z<currentLocation.choises.length;z++){
				console.log(z);
				var newChoises = '<div class="control__item">'+ currentLocation.choises[z][0] +'</div>'; 
				$('.control').append(newChoises);
				};
			};
		render();
	});

