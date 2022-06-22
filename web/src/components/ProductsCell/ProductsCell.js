import { Grid } from '@mui/material'

import Product from '../Product/Product'

export const QUERY = gql`
  query ProductsQuery {
    products {
      imageUrl
      name
      id
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  return (
    <Grid container rowSpacing={1}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
  )
}
