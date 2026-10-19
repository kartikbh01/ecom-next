export default async function review({ params }) {
  const { productId, reviewId } = await params;
  return <h1>Review {reviewId} for product {productId}</h1>
}
