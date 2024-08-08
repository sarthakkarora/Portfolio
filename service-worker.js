if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
}

this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});
