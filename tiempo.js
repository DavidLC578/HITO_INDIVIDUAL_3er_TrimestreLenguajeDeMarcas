let url = 'https://www.el-tiempo.net/api/json/v2/municipios'
fetch(url)
    .then(response => response.json())
    .then(dato => {
        mostrarDato(dato);
    })
    .catch(error => {
        console.log('Error:', error);
    });
const mostrarDato = (dato) => {
    console.log(dato)
    let body = ''
    for(let i = 0; i<dato.length; i++){
        console.log(dato[i]);
        body += `
            <tr>
            <td>${dato[i].NOMBRE}</td>
            <td>${dato[i].NOMBRE_PROVINCIA}</td>
            <td>${dato[i].POBLACION_MUNI}</td>
            <td>${dato[i].PERIMETRO}</td>
            </tr>
        ` 
    }
    document.getElementById('data').innerHTML = body;
}
