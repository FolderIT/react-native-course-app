import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../theme';

const CategoryPill = ({item, selected, onCategoryPress}) => {
    return <TouchableOpacity onPress={onCategoryPress} style={[styles.container, {backgroundColor: selected ? colors.primary : 'white', borderColor: selected ? colors.primary : '#E6E6E6'}]}>
        <Text style={[styles.label, {color: selected ? 'white' : colors.primary}]}>
            {item?.name}
        </Text>
    </TouchableOpacity>;
};

export default CategoryPill;
