import { useEffect, useState } from "react";
import { getProducts } from "@/scenes/product/product";
import { Product as ProductType } from "@/scenes/product/type";
import usePetStore from "@/store/petStore";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Product: React.FC<Props> = ({ setSelectedPage }) => {
  const [products, setProducts] = useState<ProductType[]>([]); // Định nghĩa kiểu cho state

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts() || [];
      setProducts(fetchedProducts);
    };

    fetchProducts();

    // Cập nhật selected page khi component được mount
    setSelectedPage(SelectedPage.cacbe);
  }, [setSelectedPage]);

  const addPet = usePetStore((state) => state.addPet);
  console.log('Product:', addPet);

  return (
    <div id="cacbe" className="min-h-screen bg-gradient-to-b bg-gray-20 flex items-center justify-center"> 
      <main className="container py-15">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary-300">
          CÁC BÉ CÓ SẴN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={product.images[0]} alt={product.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button 
                  onClick={() => addPet(product)} 
                  className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
