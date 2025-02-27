"use client"

import type React from "react"
import { useState, type ChangeEvent } from "react"
import { Upload, X } from "lucide-react"
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../store';
import { addBookData } from '../reducers/BookReducer';

interface ProductFormData {
  img: string
  category: string
  name: string
  price: string
}

export default function ProductForm() {
  const books=useSelector((state:RootState)=>state.books.items)
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<ProductFormData>({
    img: '',
    category: "",
    name: "",
    price: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
    //  setFormData((prev) => ({ ...prev, img: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!formData.img) {
    //   alert("Please upload an image");
    //   return;
    // }

    // Create FormData object for image upload
    const bookData = {
      img: 'imge',
      category: formData.category,
      name: formData.name,
      
      price: formData.price,
       
    };

    // Dispatch Redux action
    dispatch(addBookData(bookData));

    // Reset Form
    setFormData({
      img: '',
      category: "",
      name: "",
      price: "",
    });
};


  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-themePurple">Add Books</h2>

        {/* Image Upload */}
        <div className="mb-6">
          <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>
          <div className="relative border-2 border-dashed border-yellow-400 rounded-lg p-4 text-center cursor-pointer hover:bg-yellow-50 transition-colors">
            <input
              type="file"
              id="img"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {formData.img ? (
              <div className="flex items-center justify-center">
                <img
                //  src={URL.createObjectURL('imge') || "/placeholder.svg"}
                  alt="Product preview"
                  className="max-h-40 rounded"
                />
                <button
                  type="button"
                //  onClick={() => setFormData((prev) => ({ ...prev, img: null }))}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <div className="text-gray-500">
                <Upload className="mx-auto h-12 w-12 text-yellow-500" />
                <p>Click or drag to upload image</p>
              </div>
            )}
          </div>
        </div>

        {/* Category Input */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Price Input */}
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-themePurple text-white py-2 px-4 hover:text-black rounded-md hover:bg-themeYellow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
          Add Product
        </button>
      </form>
    </div>
  )
}

