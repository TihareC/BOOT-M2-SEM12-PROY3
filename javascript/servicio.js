const apikey = '28aa323534ebed142c727d6016ab617a';

const obtenerDatos = async (fecha) => {
    const url = `http://data.fixer.io/api/${fecha}?access_key=${apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}