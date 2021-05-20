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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b5/777f/eecc8299ce0d10ded3269f90dbd55387"
        }}
        style={styles.ImageBackground_15_583}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e3/f5d6/e425b2c7bd61e6f8976ad9a999d6f6d8"
        }}
        style={styles.ImageBackground_15_585}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e836/0d95/00ad7f07f6d3e2f39efc34adc7ed896a"
        }}
        style={styles.ImageBackground_15_587}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb7b/9638/ee8b9e820a1a03262cf820a0f3c42dd5"
        }}
        style={styles.ImageBackground_15_589}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4be/cd03/cf5e4d4cd7fc684c3df95871bdbd356a"
        }}
        style={styles.ImageBackground_15_591}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b13/37dc/454d2840609693db2cada584820b6f20"
        }}
        style={styles.ImageBackground_15_593}
      />
      <View style={styles.View_136_336}>
        <Text style={styles.Text_136_336}>Design System</Text>
      </View>
      <View style={styles.View_136_337}>
        <Text style={styles.Text_136_337}>Colour</Text>
      </View>
      <View style={styles.View_136_338}>
        <Text style={styles.Text_136_338}>Icons</Text>
      </View>
      <View style={styles.View_136_339}>
        <Text style={styles.Text_136_339}>Avatars</Text>
      </View>
      <View style={styles.View_136_340}>
        <Text style={styles.Text_136_340}>Buttons</Text>
      </View>
      <View style={styles.View_136_341}>
        <Text style={styles.Text_136_341}>UI Components</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aee5/8710/8d67e0fb0d36a419b48af39c69d25cc0"
        }}
        style={styles.ImageBackground_46_240}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b58c/13fb/33edfa566ff44813a58c982b16e62bbf"
        }}
        style={styles.ImageBackground_46_243}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf17/8ebc/bed0e3eae3f8c0292f71ed8e858b02cb"
        }}
        style={styles.ImageBackground_46_246}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1a1/b0b1/a7a10561fe88a2b4fa80cfb2b77e7207"
        }}
        style={styles.ImageBackground_46_251}
      />
      <View style={styles.View_46_254}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c88/975f/7af081b717efafbd3df015a6f9bd6f7c"
          }}
          style={styles.ImageBackground_46_255}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d1a/b5be/052791d79b9292d0ddba40ac59db07e8"
        }}
        style={styles.ImageBackground_46_314}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5957/9640/615dff84fde68c994f21e1eaf744c99f"
        }}
        style={styles.ImageBackground_46_316}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3320/4385/fbd5aad5b0557d920e5fd4e3f940edc5"
        }}
        style={styles.ImageBackground_46_324}
      />
      <View style={styles.View_46_258}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dce/eb9b/5b3356eb31a1d0d029f821577a7011ce"
          }}
          style={styles.ImageBackground_46_259}
        />
      </View>
      <View style={styles.View_51_568}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e268/ac52/2e95fc9ae0c5a26a326b0b6867897c3f"
          }}
          style={styles.ImageBackground_50_3}
        />
      </View>
      <View style={styles.View_51_569}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7828/c915/0b7432ee6636814d1a420863a7b35219"
          }}
          style={styles.ImageBackground_50_27}
        />
      </View>
      <View style={styles.View_51_570}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff00/810e/07b5246ee987f9ce7facc9b9a50fa015"
          }}
          style={styles.ImageBackground_50_32}
        />
      </View>
      <View style={styles.View_51_571}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd74/0dbd/7d50bb2368a3bafcf8bbf7a5fb922fb2"
          }}
          style={styles.ImageBackground_50_19}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387a/b6d2/c7322f958174a2507f6fcd575413d012"
        }}
        style={styles.ImageBackground_51_572}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4736/87d0/fff26ee01df02b183c18ebf04833ef63"
        }}
        style={styles.ImageBackground_51_573}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c282/eca5/3e45481d078fae98761e4a7f10b93a47"
        }}
        style={styles.ImageBackground_51_574}
      />
      <View style={styles.View_51_576}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f502/d729/57dd932e35dad833a184e2e71b5b1486"
          }}
          style={styles.ImageBackground_50_23}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e9f/81f4/cf5130420fd016761ac8fe77afad10b4"
        }}
        style={styles.ImageBackground_51_577}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/454a/6dff/2c2db25f6427f4376ae8fc903c3c9032"
        }}
        style={styles.ImageBackground_59_202}
      />
      <View style={styles.View_51_575}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf1/df5f/2c24b42c438ebd1ef07cc66b44c947d4"
          }}
          style={styles.ImageBackground_50_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be3d/440d/0212684cf84a471b894e3beb6919e84b"
        }}
        style={styles.ImageBackground_46_262}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b552/88b1/fefa1d87b4007ed18a8f7ec787626770"
        }}
        style={styles.ImageBackground_108_262}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dec8/1ce3/0702df5c3078cfb4bd81f2f6ba5eb960"
        }}
        style={styles.ImageBackground_46_331}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3594/1b1b/6697d1b2e90296ae93735e42e4ec93fa"
        }}
        style={styles.ImageBackground_46_333}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb78/91a0/ce16d7b9f3f2f5485b61ba909220dd9f"
        }}
        style={styles.ImageBackground_46_334}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae53/b5db/067add25e81facf9f009594debc858d2"
        }}
        style={styles.ImageBackground_46_335}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70a9/a474/eaa40eec2d160692d780a685a96bd56e"
        }}
        style={styles.ImageBackground_46_336}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb78/91a0/ce16d7b9f3f2f5485b61ba909220dd9f"
        }}
        style={styles.ImageBackground_46_337}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8afb/25dd/60e3d185d22a828a567d47db60db0520"
        }}
        style={styles.ImageBackground_46_338}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d9e/bc11/ccea764060512bd2d004c02966c441e5"
        }}
        style={styles.ImageBackground_46_339}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bc3/a4b2/29434d8c6a9e819c48f54b6a2fd698db"
        }}
        style={styles.ImageBackground_46_340}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaf/39ee/ee7e1ce208c43540420685829e737481"
        }}
        style={styles.ImageBackground_46_341}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80bd/3472/6a18d3f5d906e51a58a18e4b1ee14dd1"
        }}
        style={styles.ImageBackground_46_343}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28cd/50e5/de01eede30bdef0b0f1039f7ea73e59d"
        }}
        style={styles.ImageBackground_46_344}
      />
      <View style={styles.View_15_277}>
        <View style={styles.View_15_274} />
        <View style={styles.View_15_275}>
          <Text style={styles.Text_15_275}>CALL</Text>
        </View>
      </View>
      <View style={styles.View_15_327}>
        <View style={styles.View_15_324}>
          <View style={styles.View_I15_324_15_274} />
          <View style={styles.View_I15_324_15_275}>
            <Text style={styles.Text_I15_324_15_275}>CALL</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_318}>
        <View style={styles.View_I15_318_15_274} />
        <View style={styles.View_I15_318_15_275}>
          <Text style={styles.Text_I15_318_15_275}>CALL</Text>
        </View>
      </View>
      <View style={styles.View_8_241}>
        <View style={styles.View_8_182} />
        <View style={styles.View_8_183}>
          <Text style={styles.Text_8_183}>CALL</Text>
        </View>
      </View>
      <View style={styles.View_15_308}>
        <View style={styles.View_15_305}>
          <View style={styles.View_I15_305_8_182} />
          <View style={styles.View_I15_305_8_183}>
            <Text style={styles.Text_I15_305_8_183}>CALL</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_304}>
        <View style={styles.View_15_301}>
          <View style={styles.View_I15_301_8_182} />
          <View style={styles.View_I15_301_8_183}>
            <Text style={styles.Text_I15_301_8_183}>CALL</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_240}>
        <View style={styles.View_8_186} />
        <View style={styles.View_8_189}>
          <Text style={styles.Text_8_189}>Type in a name ...</Text>
        </View>
      </View>
      <View style={styles.View_15_581}>
        <View style={styles.View_15_532} />
        <View style={styles.View_15_535}>
          <Text style={styles.Text_15_535}>Sláðu inn nafn vinar ...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23fb/f8bc/40281403e635c596b6094a350d71866f"
          }}
          style={styles.ImageBackground_15_540}
        />
        <View style={styles.View_15_541}>
          <View style={styles.View_15_544}>
            <Text style={styles.Text_15_544}>Sjá alla vini</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23fb/f8bc/40281403e635c596b6094a350d71866f"
          }}
          style={styles.ImageBackground_15_546}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23fb/f8bc/40281403e635c596b6094a350d71866f"
          }}
          style={styles.ImageBackground_15_551}
        />
        <View style={styles.View_46_222}>
          <View style={styles.View_I46_222_46_215} />
          <View style={styles.View_I46_222_46_211}>
            <Text style={styles.Text_I46_222_46_211}>Leonardo DiCaprio </Text>
          </View>
          <View style={styles.View_I46_222_46_212}>
            <Text style={styles.Text_I46_222_46_212}>Son</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4f4/cba2/d501f78a0042f8187fe7b9b79ec0c90c"
            }}
            style={styles.ImageBackground_I46_222_46_213}
          />
        </View>
        <View style={styles.View_46_227}>
          <View style={styles.View_I46_227_46_215} />
          <View style={styles.View_I46_227_46_211}>
            <Text style={styles.Text_I46_227_46_211}>Michael Corillo</Text>
          </View>
          <View style={styles.View_I46_227_46_212}>
            <Text style={styles.Text_I46_227_46_212}>Friend</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8acc/b6a9/a9ba2630a681f3a683d7899c90d30644"
            }}
            style={styles.ImageBackground_I46_227_46_213}
          />
        </View>
        <View style={styles.View_46_232}>
          <View style={styles.View_I46_232_46_215} />
          <View style={styles.View_I46_232_46_211}>
            <Text style={styles.Text_I46_232_46_211}>Sam Sanders</Text>
          </View>
          <View style={styles.View_I46_232_46_212}>
            <Text style={styles.Text_I46_232_46_212}>Friend</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/761c/44b4/eefcbf99b7a03d08ccb78cfc3d71cb91"
            }}
            style={styles.ImageBackground_I46_232_46_213}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a2/1e98/a4d2685a793b8b21bf919907f717faf6"
          }}
          style={styles.ImageBackground_59_74}
        />
      </View>
      <View style={styles.View_46_216}>
        <View style={styles.View_46_215} />
        <View style={styles.View_46_211}>
          <Text style={styles.Text_46_211}>Leonardo DiCaprio</Text>
        </View>
        <View style={styles.View_46_212}>
          <Text style={styles.Text_46_212}>Son</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4f4/cba2/d501f78a0042f8187fe7b9b79ec0c90c"
          }}
          style={styles.ImageBackground_46_213}
        />
      </View>
      <View style={styles.View_108_271}>
        <View style={styles.View_108_249} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f22/aebd/250fb152bdb5caeec01c7fa608787aa3"
          }}
          style={styles.ImageBackground_108_270}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37f6/43ea/0765c2949f3e12088e57aadaa686dcd0"
          }}
          style={styles.ImageBackground_108_250}
        />
        <View style={styles.View_108_251}>
          <Text style={styles.Text_108_251}>Melissa Andrews</Text>
        </View>
        <View style={styles.View_108_252}>
          <Text style={styles.Text_108_252}>Model</Text>
        </View>
        <View style={styles.View_108_253}>
          <View style={styles.View_I108_253_8_182} />
          <View style={styles.View_I108_253_8_183}>
            <Text style={styles.Text_I108_253_8_183}>Add friend</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3470/6cf5/cb7425fec5b05368110f344c8828013f"
          }}
          style={styles.ImageBackground_108_263}
        />
      </View>
      <View style={styles.View_108_13} />
      <View style={styles.View_1_3}>
        <View style={styles.View_1_4} />
        <View style={styles.View_8_545}>
          <View style={styles.View_51_578}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac1a/61e1/a9072cb1b0432db767518533784d9aca"
              }}
              style={styles.ImageBackground_I51_578_50_3}
            />
          </View>
        </View>
        <View style={styles.View_8_654}>
          <View style={styles.View_51_958}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c75/d6d9/b403e41cf5c8ce30c0b04c19c8ac223a"
              }}
              style={styles.ImageBackground_I51_958_50_32}
            />
          </View>
        </View>
        <View style={styles.View_8_767}>
          <View style={styles.View_51_1088}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6617/51fb/9e60e62825a3f11ce3d985b5244576dc"
              }}
              style={styles.ImageBackground_I51_1088_50_19}
            />
          </View>
        </View>
        <View style={styles.View_10_0}>
          <View style={styles.View_51_1176}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfcc/37ea/cf0478335163e6e69477a47efa01c004"
              }}
              style={styles.ImageBackground_I51_1176_50_27}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("228.68852459016392%") },
  ImageBackground_15_583: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_15_585: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_15_587: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_15_589: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_15_591: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_15_593: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("19.53551912568306%")
  },
  View_136_336: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("5.737704918032787%")
  },
  Text_136_336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_337: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("14.071038251366119%")
  },
  Text_136_337: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_338: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("28.278688524590162%")
  },
  Text_136_338: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_339: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("56.9672131147541%")
  },
  Text_136_339: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_340: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("79.50819672131148%")
  },
  Text_136_340: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_341: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("133.0601092896175%")
  },
  Text_136_341: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_46_240: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  ImageBackground_46_243: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%")
  },
  ImageBackground_46_246: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%")
  },
  ImageBackground_46_251: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%")
  },
  View_46_254: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%"),
    top: hp("33.7431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_46_255: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_46_314: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%")
  },
  ImageBackground_46_316: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  ImageBackground_46_324: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%")
  },
  View_46_258: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("33.7431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_46_259: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666558%"),
    top: hp("0.546448087431699%")
  },
  View_51_568: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_3: {
    flexGrow: 1,
    width: wp("4.800902303059896%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0.4098360655737707%")
  },
  View_51_569: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_27: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0.2732240437158495%")
  },
  View_51_570: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_32: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53414713541666%"),
    top: hp("0.6830601092896202%")
  },
  View_51_571: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_19: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_51_572: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%")
  },
  ImageBackground_51_573: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%")
  },
  ImageBackground_51_574: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.53333333333333%")
  },
  View_51_576: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_23: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.732427784653961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_51_577: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%")
  },
  ImageBackground_59_202: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("49.31693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%")
  },
  View_51_575: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("44.26229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_7: {
    flexGrow: 1,
    width: wp("5.3336644490559895%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5330078125000028%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_46_262: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%")
  },
  ImageBackground_108_262: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%")
  },
  ImageBackground_46_331: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("62.431693989071036%")
  },
  ImageBackground_46_333: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("62.431693989071036%")
  },
  ImageBackground_46_334: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("62.431693989071036%")
  },
  ImageBackground_46_335: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("62.431693989071036%")
  },
  ImageBackground_46_336: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("62.431693989071036%")
  },
  ImageBackground_46_337: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("62.431693989071036%")
  },
  ImageBackground_46_338: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("69.67213114754098%")
  },
  ImageBackground_46_339: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("69.67213114754098%")
  },
  ImageBackground_46_340: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("69.67213114754098%")
  },
  ImageBackground_46_341: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("69.67213114754098%")
  },
  ImageBackground_46_343: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.53333333333333%"),
    top: hp("69.67213114754098%")
  },
  ImageBackground_46_344: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("69.67213114754098%")
  },
  View_15_277: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("84.97267759562843%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_274: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
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
  View_15_275: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688394%")
  },
  Text_15_275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_327: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("103.27868852459017%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_324: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_324_15_274: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
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
  View_I15_324_15_275: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%")
  },
  Text_I15_324_15_275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_318: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("94.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I15_318_15_274: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 43, 155, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I15_318_15_275: {
    flexGrow: 1,
    width: wp("48.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.0491803278688536%")
  },
  Text_I15_318_15_275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_241: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("113.11475409836065%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_182: {
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
  View_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.956284153005484%")
  },
  Text_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_308: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("124.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_305: {
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
  View_I15_305_8_182: {
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
  View_I15_305_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I15_305_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_304: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("118.85245901639345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_301: {
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
  View_I15_301_8_182: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 43, 155, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_I15_301_8_183: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%")
  },
  Text_I15_301_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_240: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("146.9945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_186: {
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
  View_8_189: {
    flexGrow: 1,
    width: wp("36.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.912568306010911%")
  },
  Text_8_189: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_581: {
    width: wp("87.2%"),
    height: hp("30.05464480874317%"),
    top: hp("155.87431693989072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_532: {
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
  View_15_535: {
    flexGrow: 1,
    width: wp("73.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.912568306010911%")
  },
  Text_15_535: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_15_540: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("12.978142076502735%")
  },
  View_15_541: {
    flexGrow: 1,
    width: wp("25.6%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("25.819672131147513%")
  },
  View_15_544: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_15_544: {
    color: "rgba(70, 75, 196, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_15_546: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("18.44262295081967%")
  },
  ImageBackground_15_551: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("23.907103825136602%")
  },
  View_46_222: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("7.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_222_46_215: {
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
  View_I46_222_46_211: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.092896174863398%")
  },
  Text_I46_222_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_222_46_212: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("1.5027322404371546%")
  },
  Text_I46_222_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I46_222_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863398%")
  },
  View_46_227: {
    flexGrow: 1,
    width: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("13.251366120218563%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I46_227_46_215: {
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
  View_I46_227_46_211: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.092896174863398%")
  },
  Text_I46_227_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_227_46_212: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6%"),
    top: hp("1.5027322404371546%")
  },
  Text_I46_227_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I46_227_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.092896174863398%")
  },
  View_46_232: {
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
  View_I46_232_46_215: {
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
  View_I46_232_46_211: {
    flexGrow: 1,
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.0928961748633697%")
  },
  Text_I46_232_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I46_232_46_212: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6%"),
    top: hp("1.5027322404371546%")
  },
  Text_I46_232_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_I46_232_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_59_74: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666666%"),
    top: hp("1.912568306010911%")
  },
  View_46_216: {
    width: wp("78.66666666666666%"),
    minWidth: wp("78.66666666666666%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("140.0273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_46_215: {
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
  View_46_211: {
    flexGrow: 1,
    width: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1.0928961748633697%")
  },
  Text_46_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_46_212: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("1.5027322404371546%")
  },
  Text_46_212: {
    color: "rgba(166, 166, 166, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_46_213: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748633697%")
  },
  View_108_271: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("190.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_108_249: {
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
  ImageBackground_108_270: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_108_250: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("2.1857923497267677%")
  },
  View_108_251: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("12.568306010928978%")
  },
  Text_108_251: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_252: {
    flexGrow: 1,
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("14.890710382513646%")
  },
  Text_108_252: {
    color: "rgba(193, 194, 202, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_108_253: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("18.579234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I108_253_8_182: {
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
  View_I108_253_8_183: {
    flexGrow: 1,
    width: wp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%")
  },
  Text_I108_253_8_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_263: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("1.092896174863398%")
  },
  View_108_13: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.199999999999996%"),
    top: hp("190.43715846994536%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("217.89617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_4: {
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
  View_8_545: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.9125683060109395%")
  },
  View_51_578: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I51_578_50_3: {
    flexGrow: 1,
    width: wp("6.401202901204426%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.5464480874316564%")
  },
  View_8_654: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.599999999999998%"),
    top: hp("1.9125683060109395%")
  },
  View_51_958: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I51_958_50_32: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.5500912483924076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7121744791666629%"),
    top: hp("0.9107412536287427%")
  },
  View_8_767: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("1.9125683060109395%")
  },
  View_51_1088: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I51_1088_50_19: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("2.9143896259245325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111165364583343%"),
    top: hp("0.7286030086662834%")
  },
  View_10_0: {
    flexGrow: 1,
    width: wp("17.866666666666667%"),
    height: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.9125683060109395%")
  },
  View_51_1176: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I51_1176_50_27: {
    flexGrow: 1,
    width: wp("7.111111450195312%"),
    height: hp("3.6429874232557955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111165364583343%"),
    top: hp("0.36429316619702945%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
