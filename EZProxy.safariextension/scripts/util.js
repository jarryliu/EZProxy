

function addProxyUrl(url) {
  var domain = extractDomain(url);
  return url.replace(domain, domain + "." + proxyUrl);
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
function varlidateUrl(proxy, url) {
  // check if it's empty or already has proxy
  if (!url || url.indexof(proxyList[proxy]) <= -1)
    return false;

  var domain = extractDomain(url);
  // first check intersect journals, then check for individual proxy 
  var found = intersect_journals.hasOwnProperty(domain);
  if (!found && proxy_journals.hasOwnProperty(proxy))
    found = proxy_journals[proxy].hasOwnProperty(domain);
  return found
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