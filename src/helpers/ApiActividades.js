import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { db } from "../firebase/Firebase";
  
  export const getProducts = async () => {
    const productos = await getDocs(collection(db, "Actividades"));
    const data = productos.docs.map((valor) => {
      return { id: valor.id, ...valor.data() };
    });
    return data;
  };
  
  export const getProductId = async (id) => {
    const product = await getDoc(doc(db, "Actividades", id));
    return { id: product.id, ...product.data() };
  };
  
  export const getProductCategory = async (categoria) => {
    const product = await getDocs(
      query(collection(db, "Actividades"), where("category", "==", categoria))
    );
    const data = product.docs.map((valor) => {
      return { id: valor.id, ...valor.data() };
    });
    return data;
  };
  
  export const postProduct = async (data) => {
    const producto = await addDoc(collection(db, "Actividades"), data);
    return producto.id;
  };
  
  
  export const deleteProduct = async(id) =>{
      const producto = await deleteDoc(doc(db, "Actividades", id))
      return producto
  }
  
  export const editProduct = async(id, data)=>{
      const producto = await updateDoc(doc(db, "Actividades", id), data)
      return producto
  }