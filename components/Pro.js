import {Text, View, StyleSheet} from 'react-native';
import ProCard from './ProCard';

const Pro = () => {
  return (
    <View style={styles.ProWrapper}>
      <Text style={styles.title}>All Products</Text>
      <View style={styles.ProCards}>
        <ProCard
          image={require('../image/5.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
        <ProCard
          image={require('../image/5.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
        <ProCard
          image={require('../image/5.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
        <ProCard
          image={require('../image/5.png')}
          name={'Sugar Substitute'}
          price={' $200'}
        />
      </View>
    </View>
  );
};
export default Pro;

const styles = StyleSheet.create({
  ProWrapper: {
    marginBottom: 15,
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#090F47',
  },

  ProCards: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
