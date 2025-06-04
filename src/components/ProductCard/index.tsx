import { useNavigation } from '@react-navigation/core';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Product from '../../types/Product';
import styles from './styles';

const ProductCard = ({product}: {product: Product}) => {

  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('Details', {product: product});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <Text style={styles.title} >{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
