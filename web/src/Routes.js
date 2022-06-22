// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import HomeLayout from 'src/layouts/HomeLayout'
import ProductsLayout from 'src/layouts/ProductsLayout'
import RegistrationLayout from 'src/layouts/RegistrationLayout/RegistrationLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={RegistrationLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={ProductsLayout}>
          <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
          <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
          <Route path="/products/{id}" page={ProductProductPage} name="product" />
          <Route path="/products" page={ProductProductsPage} name="products" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
