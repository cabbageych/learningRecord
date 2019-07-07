self.addEventListener('message',(e)=>{
    self.postMessage('Hello '+e.data.name+"!");
})