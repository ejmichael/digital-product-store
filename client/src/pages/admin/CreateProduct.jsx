import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState({
    productName: '',
    productDescription: '',
    price: null,
    imageUrls: [],
  });

  console.log(productInfo.imageUrls);
  

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState(''); // For managing individual URL input

  const domain = window.location.href.includes('localhost')
    ? 'http://localhost:5000'
    : 'https://blood-sugar-backend.onrender.com';

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddImageUrl = () => {
    if (imageUrlInput.trim() !== '') {
      setProductInfo((prevState) => ({
        ...prevState,
        imageUrls: [...prevState.imageUrls, imageUrlInput.trim()],
      }));
      setImageUrlInput(''); // Clear input field after adding
    } else {
      toast.error('Enter a valid image URL');
    }
  };

  const handleRemoveImageUrl = (index) => {
    setProductInfo((prevState) => ({
      ...prevState,
      imageUrls: prevState.imageUrls.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const createProduct = async (e) => {
    e.preventDefault();

    if (
      productInfo.productName === '' ||
      productInfo.productDescription === '' ||
      productInfo.price === null ||
      productInfo.imageUrls.length === 0
    ) {
      toast.error('Enter all product information, including at least one image URL');
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
    formData.append('imageUrls', JSON.stringify(productInfo.imageUrls)); // Convert array to JSON string
    formData.append('file', selectedFile);

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

          {/* Image URLs Section */}
          <div className="my-3 flex-col gap-2">
            <label>Product Image URLs</label>
            <div className="flex">
              <input
                className="flex-grow border-slate-300 bg-slate-100 p-3 rounded-md mt-1"
                onChange={(e) => setImageUrlInput(e.target.value)}
                value={imageUrlInput}
                type="text"
                placeholder="Add image URL"
              />
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
                onClick={handleAddImageUrl}
              >
                Add
              </button>
            </div>
            <ul className="mt-2">
              {productInfo.imageUrls.map((url, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{url}</span>
                  <button
                    type="button"
                    className="text-red-500 ml-2"
                    onClick={() => handleRemoveImageUrl(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
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
