// Properties
var hideIOS = true;
var hideAndroid = true;
var hideUnity = true;
var hideRumble = true;
var hidePlanetary = true;

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

    // Hide the buttons
    hideUnityButtons();
    
    document.getElementById('UnityTable').style.display = 'none';
  }
  else {
    hideUnity = false;
    document.getElementById('UnityTable').style.display = 'block';
  }
}

function rumbleCars() {
  if (hideRumble == false) {
    hideRumble = true;
    document.getElementById('RumbleCars').style.display = 'none';
  }
  else {
    hideRumble = false;
    document.getElementById('RumbleCars').style.display = 'block';
  }
}

function planetary() {
  if (hidePlanetary == false) {
    hidePlanetary = true;
    document.getElementById('Planetary').style.display = 'none';
  }
  else {
    hidePlanetary = false;
    document.getElementById('Planetary').style.display = 'block';
  }
}

function hideUnityButtons() {
    hidePlanetary = false;
    hideRumble = false;
    planetary();
    rumbleCars();

}