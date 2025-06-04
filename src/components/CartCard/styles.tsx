import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 12,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.primary,
        flex: 1,
        marginRight: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.primary,
        marginVertical: 8,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 16,
        color: colors.primary,
    },
});

export default styles; 