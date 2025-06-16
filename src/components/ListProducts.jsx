import products from "../data/ProductsList";
import { Link } from "react-router-dom";


const ListProducts = () => {
  return (
    <section className="product-area">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">              
                <img
                  src={product.urls[0]}
                  className="aspect-square w-full bg-gray-200 border-1 border-gray-100 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between px-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/single-product/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.nome}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.preco}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ListProducts