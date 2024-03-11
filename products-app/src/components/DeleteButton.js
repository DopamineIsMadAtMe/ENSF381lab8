/* 
2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
3 Name : lab8_exe_C
4 Assignment : Lab 8 , Exercise C
5 Author ( s ) : Wade Banman, Abdul Shakoor Raed
6 Submission : March 11, 2024
7 Description : React .
8 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

import React, { useState } from "react";
import { removeProduct } from "../services/apiServices";
import ConfirmModal from "./ConfirmModal";

const DeleteButton = ({ productId, onProductDeleted }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      console.log(`Deleting product with id: ${productId}`);
      const data = await removeProduct(productId);
      setLoading(false);
      console.log(data);
      if (onProductDeleted) {
        onProductDeleted(data);
      }
    } catch (err) {
      console.error("Failed to delete product:", err);
      setError("Failed to delete product");
      setLoading(false);
    } finally {
      setShowConfirmModal(false); // Close modal after confirmation
    }
  };

  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => setShowConfirmModal(true)}
        disabled={loading}
      >
        {loading ? "Deleting..." : "Delete Product"}
      </button>
      {error && <p>{error}</p>}
      <ConfirmModal
        show={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
      >
        Are you sure you want to delete this product?
      </ConfirmModal>
    </>
  );
};

export default DeleteButton;
