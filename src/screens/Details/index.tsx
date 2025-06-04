import { Image, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import { Text } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/products/slice';
import useAppSelector from '../../hooks/useAppSelector';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: Props) => {
    const product = route.params.product;
    const dispatch = useDispatch();

    const cart = useAppSelector(state => state.products.cart);

    console.log(cart);

    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#000"/>
          </TouchableOpacity>
        </View>


        <View>
          <Image source={{uri: product.thumbnail}} style={styles.image}/>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>


        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
};

export default Details;
