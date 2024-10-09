import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({
    productName: '',
    productDescription: '',
    price: null,
    imageUrl: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const domain = window.location.href.includes('localhost')
    ? 'http://localhost:5000'
    : 'https://digital-product-store-1.onrender.com';

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle file selection for PDF
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const createProduct = async (e) => {
    e.preventDefault();

    if (
      productInfo.productName === '' ||
      productInfo.productDescription === '' ||
      productInfo.price === null ||
      productInfo.imageUrl === ''
    ) {
      toast.error('Enter all product information');
      return;
    }

    if (!selectedFile) {
      toast.error('Please upload a PDF');
      return;
    }

    const formData = new FormData();
    formData.append('productName', productInfo.productName);
    formData.append('productDescription', productInfo.productDescription);
    formData.append('price', productInfo.price);
    formData.append('imageUrl', productInfo.imageUrl);
    formData.append('file', selectedFile); // Append the selected PDF file

    try {
      const createNewProduct = await axios.post(domain + '/api/products/create-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (createNewProduct.data.message === 'Product created') {
        setUploadStatus('File uploaded successfully!');
        navigate('/');
      }
    } catch (error) {
      toast.error('Error creating product or uploading file');
      setUploadStatus('Error uploading file.');
    }
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] bg-slate-100 flex">
      <div className="m-auto lg:w-[30%] md:w-[50%] p-4 bg-white">
        <form onSubmit={createProduct}>
          <div className="my-3 flex-col gap-2">
            <label>Product Name</label>
            <input
              className="w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1"
              onChange={handleChange}
              value={productInfo.productName}
              type="text"
              name="productName"
            />
          </div>
          <div className="my-3 flex-col gap-2">
            <label>Product Description</label>
            <input
              className="w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1"
              onChange={handleChange}
              value={productInfo.productDescription}
              type="text"
              name="productDescription"
            />
          </div>
          <div className="my-3 flex-col gap-2">
            <label>Product Price</label>
            <input
              className="w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1"
              onChange={handleChange}
              value={productInfo.price}
              type="number"
              name="price"
            />
          </div>
          <div className="my-3 flex-col gap-2">
            <label>Product Image Link</label>
            <input
              className="w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1"
              onChange={handleChange}
              value={productInfo.imageUrl}
              type="text"
              name="imageUrl"
            />
          </div>

          {/* PDF Upload Section */}
          <div className="my-3 flex-col gap-2">
            <label>Upload PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1"
            />
          </div>

          <div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create
            </button>
          </div>
        </form>

        {uploadStatus && <p className="text-sm text-center text-red-500">{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default CreateProduct;
