
$(document).ready(function(){
 
	var n =0
	var ic =$('.info').length;
	$(document).click(function(){
		function count(){
			if(n<(ic-1)){
				n+=1;
			}
			else{
				n=0
			}
		};
		
		$(".info").each(function(){
			var i = $(this).index();
			  // console.log("Index: " + i)
			function rem(){
				if(i+n<ic){
					return i+n
				}
				else{
					return n+i-ic
				}
				};
			function add(){
				if(i+n<ic-1){
					return i+n+1
				}
				else{
					return i+n-ic+1
				}
				};
			
			// console.log("img"+i+ " remove: "+rem());
			// console.log("img"+i+ " add: "+add());
			
			  $(".info").eq(i).removeClass("block"+rem()).addClass("block"+add());
		});
		count();
	});



});