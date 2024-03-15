import React from 'react';
import Modal from "./Modal";
import { ErrorMessage, Field,Form, Formik } from 'formik';
import { addDoc, collection,doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'Yup';

const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required("Name is required"),
  email:Yup.string().email("Invalid Email").required("Email is required"),

})

const AddAndUpdateContact = ({isOpen,onClose, isUpdate,contact}) => {

  const addContact = async(contact)=>{
    try {
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef,contact)
      onClose();
      toast.success("contact added successfully");

    } catch (error) {
      console.log(error);
    }
  };


  
  const updateContact = async(contact,id)=>{
    try {
      const contactRef = doc(db,"contacts",id);
      await updateDoc(contactRef,contact)
      onClose();
      toast.success("contact updated successfully");
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div>
       <Modal isOpen={isOpen} onClose={onClose}>
          <Formik 
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
            ? {
              name: contact.name,
              email: contact.email,
            }
            :{
              name: "",
              email: "",
            }
            }
          onSubmit={(values)=>{
              console.log(values);
              isUpdate ? 
              updateContact(values,contact.id) :
              addContact(values);
          }}
          >
            <Form className = "flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Name</label>
                  <Field type = "text" name="name" className="border h-10"/>

                  <div className='text-red-500 text-xs'>
                      <ErrorMessage name = "name"/>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name = "email" 
                  className="border h-10"/>
                </div>

                <button className= 'bg-orange px-3 py-1.5 border self-end'> {isUpdate ? "update":"add"} contact</button>
            </Form> 
          </Formik>
        </Modal>
    </div>
  )
}

export default AddAndUpdateContact;
