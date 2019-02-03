const frontEndController = () => {
    const app = document.getElementById('app');
    const modal = app.querySelector('.mymodal');
    
    app.addEventListener('click', (event) => {

        let target = event.target;
        console.log(target)
        if (target.matches('.modalTrigger')){
            modalInit(target);
        } else if (target.matches('.delete')){
             toggleModal()  
        }
    })
    
    
    const modalInit = (target) => {
        let contentDest = modal.querySelector('.modal_content');
        let time = target.parentElement.parentElement.querySelector('.control').querySelector('input').value;
        
        getData(time)
        .then((time) => {
            let message = setMessage(time)
            console.log(time)
            contentDest.innerHTML = message;
            toggleModal(time)
            
        });
        
        
         
    }
    
    function setMessage(time){
        if (!time.error){
            let message = `
                <article class="message">
                    <div class="message-header">
                        <p>Time String API Test</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <h2><strong>Example Usage:</strong></h2>
                        <a class="link" href="${time.request}">${time.request}</a>
                        <div class="code-content">
                            <h2><strong>Example Output:</strong></h2>
                            <div class="code-border">
                            <p class="code"> <span style="color:black">{<br><strong>&nbsp;&nbsp;unix:</strong></span> ${time.unix}, 
                            <br> <span style="color:black"><strong>&nbsp;&nbsp;utc: </strong></span><span style="color:green">
                            "${time.utc}"</span><span style="color:black"><br>}</span></p>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        return message;
        } else {
            let message = `
                <article class="message">
                    <div class="message-header">
                        <p>Time String API Test</p>
                        <button class="delete" aria-label="delete"></button>
                    </div>
                    <div class="message-body">
                        <h2><strong>Example Usage:</strong></h2>
                        <a class="link" href="${time.request}">${time.request}</a>
                        <div class="code-content">
                            <h2><strong>Example Output:</strong></h2>
                            <div class="code-border">
                            <p class="code"> <span style="color:black">{<br><strong>&nbsp;&nbsp;error:</strong></span> ${time.error}, 
                            <span style="color:black"><br>}</span></p>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        return message;
        }
        
        
    
    }
    
    function toggleModal() {
      var currentState = modal.style.display;
    
      // If modal is visible, hide it. Else, display it.
      if (currentState === 'none') {
        modal.classList.remove('fadeout')
        modal.classList.add('fade')
        modal.style.display = 'block';
        
      } else {
        modal.classList.remove('fade')
        modal.classList.add('fadeout')
        modal.style.display = 'none';
       
      }
    }
    
    function getData(time){
        let baseUrl = `https://microservice-timestamp-coreyjsax.c9users.io/api/timestamp`;
        let url = `${baseUrl}/${time}`
        return fetch(url)
        .then((res) => {
            let data = res.json();
            return data;
        }).then((data) => {
           if(!data.error){
               let timeStamp = {
                    utc: data.utc,
                    unix: data.unix,
                    dateString: time,
                    request: url
                }
                return timeStamp;
           } 
           let timeStamp = {
               dateString: time,
               request: url,
               error: data.error
           }
            return timeStamp;
        })
    }
    
    
}






    
