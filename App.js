//                   SESSION 1 (BASICS OF REACT)

// <!--hello world using javascript-->
// <!--<div id="root"></div>
//  <script>
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Hello World from JAVASCRIPT!!";

//     const root = document.getElementById("root");
//     root.appendChild(heading);
// </script> -->

//  const heading = React.createElement("h1" , {} , "Hello World from REACT!!");  //  {h1 = element ,{} = object provided with root or attribute, content}
// const root = ReactDOM.createRoot(document.getElementById("root"));  // creating root using reactDOM
// root.render(heading);                                                   // rendering heading inside root ,

// VERY IMPORTANT **React will override the content inside the root element with the content we provide in the render method**.

// const heading = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
// const container = React.createElement("div", { id: "container" }, [
//   heading,                                //these are children of div (heading,heading2)
//   heading2,
// ]);                                         // to add multiple elements we have to put them in an array

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);                      // rendering container inside root ,


// TILL HERE SESSION 1 (BASICS OF REACT)

//       SESSION 2 (BASICS OF REACT)


/**
 * 
 * Uses of parcel:
 * 1. It is a module bundler, it takes all the different files that we have in our project and bundle them into one single file.
 * 2. It also takes care of all the different types of files that we have in our project like css,js,html and convert them into a format that can be understood by the browser.
 * 3. It also provides a development server that we can use to run our project locally.
 * 5. It also provides a production build, which means that it will optimize our code for production and create a minified version of our code.
 * Hot module replacement: It is a feature that allows us to see the changes we make in our code immediately in the browser without having to refresh the page.
 * file watchers: It is a feature that allows parcel to watch for changes in our files and automatically rebuild the project whenever we make any changes.
 * Bundling - it takes all the different files that we have in our project and bundle them into one single file.
 * Code splitting - it allows us to split our code into different chunks so that we can load only the necessary code when needed.
 * Tree shaking - it is a feature that allows parcel to remove any unused code from our project.
 * Minification - minifying the code to reduce the size of the file.
 * Cleaning - it removes any unnecessary code from our project.
 * Image optimization - it optimizes the images in our project to reduce the size of the file.
 * Caching - it caches the files in our project so that they can be loaded faster.
 * Compression - it compresses the files in our project to reduce the size of the file.
 * compatibility - it ensures that our code is compatible with all the different browsers.
 * gives us https support - it allows us to run our project on a secure server.  **cmd - npx parcel index.html --https**
 * also provides a way to use environment variables in our project. **cmd - set PORT=4000 && npx parcel index.html** (for windows)
 * zero configuration - it means that we don't have to configure anything to use parcel. It works out of the box. 
 * 
 * 
 * transitive dependencies - when we install a package, it may have its own dependencies that need to be installed as well
 */

// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
// const container = React.createElement("div", { id: "container" }, [
//   heading,                                //these are children of div (heading,heading2)
//   heading2,
// ]);    

// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(container);  


//                                      TILL HERE SESSION 2 (BASICS OF REACT)


//       SESSION 3 (BASICS OF REACT)


// import React from "react";             1
// import ReactDOM from "react-dom/client";       2

// createElement createas a javascript object which then creates the actual DOM element and adds it to the DOM
// React element is a lightweight representation of a DOM element. It is an object that describes a DOM node and its attributes.
// React elements are immutable, which means that once they are created, they cannot be changed. If we want to change the content or attributes of a React element, we have to create a new element with the updated content or attributes.\


//const heading = React.createElement("h1", { id: "title",key: "h1" }, "Heading 1");      3

//JSX creates a React element which then creates the actual DOM element and adds it to the DOM
// JSX is a syntax extension for JavaScript that looks similar to HTML. It allows us to write HTML-like code in our JavaScript files, which makes it easier to create and visualize the structure of our UI components.
// JSX is not a string or HTML. It is a syntax that gets transformed into JavaScript code by a compiler like Babel.
// Under the hood, JSX is just syntactic sugar for React.createElement() function calls. When we write JSX, it gets compiled into React.createElement() calls that create React elements.

//const title = <h1>This is JSX</h1>    4

// This is a functional component
// A functional component is a JavaScript function that returns a React element (JSX). It is a simple and concise way to define a component in React.
// Functional components are also known as stateless components because they do not have their own state. They receive data and behavior through props (properties) passed down from their parent component.
// Functional components are easier to read and understand than class components, especially for simple components that do not require state or lifecycle methods.
// Functional components can also use hooks, which are special functions that allow us to use state and other React features in functional components.


// const HeaderComponent = () => {   5
//   return ( <div><h1>This is React code</h1>   6
//   <h2> This is function</h2>     7
//   </div>     8
//   )     9
// }     10


//OR both above and below are same (without return statement)

// const HeaderComponent2 = () => (
//   <div><h1>This is React code</h1>
//   <h2> This is function</h2>
//   </div>
// )

// How to use an element or component inside another component



// const HeaderComponent1 = () => {         11
//   return (             12
//   <div>                13  
//     {title}            14
//     <h1>This is React code</h1>            15
//     <h2> This is function</h2>           16
//   </div>        17   
//   )          18
// }          19



// console.log(HeaderComponent1)  // it will return a function          20

// const root = ReactDOM.createRoot(document.getElementById("root"));         21

//   root.render(HeaderComponent1());  // it will return a react element which will be rendered to the DOM        22
  // OR
// root.render(<HeaderComponent/>);  // it will return a react element which will be rendered to the DOM



 //                                    TILL HERE SESSION 3 (BASICS OF REACT)

//       SESSION 4 (BASICS OF REACT)


import React from "react";             
import ReactDOM from "react-dom/client";       
      
const Title = () => (
  <a href="/" >
  <div>
  <img  className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgjA8oGi_8oCqoJocOuoKn269pahSDrnVfw&s"/>
  </div>
  </a>
)

const Header = () => {
  return(
    <div className="header"> 
      {<Title/>}
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul> 
     </div>   
  );
};  

//                                             Hard coded data

// const RestaurantCard = () =>{
//   return(
//     <div className="card">
//       <img className="image" alt="rest1" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar"/>
//       <h2>Sai Restaurant</h2>
//       <h3>North Indian,South Indian,Cuisines</h3>
//       <h4>4.2 Stars</h4>
//     </div>
//   );
// };


// OR
//                                             Dynamic Data

// const sairestaurant = {
//   name : "Sai Restaurant",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
//   cuisines : ["North Indian","South Indian"],
//   rating : "4.2 Stars", 
// };


// const RestaurantCard = () =>{
//   return(
//     <div className="card">
//       <img src={sairestaurant.image}/>
//       <h2>{sairestaurant.name}</h2>
//       <h3>{sairestaurant.cuisines.join(", ")}</h3>
//       <h4>{sairestaurant.rating}</h4>
//     </div>
//   )
// }


// OR
//                                             Dynamic Data using props

const restaurantList = [
                                    {
                                        "info": {
                                            "id": "151649",
                                            "name": "Hotel Sai Nath & Sai Restaurant",
                                            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
                                            "locality": "railway station",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "South Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "veg": true,
                                            "parentId": "101802",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "1.0K+",
                                            "sla": {
                                                "deliveryTime": 41,
                                                "lastMileTravel": 11.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "11.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹175 OFF",
                                                "subHeader": "ABOVE ₹699",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "151656",
                                            "name": "Dev International",
                                            "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
                                            "locality": "khajri road",
                                            "areaName": "Mohan Nagar",
                                            "costForTwo": "₹100 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Fast Food",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "71556",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "582",
                                            "sla": {
                                                "deliveryTime": 56,
                                                "lastMileTravel": 13.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "55-65 mins",
                                                "lastMileTravelString": "13.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "234875",
                                            "name": "Adil Hotel",
                                            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                                            "locality": "Rautha Wada",
                                            "areaName": "Chhindwara Locality",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "27123",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "1.4K+",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 12.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "12.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-29 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "151518",
                                            "name": "Bakery World",
                                            "cloudinaryImageId": "mt2aggiscfl3yviatwng",
                                            "locality": "Parasia Road",
                                            "areaName": "Parasia Road",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Ice Cream",
                                                "Snacks",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "40363",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "293",
                                            "sla": {
                                                "deliveryTime": 50,
                                                "lastMileTravel": 14.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "14.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 22:30:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹99"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "625927",
                                            "name": "Kathi Junction",
                                            "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
                                            "locality": "Bunglow Madhuvan Colony",
                                            "areaName": "Prasia Road",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "rolls",
                                                "Burgers",
                                                "Pizzas",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "1935",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "404",
                                            "sla": {
                                                "deliveryTime": 49,
                                                "lastMileTravel": 13.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "13.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 23:15:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹399",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "150591",
                                            "name": "Satkar Restaurant",
                                            "cloudinaryImageId": "rvxp5xbniat84r6efku2",
                                            "locality": "Sinchai Colony",
                                            "areaName": "Satkar Chowk",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Indian",
                                                "Salads",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "21553",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "3.2K+",
                                            "sla": {
                                                "deliveryTime": 53,
                                                "lastMileTravel": 13.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "13.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 22:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "658210",
                                            "name": "The Fusion Lounge",
                                            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
                                            "locality": "Triloki nagar",
                                            "areaName": "Railway Station",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "South Indian",
                                                "Chinese",
                                                "Beverages",
                                                "Fast Food",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.1,
                                            "parentId": "395453",
                                            "avgRatingString": "4.1",
                                            "totalRatingsString": "368",
                                            "sla": {
                                                "deliveryTime": 64,
                                                "lastMileTravel": 12.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "60-70 mins",
                                                "lastMileTravelString": "12.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-09-28 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-bd7fa13b-b05f-4c48-ab81-f85ca3547f17"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
                                            "type": "WEBLINK"
                                        }
                                    },
];


//                                    Putting dynamic data in card

// const RestaurantCard = () => {
//   return(
//     <div className="card">
//     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurantList[1].info?.cloudinaryImageId}/>
//     <h2>{restaurantList[1].info?.name}</h2>
//     <h3>{restaurantList[1].info?.cuisines.join(", ")}</h3>
//     <h4>{restaurantList[1].info?.avgRatingString} stars</h4>

//     </div>
//   );
// };



// const Body = () =>{
//   return (
//   <div className="body">
//    {<RestaurantCard/>}
//    </div>
//   );
// };


//                              Using props to make card dynamic


// const RestaurantCard = ( props) => {   // argument passed as params as props
//   console.log(props);                 // to see what props contains
//   return(
//     <div className="card">
//     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.restaurant.info?.cloudinaryImageId}/>
//     <h2>{props.restaurant.info?.name}</h2>
//     <h3>{props.restaurant.info?.cuisines.join(", ")}</h3>
//     <h4>{props.restaurant.info?.avgRatingString} stars</h4>

//     </div>
//   );
// };


//                           Destructuring props  
// const RestaurantCard = ({restaurant}) => {   // this is destructuring of props and taking restaurant object directly
//   return(
//     <div className="card">
//     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info?.cloudinaryImageId}/>
//     <h2>{restaurant.info?.name}</h2>
//     <h3>{restaurant.info?.cuisines.join(", ")}</h3>
//     <h4>{restaurant.info?.avgRatingString} stars</h4>
//     </div>
//   );
// };


//                  detailed destructuring

// const RestaurantCard = ({restaurant}) => {   // this is destructuring of props and taking restaurant object directly

//   const {name,cloudinaryImageId,cuisines,avgRatingString} = restaurant.info;  // destructuring of restaurant object to get required values
//   return(
//     <div className="card">
//     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
//     <h2>{name}</h2>
//     <h3>{cuisines.join(", ")}</h3>
//     <h4>{avgRatingString} stars</h4>
//     </div>
//   );
// };

// // props = properties
// const Body = () =>{
//   return (
//   <div className="body">
//    <RestaurantCard restaurant={restaurantList[0]}/>  
//    <RestaurantCard restaurant={restaurantList[1]}/>
//    <RestaurantCard restaurant={restaurantList[2]}/>
//    <RestaurantCard restaurant={restaurantList[3]}/>
//    <RestaurantCard restaurant={restaurantList[4]}/>
//    <RestaurantCard restaurant={restaurantList[5]}/>
//    </div>
//   );
// };



//                   Using props destructuring and passing only info object as props

// const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRatingString}) => {   // this is destructuring of props into required values directly
//   return(
//     <div className="card">
//     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
//     <h2>{name}</h2>
//     <h3>{cuisines.join(", ")}</h3>
//     <h4>{avgRatingString} stars</h4>
//     </div>
//   );
// };

// // Using Spread Operator to pass props it contains all the values of the object
// // {...restaurantList[0].info} this will pass all the values of info object as props to RestaurantCard
// const Body = () =>{  
//   return (
//   <div className="body">
//    <RestaurantCard {...restaurantList[0].info}/>  
//    <RestaurantCard {...restaurantList[1].info}/>
//    <RestaurantCard {...restaurantList[2].info}/>
//    <RestaurantCard {...restaurantList[3].info}/>
//    <RestaurantCard {...restaurantList[4].info}/>
//    <RestaurantCard {...restaurantList[5].info}/>
//    </div>
//   );
// };


//               Using map function to render multiple cards from array of objects

const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRatingString}) => {   // this is destructuring of props into required values directly
  return(
    <div className="card">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{avgRatingString} stars</h4>
    </div>
  );
};

// Using Spread Operator to pass props it contains all the values of the object
// {...restaurantList[0].info} this will pass all the values of info object as props to RestaurantCard
const Body = () =>{  
  return (
  <div className="body">
    {
      restaurantList.map((restaurant) =>{
        return <RestaurantCard key={restaurant.info.id}{...restaurant.info} />;  // key is used to uniquely identify each card (helps in optimization of rendering by react
      })};
   </div>
  );
};



const Footer = () =>{
  return  <h4>Footer</h4>
};

const AppLayout = () => {
  return(
    <>             
    <Header/>
    <Body/>
    <Footer/>
 </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));         

root.render(<AppLayout/>);  // rendering container inside root ,


