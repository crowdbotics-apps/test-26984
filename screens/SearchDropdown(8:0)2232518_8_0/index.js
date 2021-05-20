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
      <View style={styles.View_8_1}>
        <View style={styles.View_I8_1_1_4} />
        <View style={styles.View_I8_1_8_545}>
          <View style={styles.View_I8_1_51_578}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac1a/61e1/a9072cb1b0432db767518533784d9aca"
              }}
              style={styles.ImageBackground_I8_1_51_578_50_3}
            />
          </View>
          <View style={styles.View_I8_1_1_34} />
        </View>
        <View style={styles.View_I8_1_8_654}>
          <View style={styles.View_I8_1_51_958}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c75/d6d9/b403e41cf5c8ce30c0b04c19c8ac223a"
              }}
              style={styles.ImageBackground_I8_1_51_958_50_32}
            />
          </View>
        </View>
        <View style={styles.View_I8_1_8_767}>
          <View style={styles.View_I8_1_51_1088}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6617/51fb/9e60e62825a3f11ce3d985b5244576dc"
              }}
              style={styles.ImageBackground_I8_1_51_1088_50_19}
            />
          </View>
        </View>
        <View style={styles.View_I8_1_10_0}>
          <View style={styles.View_I8_1_51_1176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfcc/37ea/cf0478335163e6e69477a47efa01c004"
              }}
              style={styles.ImageBackground_I8_1_51_1176_50_27}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_8_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ac/fcb0/2125cca2f7958fb92c30eddc38231b9d"
          }}
          style={styles.ImageBackground_8_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cb6/b171/bef44b8d30dfb5a03950877d66efb608"
          }}
          style={styles.ImageBackground_8_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1399/6290/66cd53843e8015f56cacf55e9731feaf"
          }}
          style={styles.ImageBackground_8_5}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea2b/2c9a/b9037262e06ed88267645a7f760e5879"
          }}
          style={styles.ImageBackground_8_6}
        />
        <View style={styles.View_8_7}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46c5/102b/4a55d2da40cb76c724846573fe04cd3f"
            }}
            style={styles.ImageBackground_8_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26fb/de63/5ee046f36bd812020fbeadf1d916a2d8"
            }}
            style={styles.ImageBackground_8_9}
          />
        </View>
        <View source={{ uri: "null" }} style={styles.View_8_10} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b1b/999e/e0cd8593001cf2f941b99fe7c1072fb0"
          }}
          style={styles.ImageBackground_8_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e9/3ec9/b36974bd55c2f65b9c28803d0d41a241"
          }}
          style={styles.ImageBackground_8_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5638/1a42/640123370229fbfce0b82d1b3148e8d3"
          }}
          style={styles.ImageBackground_8_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4edc/5ebe/f5b51971e5a944bfe9e492c32414af93"
          }}
          style={styles.ImageBackground_8_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dec8/1ce3/0702df5c3078cfb4bd81f2f6ba5eb960"
          }}
          style={styles.ImageBackground_8_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286a/02a3/293eb043d355df687374b2d2102d4a81"
          }}
          style={styles.ImageBackground_8_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba2a/92b5/cfa58afa143af21d6838250c5c3526e8"
          }}
          style={styles.ImageBackground_8_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eec5/4902/5f086e06dc7f7bd27f0cf984bbd7b484"
          }}
          style={styles.ImageBackground_8_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94bb/7d8e/8b0485c8a396a163e58446decfda00cb"
          }}
          style={styles.ImageBackground_8_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a9/51db/f5dfdc2137c554f9aacd7f0fa7593746"
          }}
          style={styles.ImageBackground_8_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11e8/7b03/4a1eb010f54927dbe530d69f7bd0a0ab"
          }}
          style={styles.ImageBackground_8_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d783/d054/f8b10dd5ff3a6b83a8b9ee30c6efa129"
          }}
          style={styles.ImageBackground_8_22}
        />
      </View>
      <View style={styles.View_8_23}>
        <Text style={styles.Text_8_23}>Search</Text>
      </View>
      <View style={styles.View_8_29}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_8_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_8_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_8_38}
        />
        <View style={styles.View_8_43}>
          <View style={styles.View_8_44}>
            <Text style={styles.Text_8_44}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_51_1285}>
        <View style={styles.View_I51_1285_15_532} />
        <View style={styles.View_I51_1285_15_535}>
          <Text style={styles.Text_I51_1285_15_535}>Type in a name ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23fb/f8bc/40281403e635c596b6094a350d71866f"
          }}
          style={styles.ImageBackground_I51_1285_15_540}
        />
        <View style={styles.View_I51_1285_15_541}>
          <View style={styles.View_I51_1285_15_544}>
            <Text style={styles.Text_I51_1285_15_544}>View results</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23fb/f8bc/40281403e635c596b6094a350d71866f"
          }}
          style={styles.ImageBackground_I51_1285_15_546}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23fb/f8bc/40281403e635c596b6094a350d71866f"
          }}
          style={styles.ImageBackground_I51_1285_15_551}
        />
        <View style={styles.View_I51_1285_46_222}>
          <View style={styles.View_I51_1285_46_222_46_215} />
          <View style={styles.View_I51_1285_46_222_46_211}>
            <Text style={styles.Text_I51_1285_46_222_46_211}>
              Leonardo DiCaprio{" "}
            </Text>
          </View>
          <View style={styles.View_I51_1285_46_222_46_212}>
            <Text style={styles.Text_I51_1285_46_222_46_212}>Son</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4f4/cba2/d501f78a0042f8187fe7b9b79ec0c90c"
            }}
            style={styles.ImageBackground_I51_1285_46_222_46_213}
          />
        </View>
        <View style={styles.View_I51_1285_46_227}>
          <View style={styles.View_I51_1285_46_227_46_215} />
          <View style={styles.View_I51_1285_46_227_46_211}>
            <Text style={styles.Text_I51_1285_46_227_46_211}>
              Michael Corillo
            </Text>
          </View>
          <View style={styles.View_I51_1285_46_227_46_212}>
            <Text style={styles.Text_I51_1285_46_227_46_212}>Friend</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8acc/b6a9/a9ba2630a681f3a683d7899c90d30644"
            }}
            style={styles.ImageBackground_I51_1285_46_227_46_213}
          />
        </View>
        <View style={styles.View_I51_1285_46_232}>
          <View style={styles.View_I51_1285_46_232_46_215} />
          <View style={styles.View_I51_1285_46_232_46_211}>
            <Text style={styles.Text_I51_1285_46_232_46_211}>Sam Sanders</Text>
          </View>
          <View style={styles.View_I51_1285_46_232_46_212}>
            <Text style={styles.Text_I51_1285_46_232_46_212}>Friend</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/761c/44b4/eefcbf99b7a03d08ccb78cfc3d71cb91"
            }}
            style={styles.ImageBackground_I51_1285_46_232_46_213}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a2/1e98/a4d2685a793b8b21bf919907f717faf6"
          }}
          style={styles.ImageBackground_I51_1285_59_74}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_8_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.13661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I8_1_1_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 75, 196, 1)"
  },
  View_I8_1_8_545: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_1_51_578: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1_51_578_50_3: {
    flexGrow: 1,
    width: wp("6.401202901204426%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316848%")
  },
  View_I8_1_1_34: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I8_1_8_654: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_1_51_958: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1_51_958_50_32: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.5500912483924076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7121785481770857%"),
    top: hp("0.9107454226967917%")
  },
  View_I8_1_8_767: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_1_51_1088: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1_51_1088_50_19: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.9143896259245325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111124674479186%"),
    top: hp("0.728598839598277%")
  },
  View_I8_1_10_0: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_1_51_1176: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_1_51_1176_50_27: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("3.6429874232557955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111083984375028%"),
    top: hp("0.3642973352651069%")
  },
  View_8_2: {
    width: wp("125.33333333333334%"),
    minWidth: wp("125.33333333333334%"),
    height: hp("64.20765027322405%"),
    minHeight: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.333333333333334%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_8_3: {
    width: wp("125.33333333333334%"),
    minWidth: wp("125.33333333333334%"),
    height: hp("64.20765027322405%"),
    minHeight: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_4: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("10.382513661202186%")
  },
  ImageBackground_8_5: {
    width: wp("60.8%"),
    minWidth: wp("60.8%"),
    height: hp("31.147540983606557%"),
    minHeight: hp("31.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("17.349726775956285%")
  },
  ImageBackground_8_6: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("22.950819672131153%")
  },
  View_8_7: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666667%"),
    top: hp("28.415300546448087%")
  },
  ImageBackground_8_8: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_8_9: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_8_10: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.26666666666667%"),
    top: hp("29.6448087431694%")
  },
  ImageBackground_8_11: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("38.52459016393443%")
  },
  ImageBackground_8_12: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("50.00000000000001%")
  },
  ImageBackground_8_13: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%"),
    top: hp("46.857923497267755%")
  },
  ImageBackground_8_14: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.99999999999999%"),
    top: hp("50.00000000000001%")
  },
  ImageBackground_8_15: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666668%"),
    top: hp("23.224043715846996%")
  },
  ImageBackground_8_16: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.00000000000001%"),
    top: hp("39.61748633879782%")
  },
  ImageBackground_8_17: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("19.26229508196721%")
  },
  ImageBackground_8_18: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.66666666666667%"),
    top: hp("37.978142076502735%")
  },
  ImageBackground_8_19: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("27.459016393442624%")
  },
  ImageBackground_8_20: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333333%"),
    top: hp("35.24590163934426%")
  },
  ImageBackground_8_21: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.06666666666666%"),
    top: hp("17.622950819672134%")
  },
  ImageBackground_8_22: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333334%"),
    top: hp("21.174863387978142%")
  },
  View_8_23: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("11.33879781420765%")
  },
  Text_8_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_8_29: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_30: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("2.367943101893357%")
  },
  ImageBackground_8_34: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_8_38: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%")
  },
  View_8_43: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_44: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158471%")
  },
  Text_8_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  View_51_1285: {
    width: wp("87.2%"),
    height: hp("30.05464480874317%"),
    top: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I51_1285_15_532: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I51_1285_15_535: {
    flexGrow: 1,
    width: wp("73.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.9125683060109289%")
  },
  Text_I51_1285_15_535: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I51_1285_15_540: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("12.978142076502728%")
  },
  View_I51_1285_15_541: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("25.81967213114754%")
  },
  View_I51_1285_15_544: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I51_1285_15_544: {
    color: "rgba(70, 75, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I51_1285_15_546: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("18.44262295081967%")
  },
  ImageBackground_I51_1285_15_551: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("23.90710382513661%")
  },
  View_I51_1285_46_222: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("7.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I51_1285_46_222_46_215: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I51_1285_46_222_46_211: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.0928961748633839%")
  },
  Text_I51_1285_46_222_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I51_1285_46_222_46_212: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("1.5027322404371546%")
  },
  Text_I51_1285_46_222_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I51_1285_46_222_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633839%")
  },
  View_I51_1285_46_227: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("13.251366120218577%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I51_1285_46_227_46_215: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I51_1285_46_227_46_211: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.092896174863391%")
  },
  Text_I51_1285_46_227_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I51_1285_46_227_46_212: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6%"),
    top: hp("1.5027322404371617%")
  },
  Text_I51_1285_46_227_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I51_1285_46_227_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863391%")
  },
  View_I51_1285_46_232: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I51_1285_46_232_46_215: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I51_1285_46_232_46_211: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.0928961748633839%")
  },
  Text_I51_1285_46_232_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I51_1285_46_232_46_212: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6%"),
    top: hp("1.5027322404371546%")
  },
  Text_I51_1285_46_232_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I51_1285_46_232_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_I51_1285_59_74: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("1.9125683060109289%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
