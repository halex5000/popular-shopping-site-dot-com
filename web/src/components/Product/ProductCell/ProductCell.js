import Product from 'src/components/Product/Product'

export const QUERY = gql`
  query FindProductById($id: String!) {
    product: product(id: $id) {
      id
      name
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Product not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ product }) => {
  return <Product product={product} />
}
