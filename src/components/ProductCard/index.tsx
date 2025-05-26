import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductCard = ({item}) => {
    return <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => console.log('holis')}>
        <View style={styles.imageContainer}>
        <Image source={{uri: item?.thumbnail}} style={styles.image} resizeMode="contain"/>
        </View>

        <Text numberOfLines={1} style={styles.title}>{item?.title}</Text>
        <Text style={styles.price}>${item?.price}  <Text style={styles.discount}>-{item?.discountPercentage}%</Text></Text>
    <TouchableOpacity style={styles.likeContainer}>
        <MCIcons name="heart-outline" size={16} color={'#1A1A1A'}/>
    </TouchableOpacity>
    </TouchableOpacity>;
};

export default ProductCard;
