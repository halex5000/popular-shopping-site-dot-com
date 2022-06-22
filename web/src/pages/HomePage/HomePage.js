import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ProductsCell from 'src/components/ProductsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home Page" />
      <main>
        <h1>Featured Products</h1>
        <ProductsCell />
      </main>
    </>
  )
}

export default HomePage
