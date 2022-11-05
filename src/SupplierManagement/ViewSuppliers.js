import React, { useEffect, useState } from "react";
import styles from "../CSS/supplier.module.css";
import common from "../CSS/common.module.css";
import { Button, Input, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../Components/Header';
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import Sidebar from '../Components/Sidebar';

function ViewSuppliers() {
  const navigate = useNavigate();
  const [suppliers, setSuppliers] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  let email = "samanperera@gmail.com";
  let {filterData} = useState();

  const getData = () => {
    axios
      .get("http://localhost:8070/supplier/")
      .then((res) => {
        setSuppliers(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const filterSuppliers = e =>{
    setSearchVal(e.target.value);
    if(e.target.value === ""){
      getData();
    }
  }

  const supplierSearch = () =>{
 
    filterData = suppliers.filter((value)=>{
      return(
        value.businessName.toLowerCase().includes(searchVal.toLowerCase()) || 
        value.supplierId.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.fullName.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.telephone.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.email.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.address.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.state.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.zip.toLowerCase().includes(searchVal.toLowerCase()) 
      )     
    })
    console.log(filterData)
    setSuppliers(filterData)
   
  }

  function updateSupplier(supplier) {
    console.log(supplier._id)
    navigate(`/updateSupplier/${supplier._id}`)
  }

  const deleteSupplier = (supplier) => {
    console.log(supplier)
    axios.delete(`http://localhost:8070/supplier/delete/${supplier._id}`).then((data) => {
      console.log(data);
      window.location.reload();
      alert("Booking Successfully Deleted");
    }).catch((err) => {
      console.log(err);
      alert(err);
    })
  }

  const addNewSupplier = () => {
    navigate("/addsupplier");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8070/supplier/")
      .then((res) => {
        setSuppliers(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  if (suppliers.length === 0) {
    return (
      <div>
        <Header HeadTitle="All Suppliers" />
      </div>
    );
  } else {
    return (
      <>
        <Header HeadTitle="All Suppliers" />
        <div className={styles.parent} >
          <div className={styles.child}>
            <Sidebar />
            <div className={styles.tableContainer}>
              <div className={styles.rowBeforeTable} >
                <div
                  style={{
                    marginBottom: "20px",
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: "10px",
                  }}
                >
                  <Input
                    id="search"
                    name="search"
                    className={common.searchInput}
                    placeholder="Search"
                    type="text"
                    onChange={filterSuppliers}
                    allowClear
                    value={searchVal}
                  />
                   <Button
                    className={common.btnPrimary}
                    onClick={supplierSearch} type="submit" 
                  > search</Button>
                </div>
                <div>
                  <Button
                    className={common.btnPrimary}
                    onClick={addNewSupplier}
                  >
                    Add Supplier
                  </Button>
                </div>
              </div>

              <Table  striped
                className={styles.table}
              >
                <thead style={{ backgroundColor: "aliceblue" }}>
                  <tr>
                    <th>No</th>
                    <th>Business Name</th>
                    <th>Supplier ID </th>
                    <th>Supplier Name</th>
                    <th>Supplier Number</th>
                    <th>Supplier Email</th>
                    <th>Supplier Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.length > 0
                    ? suppliers.map((supplier, index) => {
                      return (
                        <tr key={index} style={{ color: "aliceblue" }} >
                          <td>{index + 1}</td>
                          <td>{supplier.businessName}</td>
                          <td>{supplier.supplierId}</td>
                          <td>{supplier.fullName}</td>
                          <td>{supplier.telephone}</td>
                          <td>{supplier.email}</td>
                          <td>{supplier.address}</td>
                          <td>
                            <div style={{ float: "left" }}>

                              <div> <BsPencilSquare onClick={() => { updateSupplier(supplier) }} size={20} style={{ marginLeft: "5px", float: "left" }} /> Edit
                                <BsTrash onClick={() => { deleteSupplier(supplier) }} size={20} style={{ marginLeft: "20px" }} /> Delete
                              </div>

                            </div>
                          </td>
                        </tr>
                      );
                    })
                    : "No data available"}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ViewSuppliers;