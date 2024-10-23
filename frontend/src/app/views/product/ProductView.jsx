import React, { useState, useEffect } from 'react';
import { productService } from '../../services/product/ProductService';

const ProductView = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stockQuantity: ''
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await productService.getAll();
            setProducts(response.data);
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedProduct) {
                await productService.update(selectedProduct.id, formData);
            } else {
                await productService.create(formData);
            }
            setSelectedProduct(null);
            setFormData({ name: '', description: '', price: '', stockQuantity: '' });
            loadProducts();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setFormData(product);
    };

    const handleDelete = async (id) => {
        try {
            await productService.delete(id);
            loadProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Management</h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Product Name"
                        className="border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                        className="border p-2 rounded"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        className="border p-2 rounded"
                    />
                    <input
                        type="number"
                        name="stockQuantity"
                        value={formData.stockQuantity}
                        onChange={handleInputChange}
                        placeholder="Stock Quantity"
                        className="border p-2 rounded"
                    />
                </div>
                <button 
                    type="submit" 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {selectedProduct ? 'Update Product' : 'Add Product'}
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.stockQuantity}</p>
                        <div className="mt-4 space-x-2">
                            <button 
                                onClick={() => handleEdit(product)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDelete(product.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductView;