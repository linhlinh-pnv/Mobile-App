
import {StyleSheet, StatusBar, Text, View} from 'react-native';

export default function Product() {
  return <div>Product</div>;
}

// import * as React from 'react';
// import {
//   FlatList,
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   Image,
// } from 'react-native';

// const Item = ({name, image}) => {
//   return (
//     <View style={styles.item}>
//       <Text style={{color: 'black'}}>{name}</Text>
//       <Image style={styles.imageCard} source={{uri: image}} />
//     </View>
//   );
// };
// export default function Products() {
//   const countries = [
//     {
//       id: '1',
//       name: 'United States',
//       image:
//         'https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg',
//     },
//     {
//       id: '2',
//       name: 'United Kingdom',
//       image:
//         'https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-ve-dep-cute.jpeg',
//     },
//     {
//       id: '3',
//       name: 'Israel',
//       image:
//         'https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg',
//     },
//     {
//       id: '4',
//       name: 'India',
//       image:
//         'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg',
//     },
//     {
//       id: '5',
//       name: 'Nigeria',
//       image:
//         'https://anhsang.edu.vn/wp-content/uploads/hinh-ve-cute-dang-yeu.jpg',
//     },
//     {
//       id: '6',
//       name: 'Uganda',
//       image:
//         'https://demoda.vn/wp-content/uploads/2022/01/hinh-ve-cute-dep-de-thuong-ngo-nghinh.jpeg',
//     },
//     {
//       id: '7',
//       name: 'Uganda',
//       image:
//         'https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-ve-don-gian-sieu-cute-sieu-de-thuong-1.jpg',
//     },
//     {
//       id: '8',
//       name: 'Uganda',
//       image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
//     },
//   ];

//   const renderItem = ({item}) => <Item name={item.name} image={item.image} />;

//   return (
//     <ScrollView>
//       <View style={styles.content}>
//         <FlatList
//           style={styles.cards}
//           horizontal={true}
//           data={countries}
//           renderItem={renderItem}
//         />
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   content: {
//     marginTop: 200,
//     padding: 2,
//   },
//   item: {
//     backgroundColor: '#EED5D2',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 10,
//     borderRadius: 4,
//     shadowColor: '#000',
//     shadowRadius: 8,
//   },
//   imageCard: {
//     width: 100,
//     height: 100,
//   },
// });
