const ip ='34.203.234.104:666';

document.addEventListener("DOMContentLoaded", async()=>{
    const id_user = localStorage.getItem("id_user");

    //const backendUsersURL = `http://${window.location.hostname}:8081/users/search_user/${id_user}`;
    const backendUsersURL = `http://${ip}/users/search_user/${id_user}`;
    const responseUser = await fetch(backendUsersURL);
    const userdata = await responseUser.json();

    const nameLabel = document.getElementById("name").innerText = userdata.result.name;
    const usernameLabel = document.getElementById("username").innerText = userdata.result.username;
    const emailLabel = document.getElementById("email").innerText = userdata.result.email;
    const descriptionLabel = document.getElementById("description").innerText = userdata.result.description;

});
