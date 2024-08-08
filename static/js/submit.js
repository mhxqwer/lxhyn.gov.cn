/*window.onload = function () {
    createParams();
    var strParam = "";
    for(var key in params){
        strParam += key+"="+params[key]+"&";
    }
    var trsImg =  document.createElement("img");
    trsImg.src = encodeURI(encodeURI(serverUrl+"?"+strParam));
    trsImg.style.display = "none";
    document.body.appendChild(trsImg);
}*/
//优化onload冲突
function loadjs(file) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = file;
	document.head.appendChild(script)
    script.onload = function(){
		$(function(){
			createParams();
			var strParam = "";
			for(var key in params){
				strParam += key+"="+params[key]+"&";
			}
			var trsImg =  document.createElement("img");
			trsImg.src = encodeURI(encodeURI(serverUrl+"?"+strParam));
			trsImg.style.display = "none";
			document.body.appendChild(trsImg);

		});

    };
 }

loadjs('https://www.yn.gov.cn/ubas/app/js/jquery-3.1.1.min.js');
