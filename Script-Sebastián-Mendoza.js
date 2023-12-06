
function enviarFormulario() {
    var edad = document.getElementById('Mendoza').value;
    var genero = document.getElementById('select').value;
    var nivel = document.getElementById('Sosa').value;
    var ocupación = document.getElementById('ocupación').value;
    var url = 'Resultado-Sebastián-Mendoza.html?edad=' + encodeURIComponent(edad) +
              '&genero=' + encodeURIComponent(genero) +
              '&nivel=' + encodeURIComponent(nivel) +
              '&ocupacion=' + encodeURIComponent(ocupación);
    window.location.href = url; 
}