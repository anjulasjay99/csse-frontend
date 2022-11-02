import axios from 'axios';
import { useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button,  Row , Col , Input , FormGroup } from "reactstrap";
import Sidebar from '../Components/Sidebar';
import styles from '../CSS/Product.module.css';

function ViewProducts(){

    const [ productData , setData ] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/products/").then((res) =>{
            const product = res.data.data
            setData(product);    
            console.log(res.data.data);
            // product = res.data.data;
            // console.log(product)
         //   product = res.data.data;
            console.log(productData);
           
            }).catch((err) =>{
            console.log(err);
        })
    },[])
    return(
        <div className={styles.bodyContent}>
            <Sidebar/>
        <div className = {styles.content}>
           <div style={{display:"flex"}}>

           <div>
                <FormGroup>
                <Input
                className={styles.searchBox}
                id="exampleSearch"
                name="search"
                placeholder="Search"
                type="search"
                />
                </FormGroup>
        </div>
        <div style={{marginLeft:"20rem"}}>
            <Button color='warning' outline style={{color:"black" , borderRadius:"9px"}}>Add Product +</Button>
            
        </div>        
                    
                    <br /><br />
        </div>        
            <Row xs={1} md={2} className="g-4">
       
<Col>
   <Card className={styles.Card}>
       {/* <Card.Img variant="top" src = {`http://localhost:8070/products/getImage/${p._id}`}/> */}
        <Card.Img variant="top" />
       <Card.Body style={{backgroundColor:"#262626"}}>
           {/* <Card.Title>{p.productName}</Card.Title> */}
           <Card.Title style={{color:"#ffff00" , marginLeft:"30%"}}>Sample</Card.Title>
           <Card.Text style={{color:"white"}}>
               {/* <label>Available Quantity : </label> {p.quantity} {p.quantityType} <br /> */}
               <label>Available Quantity : </label> 10 Bags <br />
               {/* <label>Supplier :</label>{p.supplierName} <br /> */}
               <label>Supplier :</label>D Supplier <br />
               Sample ecac bn <br />
               {/* <label>{p.productPrice}</label> <br /> */}
               <label style={{marginLeft:"30%"}}>Rs. 2500</label> <br />
               <Button color="warning" style={{marginLeft:"30%"}}>Select</Button>
           </Card.Text>
       </Card.Body> 
   </Card>
</Col>


</Row>
        </div>
      

        </div>
       
       
    )
}

export default ViewProducts;