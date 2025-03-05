// script.js
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signInButton = document.getElementById("sign-in-button");

    // Función para validar el formulario
    function validateForm() {
        const emailValid = emailInput.value.match(/\S+@\S+\.\S+/); // Validación simple de correo
        const passwordValid = passwordInput.value.trim() !== ""; // Contraseña no vacía

        if (emailValid && passwordValid) {
            signInButton.disabled = false; // Habilitar botón si todo es válido
        } else {
            signInButton.disabled = true; // Deshabilitar si hay algún campo inválido
        }
    }

    // Event listeners para los campos
    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
});

// Función para registrar un usuario (guardar correo y contraseña)
function registerUser(email, password) {
    // Verificar si los campos están vacíos
    if (!email || !password) {
        console.log("Error: Email y contraseña son requeridos.");
        return;
    }

    // Crear un objeto de usuario con el correo y la contraseña
    const user = {
        email: email,
        password: password
    };

    // Guardar el objeto de usuario en el localStorage
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Registro exitoso. Usuario guardado en el localStorage.");
}

// Función para iniciar sesión (verificar correo y contraseña)
function loginUser(email, password) {
    // Obtener los datos guardados en localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Verificar si hay un usuario guardado
    if (!storedUser) {
        console.log("No hay un usuario registrado.");
        return;
    }

    // Comprobar si el correo y la contraseña coinciden
    if (storedUser.email === email && storedUser.password === password) {
        console.log("Inicio de sesión exitoso. Bienvenido!");
    } else {
        console.log("Error: Correo o contraseña incorrectos.");
    }
}

// Ejemplo de registro y login usando la consola

// Registrar un nuevo usuario
registerUser("usuario@example.com", "contraseñaSegura123");

// Intentar iniciar sesión con las credenciales correctas
loginUser("usuario@example.com", "contraseñaSegura123");

// Intentar iniciar sesión con las credenciales incorrectas
loginUser("usuario@example.com", "contraseñaIncorrecta");

// Intentar iniciar sesión cuando no hay un usuario registrado
localStorage.removeItem("user");  // Esto elimina el usuario registrado para probar el caso sin usuario
loginUser("usuario@example.com", "contraseñaSegura123");
00000