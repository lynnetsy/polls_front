import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Poll = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState(false)


    const data = {
        email: "",
        gender:"",
        range_age:"",
        favsn:"",
        tfb:"",
        ttw:"",
        tins:"",
        twa:"",
        ttik:"",
    }

    return (
        <div className="form-container">
            <Formik
            initialValues={data}
            validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required';
                }
                if (!values.gender) {
                    errors.gender = 'Required';
                }
                if (!values.range_age) {
                    errors.range_age = 'Required';
                }
                if (!values.favsn) {
                    errors.favsn = 'Required';
                }
                if (!values.tfb || values.tfb < 0 || values.tfb > 24) {
                    errors.tfb = 'Required';
                }
                if (!values.ttw || values.ttw < 0 || values.ttw > 24) {
                    errors.ttw = 'Required';
                }
                if (!values.tins || values.tins < 0 || values.tins > 24) {
                    errors.tins = 'Required';
                }
                if (!values.twa || values.twa < 0 || values.twa > 24) {
                    errors.twa = 'Required';
                }
                if (!values.ttik || values.ttik < 0 || values.ttik > 24) {
                    errors.ttik = 'Required';
                }
                return errors
            }}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const response = await axios.post("http://localhost:8080/api/v1/polls", values)
                    setErrors(false)
                    if (response.status == 204) {
                        navigate('/stats')
                    }
                } catch ({ response }) {
                    if (response.status === 400) {
                        setErrors(true)
                    }
                }
                setSubmitting(false)
            }}>
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-header">
                        <h2>Encuesta</h2>
                    </div>
                    { errors ? (
                        <div className="form-error">
                            Valida tu informacion
                        </div>
                    ) : "" }
                    <label className="form-label">
                        Email:<br/>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </label>
                    <label className="form-label">
                        Sexo:<br/>
                        <Field as="select" name="gender">
                            <option>Selecciona...</option>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" />
                    </label>
                    <label className="form-label">
                        Rango de edad:<br/>
                        <Field as="select" name="range_age">
                            <option>Selecciona...</option>
                            <option value="18-25">18 - 25</option>
                            <option value="26-33">26 - 33</option>
                            <option value="34-40">34 - 40</option>
                            <option value="40+">40+</option>
                        </Field>
                        <ErrorMessage name="range_age" component="div" />
                    </label>
                    <label className="form-label">
                        Elige tu red social favorita<br/>
                        <Field as="select" name="favsn">
                            <option>Selecciona...</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Whatsapp">Whatsapp</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="TikTok"></option>
                        </Field>
                        <ErrorMessage name="favsn" component="div" />
                    </label>
                    <label className="form-label">
                        Cuanto tiempo al día consumes Facebook<br/>
                        <Field type="number" name="tfb"></Field>
                        <ErrorMessage name="tfb" component="div" />
                    </label>
                    <label className="form-label">
                        Cuanto tiempo al día consumes Whatsapp<br/>
                        <Field type="number" name="twa"></Field>
                        <ErrorMessage name="twa" component="div" />
                    </label>
                    <label className="form-label">
                        Cuanto tiempo al día consumes Twitter<br/>
                        <Field type="number" name="ttw"></Field>
                        <ErrorMessage name="ttw" component="div" />
                    </label>
                    <label className="form-label">
                        Cuanto tiempo al día consumes Instagram<br/>
                        <Field type="number" name="tins"></Field>
                        <ErrorMessage name="tins" component="div" />
                    </label>
                    <label className="form-label">
                        Cuanto tiempo al día consumes TikTok<br/>
                        <Field type="number" name="ttik"></Field>
                        <ErrorMessage name="ttik" component="div" />
                    </label>
                    <div className="form-footer">
                        <button className="form-btn" type="submit" disabled={ isSubmitting }>
                            Enviar
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
        </div>
    )
  }

export default Poll