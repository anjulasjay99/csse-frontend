import React, { useEffect, useState } from "react";
import styles from "../CSS/supplier.module.css";
import common from "../CSS/common.module.css";
import { Button, Input, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import { BsPencilSquare, BsTrash, BsSearch } from "react-icons/bs";
import Sidebar from "../Components/Sidebar";
import { viewAllSuppliers } from "./Supplierfacade";
import { postSupplierUrl } from "./SupplierConstants";

function ViewSuppliers() {
  const navigate = useNavigate();
  const [suppliers, setSuppliers] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  let { filterData } = useState();

  const getData = () => {
    axios
      .get("http://localhost:8070/supplier/")
      .then((res) => {
        setSuppliers(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  //onChange function in search input field
  const filterSuppliers = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value === "") {
      getData();
    }
  };

  //OnClick function in search button
  const supplierSearch = () => {
    filterData = suppliers.filter((value) => {
      return (
        value.businessName.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.supplierId.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.fullName.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.telephone.toLowerCase().includes(searchVal.toLowerCase()) ||
        value.email.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    console.log(filterData);
    setSuppliers(filterData);
  };

  // Navigate to the update UI from the update action button
  function updateSupplier(supplier) {
    console.log(supplier._id);
    navigate(`/updateSupplier/${supplier._id}`);
  }

  // Delete supplier function
  const deleteSupplier = (supplier) => {
    console.log(supplier);
    axios
      .delete(`http://localhost:8070/supplier/delete/${supplier._id}`)
      .then((data) => {
        console.log(data);
        window.location.reload();
        alert("Booking Successfully Deleted");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  // Navigate to the Add UI from the Add Supplier button
  const addNewSupplier = () => {
    navigate("/addsupplier");
  };

  useEffect(() => {
    viewAllSuppliers(postSupplierUrl)
      .then((res) => {
        setSuppliers(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  // Check whether records exists
  if (suppliers.length === 0) {
    return (
      <div>
        <Header HeadTitle="All Suppliers" />
        No Data Available
      </div>
    );
  } else {
    return (
      <>
        <Header HeadTitle="All Suppliers" />
        <div className={styles.parent}>
          <div className={styles.child}>
            <Sidebar />
            <div className={styles.tableContainer}>
              <div className={styles.rowBeforeTable}>
                <div className={styles.searchbarAndBtn}>
                  <Input
                    id="search"
                    name="search"
                    className={styles.searchInput}
                    placeholder="Search"
                    type="text"
                    onChange={filterSuppliers}
                    allowClear
                    value={searchVal}
                  />
                  <Button
                    className={styles.btnPrimary}
                    onClick={supplierSearch}
                    type="submit"
                  >
                    {" "}
                    <BsSearch /> search
                  </Button>
                </div>
                <div>
                  <Button className={styles.btnAddSup} onClick={addNewSupplier}>
                    Add Supplier
                  </Button>
                </div>
              </div>

              <Table striped className={styles.table}>
                <thead>
                  <tr className={styles.tHeadRow}>
                    <th>No</th>
                    <th>Business Name</th>
                    <th>Supplier ID </th>
                    <th>Supplier Name</th>
                    <th>Supplier Number</th>
                    <th>Supplier Email</th>
                    <th>Supplier Address</th>
                    <th className={styles.actionColumn}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.length > 0
                    ? suppliers.map((supplier, index) => {
                        return (
                          <tr key={index} style={{ color: "aliceblue" }}>
                            <td>{index + 1}</td>
                            <td>{supplier.businessName}</td>
                            <td>{supplier.supplierId}</td>
                            <td>{supplier.fullName}</td>
                            <td>{supplier.telephone}</td>
                            <td>{supplier.email}</td>
                            <td>{supplier.address}</td>
                            <td>
                              <div style={{ float: "left" }}>
                                {/* Action Buttons Column - Update and Delete */}
                                <div>
                                  {" "}
                                  <Button className={styles.btnUpdate}>
                                    <BsPencilSquare
                                      onClick={() => {
                                        updateSupplier(supplier);
                                      }}
                                      size={17}
                                      // style={{ marginLeft: "5px", float: "left" }}
                                    />{" "}
                                    Update
                                  </Button>
                                  <Button className={styles.btnDelete}>
                                    <BsTrash
                                      onClick={() => {
                                        deleteSupplier(supplier);
                                      }}
                                      size={17}
                                      // style={{ marginLeft: "20px" }}
                                    />{" "}
                                    Delete
                                  </Button>
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
