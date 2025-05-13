const ip ='34.203.234.104:666';

document.getElementById("formuser").addEventListener("submit", async(e)=>{
    e.preventDefault();

    const formdataLogin = new FormData();

    formdataLogin.append('username',document.getElementById('username').value);
    formdataLogin.append('password',document.getElementById('password').value);

    const backendURL = `http://${ip}/users/login`;
    response = await fetch(backendURL,{
        'body': formdataLogin,
        'method': "POST"
    });

    const responsejson = await response.json();

    if (responsejson.id_user!=0){    
        localStorage.setItem("id_user", responsejson.id_user);
        // Insert login on session table
        const sessionURL = `http://${ip}/users/insert_session`;

        const formdataSession = new FormData();
        formdataSession.append('id_user',localStorage.getItem("id_user"));
        formdataSession.append('log_in',1);

        await fetch(sessionURL,{
            'body': formdataSession,
            'method': "POST"
        });

        window.location.href = "/dashboard";
    }else{
        alert(responsejson.message);
    }

});