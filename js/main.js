var domainName = document.getElementById('domain');
var siteURL = document.getElementById('siteURL');
var display = document.getElementById('displayPlace');
var myArray = [];


//  ===================== Checking If There's Data In LocalStorage Or Not =====================
if (localStorage.getItem("myWebsites") != null) {
    myArray = JSON.parse(localStorage.getItem("myWebsites"));
    displaySites();
}

//  ===================== Add Function =====================
function add() {
    var checkLink = siteURL.value;
    checkLink = addHttp(checkLink);
    var website = {
        websiteName : domainName.value,
        websiteLink : checkLink
    }

    myArray.push(website);

    localStorage.setItem("myWebsites", JSON.stringify(myArray));

    displaySites();

    clear();
}

// ===================== DisplaySites Function =====================
function displaySites() {
    var cartona = ``;
    for (var i = 0; i< myArray.length; i++) {
        cartona += `
            <div class="col-md-3 result py-5">
                <h2>${myArray[i].websiteName}</h2>
            </div>
            <div class="col-md-9 result py-5">
                <a href="${myArray[i].websiteLink}" target="_blank" class="btn btn-primary" >Visit</a>
                <button class="btn btn-danger" onclick="del(${i});">Delete</button>
            </div>
        `
    }
    display.innerHTML = cartona;
}

// ===================== Clear Function =====================
function clear() {
    domainName.value = "";
    siteURL.value = "";
}

// ===================== Delete Function =====================
function del(index) {
    myArray.splice(index, 1);
    localStorage.setItem("myWebsites", JSON.stringify(myArray));
    displaySites();
}

// ===================== AddHTTP Function !! =====================
function addHttp(url) {
    if (url.search("http://") == -1 && url.search("https://") == -1)
        return "http://" + url;
    return url;
}







    





