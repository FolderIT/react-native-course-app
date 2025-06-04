import { FlatList, Text, View } from 'react-native';
import CartCard from '../../components/CartCard';
import useAppSelector from '../../hooks/useAppSelector';

const Cart = () => {

    const cart = useAppSelector(state => state.products.cart);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(total);

    return <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>Total: ${total}</Text>
        <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CartCard item={item} />}
        />

    </View>;
};

export default Cart;
