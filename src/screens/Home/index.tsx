import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { fetchCategories, fetchProducts } from '../../api/products';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import styles from './styles';
import { colors } from '../../theme';
import CategoryPill from '../../components/CategoryPill';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [fetchingProducts, setFetchingProducts] = useState<boolean>(false);
    const [fetchingCategories, setFetchingCategories] = useState<boolean>(false);
    const [totalProducts, setTotalProducts] = useState<number>();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({slug: undefined, name: 'All'});

    const getCategories = async () => {
        setFetchingCategories(true);
        const newCategories = await fetchCategories();
        console.log('categories: ', newCategories);
        setCategories([{slug: undefined, name: 'All'}, ...newCategories]);
        setFetchingCategories(false);
    };

    const getProducts = async (page: number, category = undefined) => {
        setFetchingProducts(true);
        const newProducts = await fetchProducts(page, 10, category?.slug);
        console.log('new products: ', newProducts);
       setProducts(state => [...state, ...newProducts?.products]);
       setProductsMax(newProducts?.total);
       setFetchingProducts(false);
    };

    useEffect(() => {
        setProducts([]);
        getProducts(0);
        getCategories();
    }, []);

    useEffect(() => {
        if(page !== 0){
            getProducts(page, selectedCategory?.slug);
        }
    }, [page, selectedCategory]);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
        setProducts([]);
        setPage(0);
        getProducts(0, category);
    };

    return <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList style={styles.filterGeneralContainer} contentContainerStyle={styles.filterContainer} showsHorizontalScrollIndicator={false} horizontal data={categories} keyExtractor={item => item.name} renderItem={({item}) => <CategoryPill item={item} selected={item?.slug === selectedCategory?.slug} onCategoryPress={()=>handleCategoryPress(item)}/>}/>
        <FlatList
            data={products}
            extraData={selectedCategory}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ProductCard item={item}/>}
            numColumns={2}
            columnWrapperStyle={styles.row}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
                console.log('entré acá!');
                if(!fetchingProducts && products?.length > 0 && products?.length < totalProducts){
                    setPage(state => state + 1);
                }
            }}
            ListFooterComponent={fetchingProducts ? <ActivityIndicator color={colors.primary} size={'large'} /> : null}
        />
    </View>;
};

export default Home;
