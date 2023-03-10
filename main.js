
if('serviceWorker' in navigator){
    console.log("Puedes usar el Service worker");
    navigator.serviceWorker.register('./sw.js')
                            .then(res=>console.log('SW cargando correctamente', res))
                            .catch(err => console.log('Service Worker no se ha podido registrar', err));
}
else{
    console.log("No se puede usar el Service Worker")
}