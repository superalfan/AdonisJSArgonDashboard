/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').render('pages/home')
router.on('/dashboard').render('pages/home')
router.on('/table').render('pages/table')
router.on('/billing').render('pages/billing')
router.on('/virtual-reality').render('pages/virtual-reality')
router.on('/rtl').render('pages/rtl')
router.on('/notifications').render('pages/notifications')
router.on('/profile').render('pages/profile')
router.on('/signin').render('pages/signin')
router.on('/signup').render('pages/signup')
