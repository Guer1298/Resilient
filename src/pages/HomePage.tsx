// import { Brands } from '../components/home/Brands';
// Make sure the Brands component exists at the specified path or update the path accordingly.
import { Brands } from '../components/home/Brands';
import { FeatureGrid } from '../components/home/FeatureGrid';
// import { ProductGrid } from '../components/home/ProductGrid';
// Update the import path below if ProductGrid is located elsewhere
// import { ProductGrid } from '../components/home/ProductGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { popularCamisas, recentCamisas } from '../data/initialData';
import { prepareProducts } from '../helpers';




export const HomePage = () => {
	const preparedRecentProducts = prepareProducts(recentCamisas);
	const preparedPopularProducts = prepareProducts(popularCamisas);

	return (
		<div>
			<FeatureGrid />

			<ProductGrid
				title='Nuevos Productos'
				products={preparedRecentProducts}
			/>

			<ProductGrid
				title='Productos Destacados'
				products={preparedPopularProducts}
			/>

			<Brands />
		</div>
	);
};