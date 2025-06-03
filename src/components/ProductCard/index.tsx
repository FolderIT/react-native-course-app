import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Product from '../../types/Product';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;

const ProductCard = ({ product }: { product: Product }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', { product })}
    >
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title} >{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;
