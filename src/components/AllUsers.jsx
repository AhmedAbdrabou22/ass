import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function AllUsers() {
  const allUsers = [
    {
      id: "032",
      userName: "lorem ipsum",
      email: "someone@email.com",
      date: "12-12-2022",
      company: "takes",
    },
    {
      id: "0310",
      userName: "lorem ipsum",
      email: "someone@email.com",
      date: "12-12-2023",
      company: "takes",
    },
    {
      id: "02",
      userName: "lorem ipsum",
      email: "someone@email.com",
      date: "12-12-2005",
      company: "takes",
    },
    {
      id: "038",
      userName: "lorem ipsum",
      email: "someone@email.com",
      date: "12-12-2029",
      company: "takes",
    },
    {
      id: "03",
      userName: "lorem ipsum",
      email: "someone@email.com",
      date: "12-12-2000",
      company: "takes",
    },
  ];

  const [products, setProducts] = useState(allUsers);
  const [filteredProducts, setFilteredProducts] = useState(allUsers);
  const [filterValue, setFilterValue] = useState("");

  const filterDocuments = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterValue(value);

    const filtered = allUsers.filter((product) => {
      return product.userName.toLowerCase().includes(value);
    });

    setFilteredProducts(filtered);
  };
  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const deleteUser = (rowData) => {
    const updatedUsers = filteredProducts.filter(
      (user) => user.id !== rowData.id
    );
    setFilteredProducts(updatedUsers);
    setProducts(updatedUsers);
  };

  const deleteButtonTemplate = (rowData) => {
    return (
      <button
        onClick={() => deleteUser(rowData)}
        className="border-0 bg-transparent"
        style={{ color: "#EC0B0B" }}
      >
        Delete
      </button>
    );
  };

  return (
    <div
      className="col-12 m-auto p-fluid py-4 px-5 mb-4"
      style={{ borderRadius: "15px", backgroundColor: "#fff" }}
    >
      <div className="d-flex justify-content-between">
        <div className="col-7">
          <h2
            className="ms-2 mt-2"
            style={{ color: "#4A5568", fontSize: "25px" }}
          >
            All users
          </h2>
        </div>
        <div className="position-relative mb-3 col-4 me-3">
          <FontAwesomeIcon
            className="fs-5 position-absolute"
            icon={faSearch}
            style={{ top: "12px", left: "13px", color: "#9098b1" }}
          />
          <InputText
            className="py-2 px-5 "
            placeholder="Search list..."
            value={filterValue}
            onChange={filterDocuments}
          />
        </div>
      </div>
      <DataTable
        value={filteredProducts}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "50rem" }}
        style={{ fontSize: "18px" }}
        resizableColumns
        sortField="date"
        sortOrder={-1}
      >
        <Column
          field="id"
          header="#"
          editor={(options) => textEditor(options)}
          style={{ width: "20%", height: "80px" }}
        ></Column>
        <Column
          field="userName"
          header="username"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="email"
          header="email"
          editor={(options) => textEditor(options)}
          style={{ width: "20%", height: "55px" }}
        ></Column>
        <Column
          field="company"
          header="company"
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="date"
          header="date"
          sortable
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        ></Column>
        <Column
          rowEditor
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          header="Actions"
          body={deleteButtonTemplate}
          style={{ width: "20%" }}
          headerStyle={{ width: "10%", minWidth: "8rem" }}
        />
      </DataTable>
    </div>
  );
}
