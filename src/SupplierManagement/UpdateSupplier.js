//import modules and packages
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Button, Form, FormGroup, Label, Input , Row , Col ,ButtonGroup , FormText } from "reactstrap";
import styles from '../CSS/supplier.module.css'
import { useState,useEffect } from "react";
import axios from "axios";
// import {addNewSupplier} from './SupplierFacade';
import {useParams} from "react-router-dom"
import {postSupplierUrl} from './SupplierConstants'
// import {viewSupplier} from './SupplierFacade';

//beginning of Updatesupplier method
export default function UpdateSupplier() {

    //declare supplier attributes
    const [ businessName , setbusinessName ] = useState("");
    const [ supplierId , setsupplierId ] = useState("");
    const [ fullName , setfullName ] = useState("");
    const [ telephone , settelephone ] = useState("");
    const [ email , setemail ] = useState("");
    const [ address , setaddress ] = useState("");
    const [ state , setstate ] = useState("");
    const [ zip , setzip ] = useState("");
    //fetch the id of selected supplier
    const {id} = useParams();
    
   //method to set particular supplier
    useEffect(()=>{
    
        let url = `http://localhost:8070/supplier/get/${id}`;
        // viewSupplier(url).then((res)=>{
          
        //   console.log(res.data)
        //   setbusinessName(res.data.businessName)
        //   setaddress(res.data.address)
        //   setemail(res.data.email)
        //   setfullName(res.data.fullName)
        //   setstate(res.data.state)
        //   setsupplierId(res.data.supplierId)
        //   settelephone(res.data.telephone)
        //   setzip(res.data.zip)
        // }).catch((err)=>{
        //   console.log(err)
        // })
      },[])

    //method to update a supplier  
    function updateSupplier(e) {
        e.preventDefault();
        console.log("aaa")
        console.log(businessName);
       
        //updated supplier object
        const newSupplier ={
            businessName,
            supplierId,
            fullName,
            telephone,
            email,
            address,
            state,
            zip
        };

        let url = `http://localhost:8070/supplier/update/${id}`
        
        //fetch add new supplier method
        // addNewSupplier(url, newSupplier).then((res)=>{
        //     console.log(res.data);
        //     alert("updated Succesfully");
        // }).catch((err) =>{
        //     console.log(err);
        // })
       
    }


     //function to clear all the fields
     function clear(){
        setaddress("")
        setbusinessName("")
        setemail("")
        setfullName("")
        setstate("Colombo")
        setsupplierId("")
        settelephone("")
        setzip("")
    }
   
    return (
      <>
        <div className={styles.parent}>
           <Sidebar/>
        <div className={styles.child}>
            <div className={styles.formContainer}>
                <Form onSubmit={updateSupplier} className = {styles.formWrap} encType="multipart/form-data">
                    <h2  style={{color : "#ffff00",paddingTop:"0px"}}>Update Supplier</h2>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="pid">Business Name *</Label>
                                    <Input
                                    className={styles.input}
                                    id="pid"
                                    name="pid"
                                    placeholder="Product Name"
                                    type="text"
                                    value={businessName}
                                    onChange={(e) => setbusinessName(e.target.value)}
                                    required
                                    />
                                </FormGroup>
                            </Col>      
                        </Row>
                        <Row>
                                <FormGroup>
                                    <Label for="pRate">Full Name</Label>
                                    <Input
                                    className={styles.input}
                                    id="pRate"
                                    name="pRate"
                                    placeholder="Price Rate"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setfullName(e.target.value)}
                                    required
                                    />
                                </FormGroup>
                        </Row>
                        <Row>
                        <FormGroup>
                                    <Label for="description">Address</Label>
                                    <Input
                                    className={styles.input}
                                    onChange={(e) => setaddress(e.target.value)}
                                    value={address}
                                    id="description"
                                    name="description"
                                    type="text"
                                    required
                                    />
                        </FormGroup>     
                        </Row>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                            <Label for="exampleSelect">
                                State *
                                </Label>
                                <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={(e) => setstate(e.target.value)}
                                >
                                <option>
                                    Colombo
                                </option>
                                <option>
                                    Matara
                                </option>
                              
                                <option>
                                    Galle
                                </option>
                                <option>
                                    Gampaha
                                </option>
                                <option>
                                    Kaluthara
                                </option>
                                <option>
                                    Hambanthota
                                </option>
                                </Input>
                            </FormGroup>                           
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                    <Label for="quantity">Zip Code</Label>
                                    <Input
                                    className={styles.input}
                                    id="quantity"
                                    name="quantity"
                                    placeholder="Quantity"
                                    type="text"
                                    value={zip}
                                    onChange={(e) => setzip(e.target.value)}
                                    required
                                    />
                            </FormGroup>                           
                            </Col>
                        </Row>
                        <Row>
                        <FormGroup>
                                    <Label for="productImage">Email</Label>
                                    <Input
                                    className={styles.input}
                                    id="productImage"
                                    name="productImage"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
            
                                    required
                                    />
                        </FormGroup>  
                        </Row>
                        <Row>
                            <Col md={6}>
                            <FormGroup>
                                    <Label for="quantity">Supplier Id</Label>
                                    <Input
                                    className={styles.input}
                                    id="quantity"
                                    name="quantity"
                                    placeholder="Quantity"
                                    type="text"
                                    value={supplierId}
                                    onChange={(e) => setsupplierId(e.target.value)}
                                    required
                                    />
                            </FormGroup>                           
                            </Col>
                            <Col md={6}>
                            <FormGroup>
                                    <Label for="quantity">Telephone</Label>
                                    <Input
                                    className={styles.input}
                                    id="quantity"
                                    name="quantity"
                                    placeholder="Quantity"
                                    type="text"
                                    value={telephone}
                                    onChange={(e) => settelephone(e.target.value)}
                                    required
                                    />
                            </FormGroup>                           
                            </Col>
                        </Row>       
                            <ButtonGroup className={styles.btn}>
                                <Button color="danger" style={{float:"left"}} onClick={(e)=>{
                                    clear(e);
                                }}>
                                    Clear
                                </Button>
                                <Button color="warning" style={{float:"right"}} > 
                                    Update
                                </Button>
                            </ButtonGroup>
                        </Form>
                    </div>
                </div>
            </div>
        </>
  )
}
