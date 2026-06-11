import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form, Alert, Modal } from "react-bootstrap";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../services/api";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [message, setMessage] = useState("");

  const fetchProducts = () => {
    getProducts()
      .then((resp) => {
        setProducts(resp.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleCloseFormModal = () => {
    setShowModal(false);
    setEditId(null);
    setTitle("");
    setPrice("");
    setCategory("");
  };

  const handleShowCreate = () => {
    setEditId(null);
    setTitle("");
    setPrice("");
    setCategory("");
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
    setPrice(item.price);
    setCategory(item.category);
    setShowModal(true);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, price, category };

    if (editId) {
      updateProduct(editId, productData)
        .then(() => {
          fetchProducts();
          showMessage("Product Updated Successfully");
          handleCloseFormModal();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      addProduct(productData)
        .then(() => {
          fetchProducts();
          showMessage("Product Added Successfully");
          handleCloseFormModal();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteTargetId(id);
  };

  const handleConfirmDelete = () => {
    if (!deleteTargetId) return;

    deleteProduct(deleteTargetId)
      .then(() => {
        fetchProducts();
        showMessage("Product Deleted Successfully");
        setDeleteTargetId(null);
      })
      .catch((error) => {
        console.log(error);
        setDeleteTargetId(null);
      });
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <Button variant="success" onClick={handleShowCreate}>
          + Add New Product
        </Button>
      </div>

      {message && (
        <Alert variant="success">
          {message}
        </Alert>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseFormModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Edit Product" : "Add New Product"}</Modal.Title>
        </Modal.Header>
        
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <input
                type="text"
                placeholder="e.g., Wireless Headphones"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <input
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <input
                type="text"
                placeholder="e.g., Electronics"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control"
                required
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseFormModal}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {editId ? "Update Product" : "Add Product"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

     
      <Modal 
        show={deleteTargetId !== null} 
        onHide={() => setDeleteTargetId(null)} 
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p className="mb-0">
            Are you sure you want to permanently delete this product?
          </p>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteTargetId(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;