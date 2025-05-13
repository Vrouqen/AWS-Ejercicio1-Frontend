const ip ='34.203.234.104:666';

document.getElementById("userform").addEventListener("submit", async(e) => {
    e.preventDefault(); 

    const form = new FormData();
    form.append("id_user", document.getElementById("id_user").value);

    const backendURL = `http://${ip}/users/delete_user`;
    const response = await fetch(backendURL, {
        method: "POST",
        body: form
    });

    const result = await response.json();

    document.getElementById("responseMessage").innerText = result.message+" - id_user: "+result.user;
});