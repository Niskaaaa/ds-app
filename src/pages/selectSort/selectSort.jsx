import React, { Component } from "react";
import { View, Text, Canvas, Input } from "@tarojs/components";
import Script from "react-load-script";
import Taro from "@tarojs/taro";
import { AtButton, AtInput, AtForm } from "taro-ui";
import './style.scss'


export default class selectSort extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      value: "",
    };
  }
  handleChange(value) {
    this.setState({
      value,
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }
  componentWillMount() {
    const that = this;
    Taro.getSystemInfo({
      success: function (res) {
        that.setState({
          width: res.screenWidth,
          height: res.screenHeight * 0.9,
        });
      },
    });
  }

  componentDidMount() {
    this.createCanvas();
  }

  createCanvas() {
    const { defaultWidth, defaultHeight, screenWidth } = this.state;
    let i = 100;
    let height = 0;
    const cvsCtx = Taro.createCanvasContext("poster", this.$scope);
    cvsCtx.setFillStyle("white");
    cvsCtx.fillRect(0, 0, screenWidth, defaultHeight + height);
    cvsCtx.setFontSize(14);
    cvsCtx.fillStyle = "black";
    cvsCtx.fillRect(0, 0, 40, 40 + height);
    cvsCtx.setFillStyle("black");
    cvsCtx.fillText("名称：", 20, 25 + height);
    cvsCtx.strokeStyle = "#eee"; //横线颜色
    cvsCtx.fillStyle = "#eee";
    cvsCtx.draw();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="sort">
        <View style={{ height: `20PX0`, display: "inline-block" }}>
          <View className="at-row at-row__justify--around">
            <AtInput
              name="value"
              title="输入数组"
              type="text"
              placeholder="请以空格间隔"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              className="at-col at-col-7"
            />

            <AtButton className="at-col at-col-3" >
              确认生成
            </AtButton>
          
          </View>

          <View className="at-row at-row__justify--around">
            <AtButton type="primary" className="at-col at-col-5">
              生成随机数组
            </AtButton>
            <View className="at-col at-col-6">Around</View>
          </View>
          <Canvas
            canvasId="poster"
            style={{
              width: `${this.state.width}PX`,
              height: `${this.state.height}PX`,
            }}
          />
        </View>
      </View>
    );
  }
}
