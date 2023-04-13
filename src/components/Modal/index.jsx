import React, { useContext } from "react";
import { ProductsContext } from "../../provider/productsContext";
import StyledContainerModal from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductsDetailsModal = () => {
  const { setModal, productDetails } = useContext(ProductsContext);
  const {
    thumbnail,
    title,
    description,
    price,
    warranty,
    sold_quantity,
    initial_quantity,
    condition,
    pictures,
  } = productDetails;

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
              <span>Condição:</span> {condition}
            </p>
            <p>
              <span>Disponível:</span> {initial_quantity} unidades
            </p>
            <p>
              <span>Já foram vendidos</span> {sold_quantity} unidades
            </p>
            <p>
              <span>Garantia: </span> {warranty}
            </p>
            <button>Adicionar ao carrinho</button>
          </div>
          <aside>
            <h4>Descrição:</h4>
            <article>{description.plain_text}</article>
          </aside>
        </main>
      </div>
    </StyledContainerModal>
  );
};

export default ProductsDetailsModal;
