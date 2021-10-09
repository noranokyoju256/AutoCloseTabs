
let config;

async function fetchConfig(){
    let responce = await fetch("config.json");
    config = await responce.json();
}

fetchConfig();

function allowed(){
    let date = new Date();
    let now = date.getHours() * 60 + date.getMinutes();

    for(let period of config.periods){
        let start = period.startHours * 60 + period.startMinutes;
        let end = period.endHours * 60 + period.endMinutes;
        if(start <= now && now <= end){
            return true;
        }
    }

    return false;
}

function matchAny(source, patterns){
    for(let pattern of patterns){
        let re = new RegExp(pattern);
        if(re.test(source)){
            return true;
        }
    }
    return false;
}

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {

    if(allowed()){
        return;
    }


    if(matchAny(tab.url, config.patterns)){
        chrome.tabs.remove(tabId);
    }
    
});