  let Btn = document.getElementById("button");
  Btn.addEventListener("click", function () {
    let data = document.getElementById("name").value;
    let emaildata = document.getElementById("Email").value;
    let numberdata = document.getElementById("number").value;
    let passworddata = document.getElementById("password").value;

    let user =JSON.parse(localStorage.getItem("Singup")) || [];

    let obj = {
      Name: data,
      Email: emaildata,
      Number: numberdata,
      Password: passworddata,
    };

    user.push(obj)
    localStorage.setItem("Singup",JSON.stringify(user));
    // let newdata = JSON.parse(localStorage.getItem("Singup"));
    // console.log(newdata);
  });