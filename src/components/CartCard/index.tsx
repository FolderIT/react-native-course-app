import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart, substractFromCart } from '../../store/products/slice';
import styles from './styles';

const CartCard = ({ item }: Props) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(addToCart(item));
    };

    const handleDecrement = () => {
        dispatch(substractFromCart(item));
    };

    const handleDelete = () => {
        dispatch(deleteFromCart(item));
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <TouchableOpacity onPress={handleDelete}>
                        <Icon name="trash-2" size={20} color="#FF4D4F" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={handleDecrement}
                    >
                        <Icon name="minus" size={16} color="#1A1A1A" />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={handleIncrement}
                    >
                        <Icon name="plus" size={16} color="#1A1A1A" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartCard;
