import axios from 'axios';
import { useEffect , useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button,  Row , Col , Input , FormGroup } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import styles from '../CSS/Product.module.css';
import Header from '../Components/Header';

function ViewProducts(){

    // Setting use states for variables
    const [ productData , setData ] = useState([]);
    const [searchVal , setSearchVal] = useState('');

    // Used to navigate through pages
    const navigate = useNavigate();

    // Function to fetch materials/products
    function getMaterials() {
        axios.get("http://localhost:8070/products/").then((res) =>{
            const product = res.data.data
            setData(product);    
            console.log(res.data.data);
            console.log(productData);
            }).catch((err) =>{
            console.log(err);
        })
    }

    // Materials are fetched when the web page is rendered for the first time.
    useEffect(()=>{
        getMaterials();
    },[])

    return(
        <>
            <Header HeadTitle="Add Material"/>
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
                    onChange={(e) =>{
                        setSearchVal(e.target.value);
                    }}
                    />
                    </FormGroup>
            </div>
            <div style={{marginLeft:"17rem"}}>
                    <Button color='warning' outline style={{color:"black" , borderRadius:"9px" , marginLeft:"6rem" , fontWeight:"600" , fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}} onClick={()=>{navigate('/addProduct')}}>Add Product <i className="fa fa-plus" style={{color:"#ffff00" , marginLeft:"0.7rem"}} aria-hidden="true"></i></Button>
                
            </div>        
                        
                    <br /><br />
            </div>     
            <div className={styles.cardsContainer}>
                 
                    <Row xs={1} md={2} className="g-4">
                        {productData.filter((val) =>{
                            if(searchVal === ''){
                                return val;
                            }
                            else if(val.productName.toLowerCase().includes(searchVal.toLowerCase())){
                                return val;
                            }
                        }).map((p)=>(
                            <Col>
                            <Card className={styles.Card}>
                                <Card.Img style={{height:"12rem"}} variant="top" src = {`http://localhost:8070/products/getImage/${p._id}`}/>
                                <Card.Body style={{backgroundColor:"#262626" , borderBottomLeftRadius:"12px" , borderBottomRightRadius:"12px" , fontWeight:"bolder" }}>
                                    <Card.Title className={styles.cardTitle}>{p.productName}</Card.Title>
                                    <Card.Text style={{color:"white" , fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
                                        <label style={{color:"white" , fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginBottom:"8px" , fontWeight:"bolder"}}>Available Quantity : </label> {p.quantity} {p.quantityType} <br />
                                        <label style={{color:"white" , fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" , marginBottom:"8px", fontWeight:"bolder"}}>Supplier :</label>{p.supplierName} <br />
                                        <label style={{color:"white" , fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" , marginBottom:"8px", fontWeight:"bolder"}}>{p.productDescription}</label> <br />
                                        <label style={{color:"white" , fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" , marginLeft:"30%" , fontWeight:"bolder"}}>Rs: {p.productPrice} /=</label> <br />
                                        <Button color="warning" outline className={styles.selectBtn}>Select</Button>
                                    </Card.Text>
                                </Card.Body> 
                            </Card>
                        </Col>
                        ))}      
                    </Row>
                    </div>  
            </div>
            </div>
        </> 
    )
}

export default ViewProducts;