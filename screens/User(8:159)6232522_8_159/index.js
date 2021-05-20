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
      <View style={styles.View_8_160}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_8_161}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_8_165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_8_169}
        />
        <View style={styles.View_8_174}>
          <View style={styles.View_8_175}>
            <Text style={styles.Text_8_175}>9:41</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f97/1ffb/4472fd7eb188008847a727ccf250d5e3"
        }}
        style={styles.ImageBackground_8_177}
      />
      <View style={styles.View_8_178}>
        <Text style={styles.Text_8_178}>Andrew Scholar</Text>
      </View>
      <View style={styles.View_8_179}>
        <Text style={styles.Text_8_179}>Product designer. Lover of food.</Text>
      </View>
      <View style={styles.View_8_180}>
        <Text style={styles.Text_8_180}>Ueno</Text>
      </View>
      <View style={styles.View_46_310}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dce/eb9b/5b3356eb31a1d0d029f821577a7011ce"
          }}
          style={styles.ImageBackground_I46_310_46_259}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("108_352"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/454a/6dff/2c2db25f6427f4376ae8fc903c3c9032"
          }}
          style={styles.ImageBackground_59_203}
        />
      </TouchableOpacity>
      <View style={styles.View_108_8}>
        <View style={styles.View_108_299}>
          <View style={styles.View_I108_299_108_249} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7ca/fee3/e754288f80ffe3bc7339413ee343f32c"
            }}
            style={styles.ImageBackground_I108_299_108_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0029/642f/4d60618d69c9e60123cacf52a55411b7"
            }}
            style={styles.ImageBackground_I108_299_108_250}
          />
          <View style={styles.View_I108_299_108_251}>
            <Text style={styles.Text_I108_299_108_251}>Brynjólfur Binni</Text>
          </View>
          <View style={styles.View_I108_299_108_252}>
            <Text style={styles.Text_I108_299_108_252}>Leiðsögumaður</Text>
          </View>
          <View style={styles.View_I108_299_108_253}>
            <View style={styles.View_I108_299_108_253_8_182} />
            <View style={styles.View_I108_299_108_253_8_183}>
              <Text style={styles.Text_I108_299_108_253_8_183}>Add friend</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3470/6cf5/cb7425fec5b05368110f344c8828013f"
            }}
            style={styles.ImageBackground_I108_299_108_263}
          />
        </View>
        <View style={styles.View_108_308}>
          <View style={styles.View_I108_308_108_249} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f33/8495/48f448b5fa35ddaa88d4e9388aa15201"
            }}
            style={styles.ImageBackground_I108_308_108_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c6e/e032/ebefe4774a7c8b472886f8522d7db73e"
            }}
            style={styles.ImageBackground_I108_308_108_250}
          />
          <View style={styles.View_I108_308_108_251}>
            <Text style={styles.Text_I108_308_108_251}>Leo</Text>
          </View>
          <View style={styles.View_I108_308_108_252}>
            <Text style={styles.Text_I108_308_108_252}>Leikari</Text>
          </View>
          <View style={styles.View_I108_308_108_253}>
            <View style={styles.View_I108_308_108_253_8_182} />
            <View style={styles.View_I108_308_108_253_8_183}>
              <Text style={styles.Text_I108_308_108_253_8_183}>Add friend</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3470/6cf5/cb7425fec5b05368110f344c8828013f"
            }}
            style={styles.ImageBackground_I108_308_108_263}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("116_11"))
          }
        >
          <View style={styles.View_108_272}>
            <View style={styles.View_I108_272_108_249} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f22/aebd/250fb152bdb5caeec01c7fa608787aa3"
              }}
              style={styles.ImageBackground_I108_272_108_270}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37f6/43ea/0765c2949f3e12088e57aadaa686dcd0"
              }}
              style={styles.ImageBackground_I108_272_108_250}
            />
            <View style={styles.View_I108_272_108_251}>
              <Text style={styles.Text_I108_272_108_251}>Melissa Andrews</Text>
            </View>
            <View style={styles.View_I108_272_108_252}>
              <Text style={styles.Text_I108_272_108_252}>Model</Text>
            </View>
            <View style={styles.View_I108_272_108_253}>
              <View style={styles.View_I108_272_108_253_8_182} />
              <View style={styles.View_I108_272_108_253_8_183}>
                <Text style={styles.Text_I108_272_108_253_8_183}>
                  Add friend
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3470/6cf5/cb7425fec5b05368110f344c8828013f"
              }}
              style={styles.ImageBackground_I108_272_108_263}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_108_281}>
          <View style={styles.View_I108_281_108_249} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2ec/5b2c/a5a2dc730d2022803c7b089ebc6f9abe"
            }}
            style={styles.ImageBackground_I108_281_108_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef21/73b2/96a46567ec8d642a6da0ad7c2bd2d064"
            }}
            style={styles.ImageBackground_I108_281_108_250}
          />
          <View style={styles.View_I108_281_108_251}>
            <Text style={styles.Text_I108_281_108_251}>Jonathan Como</Text>
          </View>
          <View style={styles.View_I108_281_108_252}>
            <Text style={styles.Text_I108_281_108_252}>Project leader</Text>
          </View>
          <View style={styles.View_I108_281_108_253}>
            <View style={styles.View_I108_281_108_253_8_182} />
            <View style={styles.View_I108_281_108_253_8_183}>
              <Text style={styles.Text_I108_281_108_253_8_183}>Add friend</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3470/6cf5/cb7425fec5b05368110f344c8828013f"
            }}
            style={styles.ImageBackground_I108_281_108_263}
          />
        </View>
        <View style={styles.View_108_290}>
          <View style={styles.View_I108_290_108_249} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4822/39d8/8f755c23ddc10d05a7548f5e9455cb16"
            }}
            style={styles.ImageBackground_I108_290_108_270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8174/fab2/8041ffec5cd4c6bb6d439f75a4f9506a"
            }}
            style={styles.ImageBackground_I108_290_108_250}
          />
          <View style={styles.View_I108_290_108_251}>
            <Text style={styles.Text_I108_290_108_251}>Sandra Bernard</Text>
          </View>
          <View style={styles.View_I108_290_108_252}>
            <Text style={styles.Text_I108_290_108_252}>Producer</Text>
          </View>
          <View style={styles.View_I108_290_108_253}>
            <View style={styles.View_I108_290_108_253_8_182} />
            <View style={styles.View_I108_290_108_253_8_183}>
              <Text style={styles.Text_I108_290_108_253_8_183}>Add friend</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3470/6cf5/cb7425fec5b05368110f344c8828013f"
            }}
            style={styles.ImageBackground_I108_290_108_263}
          />
        </View>
      </View>
      <View style={styles.View_108_317}>
        <View style={styles.View_I108_317_1_4} />
        <View style={styles.View_I108_317_8_545}>
          <View style={styles.View_I108_317_51_578}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac1a/61e1/a9072cb1b0432db767518533784d9aca"
              }}
              style={styles.ImageBackground_I108_317_51_578_50_3}
            />
          </View>
        </View>
        <View style={styles.View_I108_317_8_654}>
          <View style={styles.View_I108_317_51_958}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c75/d6d9/b403e41cf5c8ce30c0b04c19c8ac223a"
              }}
              style={styles.ImageBackground_I108_317_51_958_50_32}
            />
          </View>
          <View style={styles.View_I108_317_1_35} />
        </View>
        <View style={styles.View_I108_317_8_767}>
          <View style={styles.View_I108_317_51_1088}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6617/51fb/9e60e62825a3f11ce3d985b5244576dc"
              }}
              style={styles.ImageBackground_I108_317_51_1088_50_19}
            />
          </View>
        </View>
        <View style={styles.View_I108_317_10_0}>
          <View style={styles.View_I108_317_51_1176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfcc/37ea/cf0478335163e6e69477a47efa01c004"
              }}
              style={styles.ImageBackground_I108_317_51_1176_50_27}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_116_3}>
        <View style={styles.View_116_8}>
          <View style={styles.View_116_0}>
            <Text style={styles.Text_116_0}>Following</Text>
          </View>
          <View style={styles.View_116_4}>
            <Text style={styles.Text_116_4}>210</Text>
          </View>
        </View>
        <View style={styles.View_116_7}>
          <View style={styles.View_116_1}>
            <Text style={styles.Text_116_1}>Follows</Text>
          </View>
          <View style={styles.View_116_5}>
            <Text style={styles.Text_116_5}>329</Text>
          </View>
        </View>
        <View style={styles.View_116_9}>
          <View style={styles.View_116_2}>
            <Text style={styles.Text_116_2}>Hearts</Text>
          </View>
          <View style={styles.View_116_6}>
            <Text style={styles.Text_116_6}>34</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_8_160: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_8_161: {
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
  ImageBackground_8_165: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_8_169: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_8_174: {
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
  View_8_175: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158471%")
  },
  Text_8_175: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
    textTransform: "none"
  },
  ImageBackground_8_177: {
    width: wp("56.53333333333334%"),
    minWidth: wp("56.53333333333334%"),
    height: hp("28.96174863387978%"),
    minHeight: hp("28.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("10.92896174863388%")
  },
  View_8_178: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("42.62295081967213%")
  },
  Text_8_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_179: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("50%")
  },
  Text_8_179: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_180: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("46.58469945355191%")
  },
  Text_8_180: {
    color: "rgba(187, 187, 192, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_310: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("12.158469945355192%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I46_310_46_259: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("0.5464480874316937%")
  },
  ImageBackground_59_203: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_108_8: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.16939890710383%"),
    backgroundColor: "rgba(242, 242, 245, 1)"
  },
  View_108_299: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("129.6%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_299_108_249: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
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
  ImageBackground_I108_299_108_270: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I108_299_108_250: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333343%"),
    top: hp("2.1857923497267677%")
  },
  View_I108_299_108_251: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("12.568306010928964%")
  },
  Text_I108_299_108_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I108_299_108_252: {
    flexGrow: 1,
    width: wp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("14.89071038251366%")
  },
  Text_I108_299_108_252: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I108_299_108_253: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("18.579234972677583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_299_108_253_8_182: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 75, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I108_299_108_253_8_183: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I108_299_108_253_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I108_299_108_263: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333343%"),
    top: hp("1.0928961748633839%")
  },
  View_108_308: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("170.66666666666669%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_308_108_249: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
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
  ImageBackground_I108_308_108_270: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I108_308_108_250: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333314%"),
    top: hp("2.1857923497267677%")
  },
  View_I108_308_108_251: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333337%"),
    top: hp("12.568306010928964%")
  },
  Text_I108_308_108_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I108_308_108_252: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666634%"),
    top: hp("14.89071038251366%")
  },
  Text_I108_308_108_252: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I108_308_108_253: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("18.579234972677583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_308_108_253_8_182: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 75, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I108_308_108_253_8_183: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I108_308_108_253_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I108_308_108_263: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333314%"),
    top: hp("1.0928961748633839%")
  },
  View_108_272: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_272_108_249: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
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
  ImageBackground_I108_272_108_270: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I108_272_108_250: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("2.1857923497267677%")
  },
  View_I108_272_108_251: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("12.568306010928964%")
  },
  Text_I108_272_108_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I108_272_108_252: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("14.89071038251366%")
  },
  Text_I108_272_108_252: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I108_272_108_253: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("18.579234972677583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_272_108_253_8_182: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 75, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I108_272_108_253_8_183: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I108_272_108_253_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I108_272_108_263: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("1.0928961748633839%")
  },
  View_108_281: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_281_108_249: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
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
  ImageBackground_I108_281_108_270: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I108_281_108_250: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333329%"),
    top: hp("2.1857923497267677%")
  },
  View_I108_281_108_251: {
    flexGrow: 1,
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("12.568306010928964%")
  },
  Text_I108_281_108_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I108_281_108_252: {
    flexGrow: 1,
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666664%"),
    top: hp("14.89071038251366%")
  },
  Text_I108_281_108_252: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I108_281_108_253: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("18.579234972677583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_281_108_253_8_182: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 75, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I108_281_108_253_8_183: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I108_281_108_253_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I108_281_108_263: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.33333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_108_290: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_290_108_249: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
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
  ImageBackground_I108_290_108_270: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I108_290_108_250: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333343%"),
    top: hp("2.1857923497267677%")
  },
  View_I108_290_108_251: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%"),
    top: hp("12.568306010928964%")
  },
  Text_I108_290_108_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I108_290_108_252: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.399999999999991%"),
    top: hp("14.89071038251366%")
  },
  Text_I108_290_108_252: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I108_290_108_253: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("18.579234972677583%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_290_108_253_8_182: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(70, 75, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I108_290_108_253_8_183: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I108_290_108_253_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I108_290_108_263: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333343%"),
    top: hp("1.0928961748633839%")
  },
  View_108_317: {
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
  View_I108_317_1_4: {
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
  View_I108_317_8_545: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109253%")
  },
  View_I108_317_51_578: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I108_317_51_578_50_3: {
    flexGrow: 1,
    width: wp("6.401202901204426%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316848%")
  },
  View_I108_317_8_654: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("1.9125683060109253%")
  },
  View_I108_317_51_958: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I108_317_51_958_50_32: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.5500912483924076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7121744791666629%"),
    top: hp("0.9107454226967917%")
  },
  View_I108_317_1_35: {
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
  View_I108_317_8_767: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("1.9125683060109253%")
  },
  View_I108_317_51_1088: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I108_317_51_1088_50_19: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.9143896259245325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166643%"),
    top: hp("0.728598839598277%")
  },
  View_I108_317_10_0: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109253%")
  },
  View_I108_317_51_1176: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I108_317_51_1176_50_27: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("3.6429874232557955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166714%"),
    top: hp("0.3642973352651069%")
  },
  View_116_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_116_8: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("1.0928961748633768%")
  },
  View_116_0: {
    width: wp("14.933333333333335%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_116_0: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_4: {
    width: wp("7.466666666666668%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%"),
    top: hp("0%")
  },
  Text_116_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_7: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("1.0928961748633768%")
  },
  View_116_1: {
    width: wp("11.733333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_116_1: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_5: {
    width: wp("8.799999999999999%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%"),
    top: hp("0%")
  },
  Text_116_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_9: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    top: hp("1.0928961748633768%")
  },
  View_116_2: {
    width: wp("10.4%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%")
  },
  Text_116_2: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_6: {
    width: wp("5.866666666666666%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0%")
  },
  Text_116_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
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
