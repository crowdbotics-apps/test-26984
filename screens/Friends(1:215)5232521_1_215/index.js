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
      <View style={styles.View_1_216}>
        <Text style={styles.Text_1_216}>Friends</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("8_159"))
        }
      >
        <View style={styles.View_1_217}>
          <View style={styles.View_1_218} />
          <View style={styles.View_1_219} />
          <View style={styles.View_1_220} />
          <View style={styles.View_1_221}>
            <Text style={styles.Text_1_221}>Andrew Scholar</Text>
          </View>
          <View style={styles.View_1_222}>
            <Text style={styles.Text_1_222}>894 4390</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6efa/e016/764d720d13dc3e20b7af74cb44108df4"
            }}
            style={styles.ImageBackground_1_223}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_1_227}>
        <View style={styles.View_1_228} />
        <View style={styles.View_1_229} />
        <View style={styles.View_1_230} />
        <View style={styles.View_1_231}>
          <Text style={styles.Text_1_231}>Amber Skorch</Text>
        </View>
        <View style={styles.View_1_232}>
          <Text style={styles.Text_1_232}>984 3920</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27f2/549d/38424de0ef3ef4fa351309a764eebd84"
          }}
          style={styles.ImageBackground_1_233}
        />
        <View style={styles.View_15_283}>
          <View style={styles.View_I15_283_8_182} />
          <View style={styles.View_I15_283_8_183}>
            <Text style={styles.Text_I15_283_8_183}>Call</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_237}>
        <Text style={styles.Text_1_237}>A</Text>
      </View>
      <View style={styles.View_1_238}>
        <View style={styles.View_1_239} />
        <View style={styles.View_1_240} />
        <View style={styles.View_1_241} />
        <View style={styles.View_1_242}>
          <Text style={styles.Text_1_242}>Benjamin Bach</Text>
        </View>
        <View style={styles.View_1_243}>
          <Text style={styles.Text_1_243}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b9c/abaa/5be2b83f9e31d74581cc16c40a9536f3"
          }}
          style={styles.ImageBackground_1_244}
        />
      </View>
      <View style={styles.View_1_248}>
        <View style={styles.View_1_249} />
        <View style={styles.View_1_250} />
        <View style={styles.View_1_251} />
        <View style={styles.View_1_252}>
          <Text style={styles.Text_1_252}>Bernard D Smith</Text>
        </View>
        <View style={styles.View_1_253}>
          <Text style={styles.Text_1_253}>678 4983</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea55/e681/391a14499e579b9cf65fb221b01241c5"
          }}
          style={styles.ImageBackground_1_254}
        />
      </View>
      <View style={styles.View_1_258}>
        <View style={styles.View_1_259} />
        <View style={styles.View_1_260} />
        <View style={styles.View_1_261} />
        <View style={styles.View_1_262}>
          <Text style={styles.Text_1_262}>Bubba Gump</Text>
        </View>
        <View style={styles.View_1_263}>
          <Text style={styles.Text_1_263}>989 3989</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deca/c381/2eba35cfd3c5938e0bb799f0073cff69"
          }}
          style={styles.ImageBackground_1_264}
        />
      </View>
      <View style={styles.View_1_268}>
        <Text style={styles.Text_1_268}>B</Text>
      </View>
      <View style={styles.View_1_269}>
        <View style={styles.View_1_270} />
        <View style={styles.View_1_271} />
        <View style={styles.View_1_272} />
        <View style={styles.View_1_273}>
          <Text style={styles.Text_1_273}>Daryl Sanders</Text>
        </View>
        <View style={styles.View_1_274}>
          <Text style={styles.Text_1_274}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d640/7d70/76161f40538a1cb2996ebed34f3b6f51"
          }}
          style={styles.ImageBackground_1_275}
        />
      </View>
      <View style={styles.View_1_279}>
        <View style={styles.View_1_280} />
        <View style={styles.View_1_281} />
        <View style={styles.View_1_282} />
        <View style={styles.View_1_283}>
          <Text style={styles.Text_1_283}>Dewan Jones</Text>
        </View>
        <View style={styles.View_1_284}>
          <Text style={styles.Text_1_284}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35f7/1158/859135940d3a8823570cd7b14522f4c4"
          }}
          style={styles.ImageBackground_1_285}
        />
        <View style={styles.View_15_332}>
          <View style={styles.View_I15_332_8_182} />
          <View style={styles.View_I15_332_8_183}>
            <Text style={styles.Text_I15_332_8_183}>Call</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_289}>
        <View style={styles.View_1_290} />
        <View style={styles.View_1_291} />
        <View style={styles.View_1_292} />
        <View style={styles.View_1_293}>
          <Text style={styles.Text_1_293}>Destiny McAndrews</Text>
        </View>
        <View style={styles.View_1_294}>
          <Text style={styles.Text_1_294}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fda/0e8a/8f2427fb47a4d106d8339c7647fac631"
          }}
          style={styles.ImageBackground_1_295}
        />
      </View>
      <View style={styles.View_1_299}>
        <View style={styles.View_1_300} />
        <View style={styles.View_1_301} />
        <View style={styles.View_1_302} />
        <View style={styles.View_1_303}>
          <Text style={styles.Text_1_303}>Don</Text>
        </View>
        <View style={styles.View_1_304}>
          <Text style={styles.Text_1_304}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e73/c4bf/09cbfc49d3b7d9d3c1df79c467a21bd7"
          }}
          style={styles.ImageBackground_1_305}
        />
      </View>
      <View style={styles.View_1_309}>
        <Text style={styles.Text_1_309}>D</Text>
      </View>
      <View style={styles.View_1_310}>
        <View style={styles.View_1_311} />
        <View style={styles.View_1_312} />
        <View style={styles.View_1_313} />
        <View style={styles.View_1_314}>
          <Text style={styles.Text_1_314}>Ellert Gewalt</Text>
        </View>
        <View style={styles.View_1_315}>
          <Text style={styles.Text_1_315}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/792f/0dae/73edaaf662269271f57e4a67d5cb3e4b"
          }}
          style={styles.ImageBackground_1_316}
        />
      </View>
      <View style={styles.View_1_320}>
        <View style={styles.View_1_321} />
        <View style={styles.View_1_322} />
        <View style={styles.View_1_323} />
        <View style={styles.View_1_324}>
          <Text style={styles.Text_1_324}>Ellen Damigella</Text>
        </View>
        <View style={styles.View_1_325}>
          <Text style={styles.Text_1_325}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dddd/47ed/fd7b636b48cfbe0be0e17a157aa5c818"
          }}
          style={styles.ImageBackground_1_326}
        />
      </View>
      <View style={styles.View_1_330}>
        <View style={styles.View_1_331} />
        <View style={styles.View_1_332} />
        <View style={styles.View_1_333} />
        <View style={styles.View_1_334}>
          <Text style={styles.Text_1_334}>Essen Essen</Text>
        </View>
        <View style={styles.View_1_335}>
          <Text style={styles.Text_1_335}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d7d/30e7/d4ed068aaa087382c1c49b0b7969abd4"
          }}
          style={styles.ImageBackground_1_336}
        />
      </View>
      <View style={styles.View_1_340}>
        <View style={styles.View_1_341} />
        <View style={styles.View_1_342} />
        <View style={styles.View_1_343} />
        <View style={styles.View_1_344}>
          <Text style={styles.Text_1_344}>Ergo Di Pepper</Text>
        </View>
        <View style={styles.View_1_345}>
          <Text style={styles.Text_1_345}>688 8499</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a33/8868/f14d984b9929ccd5592a0a62a30f9776"
          }}
          style={styles.ImageBackground_1_346}
        />
      </View>
      <View style={styles.View_1_350}>
        <Text style={styles.Text_1_350}>E</Text>
      </View>
      <View style={styles.View_15_280}>
        <View style={styles.View_I15_280_8_182} />
        <View style={styles.View_I15_280_8_183}>
          <Text style={styles.Text_I15_280_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_289}>
        <View style={styles.View_I15_289_8_182} />
        <View style={styles.View_I15_289_8_183}>
          <Text style={styles.Text_I15_289_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_292}>
        <View style={styles.View_I15_292_15_305}>
          <View style={styles.View_I15_292_15_305_8_182} />
          <View style={styles.View_I15_292_15_305_8_183}>
            <Text style={styles.Text_I15_292_15_305_8_183}>Call</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_295}>
        <View style={styles.View_I15_295_8_182} />
        <View style={styles.View_I15_295_8_183}>
          <Text style={styles.Text_I15_295_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_298}>
        <View style={styles.View_I15_298_15_305}>
          <View style={styles.View_I15_298_15_305_8_182} />
          <View style={styles.View_I15_298_15_305_8_183}>
            <Text style={styles.Text_I15_298_15_305_8_183}>Call</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_336}>
        <View style={styles.View_I15_336_15_305}>
          <View style={styles.View_I15_336_15_305_8_182} />
          <View style={styles.View_I15_336_15_305_8_183}>
            <Text style={styles.Text_I15_336_15_305_8_183}>Call</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_349}>
        <View style={styles.View_I15_349_8_182} />
        <View style={styles.View_I15_349_8_183}>
          <Text style={styles.Text_I15_349_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_352}>
        <View style={styles.View_I15_352_8_182} />
        <View style={styles.View_I15_352_8_183}>
          <Text style={styles.Text_I15_352_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_355}>
        <View style={styles.View_I15_355_8_182} />
        <View style={styles.View_I15_355_8_183}>
          <Text style={styles.Text_I15_355_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_358}>
        <View style={styles.View_I15_358_8_182} />
        <View style={styles.View_I15_358_8_183}>
          <Text style={styles.Text_I15_358_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_15_361}>
        <View style={styles.View_I15_361_8_182} />
        <View style={styles.View_I15_361_8_183}>
          <Text style={styles.Text_I15_361_8_183}>Call</Text>
        </View>
      </View>
      <View style={styles.View_1_367}>
        <View style={styles.View_I1_367_1_4} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_2"))
          }
        >
          <View style={styles.View_I1_367_8_545}>
            <View style={styles.View_I1_367_51_578}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac1a/61e1/a9072cb1b0432db767518533784d9aca"
                }}
                style={styles.ImageBackground_I1_367_51_578_50_3}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I1_367_8_654}>
          <View style={styles.View_I1_367_51_958}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c75/d6d9/b403e41cf5c8ce30c0b04c19c8ac223a"
              }}
              style={styles.ImageBackground_I1_367_51_958_50_32}
            />
          </View>
          <View style={styles.View_I1_367_1_35} />
        </View>
        <View style={styles.View_I1_367_8_767}>
          <View style={styles.View_I1_367_51_1088}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6617/51fb/9e60e62825a3f11ce3d985b5244576dc"
              }}
              style={styles.ImageBackground_I1_367_51_1088_50_19}
            />
          </View>
        </View>
        <View style={styles.View_I1_367_10_0}>
          <View style={styles.View_I1_367_51_1176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfcc/37ea/cf0478335163e6e69477a47efa01c004"
              }}
              style={styles.ImageBackground_I1_367_51_1176_50_27}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1_351}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
          }}
          style={styles.ImageBackground_1_352}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
          }}
          style={styles.ImageBackground_1_356}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
          }}
          style={styles.ImageBackground_1_360}
        />
        <View style={styles.View_1_365}>
          <View style={styles.View_1_366}>
            <Text style={styles.Text_1_366}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("151.775956284153%") },
  View_1_216: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("11.33879781420765%")
  },
  Text_1_216: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_1_217: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.224043715846996%")
  },
  View_1_218: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_219: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_220: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_221: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633874%")
  },
  Text_1_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_222: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.9617486338797825%")
  },
  Text_1_222: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_223: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633874%")
  },
  View_1_227: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.46448087431694%")
  },
  View_1_228: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_229: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_230: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_231: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633874%")
  },
  Text_1_231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_232: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_232: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_233: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633874%")
  },
  View_15_283: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_283_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_283_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054627%")
  },
  Text_I15_283_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_237: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.21857923497268%")
  },
  Text_1_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_238: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.98907103825137%")
  },
  View_1_239: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469938%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_240: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_241: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_242: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633839%")
  },
  Text_1_242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_243: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_243: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_244: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_1_248: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.229508196721305%")
  },
  View_1_249: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469952%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_250: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_251: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_252: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.092896174863391%")
  },
  Text_1_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_253: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879786%")
  },
  Text_1_253: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_254: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.092896174863391%")
  },
  View_1_258: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.46994535519126%")
  },
  View_1_259: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_260: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_261: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_262: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633839%")
  },
  Text_1_262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_263: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_263: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_264: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_1_268: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("40.98360655737705%")
  },
  Text_1_268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_269: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.99453551912568%")
  },
  View_1_270: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_271: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_272: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_273: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.092896174863398%")
  },
  Text_1_273: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_274: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_274: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_275: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_1_279: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.23497267759562%")
  },
  View_1_280: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469959%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_281: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_282: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185794252%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_283: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.092896174863398%")
  },
  Text_1_283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_284: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879793%")
  },
  Text_1_284: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_285: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_15_332: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("1.639344262295097%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_332_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_332_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%")
  },
  Text_I15_332_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_289: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.47540983606558%")
  },
  View_1_290: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_291: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_292: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_293: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633839%")
  },
  Text_1_293: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_294: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_294: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_295: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_1_299: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.71584699453553%")
  },
  View_1_300: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.2404371584699305%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_301: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_302: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_303: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633839%")
  },
  Text_1_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_304: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_304: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_305: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_1_309: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.98907103825137%")
  },
  Text_1_309: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_310: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107.24043715846993%")
  },
  View_1_311: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469959%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_312: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_313: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185794252%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_314: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.092896174863398%")
  },
  Text_1_314: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_315: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879793%")
  },
  Text_1_315: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_316: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_1_320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114.48087431693989%")
  },
  View_1_321: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_322: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_323: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_324: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.092896174863398%")
  },
  Text_1_324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_325: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_325: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_326: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.092896174863398%")
  },
  View_1_330: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("121.72131147540983%")
  },
  View_1_331: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_332: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_333: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_334: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633839%")
  },
  Text_1_334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_335: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879793%")
  },
  Text_1_335: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_336: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_1_340: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("128.96174863387978%")
  },
  View_1_341: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_342: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  View_1_343: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_344: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("1.0928961748633697%")
  },
  Text_1_344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_345: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("3.961748633879779%")
  },
  Text_1_345: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_346: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("5.191256830601093%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.0928961748633697%")
  },
  View_1_350: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("104.23497267759562%")
  },
  Text_1_350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_280: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("24.863387978142075%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_280_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_280_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054662%")
  },
  Text_I15_280_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_289: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("45.62841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_289_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_289_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054627%")
  },
  Text_I15_289_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_292: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_292_15_305: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_292_15_305_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 194, 202, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I15_292_15_305_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054769%")
  },
  Text_I15_292_15_305_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_295: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_295_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_295_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%")
  },
  Text_I15_295_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_298: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("73.63387978142076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_298_15_305: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_298_15_305_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 194, 202, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I15_298_15_305_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I15_298_15_305_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_336: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("88.11475409836066%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_336_15_305: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_336_15_305_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 194, 202, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I15_336_15_305_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%")
  },
  Text_I15_336_15_305_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_349: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("95.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_349_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_349_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I15_349_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_352: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("108.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_352_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_352_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I15_352_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_355: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("116.12021857923497%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_355_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_355_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I15_355_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_358: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("123.36065573770492%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_358_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_358_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%")
  },
  Text_I15_358_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_361: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("130.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_361_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
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
  View_I15_361_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I15_361_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_367: {
    width: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("140.98360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1_367_1_4: {
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
  View_I1_367_8_545: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109395%")
  },
  View_I1_367_51_578: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_367_51_578_50_3: {
    flexGrow: 1,
    width: wp("6.401202901204426%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316848%")
  },
  View_I1_367_8_654: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("1.9125683060109395%")
  },
  View_I1_367_51_958: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_367_51_958_50_32: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.5500912483924076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7121744791666629%"),
    top: hp("0.9107495917648691%")
  },
  View_I1_367_1_35: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333343%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1_367_8_767: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("1.9125683060109395%")
  },
  View_I1_367_51_1088: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_367_51_1088_50_19: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.9143896259245325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166643%"),
    top: hp("0.7285946705302138%")
  },
  View_I1_367_10_0: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109395%")
  },
  View_I1_367_51_1176: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1_367_51_1176_50_27: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("3.6429874232557955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166714%"),
    top: hp("0.3643015043331559%")
  },
  View_1_351: {
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
  ImageBackground_1_352: {
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
  ImageBackground_1_356: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("2.3675803929730193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.18499348958333%")
  },
  ImageBackground_1_360: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413477663133965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%")
  },
  View_1_365: {
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
  View_1_366: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158471%")
  },
  Text_1_366: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000003576278683,
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
