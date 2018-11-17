var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
exports.httpGet = function(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText)
}

exports.httpPost = function(theUrl, body)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(JSON.stringify({title:"Obojetne", body:"Hello world", userId: 1}));
    return JSON.parse(xmlHttp.responseText)
}


