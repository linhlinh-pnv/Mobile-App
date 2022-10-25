import {Image, StyleSheet, Text, View} from 'react-native';

const ProCard = props => {
  return (
    <View style={styles.CardBody}>
      <Image style={styles.CardImage} source={props.image} />
      <Text style={styles.CardTitle}> {props.name} </Text>
      <Text style={styles.CardPrice}>{props.price} </Text>
    </View>
  );
};



const styles = StyleSheet.create({
  CardBody: {
    width: 157,
    height: 250,
    marginRight: 15,
    marginTop: 16,
    backgroundColor: '#EBEBEB',
    borderRadius: 13,
  },

  CardImage: {
    width: 116,
    height: 118,
    margin: 19,
  },

  CardTitle: {
    marginTop: 10,
    marginLeft: 19,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: '#090F47',
  },

  CardPrice: {
    marginLeft: 19,
    fontWeight: '600',
    fontSize: 16,
    color: '#090F47',
  },
});
export default ProCard;