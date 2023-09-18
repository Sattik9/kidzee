const express=require('express')

const Router=express.Router()
const AdminController=require('../Controller/Admin/AdminController')
const DashboardController=require('../Controller/Admin/DashboardController')
const BannerController=require('../Controller/Admin/HomeContent/BannerController')
const uploadBanner=require('../Utility/bannerimage')

//****admin login logout */
Router.get('/',AdminController.index)

//***admin dashboard */
Router.get('/dashboard',DashboardController.admindashboard)

//***banner route */
Router.get('/banner/listing',BannerController.listing)
Router.get('/banner/addListing',BannerController.addListing)
Router.post('/banner/addListing/createlisting',uploadBanner.single('image'),BannerController.createListing)
Router.get('/banner/listing/editlisting/:id',BannerController.editListing)
Router.post('/banner/listing/editlisting/updatelisting',BannerController.updateListing)
Router.get('/banner/listing/deletelisting/:id',BannerController.deleteListing)
module.exports=Router