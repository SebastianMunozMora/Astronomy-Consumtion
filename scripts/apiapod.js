var apiKey = "M22XMqutA4v0lV7VZa3MokSdW6jLPnB9ZcSKNn1n";
var urlApod;
var jsondatap;
function requestApodUrl(date, cFunction, id) {
    var xhttp = new XMLHttpRequest();
    urlApod = "https://api.nasa.gov/planetary/apod?date=" + date + "&api_key=M22XMqutA4v0lV7VZa3MokSdW6jLPnB9ZcSKNn1n"
    //console.log(urlApod);
    xhttp.open("GET", urlApod, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //console.warn(this.responseText);
        json = JSON.parse(this.responseText);
        jsondata = { 
          title: json.title,
          date: json.date,
          explanation: json.explanation,
          url: json.url,
          mediaType: json.media_type,
          hdurl: json.hdurl,
        }; 
        cFunction(jsondata,id);
        } else if (this.readyState != 4 && this.status != 200) { alert(this.status + " Date without a picture ")}
    };
}

function updateGui(jsondata){
  document.getElementById("title").innerHTML = jsondata.title;
  document.getElementById("explanation").innerHTML = jsondata.explanation;
  document.getElementById("date").innerHTML = jsondata.date;
  document.getElementById("shortcut").href = jsondata.url;
  document.getElementById("video").src = null;
  document.getElementById("picture").src = null;
  document.getElementById("picture").style.display = "none"
  document.getElementById("video").style.display = "none"
  if(jsondata.mediaType == "image"){
    document.getElementById("picture").style.display = "block"
    //document.getElementById("video").style.display = "none"
    document.getElementById("picture").src = jsondata.url;
    //console.log(jsondata.mediaType)
  } else {
    document.getElementById("video").style.display = "block"
    //document.getElementById("picture").style.display = "none"
    document.getElementById("video").src = jsondata.url;
    //console.log(jsondata.mediaType)
  }
  

  
}
/*function updateButtons(jsondata,i){
  addDay(i,jsondata);    
}*/

  



