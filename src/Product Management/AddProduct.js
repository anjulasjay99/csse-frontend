import axios from "axios";
import Sidebar from "../Components/Sidebar";
import styles from '../CSS/Product.module.css';
import { Button, Form, FormGroup, Label, Input , Row , Col ,ButtonGroup  } from "reactstrap";
import { useState , useEffect } from "react";
import Offline from "../Components/Offline";

function AddProduct(){

    // Setting use states for variables to add products.

    const [ productName , setName ] = useState("");
    const [ supplierName , setSupplier ] = useState("");
    const [ priceRate , setPrice ] = useState("");
    const [ quantityType , setQuantityType ] = useState("");
    const [ quantity , setQuantity ] = useState("");
    const [ description , setDescription ] = useState("");
    const [ image , setImage ] = useState("");
    const [ isOnline , setOnline ] = useState(true);
    const [ suppliers , setSuppliers ] = useState([]);

    // Seeting the image to the use state variable when uploaded.
    const onChangeFile = (e) =>{
        setImage(e.target.files[0]);
    };

    // Function to get suppliers to be bound to the dropdown
    function getSuppliers() {
        axios.get('http://localhost:8070/supplier/').then((res) =>{
            setSuppliers(res.data);
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    }

    // Function triggered when clicking the submit button
    function submit() {

        const formData = new FormData();

        formData.append("productName" , productName );
        formData.append("supplierName" , supplierName );
        formData.append("productPrice" , priceRate );
        formData.append("quantityType" , quantityType );
        formData.append("quantity" , quantity );
        formData.append("productDescription" , description );
        formData.append("productImage" , image );
        
        // API call to add products passed through 'formData'
        axios.post('http://localhost:8070/products/addProduct' , formData).then((res)=>{
            console.log(res);
            alert("Added Succesfully");
        }).catch((err) =>{
            console.log(err);
        })
    }

    // Function to clear the form
    function clear(){
        setName("");
        setSupplier("");
        setPrice("");
        setQuantity("");
        setQuantityType("");
        setDescription("");
    }

    useEffect(()=>{

        getSuppliers();

        // Implementation of observer design pattern

        // Subscription to events (Online and Offline)
        window.addEventListener("online" , () => setOnline(true));
        window.addEventListener("offline" , () => setOnline(false));

        return() =>{
            // Removing the even on component gets unmounted
            window.removeEventListener("online" , () => setOnline(true));
            window.removeEventListener("offline", () => setOnline(false));
        }
    }, [])

    // If status is online , the page will be displayed otherwise the "slow connection" page will be displayed
    return(
        <>
        {isOnline ? (
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
                             type="select"
                             onChange={(e) => setSupplier(e.target.value)}
                             required
                             >
                                {suppliers.map((sup) =>(
                                     <option>{sup.businessName}</option>
                              ))}
                             </Input>                     
            
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
        ) : (
            <Offline/>
        )}
       
    </>    
    )
}

export default AddProduct;