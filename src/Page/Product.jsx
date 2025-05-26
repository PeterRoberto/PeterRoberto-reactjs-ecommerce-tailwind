
import { useState, useEffect } from "react";
import { FaTruck } from "react-icons/fa6";
import products from "../data/ProductsList";
import productColors from "../data/ProductColors";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import "../assets/styles/pages/product.scss";

const Product = () => {  
    const {id} = useParams();
    const product = products.find(products => products.id === Number(id));

    const [imgSelected, setImgSelected] = useState(product.urls[0]);
    const [isActiveProduct, setIsActiveProduct] = useState(product.urls.length - 4);
    const [colorSelected, setColorSelected] = useState(null);
    const [isActiveColor, setIsActiveColor] = useState(null);
    const [isActiveSize, setIsActiveSize] = useState(null);
    const [isActiveSizeId, setIsActiveSizeId] = useState(null);
    const [cepInputValue, setCepInputValue] = useState('');
    const [buildUrlCep, setBuildUrlCep] = useState('');
    const [dataState, setDataState] = useState();
    const storageKey = 'cart';
    const minutesToRemoveStorage = 15;
    const { data } = useFetch(buildUrlCep);

    const productStorage = {
        id: id,
        nome: product.nome,
        preco: product.preco,
        tamanho: isActiveSize,
        cor: colorSelected,
        cep: cepInputValue
    }

    const addToBag = () => {
        addProductCart(storageKey, productStorage, minutesToRemoveStorage);       
        setDataState(null);
        setBuildUrlCep(null);
        setCepInputValue('');
    }

    const addProductCart = (key, newProduct, minutes) => {
        const timeNow = new Date().getTime();
        const expiration = timeNow + minutes * 60 * 1000;

        let item = JSON.parse(localStorage.getItem(key));
        let cart = [];

        if (item && item.data) {
            const timeNow = new Date().getTime();
            if (timeNow < item.expiration) {
                cart = item.data;
            } else {
                localStorage.removeItem(key);
            }
        }

        cart.push(newProduct);

        const newItem = {
            data: cart,
            expiration: expiration
        };

        localStorage.setItem(key, JSON.stringify(newItem));
    };


    const cleanStorageInFewMinutes = (key) => {
        const itemStr = localStorage.getItem(key);
        
        if (!itemStr) return null;

        const item = JSON.parse(itemStr);
        const timeNow = new Date().getTime();

        if (timeNow > item.expiration) {
            localStorage.removeItem(key);
            return null;
        }

        return item.data;
    };
    cleanStorageInFewMinutes(storageKey);

    const productSizes = [
        { id: 1, text: 'P' },
        { id: 2, text: 'M' },
        { id: 3, text: 'G' },
        { id: 4, text: 'GG' },
    ];



    useEffect(() => {
        if(!buildUrlCep) return;
        if (data) {
            setDataState(data);
        }      
    }, [data]);

    const handleInputChange = (event) => {
        setCepInputValue(event.target.value);
    };
    

    const handleGetCep = () => {
        const finalUrlCep = `https://viacep.com.br/ws/${cepInputValue}/json/`;
        setBuildUrlCep(finalUrlCep);
    }

    const handleItemClick = (item, index) => {
        getImgToMainImage(item);
        setIsActiveProduct(index);
    }

    const getImgToMainImage = (url) => {
        setImgSelected(url);
    }

    const handleGetColor = (item) => {
        setColorSelected(item.hex);
        setIsActiveColor(item.id);
    }

    const handleClickGetSizeId = (id, size) => {
        setIsActiveSizeId(id);
        setIsActiveSize(size);
    };

    const cleanLocation = () => {
        setDataState(null);
        setBuildUrlCep(null);
        setCepInputValue('');
    }


  return (
    <section className="product-area">
        <div className='container mx-auto px-5 xl:px-30'>
            <div className="grid md:grid-cols-2 gap-7">
                <div className="box-content">
                    {imgSelected && (
                        <div className="box-main-image" style={{backgroundColor: colorSelected}}>
                            <img className="object-cover w-full md:w-full" src={imgSelected} alt="" />
                        </div>
                    )}
                
                    <div className="flex justify-between mt-2 sm:mt-5">
                        {product.urls.map((item, index) => (
                            <div key={index} className={`${isActiveProduct === index ? 'active border-2 border-black ' : ''} box-main-image md:size-30 cursor-pointer`} onClick={() => handleItemClick(item, index)}> 
                                <img key={index} src={`${item}`} alt={product.nome} title={product.nome} />
                            </div>   
                        ))}
                    </div>
                </div>
                
                <div className="box-infos-product">
                    <h1 className="text-3xl font-black tracking-wider title-product">{product.nome}</h1>
                    <span className="text-lg xl:text-2xl block my-5">R${product.preco}</span>
                    <p className="text-gray-600">{product.bio}</p>
                
                    <div className="product-color my-5 ">
                        <span className="text-gray-600 text-sm">Cor:</span>
                        <div className="flex flex-wrap">
                            {productColors.map((item, i) => (
                                <span 
                                    key={i} 
                                    className={`mr-2 mb-1 choose-colors border-1 cursor-pointer block w-8 h-8 rounded-full ${isActiveColor === item.id ? 'active border-white px-3 py-3' : 'border-gray-300'}`} 
                                    style={{ backgroundColor: item.hex}} 
                                    title={item.nome} 
                                    onClick={() => handleGetColor(item, i)}>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="product-size my-5 ">
                        <span className="text-gray-600 text-sm">Tamanho: </span>
                        <div className="flex flex-wrap">
                            {productSizes.map((product) => (
                                <span
                                    key={product.id}
                                    className={`px-2 mr-2 sizes border-2 flex justify-center cursor-pointer ${isActiveSizeId === product.id ? 'active border-black' : 'border-gray-300'}`}
                                    onClick={() => handleClickGetSizeId(product.id, product.text)}
                                >
                                    {product.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="box-delivery mb-10 mt-10">
                        <div className="icon-text flex items-center mb-2">
                            <FaTruck />
                            <span className="block ml-3 text-gray-600 text-sm">Selecione onde quer receber suas compras</span>
                        </div>
                        <div className="box-cep-buton md:flex">
                            <input 
                                type="text" 
                                value={cepInputValue}
                                onChange={handleInputChange}
                                placeholder="Digite seu CEP"  
                                className="w-full md:w-50 field-input h-12  p-2 border-1 border-gray-500" 
                            />

                            {!dataState ? (
                                <button 
                                    className={`w-full md:w-40 bg-blue-600 hover:bg-blue-500 font-semibold text-white p-3 cursor-pointer`}
                                    onClick={handleGetCep}
                                    disabled={cepInputValue.length === 0  ? true : false}                               
                                >
                                    Buscar
                                </button> 
                                
                            ) : (
                               <button 
                                    className={`w-full md:w-40 bg-red-600 hover:bg-red-500 font-semibold text-white p-3 cursor-pointer`}
                                    onClick={cleanLocation}
                                >
                                    Limpar
                                </button>
                            )}
                        </div>

                        {dataState && (
                            <div className="box-dados-location flex flex-col mt-2">
                                <span className="block">Rua: {dataState.logradouro}</span>
                                <span className="block">Bairro: {dataState.bairro}</span>
                                <span className="block">Cidade: {dataState.localidade}</span>
                                <span className="block">Estado: {dataState.estado}</span>
                            </div>
                        )}

                    </div>
                    
                    <button 
                        className=" w-full md:w-80 rounded-md bg-blue-600 hover:bg-blue-500  font-semibold text-white p-3 cursor-pointer"
                        onClick={addToBag}
                        >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Product
