import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import Container from "../Container";
import ProductDetailComponent from "../ProductDetailComponent";
import { NavLink } from "react-router-dom";
import { Star } from "lucide-react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import success_toast_msg from "../toast/success_tost";
import { ToastContainer } from "react-toastify";

function ProductDetails() {
  const bread = [
    {
      name: "Products",
      to: "/products",
    },
    {
      name: "Smart-phone",
      to: "#",
    },
  ];

  const [review, setReview] = useState("");
  const [selectedButton, setSelectedButton] = useState("button1");
  const [rating, setRating] = useState(0);
  const [fetchError, setFetchError] = useState(false);
  const [hover, setHover] = useState(0);
  const productId = useParams().id;

  const handleClick = (button) => {
    setSelectedButton(button);
  };
  const [productDetails, setProductDetails] = useState();
  const [productReview, setProductReview] = useState();

  useEffect(() => {
    axios
      .get(`/api/product-management/product-details/${productId}`)
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 404) {
          setFetchError(true);
        }
      });
  }, [productId]);

  const handlePostReview = (e) => {
    e.preventDefault();

    const token = Cookies.get("token");
    console.log(token);
    axios
      .post(
        "/api/product-management/product-review/",
        {
          review_product: productId,
          comment: review,
          rating: rating ? rating : 1,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        fetchReviews()
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setReview("");
  };


  useEffect(()=>{
    fetchReviews()
  })

  const fetchReviews = () => {
    axios
      .get(`/api/product-management/get-product-review/${productId}`)
      .then((res) => {
        setProductReview(res.data);
      })
      .catch((error) => {
        console.log(error);
      });}


  const [products, setProducts] = useState("");

  useEffect(() => {
    axios
      .get(`/api/product-management/product/${productDetails?.brand}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productDetails?.brand]);

  return (
    <>
      <Container>
      
        <Breadcrumbs list={bread} />

        {fetchError ? (
          <NotFound />
        ) : (
          <>
            <ProductDetailComponent product={productDetails} />

            <div className="flex gap-6 pb-2 pt-8">
              <button
                className={`bg-white duration-100 ${
                  selectedButton === "button1" ? "font-semibold " : ""
                }`}
                onClick={() => handleClick("button1")}
              >
                Description
              </button>
              <button
                className={`bg-white duration-100 ${
                  selectedButton === "button2" ? "font-semibold " : ""
                }`}
                onClick={() => handleClick("button2")}
              >
                Review
              </button>
            </div>
            <div className="flex-grow border-t border-gray-200"></div>

            <div
              className={`${
                selectedButton === "button1" ? "block" : "hidden"
              }  `}
            >
              <ul className=" *: py-3">
                <li className=" flex gap-36">
                  <h3 className=" text-gray-500">Color</h3>
                  <h3 className="">
                    {" "}
                    {productDetails?.product_features?.color}
                  </h3>
                </li>
                <li className=" flex  gap-24 ">
                  <h3 className=" text-gray-500">Display Size</h3>
                  <h3> {productDetails?.product_features?.screen_size}Inchs</h3>
                </li>
                <li className=" flex gap-28 ">
                  <h3 className=" text-gray-500">Cameras</h3>
                  <h3>
                    {" "}
                    {productDetails?.product_features?.rear_camera}MP +{" "}
                    {productDetails?.product_features?.front_camera}MP
                  </h3>
                </li>
                <li className=" flex gap-14 ">
                  <h3 className=" text-gray-500">Battery Capacity </h3>
                  <h3> {productDetails?.product_features?.battery} mAh</h3>
                </li>
                <li className=" flex gap-14">
                  <h3 className=" text-gray-500">Storage Capacity</h3>
                  <h3>
                    {" "}
                    {productDetails?.product_features?.ram} RAM /{" "}
                    {productDetails?.product_features?.rom} ROM{" "}
                  </h3>
                </li>
                <li className=" flex  gap-16">
                  <h3 className=" text-gray-500">Brand Warranty</h3>
                  <h3> 1 year</h3>
                </li>
                <li className=" flex gap-28">
                  <h3 className=" text-gray-500">Processer</h3>
                  <h3>Snapdragon</h3>
                </li>
              </ul>
            </div>
            <div
              className={` ${
                selectedButton === "button2" ? "block" : "hidden"
              }  `}
            >
              <div className="py-5">
                <p className=" font-semibold">Customer Reviews</p>
                {productReview &&
                  productReview.map((review) => (
                    <div>
                      <div className="pt-4 flex" key={review?.id}>
                        <img
                          className="inline-block h-[50px] w-[50px] rounded-full"
                          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                          alt="Dan_Abromov"
                        />
                        <div className="flex flex-col pl-2">
                          <div className="flex items-center">
                            <div>
                              <p className="pl-1 pt-1">{review?.review_user}</p>
                              <span className="flex items-center pl-1">
                                {[...Array(review?.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className="text-yellow-500"
                                    fillRule={"inherit"}
                                    fill="#FFFF00"
                                  />
                                ))}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h1 className="pt-2">{review?.comment} </h1>
                      <p className=" text-gray-500">
                        review by {review?.review_user} at {review?.created_at}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="flex-grow border-t border-gray-200"></div>

              <div class="add-review" className=" py-5">
                <p className="font-semibold">Add Your Review</p>

                <div className="star-rating">
                  <p className="text-gray-500 pt-4 pb-2">Your Rating</p>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={""}
                        onClick={() => setRating(index)}
                      >
                        <Star
                          fill={index <= (hover || rating) ? "yellow" : "white"}
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="text-gray-900 pt-4 pb-1">Your Review</p>
                <form onSubmit={handlePostReview}>
                  <textarea
                    placeholder="Enter Review"
                    className="w-full border border-black rounded-lg py-2 px-2"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  ></textarea>
                  <button
                    className="text-center py-3 px-7 bg-black text-white rounded-lg hover:bg-gray-700"
                    type="submit"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>

            <div class="related-product" className="py-8">
              <p className=" font-semibold">Related Products</p>
              <ProductCard products={products} />
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default ProductDetails;

// Colour :- {productDetails?.product_features?.color}
