import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Form, Modal, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import CardEstudiante from './ListarAc.js';
import '../components/encabezado-registro/Encabezado-registro.css'


function ListHuesped() {

    const url = "https://hoteliakuepa.herokuapp.com/users";

    /*1. Función asíncrona para realizar la petición*/
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado y poderla usar en un componente */
    const [list, setList] = useState([]);

    /*4. agregamos otra constante al useState para actualizar el listado después de eliminar */
    const [upList, setUplist] = useState([false]);

    /*5. agregamos otra constante al useState para actualizar el estado del modal */
    const [show, setShow] = useState(false);

    const handleClose = () => { setShow(false); }
    const handleOpen = () => { setShow(true); }

    /*6. Estado para obtener los datos de cada registro a editar*/
    const [dataModal, setDataModal] = useState({})


    const handleChangeModal = ({ target }) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${url}/${dataModal._id}`, dataModal);
        //console.log(response);  
        if (response.status === 200) {
            Swal.fire(
                'Cambio Guardado!',
                `El estudiante <strong> ${response.data._nombre} ${response.data._apellido}</strong> ha sido actualizado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        }
        else {
            Swal.fire(
                'Error!',
                'Hubo un problema al actualizar el estudiante!',
                'error'
            )
        }
    }
    /*2. useEffect para ejecutar funciones desde el inicio del renderizado*/
    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        })
    }, [upList])//Se actualiza el listado cada vez que cambie el estado up List


    //console.log(list);
    return (

        <Container>
            <Row>
                {
                    list.map((est, index) => (
                        //<p>{est.nombre}</p> Esta información se iprime como un card

                        <CardEstudiante
                            key={index}
                            users={est}
                            setUplist={setUplist}
                            upList={upList}
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                            setDataModal={setDataModal}
                        />

                    ))
                }
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Huesped</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <div className="bodyR">
                        <div class="encabezado">
                            <div class="container-registro2">
                                <Modal.Body>

                                    <label>Tipo de documento</label>
                                    <select name="tipodoc" onChange={handleChangeModal} className="input2">
                                        <option>Seleccione un Tipo de Documento</option>
                                        <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                        <option value="Cédula de extranjería">Cédula de extranjería</option>
                                    </select>
                                    <label>Número de documento</label>
                                    <input name="_id"
                                        value={dataModal._id}
                                        onChange={handleChangeModal} className="input2" type="number"></input>

                                    <label>Nombres</label>
                                    <input placeholder="Ingrese su nombre"
                                        name="nombre"
                                        value={dataModal.nombre}
                                        onChange={handleChangeModal} className="input2" type="text"></input>

                                    <label>Apellidos</label>
                                    <input placeholder="Ingrese su apellido"
                                        name="apellido"
                                        value={dataModal.apellido}
                                        onChange={handleChangeModal} className="input2" type="text"></input>

                                    <label>Fecha de nacimiento</label>
                                    <input placeholder="Fecha"
                                        name="fnacimiento"
                                        value={dataModal.fnacimiento}
                                        onChange={handleChangeModal} className="input2" type="date"></input>

                                    <label>Email</label>
                                    <input placeholder="Email"
                                        name="email"
                                        value={dataModal.email}
                                        onChange={handleChangeModal} className="input2" type="email"></input>

                                    <label>Número de documento</label>
                                    <input placeholder="Ingrese su número de telefono"
                                        name="telefono"
                                        value={dataModal.telefono}
                                        onChange={handleChangeModal} className="input2" type="number"></input>


                                    <label>País de origen</label>
                                    <input name="paisorigen"
                                        onChange={handleChangeModal} value={dataModal.paisorigen} className="input2" type="text"></input>
                                    <label>Foto</label>
                                    <input placeholder="Ingrese la URL de la imagen"
                                        name="img"
                                        value={dataModal.img}
                                        onChange={handleChangeModal} className="input2" type="file"></input>


                                    <label>Contraseña</label>
                                    <input name="password"
                                        value={dataModal.password}
                                        onChange={handleChangeModal} className="input2" type="password"></input>

                                    <label>Confirmar contraseña</label>
                                    <input value={dataModal.password} name="password"
                                    onChange={handleChangeModal} className="input2" type="password" placeholder="Confirmar"></input>


                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-secondary" onClick={handleClose}>
                                    Close
                                </button>
                                <button className="btn btn-primary" type="submit">
                                    Guardar Cambios
                                </button>
                            </Modal.Footer>
                        </div>
                    </div>
                </div>
            </Form>

        </Modal>
        </Container >

    );
}
export default ListHuesped;