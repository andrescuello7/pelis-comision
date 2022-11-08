function UseAdmin() {
    function SessionPage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        let email = "fran@gmail.com";
        let password = "fraan";

        let respose = users.find((item) => {
            if (item.email == email && item.name == password) {
                return item;
            }
        })

        if (respose != undefined) {
            window.location.href = "/";
        } else{
            alert("Error en inicio de sesion")
        }
    }

    return {
        SessionPage,
    }
}

export default UseAdmin;