import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import useAppSelector from '../../hooks/useAppSelector';
import CartCard from '../../components/CartCard';
import { clearCart } from '../../store/products/slice';
import styles from './styles';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useAppSelector(state => state.products.cart);

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    if (cart.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Your cart is empty</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Shopping Cart</Text>
                <TouchableOpacity onPress={handleClearCart}>
                    <Text style={styles.clearButton}>Clear all</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={cart}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <CartCard item={item} />}
                contentContainerStyle={styles.listContainer}
            />

            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
