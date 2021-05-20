import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ac/fcb0/2125cca2f7958fb92c30eddc38231b9d"
        }}
        style={styles.ImageBackground_59_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cb6/b171/bef44b8d30dfb5a03950877d66efb608"
        }}
        style={styles.ImageBackground_59_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1399/6290/66cd53843e8015f56cacf55e9731feaf"
        }}
        style={styles.ImageBackground_59_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea2b/2c9a/b9037262e06ed88267645a7f760e5879"
        }}
        style={styles.ImageBackground_59_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3393/dac4/fb55072c8af8ece414133f449ce9440e"
        }}
        style={styles.ImageBackground_59_25}
      />
      <View style={styles.View_59_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46c5/102b/4a55d2da40cb76c724846573fe04cd3f"
          }}
          style={styles.ImageBackground_59_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26fb/de63/5ee046f36bd812020fbeadf1d916a2d8"
          }}
          style={styles.ImageBackground_59_8}
        />
      </View>
      <View source={{ uri: "null" }} style={styles.View_59_9} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b1b/999e/e0cd8593001cf2f941b99fe7c1072fb0"
        }}
        style={styles.ImageBackground_59_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e9/3ec9/b36974bd55c2f65b9c28803d0d41a241"
        }}
        style={styles.ImageBackground_59_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5638/1a42/640123370229fbfce0b82d1b3148e8d3"
        }}
        style={styles.ImageBackground_59_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4edc/5ebe/f5b51971e5a944bfe9e492c32414af93"
        }}
        style={styles.ImageBackground_59_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dec8/1ce3/0702df5c3078cfb4bd81f2f6ba5eb960"
        }}
        style={styles.ImageBackground_59_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286a/02a3/293eb043d355df687374b2d2102d4a81"
        }}
        style={styles.ImageBackground_59_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba2a/92b5/cfa58afa143af21d6838250c5c3526e8"
        }}
        style={styles.ImageBackground_59_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eec5/4902/5f086e06dc7f7bd27f0cf984bbd7b484"
        }}
        style={styles.ImageBackground_59_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94bb/7d8e/8b0485c8a396a163e58446decfda00cb"
        }}
        style={styles.ImageBackground_59_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a9/51db/f5dfdc2137c554f9aacd7f0fa7593746"
        }}
        style={styles.ImageBackground_59_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e8/7b03/4a1eb010f54927dbe530d69f7bd0a0ab"
        }}
        style={styles.ImageBackground_59_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d783/d054/f8b10dd5ff3a6b83a8b9ee30c6efa129"
        }}
        style={styles.ImageBackground_59_21}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_59_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_3: {
    width: wp("70.2127659574468%"),
    minWidth: wp("70.2127659574468%"),
    height: hp("70.2127659574468%"),
    minHeight: hp("70.2127659574468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.893617021276595%"),
    top: hp("16.170212765957448%")
  },
  ImageBackground_59_4: {
    width: wp("48.51063829787234%"),
    minWidth: wp("48.51063829787234%"),
    height: hp("48.51063829787234%"),
    minHeight: hp("48.51063829787234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.744680851063826%"),
    top: hp("27.02127659574468%")
  },
  ImageBackground_59_5: {
    width: wp("31.06382978723404%"),
    minWidth: wp("31.06382978723404%"),
    height: hp("31.06382978723404%"),
    minHeight: hp("31.06382978723404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.46808510638298%"),
    top: hp("35.74468085106383%")
  },
  ImageBackground_59_25: {
    width: wp("14.042553191489363%"),
    minWidth: wp("14.042553191489363%"),
    height: hp("14.042553191489363%"),
    minHeight: hp("14.042553191489363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97872340425532%"),
    top: hp("44.25531914893617%")
  },
  View_59_6: {
    width: wp("14.042553191489363%"),
    minWidth: wp("14.042553191489363%"),
    height: hp("14.042553191489363%"),
    minHeight: hp("14.042553191489363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97872340425532%"),
    top: hp("44.25531914893617%")
  },
  ImageBackground_59_7: {
    width: wp("14.042553191489363%"),
    minWidth: wp("14.042553191489363%"),
    height: hp("14.042553191489363%"),
    minHeight: hp("14.042553191489363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_8: {
    width: wp("14.042553191489363%"),
    minWidth: wp("14.042553191489363%"),
    height: hp("14.042553191489363%"),
    minHeight: hp("14.042553191489363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_59_9: {
    width: wp("10.212765957446807%"),
    minWidth: wp("10.212765957446807%"),
    height: hp("10.212765957446807%"),
    minHeight: hp("10.212765957446807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.8936170212766%"),
    top: hp("46.170212765957444%")
  },
  ImageBackground_59_10: {
    width: wp("6.808510638297872%"),
    minWidth: wp("6.808510638297872%"),
    height: hp("6.808510638297872%"),
    minHeight: hp("6.808510638297872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.936170212765955%"),
    top: hp("60%")
  },
  ImageBackground_59_11: {
    width: wp("4.25531914893617%"),
    minWidth: wp("4.25531914893617%"),
    height: hp("4.25531914893617%"),
    minHeight: hp("4.25531914893617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.319148936170212%"),
    top: hp("77.87234042553192%")
  },
  ImageBackground_59_12: {
    width: wp("4.25531914893617%"),
    minWidth: wp("4.25531914893617%"),
    height: hp("4.25531914893617%"),
    minHeight: hp("4.25531914893617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.787234042553195%"),
    top: hp("72.97872340425532%")
  },
  ImageBackground_59_13: {
    width: wp("5.957446808510639%"),
    minWidth: wp("5.957446808510639%"),
    height: hp("5.957446808510639%"),
    minHeight: hp("5.957446808510639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.829787234042556%"),
    top: hp("77.87234042553192%")
  },
  ImageBackground_59_14: {
    width: wp("8.51063829787234%"),
    minWidth: wp("8.51063829787234%"),
    height: hp("8.51063829787234%"),
    minHeight: hp("8.51063829787234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.29787234042553%"),
    top: hp("36.17021276595745%")
  },
  ImageBackground_59_15: {
    width: wp("8.085106382978724%"),
    minWidth: wp("8.085106382978724%"),
    height: hp("8.085106382978724%"),
    minHeight: hp("8.085106382978724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.680851063829785%"),
    top: hp("61.702127659574465%")
  },
  ImageBackground_59_16: {
    width: wp("8.085106382978724%"),
    minWidth: wp("8.085106382978724%"),
    height: hp("8.085106382978724%"),
    minHeight: hp("8.085106382978724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.85106382978723%"),
    top: hp("30%")
  },
  ImageBackground_59_17: {
    width: wp("5.106382978723404%"),
    minWidth: wp("5.106382978723404%"),
    height: hp("5.106382978723404%"),
    minHeight: hp("5.106382978723404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.38297872340425%"),
    top: hp("59.148936170212764%")
  },
  ImageBackground_59_18: {
    width: wp("12.127659574468085%"),
    minWidth: wp("12.127659574468085%"),
    height: hp("12.127659574468085%"),
    minHeight: hp("12.127659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.723404255319153%"),
    top: hp("42.765957446808514%")
  },
  ImageBackground_59_19: {
    width: wp("5.106382978723404%"),
    minWidth: wp("5.106382978723404%"),
    height: hp("5.106382978723404%"),
    minHeight: hp("5.106382978723404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.53191489361701%"),
    top: hp("54.8936170212766%")
  },
  ImageBackground_59_20: {
    width: wp("2.553191489361702%"),
    minWidth: wp("2.553191489361702%"),
    height: hp("2.553191489361702%"),
    minHeight: hp("2.553191489361702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.25531914893617%"),
    top: hp("27.4468085106383%")
  },
  ImageBackground_59_21: {
    width: wp("4.680851063829787%"),
    minWidth: wp("4.680851063829787%"),
    height: hp("4.680851063829787%"),
    minHeight: hp("4.680851063829787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.340425531914896%"),
    top: hp("32.97872340425532%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
