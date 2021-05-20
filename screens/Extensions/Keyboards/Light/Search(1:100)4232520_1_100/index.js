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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53f5/c3b8/1c3396afe7fc7d632941957fd645d2ba"
        }}
        style={styles.ImageBackground_1_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e140/e6ae/0824d77dceed0c48335e2fe133fef66f"
        }}
        style={styles.ImageBackground_1_102}
      />
      <View style={styles.View_1_104}>
        <View style={styles.View_1_105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b5d/396f/48db4972d489b872533c88a435dc359f"
            }}
            style={styles.ImageBackground_1_106}
          />
          <View style={styles.View_1_107}>
            <Text style={styles.Text_1_107}>Search</Text>
          </View>
        </View>
        <View style={styles.View_1_108}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7d/b1ba/9849990dcceaa305db7f9973f8d0f343"
            }}
            style={styles.ImageBackground_1_109}
          />
          <View style={styles.View_1_110}>
            <Text style={styles.Text_1_110}>space</Text>
          </View>
        </View>
        <View style={styles.View_1_111}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7cf/787b/ffc9bb37021284c78de73ce314d5cd4d"
            }}
            style={styles.ImageBackground_1_112}
          />
          <View style={styles.View_1_113}>
            <Text style={styles.Text_1_113}>123</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/722f/98ee/b39b4c5c44cfd23f750c89cd79ff4d6e"
          }}
          style={styles.ImageBackground_1_114}
        />
        <View style={styles.View_1_118}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_119}
          />
          <View style={styles.View_1_120}>
            <Text style={styles.Text_1_120}>m</Text>
          </View>
        </View>
        <View style={styles.View_1_121}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_122}
          />
          <View style={styles.View_1_123}>
            <Text style={styles.Text_1_123}>n</Text>
          </View>
        </View>
        <View style={styles.View_1_124}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_125}
          />
          <View style={styles.View_1_126}>
            <Text style={styles.Text_1_126}>b</Text>
          </View>
        </View>
        <View style={styles.View_1_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_128}
          />
          <View style={styles.View_1_129}>
            <Text style={styles.Text_1_129}>v</Text>
          </View>
        </View>
        <View style={styles.View_1_130}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_131}
          />
          <View style={styles.View_1_132}>
            <Text style={styles.Text_1_132}>c</Text>
          </View>
        </View>
        <View style={styles.View_1_133}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_134}
          />
          <View style={styles.View_1_135}>
            <Text style={styles.Text_1_135}>x</Text>
          </View>
        </View>
        <View style={styles.View_1_136}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_137}
          />
          <View style={styles.View_1_138}>
            <Text style={styles.Text_1_138}>z</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ea/e05a/c9c4e546138d91d66af46d4e06ce7278"
          }}
          style={styles.ImageBackground_1_139}
        />
        <View style={styles.View_1_142}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_143}
          />
          <View style={styles.View_1_144}>
            <Text style={styles.Text_1_144}>l</Text>
          </View>
        </View>
        <View style={styles.View_1_145}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_146}
          />
          <View style={styles.View_1_147}>
            <Text style={styles.Text_1_147}>k</Text>
          </View>
        </View>
        <View style={styles.View_1_148}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_149}
          />
          <View style={styles.View_1_150}>
            <Text style={styles.Text_1_150}>j</Text>
          </View>
        </View>
        <View style={styles.View_1_151}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_152}
          />
          <View style={styles.View_1_153}>
            <Text style={styles.Text_1_153}>h</Text>
          </View>
        </View>
        <View style={styles.View_1_154}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_155}
          />
          <View style={styles.View_1_156}>
            <Text style={styles.Text_1_156}>g</Text>
          </View>
        </View>
        <View style={styles.View_1_157}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_158}
          />
          <View style={styles.View_1_159}>
            <Text style={styles.Text_1_159}>f</Text>
          </View>
        </View>
        <View style={styles.View_1_160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_161}
          />
          <View style={styles.View_1_162}>
            <Text style={styles.Text_1_162}>d</Text>
          </View>
        </View>
        <View style={styles.View_1_163}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_164}
          />
          <View style={styles.View_1_165}>
            <Text style={styles.Text_1_165}>s</Text>
          </View>
        </View>
        <View style={styles.View_1_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_167}
          />
          <View style={styles.View_1_168}>
            <Text style={styles.Text_1_168}>a</Text>
          </View>
        </View>
        <View style={styles.View_1_169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_170}
          />
          <View style={styles.View_1_171}>
            <Text style={styles.Text_1_171}>p</Text>
          </View>
        </View>
        <View style={styles.View_1_172}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_173}
          />
          <View style={styles.View_1_174}>
            <Text style={styles.Text_1_174}>o</Text>
          </View>
        </View>
        <View style={styles.View_1_175}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_176}
          />
          <View style={styles.View_1_177}>
            <Text style={styles.Text_1_177}>i</Text>
          </View>
        </View>
        <View style={styles.View_1_178}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_179}
          />
          <View style={styles.View_1_180}>
            <Text style={styles.Text_1_180}>u</Text>
          </View>
        </View>
        <View style={styles.View_1_181}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_182}
          />
          <View style={styles.View_1_183}>
            <Text style={styles.Text_1_183}>y</Text>
          </View>
        </View>
        <View style={styles.View_1_184}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_185}
          />
          <View style={styles.View_1_186}>
            <Text style={styles.Text_1_186}>t</Text>
          </View>
        </View>
        <View style={styles.View_1_187}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_188}
          />
          <View style={styles.View_1_189}>
            <Text style={styles.Text_1_189}>r</Text>
          </View>
        </View>
        <View style={styles.View_1_190}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_191}
          />
          <View style={styles.View_1_192}>
            <Text style={styles.Text_1_192}>e</Text>
          </View>
        </View>
        <View style={styles.View_1_193}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_194}
          />
          <View style={styles.View_1_195}>
            <Text style={styles.Text_1_195}>w</Text>
          </View>
        </View>
        <View style={styles.View_1_196}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
            }}
            style={styles.ImageBackground_1_197}
          />
          <View style={styles.View_1_198}>
            <Text style={styles.Text_1_198}>q</Text>
          </View>
        </View>
        <View style={styles.View_1_199}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
            }}
            style={styles.ImageBackground_1_200}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be1c/a5b3/b1119cf1ff8a2719e9285327d05857c6"
            }}
            style={styles.ImageBackground_1_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e2/1053/f5e894cadf91e9ccf68b455df9768136"
            }}
            style={styles.ImageBackground_1_207}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
          }}
          style={styles.ImageBackground_1_208}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_1_101: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_102: {
    width: wp("100%"),
    height: hp("11.683848797250858%"),
    top: hp("88.31615120274914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_104: {
    width: wp("98.4%"),
    height: hp("88.14432989690721%"),
    top: hp("3.436426116838488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%")
  },
  View_1_105: {
    width: wp("23.466666666666665%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("54.98281786941581%")
  },
  ImageBackground_1_106: {
    width: wp("23.466666666666665%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_107: {
    width: wp("13.600000000000001%"),
    top: hp("3.436426116838483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666677%")
  },
  Text_1_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_1_108: {
    width: wp("48.53333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("54.98281786941581%")
  },
  ImageBackground_1_109: {
    width: wp("48.53333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_110: {
    width: wp("11.733333333333333%"),
    top: hp("3.436426116838483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%")
  },
  Text_1_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_1_111: {
    width: wp("23.200000000000003%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.98281786941581%")
  },
  ImageBackground_1_112: {
    width: wp("23.200000000000003%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_113: {
    width: wp("7.199999999999999%"),
    top: hp("3.436426116838483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999999%")
  },
  Text_1_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  ImageBackground_1_114: {
    width: wp("11.200000000000001%"),
    height: hp("14.432989690721648%"),
    top: hp("37.113402061855666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_1_118: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_119: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_120: {
    width: wp("5.6000000000000005%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%")
  },
  Text_1_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_121: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.93333333333334%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_122: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_123: {
    width: wp("3.733333333333334%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_1_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_124: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_125: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_126: {
    width: wp("4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_1_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_127: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93333333333334%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_128: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_129: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  Text_1_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_130: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_131: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_132: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  Text_1_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_133: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.933333333333334%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_134: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_135: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  Text_1_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_136: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("37.113402061855666%")
  },
  ImageBackground_1_137: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_138: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%")
  },
  Text_1_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_139: {
    width: wp("11.200000000000001%"),
    height: hp("14.432989690721648%"),
    top: hp("37.113402061855666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_142: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.93333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_143: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_144: {
    width: wp("1.6%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%")
  },
  Text_1_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_145: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_146: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_147: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%")
  },
  Text_1_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_148: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.93333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_149: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_150: {
    width: wp("1.6%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  Text_1_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_151: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_152: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_153: {
    width: wp("3.733333333333334%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_1_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_154: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_155: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_156: {
    width: wp("4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  Text_1_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_157: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_158: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_159: {
    width: wp("2.4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%")
  },
  Text_1_159: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_160: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.933333333333334%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_161: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_162: {
    width: wp("4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  Text_1_162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_163: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.066666666666666%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_164: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_165: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  Text_1_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_166: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("18.556701030927833%")
  },
  ImageBackground_1_167: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_168: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%")
  },
  Text_1_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_169: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("0%")
  },
  ImageBackground_1_170: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_171: {
    width: wp("4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_1_171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_172: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.86666666666666%"),
    top: hp("0%")
  },
  ImageBackground_1_173: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_174: {
    width: wp("3.733333333333334%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  Text_1_174: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_175: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("0%")
  },
  ImageBackground_1_176: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_177: {
    width: wp("1.6%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%")
  },
  Text_1_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_178: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.866666666666674%"),
    top: hp("0%")
  },
  ImageBackground_1_179: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_180: {
    width: wp("3.733333333333334%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  Text_1_180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_181: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    top: hp("0%")
  },
  ImageBackground_1_182: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_183: {
    width: wp("3.4666666666666663%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%")
  },
  Text_1_183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_184: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.86666666666667%"),
    top: hp("0%")
  },
  ImageBackground_1_185: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_186: {
    width: wp("2.4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  Text_1_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_187: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    top: hp("0%")
  },
  ImageBackground_1_188: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_189: {
    width: wp("2.4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  Text_1_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_190: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.866666666666667%"),
    top: hp("0%")
  },
  ImageBackground_1_191: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_192: {
    width: wp("3.733333333333334%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%")
  },
  Text_1_192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_193: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_1_194: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_195: {
    width: wp("4.8%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  Text_1_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_196: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_197: {
    width: wp("8.533333333333333%"),
    height: hp("14.432989690721648%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_198: {
    width: wp("4%"),
    top: hp("2.0618556701030926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%")
  },
  Text_1_198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_199: {
    width: wp("4.000001525878906%"),
    height: hp("8.59016995249745%"),
    top: hp("79.3823451930305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  ImageBackground_1_200: {
    width: wp("4.000001525878906%"),
    height: hp("5.040091747270827%"),
    top: hp("3.55008574285867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_206: {
    width: wp("2.40197270711263%"),
    height: hp("6.1835115308204465%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999837239583343%")
  },
  ImageBackground_1_207: {
    width: wp("1.5129168192545572%"),
    height: hp("5.0400963353946855%"),
    top: hp("0.5729753946520617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2443033854166714%")
  },
  ImageBackground_1_208: {
    width: wp("7.066666666666667%"),
    height: hp("9.106529209621993%"),
    top: hp("79.03780068728521%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7333333333333325%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
