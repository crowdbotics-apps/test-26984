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
      <View style={styles.View_59_73}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad5b/ae73/4afde448a8dbf765ee0006b8557b007a"
          }}
          style={styles.ImageBackground_59_72}
        />
      </View>
      <View style={styles.View_1_57}>
        <Text style={styles.Text_1_57}>Search</Text>
      </View>
      <View style={styles.View_8_242}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_1_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_1_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_1_72}
        />
        <View style={styles.View_1_77}>
          <View style={styles.View_1_78}>
            <Text style={styles.Text_1_78}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_215}>
        <View style={styles.View_I8_215_1_4} />
        <View style={styles.View_I8_215_8_545}>
          <View style={styles.View_I8_215_51_578}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac1a/61e1/a9072cb1b0432db767518533784d9aca"
              }}
              style={styles.ImageBackground_I8_215_51_578_50_3}
            />
          </View>
          <View style={styles.View_I8_215_1_34} />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_215"))
          }
        >
          <View style={styles.View_I8_215_8_654}>
            <View style={styles.View_I8_215_51_958}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c75/d6d9/b403e41cf5c8ce30c0b04c19c8ac223a"
                }}
                style={styles.ImageBackground_I8_215_51_958_50_32}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I8_215_8_767}>
          <View style={styles.View_I8_215_51_1088}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6617/51fb/9e60e62825a3f11ce3d985b5244576dc"
              }}
              style={styles.ImageBackground_I8_215_51_1088_50_19}
            />
          </View>
        </View>
        <View style={styles.View_I8_215_10_0}>
          <View style={styles.View_I8_215_51_1176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfcc/37ea/cf0478335163e6e69477a47efa01c004"
              }}
              style={styles.ImageBackground_I8_215_51_1176_50_27}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_15_522}>
        <View style={styles.View_I15_522_8_186} />
        <View style={styles.View_I15_522_8_189}>
          <Text style={styles.Text_I15_522_8_189}>Type in a name ...</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_59_73: {
    width: wp("125.33333333333334%"),
    minWidth: wp("125.33333333333334%"),
    height: hp("64.20765027322405%"),
    minHeight: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12.8%"),
    top: hp("19.53551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_59_72: {
    width: wp("125.33333333333334%"),
    minWidth: wp("125.33333333333334%"),
    height: hp("64.20765027322405%"),
    minHeight: hp("64.20765027322405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1_57: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("11.33879781420765%")
  },
  Text_1_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_8_242: {
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
  ImageBackground_1_64: {
    flexGrow: 1,
    width: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("2.367943101893357%")
  },
  ImageBackground_1_68: {
    flexGrow: 1,
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%"),
    top: hp("2.3675803929730193%")
  },
  ImageBackground_1_72: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("2.413477663133965%")
  },
  View_1_77: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_78: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158471%")
  },
  Text_1_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  View_8_215: {
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
  View_I8_215_1_4: {
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
  View_I8_215_8_545: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_215_51_578: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_215_51_578_50_3: {
    flexGrow: 1,
    width: wp("6.401202901204426%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316848%")
  },
  View_I8_215_1_34: {
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
  View_I8_215_8_654: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_215_51_958: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_215_51_958_50_32: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.5500912483924076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7121744791666629%"),
    top: hp("0.9107454226967917%")
  },
  View_I8_215_8_767: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_215_51_1088: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_215_51_1088_50_19: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.9143896259245325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111124674479186%"),
    top: hp("0.728598839598277%")
  },
  View_I8_215_10_0: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109253%")
  },
  View_I8_215_51_1176: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I8_215_51_1176_50_27: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("3.6429874232557955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111104329427178%"),
    top: hp("0.3642973352651069%")
  },
  View_15_522: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("19.53551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_522_8_186: {
    flexGrow: 1,
    width: wp("87.2%"),
    height: hp("7.103825136612022%"),
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
  View_I15_522_8_189: {
    flexGrow: 1,
    width: wp("36.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.9125683060109289%")
  },
  Text_I15_522_8_189: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
