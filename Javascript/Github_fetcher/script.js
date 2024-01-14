const form = document.getElementById('input_form');
const resultDiv = document.getElementById('result');
resultDiv.style.display = "none";

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const userNameInput = document.getElementById('username');
    const userName = userNameInput.value;

    const resultImg = resultDiv.querySelector('a > img');
    const resultAnchor = resultDiv.querySelector('a');
    const firstPara = resultDiv.querySelector('p');

    const para = document.createElement('p');
    const anchor = document.createElement('a');

    fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            resultDiv.style.display = "block";

            resultDiv.innerHTML="";

            resultAnchor.href = data.html_url;
            resultImg.src = data.avatar_url;
            para.textContent = "Github : ";
            para.className = "github";
            anchor.className = "githubUrl";
            anchor.href = data.url;
            anchor.textContent = "Visit";

            para.appendChild(anchor);
            resultDiv.appendChild(para);

            firstPara.textContent = data.name ?"Name:"+ data.name :"Name: "+ data.login;
        });
});
