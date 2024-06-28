import React from 'react';
import ProductForm from '../components/ProductForm';

const ProductNew = () => {
  return (
    <div className="container mx-auto">
      <ProductForm isEdit={false} />
    </div>
  );
};

export default ProductNew;
