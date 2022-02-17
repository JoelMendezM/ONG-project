import React from 'react'
import { Form, Formik, Field } from 'formik';
import { 
    Button, 
    Stack,
} from '@chakra-ui/react'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import * as Yup from 'yup';
import FieldControl from './FieldControl';

// COMO: Usuario
// QUIERO: Visualizar un Formulario de Contacto
// PARA: Enviar un mensaje a la ONG

// Criterios de aceptación: Este componente renderizará el Formulario de Contacto que posteriormente realizará un envío de email. Deberá contener los campos name, email, phone y message, y validar los mismos al hacer submit.

// Validaciones:

// listo - Todos los campos son obligatorios
// listo - Verificar el formato correcto del email
// listo - Phone deberá ser un número, y contener una longitud mínima de 8 caracteres

let schemaContact = Yup.object().shape({
    firstName: Yup.string().required('Name required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    email: Yup.string().email('Invalid email address').required('Email required'),
    phone: Yup.number().typeError('Only numbers are allowed for this field').test('len', 'Must be exactly 8 characters', val => val && val.toString().length >= 8).required('Phone required'),
    message: Yup.string().required('Message required')
})

const ContactForm = () => {

    return (
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                phone: '',
                message: ''
            }}
            validationSchema={schemaContact}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {(props) => (
                <Form>
                    <Stack spacing={13} p={10}>
                        <Field name='firstName'>
                            {({field, form}) => (

                                <FieldControl 
                                    type='text'
                                    field={field} 
                                    form={form}
                                    idName='firstName'
                                    title='First Name'
                                    icon={AiOutlineUser}
                                />

                            )}
                        </Field>

                        <Field name='email'>
                            {({field, form}) => (

                                <FieldControl 
                                    type='text'
                                    field={field} 
                                    form={form}
                                    idName='email'
                                    title='Email'
                                    icon={AiOutlineMail}
                                />
                            )}
                        </Field>

                        <Field name='phone'>
                            {({field, form}) => (

                                <FieldControl 
                                    type='text'
                                    field={field} 
                                    form={form}
                                    idName='phone'
                                    title='Phone Number'
                                    icon={AiOutlinePhone}
                                />

                            )}
                        </Field>

                        <Field name='message'>
                            {({field, form}) => (

                                <FieldControl 
                                    type='textarea'
                                    field={field} 
                                    form={form}
                                    idName='message'
                                    title='Message'
                                />
                            )}
                        </Field>
                        <Button type="submit" colorScheme='blue'>Submit</Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm