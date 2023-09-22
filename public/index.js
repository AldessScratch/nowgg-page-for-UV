const form = document.querySelector('form');
const input = document.querySelector('input');

if (localStorage.getItem('searchmode')==="proxy"){
  form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        localStorage.setItem('iframeurl', __uv$config.prefix + __uv$config.encodeUrl(url))
        localStorage.setItem('staturl', './iframe.html');localStorage.setItem('image', './img/logo.PNG');localStorage.setItem('appname', 'Recherche')
          window.location.href = "./iframe.html"
    });
});
}else{
  form.addEventListener('submit', async event => {
    let url = input.value.trim();
        if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
    window.open(url)
    
})}


function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function openURL(url) {
    window.navigator.serviceWorker
    .register("./sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      if (!isUrl(url)) url = localStorage.getItem('searchengine') + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "http://" + url;
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url)
          
  
    });
};
