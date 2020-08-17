
		
    function butclick(n){
    	if(n=='='){
    	document.getElementById("number").value=eval(document.getElementById("number").value);
    	}
    	else if(n=='AC'){
            var p=document.getElementById("number").value;
            document.getElementById("number").value=p.substr(0,p.length-p.length) ;
    		/*document.getElementById("number").value=p.substr(0,p.length-1) ;*/
    	}
    	else if(n=='CLEAR'){
    		var p=document.getElementById("number").value;
    		document.getElementById("number").value=p.substr(0,p.length-1) ;
    	}
    	else if(n=='sin'){
    		document.getElementById("number").value=Math.sin(document.getElementById("number").value);
    	}
    	else if(n=='cos'){
    		document.getElementById("number").value=Math.cos(document.getElementById("number").value);
    	}
    	else if(n=='tan'){
    		document.getElementById("number").value=Math.tan(document.getElementById("number").value);
    	}
    	else if(n=='ln'){
    		document.getElementById("number").value=Math.log(document.getElementById("number").value);
    	}
    	else if(n=='sqrt'){
    		document.getElementById("number").value=Math.log(document.getElementById("number").value);
    	}
    	else{
    	document.getElementById("number").value+=n;
        }
    }

	