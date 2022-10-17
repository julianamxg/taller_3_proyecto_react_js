import axios from 'axios';
import { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import logov from "../pages/Hotelia horizontal blanco.svg";
import "./nav/Nav.css";
import PropsNav from "./nav/PropsNav";



function ListUser(){

    /*1. Definir url del api, generar peticiones asíncronas */
    const url="https://hoteliakuepa.herokuapp.com/users";

    /*2. Creó función para conectarse a la api y ejecutar petición tipo get */
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado*/
    const [list,setList]=useState([]);

    /*4 usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{ //promesa
            setList(response.data); //escribir en el useState List
        })
    },[])

    
    //console.log(list)
    
    return(
        <>
         <nav>
        <div class="logoN">
            <PropsNav
                iconoNav="fa-solid fa-bars icono"
                imagenNav={logov}/>
        </div>
        <div class="menu">
                <Link to="/" class="item">Inicio</Link>
                <Link to="/listarAc/" class="item">Editar usuarios</Link>
                <Link to="/user/" class="item">Usuarios</Link>
                <hr class="menu-hr" noshade=""></hr>
                <Link to="/registro" class="item">Nuevo usuario</Link>
        </div>
        
       
    </nav>
        <div className='usuarios'>
       

            <h1>Lista Usuarios</h1>
            <table class="table table-bordered">
            <thead>
            <tr>
                    <th>No. Documento</th>
                    <th>Tipo <br/> Documento</th>
                    <th>Nombre Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Género</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>País de Origen</th>
                    <th>Contraseña</th>
                    <th>Tipo de Usuario</th>
                </tr>
                </thead>
                {list.map((us,index)=>(
                     <tbody>
                    <tr>
                        <td>{us._id}</td>
                        <td>{us.tipodoc}</td>
                        <td>{us.nombre} {us.apellido}</td>
                        <td>{us.fnacimiento}</td>
                        <td>{us.genero}</td>
                        <td>{us.email}</td>
                        <td>{us.telefono}</td>
                        <td>{us.paisorigen}</td>
                        <td>{us.password}</td>
                        <td>{us.tipouser}</td>
                    </tr>
                    </tbody>
                ))
                }
                
            </table>
            </div>
        </>
    );







    }


export default ListUser;