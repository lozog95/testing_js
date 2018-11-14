var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
exports.httpGet = function(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText)
}
