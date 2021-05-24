// Properties
var hideIOS = true;
var hideAndroid = true;

// Methods
function toggleIOSTable() {
  if (hideIOS == false) {
    hideIOS = true;
    document.getElementById('IOStable').style.display = 'none';
  }
  else {
    hideIOS = false;
    document.getElementById('IOStable').style.display = 'block';
  }
}

function toggleAndroidTable() {
  if (hideAndroid == false) {
    hideAndroid = true;
    document.getElementById('Androidtable').style.display = 'none';
  }
  else {
    hideAndroid = false;
    document.getElementById('Androidtable').style.display = 'block';
  }
}


function inDev() {
  alert("Android apps are currently in development. These apps will be completed soon, please check back soon and check out my IOS apps.");
}
