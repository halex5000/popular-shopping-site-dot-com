import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Item,
} from '@mui/material'

const Product = ({ product }) => {
  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl}
          alt={
            product.altText || 'no alt text available for this product image'
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Product
