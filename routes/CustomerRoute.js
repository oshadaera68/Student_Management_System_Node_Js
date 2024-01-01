const express = require('express');
const router = express.Router();

const CustomerController= require('../controllers/CustomerController');


router.get('/',CustomerController.initializeUi);
router.post('/',CustomerController.findCustomers);
router.get('/new-customer-form',CustomerController.newCustomerForm);
router.post('/create-customer',CustomerController.createCustomer);
router.get('/update-customer-form/:nic',CustomerController.updateCustomerForm);
router.post('/modify-customer',CustomerController.modifyCustomer);
router.get('/delete-customer/:nic',CustomerController.deleteCustomer);

module.exports=router;