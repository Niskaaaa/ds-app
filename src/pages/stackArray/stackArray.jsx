import React, { Component } from "react";
import { View, Text, Canvas,Input } from "@tarojs/components";
/* import "../../AlgorithmLibrary/Algorithm";

import "../../AnimationLibrary/CustomEvents";
import "../../AnimationLibrary/UndoFunctions";
import "../../AnimationLibrary/AnimatedObject";
import "../../AnimationLibrary/AnimatedLabel";
import "../../AnimationLibrary/AnimatedCircle";
import "../../AnimationLibrary/AnimatedRectangle";
import "../../AnimationLibrary/AnimatedLinkedList";
import "../../AnimationLibrary/HighlightCircle";
import "../../AnimationLibrary/Line";
import "../../AnimationLibrary/ObjectManager";
import "../../AnimationLibrary/AnimationMain"; */
import"../../app.less"
export default class Index extends Component {
  componentWillMount() {}

  componenViewidMount() {}

  componentWillUnmount() {}

  componenViewidShow() {}

  componenViewidHide() {}

  render() {
    return (
      <View className="index">
        <View id="container">
          <View id="header">
            <h1>Stack (Array Implementaion)</h1>
          </View>

          <View id="mainContent">
            <View id="algoControlSection">
              <View id="AlgorithmSpecificControls">
                {" "}
                <Input type="Text" value="" size="6" />
                <Input type="Button" value="Push" />
                <Input type="Button" value="Pop" />
                <Input type="Button" value="Clear Stack" />
              </View>

              <Canvas id="Canvas" width="1000" height="500"></Canvas>

              <View id="generalAnimationControlSection">
                <View id="GeneralAnimationControls">
                  {" "}
                  <Input type="Button" value="Skip Back" disabled="" />
                  <Input type="Button" value="Step Back" disabled="" />
                  <Input type="Button" value="Pause" />
                  <Input type="Button" value="Step Forward" disabled="" />
                  <Input type="Button" value="Skip Forward" disabled="" />
                  <View
                    display="inline-block"
                    float="left"
                    class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                    style="width:200px"
                  >
                    <Text align="center">Animation Speed</Text> w:
                    <Input type="Text" value="1000" size="4" /> h:
                    <Input type="Text" value="500" size="4" />
                    <Input type="Button" value="Change Canvas Size" />
                    <Input type="Button" value="Move Controls" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
