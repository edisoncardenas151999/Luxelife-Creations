import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import styles from "./productCardview.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://johnlewis.scene7.com/is/image/JohnLewis/furnitureandlight-livingroom-carousel-gb-010323",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            sofa
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            apple
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            $23
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
