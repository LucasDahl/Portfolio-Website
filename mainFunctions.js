// Properties
var hideIOS = true;
var hideAndroid = true;
var hideUnity = true;

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
