import { View, Text, Image } from 'react-native';
import Product from '../../types/Product';
import styles from './styles';

const ProductCard = ({product}: {product: Product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.thumbnail}} style={styles.image} />
      <Text style={styles.title} >{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductCard;
