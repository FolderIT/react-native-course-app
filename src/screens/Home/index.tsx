import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { fetchProducts } from '../../api/products';
import ProductCard from '../../components/ProductCard';
import Product from '../../types/Product';
import styles from './styles';

const Home = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(0);
    const [fetchingProducts, setFetchingProducts] = useState(false);

    useEffect(() => {
        getProducts();
    }, [page]);

    const getProducts = async () => {
        setFetchingProducts(true);
        const data = await fetchProducts(page, 10);
        if (page > 0) {
            setProducts([...products, ...data.products]);
        } else {
            setProducts(data.products);
        }
        setFetchingProducts(false);
    };

    return <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 100}}>
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ProductCard product={item} />}
            numColumns={2}
            columnWrapperStyle={styles.row}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
                setPage(page + 1);
            }}
            ListFooterComponent={fetchingProducts ? <ActivityIndicator size="large" /> : null}
        />
    </View>;
};

export default Home;
