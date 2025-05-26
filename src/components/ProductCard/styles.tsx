import {StyleSheet} from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '40%',
        marginHorizontal: 10,
    },
    imageContainer: {
        backgroundColor: colors.lightGrey,
        borderRadius: 5,
    },
    image: {
        height: 174,

    },
    title: {
        color: '#1A1A1A',
        fontSize: 16,
        fontFamily: 'General Sans SemiBold',
        marginTop: 8,
    },
    price: {
        color :'#808080',
        fontSize: 12,
        fontFamily: 'General Sans Medium',
        textAlign: 'left',
        marginTop: 3,
    },
    discount: {
        color :'#ED1010',
        fontSize: 12,
        fontFamily: 'General Sans Medium',
    },
    likeContainer: {
        padding: 8,
        backgroundColor: 'white',
        position: 'absolute',
        top: 12,
        right: 12,
        borderRadius: 5,
    },
});

export default styles;
