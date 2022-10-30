import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Button, Form, FormGroup, Label, Input , Row , Col ,ButtonGroup , FormText } from "reactstrap";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import styles from '../CSS/supplier.module.css'
import { useState } from "react";
import axios from "axios";
import {postData} from './Facade';
import Header from '../Components/Header';
export default function AddSupplier() {

    const [ businessName , setbusinessName ] = useState("");
    const [ supplierId , setsupplierId ] = useState("");
    const [ fullName , setfullName ] = useState("");
    const [ telephone , settelephone ] = useState("");
    const [ email , setemail ] = useState("");
    const [ address , setaddress ] = useState("");
    const [ state , setstate ] = useState("Colombo");
    const [ zip , setzip ] = useState("");
   
    // function postData(url, params = {}) {
    //     return axios({
    //       url: url,
    //       method: "POST",
    //       params: params
    //     }).then(res => res.data)
    //   }
   
    function submit(e) {
        e.preventDefault();
        console.log("aaa")
        console.log(businessName);
       
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
        const url = 'http://localhost:8070/supplier'
        postData(url, newSupplier).then((res)=>{
            console.log(res.data);
            alert("Added Succesfully");
        }).catch((err) =>{
            console.log(err);
        })
        // console.log(newSupplier);
        // const url = 'http://localhost:8070/supplier'
        // postData(newSupplier,url)
    }

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
    <Header/>
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
                                <Label for="pRate">Full Name</Label>
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
                                <Label for="description">Address</Label>
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
                                <Label for="quantity">Zip Code</Label>
                                <Input
                                className={styles.input}
                                id="quantity"
                                name="quantity"
                                placeholder="Zip Code"
                                type="text"
                                value={zip}
                                onChange={(e) => setzip(e.target.value)}
                                required
                                />
                        </FormGroup>                           
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                                <Label for="exampleSelect">
                                State
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
                                <Label for="productImage">Email</Label>
                                <Input
                                className={styles.input}
                                id="productImage"
                                name="productImage"
                                type="text"
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
                                <Label for="quantity">Supplier Id</Label>
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
                                <Label for="quantity">Telephone</Label>
                                <Input
                                className={styles.input}
                                id="quantity"
                                name="quantity"
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
