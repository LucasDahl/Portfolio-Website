// Properties
var hideIOS = true;
var hideAndroid = true;
var hideUnity = true;
var urlList = ["https://apps.apple.com/us/app/rumble-cars/id1580102820","https://play.google.com/store/apps/details?id=com.LucasDahlRumbleCars"]
// Methods

// Swift
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

// Java
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


// Unity
function toggleUnityTable() {
  if (hideUnity == false) {
    hideUnity = true;
    document.getElementById('UnityTable').style.display = 'none';
  }
  else {
    hideUnity = false;
    document.getElementById('UnityTable').style.display = 'block';
  }
}