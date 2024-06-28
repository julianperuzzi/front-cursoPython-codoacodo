import React from 'react';
import ProductForm from '../components/ProductForm';

const ProductEdit = () => {
  return (
    <div className="container mx-auto">
      <ProductForm isEdit={true} />
    </div>
  );
};

export default ProductEdit;
