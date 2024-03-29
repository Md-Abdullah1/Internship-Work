import React from 'react'

const SwDev = () => {
  function determineAppServerKey() {
    const vapidPublicKey =
    "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
      return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

    let swURL = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swURL).then((response)=>{
        console.warn('response ',response)
        return response.pushManager.getSubscription()
        .then(function (subscription) {
           response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey()
          })
    })});
  return (
    <div>SwDev</div>
  )
}

export default SwDev