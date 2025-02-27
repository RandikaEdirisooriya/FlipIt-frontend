import { useState } from "react";
import { X as CloseIcon, Minus, Plus, ShoppingBag, CheckCircle } from "lucide-react";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { category: string; img: string; name: string; price: number }[];
  resetCart: () => void;
}

export default function Cart({ isOpen, onClose, cartItems , resetCart}: CartProps) {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuantityChange = (index: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: value >= 1 ? value : 1,
    }));
  };

  const handleCheckout = () => {
    resetCart();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Hide alert after 3 seconds
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-6">
      <div className="bg-white w-full max-w-2xl h-[90vh] rounded-2xl shadow-2xl flex flex-col animate-in fade-in duration-200 relative">
        {/* Success Alert */}
        {showSuccess && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg animate-fade-in">
            <CheckCircle className="w-5 h-5" />
            <span>Order placed successfully!</span>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="flex gap-6 border-b pb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-40 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-lg font-medium">${item.price}</p>
                  </div>
                  <p className="text-gray-600">Category: {item.category}</p>
                  <p className="text-emerald-600 font-medium">In Stock</p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 pt-2">
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      onClick={() => handleQuantityChange(index, (quantities[index] || 1) - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      value={quantities[index] || 1}
                      onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                      className="w-16 text-center border rounded-lg py-2"
                    />
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      onClick={() => handleQuantityChange(index, (quantities[index] || 1) + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary & Checkout */}
        <div className="border-t p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${cartItems.reduce((total, item, index) => total + (item.price) * (quantities[index] || 1), 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t">
              <span>Total</span>
              <span>${cartItems.reduce((total, item, index) => total + (item.price) * (quantities[index] || 1), 0).toFixed(2)}</span>
            </div>
          </div>
          <button 
            className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-medium transition-colors"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
