import Product from './Product'

export const generated = () => {
  return (
    <Product
      product={{
        name: 'monkeys',
        imageUrl: 'imageUrl',
      }}
    />
  )
}

export default { title: 'Components/Product' }
