

function addProxyUrl(url, proxyDomain) {
  var domain = extractDomain(url);
  return url.replace(domain, domain + "." + proxyDomain);
}

function extractDomain(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
      domain = url.split('/')[2];
  }
  else {
      domain = url.split('/')[0];
  }

  //find & remove port number
  domain = domain.split(':')[0];
  //remove www
  if (domain.indexOf("www.") == 0)
    domain = domain.slice(4);

  return domain;
}

// return true if the url is journal sites.
function validateUrl(url) {
  var domain = extractDomain(url);
  //  check if it's in the journal site list 
  return proxy_journals.hasOwnProperty(extractDomain(url));
}

// return true if Ip is out of campus, i.e. need proxy
function validateIP(proxy){
  if (!IPPrefixList.hasOwnProperty(proxy))
    return true;
  var ip = getIP();
  return !isCampusIP(proxy, ip)
}

function isCampusIP(proxy, ip) {
  var campusIPPrefix = IPPrefixList[proxy];
  // to be continued
  return false;
}