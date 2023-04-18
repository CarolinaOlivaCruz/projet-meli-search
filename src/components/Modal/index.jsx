import React, { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import StyledContainerModal from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import { addToCart } from "../../provider/cartSlice";

const ProductsDetailsModal = () => {
  const { setModal, productDetails } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const {
    thumbnail,
    title,
    description,
    price,
    warranty,
    initial_quantity,
    condition,
    pictures,
  } = productDetails;

  const handleAddToCart = (productDetails) => {
    dispatch(addToCart(productDetails));
  };

  return (
    <StyledContainerModal>
      <div>
        <header>
          <button onClick={() => setModal(false)}>X</button>
        </header>
        <main>
          <section>
            <Carousel
              className="images"
              autoPlay
              emulateTouch
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {pictures?.length > 0 ? (
                pictures?.map((img, index) => {
                  return (
                    <div key={index}>
                      <img src={img.url} alt="" />
                    </div>
                  );
                })
              ) : (
                <div>
                  <img src={thumbnail} alt="" />
                </div>
              )}
            </Carousel>
          </section>
          <div>
            <h2>{title}</h2>
            <h3>$ {price},00</h3>
            <p>
              <span>Condición:</span> {condition}
            </p>
            <p>
              <span>Disponible:</span> {initial_quantity} unidades
            </p>
            <p>
              <span>Garantía: </span> {warranty}
            </p>
            <button onClick={() => handleAddToCart(productDetails)}>
              Agregar al carrito
            </button>
          </div>
          <aside>
            <h4>Descripción:</h4>
            <article>{description.plain_text}</article>
          </aside>
        </main>
      </div>
    </StyledContainerModal>
  );
};

export default ProductsDetailsModal;
