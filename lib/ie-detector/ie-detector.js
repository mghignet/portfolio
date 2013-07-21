function isInternetExplorer () {
  return (navigator.appName == 'Microsoft Internet Explorer');
}

function getInternetExplorerVersion () {
  version = -1;
  if (isInternetExplorer()) {
    userAgent = navigator.userAgent;
    regex = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (regex.exec(userAgent) != null) {
      version = parseFloat(RegExp.$1);
    }
  }
  return version;
}

function ieLowerThan (version) {
  if (!isInternetExplorer()) {
    return false;
  }
  return (getInternetExplorerVersion() < version);
}

function ieGreaterThan () {
  if (!isInternetExplorer()) {
    return false;
  }
  return (getInternetExplorerVersion() > version);
}

function ieEquals () {
  if (!isInternetExplorer()) {
    return false;
  }
  return (getInternetExplorerVersion() == version);
}