import Sidebar from "../Components/Sidebar";
import styles from '../CSS/addProduct.module.css';
import { Button, Form, FormGroup, Label, Input , Row , Col ,ButtonGroup , FormText } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { FormControl } from "react-bootstrap";
function AddProduct(){

    const [ productName , setName ] = useState("");
    const [ supplierName , setSupplier ] = useState("");
    const [ priceRate , setPrice ] = useState("");
    const [ quantityType , setQuantityType ] = useState("");
    const [ quantity , setQuantity ] = useState("");
    const [ description , setDescription ] = useState("");
    const [ image , setImage ] = useState("");

    const onChangeFile = (e) =>{
        setImage(e.target.files[0]);
    };
    function submit() {

        const formData = new FormData();

        formData.append("productName" , productName );
        formData.append("supplierName" , supplierName );
        formData.append("productPrice" , priceRate );
        formData.append("quantityType" , quantityType );
        formData.append("quantity" , quantity );
        formData.append("productDescription" , description );
        formData.append("productImage" , image );
        console.log(priceRate , );
        axios.post('http://localhost:8070/products/addProduct' , formData).then((res)=>{
            console.log(res);
            alert("Added Succesfully");
        }).catch((err) =>{
            console.log(err);
        })
    }

    function clear(){

    }

    return(
        <div className={styles.bodyContent}>
                <Sidebar/>
                <div className={styles.formContainer}>
                <Form className = {styles.formWrap} encType="multipart/form-data">
                <h2 style={{color : "#ffff00"}}>Add Product</h2>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="pid">Product Name</Label>
                                <Input
                                className={styles.input}
                                id="pid"
                                name="pid"
                                placeholder="Product Name"
                                type="text"
                                value={productName}
                                onChange={(e) => setName(e.target.value)}
                                required
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                                <Label for="supName">Supplier Name</Label>
                                <Input
                                className={styles.input}
                                id="supName"
                                name="supName"
                                placeholder="Supplier Name"
                                type="text"
                                value={supplierName}
                                onChange={(e) => setSupplier(e.target.value)}
                                required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                            <FormGroup>
                                <Label for="pRate">Price Rate</Label>
                                <Input
                                className={styles.input}
                                id="pRate"
                                name="pRate"
                                placeholder="Price Rate"
                                type="text"
                                value={priceRate}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                />
                            </FormGroup>
                    </Row>
                    <Row>
                        <Col md={6}>

                        <FormGroup>
                                <Label for="exampleSelect">
                                Select Quantity Type
                                </Label>
                                <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                onChange={(e) => setQuantityType(e.target.value)}
                                >
                                <option>
                                    Bags
                                </option>
                                <option>
                                    Qb
                                </option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                                <Label for="quantity">Quantity</Label>
                                <Input
                                className={styles.input}
                                id="quantity"
                                name="quantity"
                                placeholder="Quantity"
                                type="text"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                                />
                        </FormGroup>                           
                        </Col>
                    </Row>
                    <Row>
                    <FormGroup>
                                <Label for="description">Description</Label>
                                <Input
                                className={styles.input}
                                onChange={(e) => setDescription(e.target.value)}
                                id="description"
                                name="description"
                                type="textarea"
                                required
                                />
                    </FormGroup>     
                    </Row>

                    <Row>
                    <FormGroup>
                                <Label for="productImage">Product Image</Label>
                                <Input
                                className={styles.input}
                                id="productImage"
                                name="productImage"
                                type="file"
                                filename="productImage"
                                onChange={onChangeFile}
                                required
                                />
                    </FormGroup>  
                    </Row>
                    <ButtonGroup>
                        <Button color="danger" style={{float:"left"}} onClick={(e)=>{
                            clear(e);
                        }}>
                            Clear
                        </Button>
                        <Button color="warning" style={{float:"right"}} onClick={(e)=>{
                            submit(e);
                        }}> 
                            Submit
                        </Button>
                    </ButtonGroup>

                </Form>
            </div>
  
            
            


           
        </div>
    )
}

export default AddProduct;