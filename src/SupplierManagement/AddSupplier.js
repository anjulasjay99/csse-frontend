//import modules and packages
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Button, Form, FormGroup, Label, Input , Row , Col ,ButtonGroup , FormText } from "reactstrap";
import styles from '../CSS/supplier.module.css'
import { useState } from "react";
import {addNewSupplier} from './SupplierFacade';
import Header from '../Components/Header';
import {postSupplierUrl} from './SupplierConstants'
 

//beginning of AddSupplier method
export default function AddSupplier() {

    //declare supplier attributes
    const [ businessName , setbusinessName ] = useState("");
    const [ supplierId , setsupplierId ] = useState("");
    const [ fullName , setfullName ] = useState("");
    const [ telephone , settelephone ] = useState("");
    const [ email , setemail ] = useState("");
    const [ address , setaddress ] = useState("");
    const [ state , setstate ] = useState("Colombo");
    const [ zip , setzip ] = useState("");
   
    //function to submit a new supplier
    function submit(e) {
        e.preventDefault();
        console.log("aaa")
        console.log(businessName);
       
        //declaration of new subblier object
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

        //add supplier url
        const url = 'http://localhost:8070/supplier'

        //fetch add new supplier method
        addNewSupplier(postSupplierUrl, newSupplier).then((res)=>{
            console.log(res.data);
            alert("Added Succesfully");
            setaddress("")
            setbusinessName("")
            setemail("")
            setfullName("")
            setstate("Colombo")
            setsupplierId("")
            settelephone("")
            setzip("")
        }).catch((err) =>{
            console.log(err);
        })
     
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
    <Header HeadTitle="Add Suppliers"/>
    <div className={styles.parent}>
        <Sidebar/>
             <div className={styles.child}>
                <div className={styles.formContainer}>
                <Form onSubmit={submit} className = {styles.formWrap} encType="multipart/form-data">
                <h2  style={{color : "#ffff00",paddingTop:"0px"}}>Add Supplier</h2>
                    <Row>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="pid">Business Name *</Label>
                                <Input
                                className={styles.input}
                                id="pid"
                                name="pid"
                                placeholder="Business Name"
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
                                <Label for="pRate">Full Name *</Label>
                                <Input
                                className={styles.input}
                                id="pRate"
                                name="pRate"
                                placeholder="Full Name"
                                type="text"
                                value={fullName}
                                onChange={(e) => setfullName(e.target.value)}
                                required
                                />
                            </FormGroup>
                    </Row>
                   
                    <Row>
                    <FormGroup>
                                <Label for="description">Address *</Label>
                                <Input
                                className={styles.input}
                                onChange={(e) => setaddress(e.target.value)}
                                value={address}
                                id="description"
                                placeholder="Address"
                                name="description"
                                type="text"
                                required
                                />
                    </FormGroup>     
                    </Row>
                    <Row>
                    <Col md={6}>
                        <FormGroup>
                                <Label for="quantity">Zip Code *</Label>
                                <Input
                                className={styles.input}
                                id="quantity"
                                name="quantity"
                                placeholder="Zip Code"
                                type="number"
                                value={zip}
                                onChange={(e) => setzip(e.target.value)}
                                required
                                />
                        </FormGroup>                           
                        </Col>
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
                      
                    </Row>
                    <Row>
                    <FormGroup>
                                <Label for="productImage">Email *</Label>
                                <Input
                                className={styles.input}
                                id="productImage"
                                name="productImage"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
        
                                required
                                />
                    </FormGroup>  
                    </Row>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                                <Label for="quantity">Supplier Id *</Label>
                                <Input
                                className={styles.input}
                                id="quantity"
                                name="quantity"
                                placeholder="Supplier Id"
                                type="text"
                                value={supplierId}
                                onChange={(e) => setsupplierId(e.target.value)}
                                required
                                />
                        </FormGroup>                           
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                                <Label for="quantity">Telephone *</Label>
                                <Input
                                className={styles.input}
                                id="quantity"
                                name="quantity"
                                pattern = "[0-9]{10}"
                                placeholder="Telephone"
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
                            Submit
                        </Button>   
                    </ButtonGroup>
                </Form> 
            </div>
        </div>
    </div>
    </>
  )
}
