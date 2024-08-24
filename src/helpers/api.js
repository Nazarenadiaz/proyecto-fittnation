export const useApiFakeStore = async (id) => {
  /*lo puedo resolver con: then/cath/ async/await(son promesa) el fetch en un metodo que resive una url
  en el caso que la promesa se haya cumplido se utiliza THEN  */
  /*en el caso de que haya un error vael cath */
  /*el Json manda informacion del cliente al servidor y al reves */
  /*  fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((productos) => console.log(productos));
    .catch((error) => console.log(error)) * ESTA ES UNA FORMA QUE SE PUEDE HACER */

  try {
    const productos = await fetch(
      id
        ? `https://fakestoreapi.com/products/${id}`
        : "https://fakestoreapi.com/products"
    );
    const data = await productos.json();
    return data;
  } catch (error) {
    return error;
  }
};
