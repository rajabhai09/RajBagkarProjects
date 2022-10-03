fetch('https://icanhazdadjoke.com/slack')
.then(data=> data.json())
.then(qouteData =>{
    const qouteText= qouteData.attachments[0].text;
    const qouteElement =document.getElementById('qouteElement');
    qouteElement.innerHTML=qouteText;

})