import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../Components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;
  console.log("articles", articles);

  return (
    <View style={styles.carousel}>
      {/* {articles && (
        <Carousel
          //firstItem={articles.slice(0, 10).length - 1}
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          //onSnapToItem={(index) => setActiveIndex(index)}
        />
      )} */}
      <Text>Carousewl</Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    //transform: [{ scaleY: -1 }],
    backgroundColor: "grey",
  },
});

// import { View, Text } from "react-native";
// import React, { useContext } from "react";
// import { NewsContext } from "../API/Context";

// const NewsScreen = () => {
//   const {
//     news: { articles },
//     darkTheme,
//   } = useContext(NewsContext);

//   console.log("articles loaded:", articles.length);
//   return (
//     <View>
//       <Text>NewsScreen</Text>
//     </View>
//   );
// };

// export default NewsScreen;
