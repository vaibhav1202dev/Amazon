import React from "react";
import { items } from "../alldata/AllData";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const filteredItems = items.filter((item) => item === "id");

  return (
    <>
      <div>
        <div>
          {filteredItems.map((item) => (
            <div key={item.id}>
              {/* <Link to={`product-page/${item.id}`}> */}
              <div>product page</div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
