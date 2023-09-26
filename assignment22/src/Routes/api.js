const express = require('express');
const { createAdmin, readAdmin, deleteAdmin, updateAdmin } = require('../Controllers/adminController');
const { createUser, readUser, deleteUser, updateUser } = require('../Controllers/userController');
const { createSub, readSub, deleteSub, updateSub } = require('../Controllers/subAdminController');
const { createPost, readPost, deletePost, updatePost } = require('../Controllers/postController');
const { createCustomer, readCustomer, deleteCustomer, updateCustomer } = require('../Controllers/customerController');
const { createCategory, readCategory, updateCategory, deleteCategory } = require('../Controllers/categoryController');
const { createOrder, readOrder, deleteOrder, updateOrder } = require('../Controllers/orderController');
const { createProduct, readProduct, deleteProduct, updateProduct } = require('../Controllers/productController');
const { createOrderItem, readOrderItem, deleteOrderItem, updateOrderItem } = require('../Controllers/order_itemController');
const { createPayment, readPayment, deletePayment, updatePayment } = require('../Controllers/paymentController');
const { createShipment, readShipment, deleteShipment, updateShipment } = require('../Controllers/shipmentController');
const { createCart, readCart, deleteCart, updateCart } = require('../Controllers/cartController');
const { createWishList, readWishList, deleteWishList, updateWishList } = require('../Controllers/wishlistController');

//router object
const router = express.Router();

//as rules 12 ->All APIs must be made through GET request

//For admin routers
router.get("/createadmin",createAdmin);
router.get("/getadmin",readAdmin);
router.get("/deleteadmin",deleteAdmin);
router.get("/updateadmin",updateAdmin);

//for user routers
router.get("/createuser",createUser);
router.get("/getuser",readUser);
router.get("/deleteuser",deleteUser);
router.get("/updateuser",updateUser);

//For sub admin routers
router.get("/createsub",createSub);
router.get("/getsub",readSub);
router.get("/deletesub",deleteSub);
router.get("/updatesub",updateSub);

//For postController routers
router.get("/createpost",createPost);
router.get("/getpost",readPost);
router.get("/deletepost",deletePost);
router.get("/updatepost",updatePost);

//For customer routers
router.get("/createcustomer",createCustomer);
router.get("/getcustomer",readCustomer);
router.get("/deletecustomer",deleteCustomer);
router.get("/updatecustomer",updateCustomer);

//For category routers
router.get("/createcategory",createCategory);
router.get("/getcategory",readCategory);
router.get("/deletecategory",deleteCategory);
router.get("/updatecategory",updateCategory);

//For order routers
router.get("/createorder",createOrder);
router.get("/getorder",readOrder);
router.get("/deleteorder",deleteOrder);
router.get("/updateorder",updateOrder);

//For product routers
router.get("/createproduct",createProduct);
router.get("/getproduct",readProduct);
router.get("/deleteproduct",deleteProduct);
router.get("/updateproduct",updateProduct);

//For orderitem routers
router.get("/createorderitem",createOrderItem);
router.get("/getorderitem",readOrderItem);
router.get("/deleteorderitem",deleteOrderItem);
router.get("/updateorderitem",updateOrderItem);

//For payment routers
router.get("/createpayment",createPayment);
router.get("/getpayment",readPayment);
router.get("/deletepayment",deletePayment);
router.get("/updatepayment",updatePayment);

//For shipment routers
router.get("/createshipment",createShipment);
router.get("/getshipment",readShipment);
router.get("/deleteshipment",deleteShipment);
router.get("/updateshipment",updateShipment);

//For cart routers
router.get("/createcart",createCart);
router.get("/getcart",readCart);
router.get("/deletecart",deleteCart);
router.get("/updatecart",updateCart);

//For wishlist routers
router.get("/createwishlist",createWishList);
router.get("/getwishlist",readWishList);
router.get("/deletewishlist",deleteWishList);
router.get("/updatewishlist",updateWishList);


module.exports=router;