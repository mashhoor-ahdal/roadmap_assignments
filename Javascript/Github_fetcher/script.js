
var form =document.getElementById('input_form')

const resultDiv=document.getElementById('result')
resultDiv.style.display="none"



form.addEventListener('submit',function(e){
    e.preventDefault()
    let userName=document.getElementById('username').value
    const resultImg=resultDiv.querySelector('a > img')
    const resultAnch=resultDiv.querySelector('a')
    const firstPara=resultDiv.querySelector('p')
    const para=document.createElement('p')
    const achor=document.createElement('a')
     
    fetch("https://api.github.com/users/"+userName).then(response=>response.json().then(data=>{
        console.log(data)
        resultDiv.style.display="block"
        resultAnch.href=data.html_url
        resultImg.src=data.avatar_url
        para.textContent="Github : "
        para.className="github"
        achor.className="githubUrl"
        achor.href=data.url
        achor.textContent="Visit"
        para.appendChild(achor)
        resultDiv.appendChild(para)
        if (data.name){
        firstPara.textContent+=data.name  
        }
        else {
        firstPara.textContent+=data.login  
        }
        
        

        
        // firstPara=
        
         
    }));
   
    

})

