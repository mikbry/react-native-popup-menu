import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import { debug } from './logger.js';

export default class MenuTrigger extends Component {

  _onPress() {
    debug('trigger onPress');
    this.props.onPress && this.props.onPress();
    this.context.menuActions.openMenu(this.props.menuName);
  }

  render() {
    const { disabled, onRef, text, children, style, styles, ...other } = this.props;
    const onPress = () => !disabled && this._onPress();
    return (
      <TouchableWithoutFeedback onPress={onPress} style={styles.triggerTouchable}>
        <View {...other} style={[styles.triggerWrapper, style]} ref={onRef} collapsable={false}>
          {text ? <Text style={styles.triggerText}>{text}</Text> : children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

MenuTrigger.propTypes = {
  disabled: React.PropTypes.bool,
  text: React.PropTypes.string,
  onPress: React.PropTypes.func,
  styles: React.PropTypes.object,
};

MenuTrigger.defaultProps = {
  disabled: false,
  styles: {},
};

MenuTrigger.contextTypes = {
  menuActions: React.PropTypes.object,
};

export default MenuTrigger;
