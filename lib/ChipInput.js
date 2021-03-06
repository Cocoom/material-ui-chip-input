'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Notice: Some code was adapted from Material-UI's text field.
                                                                                                                                                                                                                                                                   *         Copyright (c) 2014 Call-Em-All (https://github.com/callemall/material-ui)
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextFieldUnderline = require('material-ui/TextField/TextFieldUnderline');

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _TextFieldHint = require('material-ui/TextField/TextFieldHint');

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = require('material-ui/TextField/TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _AutoComplete = require('material-ui/AutoComplete/AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _transitions = require('material-ui/styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: 'text'
    },
    input: {
      padding: 0,
      marginTop: 0,
      marginBottom: 24,
      lineHeight: '32px',
      height: 32,
      position: 'relative',
      display: 'inline-block',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: props.disabled ? 'not-allowed' : 'initial',
      font: 'inherit',
      appearance: 'none', // Remove border in Safari, doesn't seem to break anything in other browsers
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated style).
      float: 'left'
    },
    error: {
      position: 'absolute',
      bottom: -10,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none',
      top: 28
    },
    floatingLabelFocusStyle: {
      transform: 'scale(0.75) translate(0, -36px)'
    },
    defaultChip: {
      margin: '8px 8px 0 0',
      float: 'left'
    },
    chipContainer: {
      marginTop: props.floatingLabelText ? 12 : 0
    }
  };

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

var defaultChipRenderer = function defaultChipRenderer(_ref, key) {
  var value = _ref.value,
      text = _ref.text,
      isFocused = _ref.isFocused,
      isDisabled = _ref.isDisabled,
      handleClick = _ref.handleClick,
      handleRequestDelete = _ref.handleRequestDelete,
      defaultStyle = _ref.defaultStyle;
  return _react2.default.createElement(
    _Chip2.default,
    {
      key: key,
      style: _extends({}, defaultStyle, { pointerEvents: isDisabled ? 'none' : undefined }),
      backgroundColor: isFocused ? _colors.blue300 : null,
      onClick: handleClick,
      onRequestDelete: handleRequestDelete
    },
    text
  );
};

var ChipInput = function (_React$Component) {
  _inherits(ChipInput, _React$Component);

  function ChipInput(props) {
    _classCallCheck(this, ChipInput);

    var _this = _possibleConstructorReturn(this, (ChipInput.__proto__ || Object.getPrototypeOf(ChipInput)).call(this, props));

    _this.state = {
      isFocused: false,
      errorText: undefined,
      isClean: true,
      chips: [],
      focusedChip: null,
      inputValue: ''
    };

    _this.handleInputBlur = function (event) {
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      // A momentary delay is required to support openOnFocus. We must give time for the autocomplete
      // menu to close before checking the current status. Otherwise, tabbing off the input while the
      // menu is open results in the input keeping its focus styles. Note that the ref might not be set
      // yet, so this.autocomplete might be null.
      setTimeout(function () {
        if (_this.autoComplete && (!_this.autoComplete.state.open || _this.autoComplete.requestsList.length === 0)) {
          if (_this.props.clearOnBlur) {
            _this.clearInput();
          }
          _this.setState({ isFocused: false });
        }
      }, 0);
    };

    _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    };

    _this.handleKeyDown = function (event) {
      _this.setState({ keyPressed: false, preventChipCreation: false });
      if (_this.props.newChipKeyCodes.indexOf(event.keyCode) >= 0) {
        _this.handleAddChip(event.target.value);
      } else if (event.keyCode === 8 || event.keyCode === 46) {
        if (event.target.value === '') {
          var chips = _this.props.value || _this.state.chips;
          if (_this.state.focusedChip == null && event.keyCode === 8) {
            _this.setState({ focusedChip: chips[chips.length - 1] });
          } else if (_this.state.focusedChip) {
            var index = chips.findIndex(function (chip) {
              return _this.props.dataSourceConfig ? _this.state.focusedChip[_this.props.dataSourceConfig.value] === chip[_this.props.dataSourceConfig.value] : _this.state.focusedChip === chip;
            });
            var value = _this.props.dataSourceConfig ? _this.state.focusedChip[_this.props.dataSourceConfig.value] : _this.state.focusedChip;
            _this.handleDeleteChip(value, index);
            if (event.keyCode === 8 && index > 0) {
              _this.setState({ focusedChip: chips[index - 1] });
            } else if (event.keyCode === 46 && index < chips.length - 1) {
              _this.setState({ focusedChip: chips[index + 1] });
            }
          }
        }
      } else if (event.keyCode === 37) {
        var _chips = _this.props.value || _this.state.chips;
        if (_this.state.focusedChip == null && event.target.value === '' && _chips.length) {
          return _this.setState({ focusedChip: _chips[_chips.length - 1] });
        }
        var _index = _chips.findIndex(function (chip) {
          return _this.props.dataSourceConfig && _this.state.focusedChip ? _this.state.focusedChip[_this.props.dataSourceConfig.value] === chip[_this.props.dataSourceConfig.value] : _this.state.focusedChip === chip;
        });
        if (_index > 0) {
          _this.setState({ focusedChip: _chips[_index - 1] });
        }
      } else if (event.keyCode === 39) {
        var _chips2 = _this.props.value || _this.state.chips;
        var _index2 = _chips2.findIndex(function (chip) {
          return _this.props.dataSourceConfig && _this.state.focusedChip ? _this.state.focusedChip[_this.props.dataSourceConfig.value] === chip[_this.props.dataSourceConfig.value] : _this.state.focusedChip === chip;
        });
        if (_index2 >= 0 && _index2 < _chips2.length - 1) {
          _this.setState({ focusedChip: _chips2[_index2 + 1] });
        } else {
          _this.setState({ focusedChip: null });
        }
      } else {
        _this.setState({ focusedChip: null });
      }
    };

    _this.handleKeyUp = function (event) {
      if (!_this.state.preventChipCreation && _this.props.newChipKeyCodes.indexOf(event.keyCode) > 0 && _this.state.keyPressed) {
        _this.clearInput();
      } else {
        _this.setState({ inputValue: event.target.value });
      }
    };

    _this.handleKeyPress = function (event) {
      _this.setState({ keyPressed: true });
    };

    _this.handleUpdateInput = function (searchText, dataSource, params) {

      if (_this.props.onUpdateInput) {
        var result = _this.props.onUpdateInput(searchText, dataSource, params);
        if (result != null) {
          _this.setState({ inputValue: result });
          return;
        }
      }

      _this.setState({ inputValue: searchText });
    };

    _this.setAutoComplete = function (autoComplete) {
      _this.autoComplete = autoComplete;
    };

    if (props.defaultValue) {
      _this.state.chips = props.defaultValue;
    }
    return _this;
  }

  _createClass(ChipInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText;


      this.setState({
        errorText: this.props.errorText
      });

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var handleKeyDown = this.autoComplete.handleKeyDown;
      this.autoComplete.handleKeyDown = function (event) {
        var newChipKeyCodes = _this2.props.newChipKeyCodes;

        if (newChipKeyCodes.indexOf(event.keyCode) >= 0 && event.target.value) {
          event.preventDefault();
          _this2.handleAddChip(event.target.value);
          _this2.autoComplete.forceUpdate();
        } else {
          handleKeyDown(event);
        }
      };

      var onAutocompleteItemClick = function onAutocompleteItemClick(event, child) {
        var dataSource = _this2.autoComplete.props.dataSource;

        var index = parseInt(child.key, 10);
        var chosenRequest = dataSource[index];
        _this2.handleAddChip(chosenRequest);
        _this2.autoComplete.forceUpdate();
        _this2.autoComplete.close();

        setTimeout(function () {
          return _this2.focus();
        }, 1);
      };

      // Ensuring that ChipInput works with with Material-UI 0.19.1 and 0.20.0
      if (this.autoComplete.handleItemClick) {
        this.autoComplete.handleItemClick = onAutocompleteItemClick;
      } else {
        this.autoComplete.handleItemTouchTap = onAutocompleteItemClick;
      }

      // force update autocomplete to ensure that it uses the new handlers
      this.autoComplete.forceUpdate();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ focusedChip: null });
      }
      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) this.getInputNode().blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.autoComplete) {
        this.getInputNode().focus();
        if (this.props.openOnFocus && !this.props.disabled) {
          this.autoComplete.setState({
            open: true,
            anchorEl: this.getInputNode()
          });

          this.autoComplete.forceUpdate();
        }
      }
      if (this.state.focusedChip) {
        this.setState({ focusedChip: null });
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) this.getInputNode().select();
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.autoComplete.refs.searchTextField.getInputNode();
    }
  }, {
    key: 'handleAddChip',
    value: function handleAddChip(chip) {
      var _this3 = this;

      if (this.props.onBeforeRequestAdd && !this.props.onBeforeRequestAdd(chip)) {
        return this.setState({ preventChipCreation: true });
      }
      this.autoComplete.setState({ searchText: '' });
      var chips = this.props.value || this.state.chips;

      if (this.props.dataSourceConfig) {
        if (typeof chip === 'string') {
          var _chip;

          chip = (_chip = {}, _defineProperty(_chip, this.props.dataSourceConfig.text, chip), _defineProperty(_chip, this.props.dataSourceConfig.value, chip), _chip);
        } else if ((typeof chip === 'undefined' ? 'undefined' : _typeof(chip)) === 'object') {
          var _chip2;

          if (chip[this.props.dataSourceConfig.text].length === 0 || chip[this.props.dataSourceConfig.value].length === 0) {
            return;
          }
          chip = (_chip2 = {}, _defineProperty(_chip2, this.props.dataSourceConfig.text, chip[this.props.dataSourceConfig.text]), _defineProperty(_chip2, this.props.dataSourceConfig.value, chip[this.props.dataSourceConfig.value]), _chip2);
        }

        if (this.props.allowDuplicates || !chips.some(function (c) {
          return c[_this3.props.dataSourceConfig.value] === chip[_this3.props.dataSourceConfig.value];
        })) {
          if (this.props.value) {
            if (this.props.onRequestAdd) {
              this.props.onRequestAdd(chip);
            }
          } else {
            this.setState({ chips: [].concat(_toConsumableArray(this.state.chips), [chip]) });
            if (this.props.onChange) {
              this.props.onChange([].concat(_toConsumableArray(this.state.chips), [chip]));
            }
          }
        }
      } else {
        if (chip.trim().length > 0) {
          if (this.props.allowDuplicates || chips.indexOf(chip) === -1) {
            if (this.props.value) {
              if (this.props.onRequestAdd) {
                this.props.onRequestAdd(chip);
              }
            } else {
              this.setState({ chips: [].concat(_toConsumableArray(this.state.chips), [chip]) });
              if (this.props.onChange) {
                this.props.onChange([].concat(_toConsumableArray(this.state.chips), [chip]));
              }
            }
          }
        }
      }
    }
  }, {
    key: 'handleDeleteChip',
    value: function handleDeleteChip(chip, i) {
      if (this.props.value) {
        if (this.props.onRequestDelete) {
          this.props.onRequestDelete(chip, i);
        }
      } else {
        if (this.props.dataSourceConfig) {
          var chips = this.state.chips.slice();
          var changed = chips.splice(i, 1); // remove the chip at index i
          if (changed) {
            this.setState({
              chips: chips,
              focusedChip: this.state.focusedChip && this.state.focusedChip[this.props.dataSourceConfig.value] === chip ? null : this.state.focusedChip
            });
            if (this.props.onChange) {
              this.props.onChange(chips);
            }
          }
        } else {
          var _chips3 = this.state.chips.slice();
          var _changed = _chips3.splice(i, 1); // remove the chip at index i
          if (_changed) {
            this.setState({
              chips: _chips3,
              focusedChip: this.state.focusedChip === chip ? null : this.state.focusedChip
            });
            if (this.props.onChange) {
              this.props.onChange(_chips3);
            }
          }
        }
      }
    }
  }, {
    key: 'clearInput',
    value: function clearInput() {
      this.setState({ inputValue: '' });
    }

    /**
     * Sets a reference to the AutoComplete instance.
     *
     * Using a bound class method here to set `autoComplete` to avoid it being set
     * to null by an inline ref callback.
     *
     * See [Issue #71](https://github.com/TeamWertarbyte/material-ui-chip-input/issues/71)
     *
     * @param {Object} autoComplete - The AutoComplete DOM element or null
     */

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          dataSourceConfig = _props2.dataSourceConfig,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          fullWidth = _props2.fullWidth,
          fullWidthInput = _props2.fullWidthInput,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          id = _props2.id,
          inputStyle = _props2.inputStyle,
          clearOnBlur = _props2.clearOnBlur,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          chipContainerStyle = _props2.chipContainerStyle,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          _props2$defaultValue = _props2.defaultValue,
          defaultValue = _props2$defaultValue === undefined ? [] : _props2$defaultValue,
          filter = _props2.filter,
          value = _props2.value,
          dataSource = _props2.dataSource,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          onBeforeRequestAdd = _props2.onBeforeRequestAdd,
          onRequestAdd = _props2.onRequestAdd,
          onRequestDelete = _props2.onRequestDelete,
          _props2$chipRenderer = _props2.chipRenderer,
          chipRenderer = _props2$chipRenderer === undefined ? defaultChipRenderer : _props2$chipRenderer,
          newChipKeyCodes = _props2.newChipKeyCodes,
          allowDuplicates = _props2.allowDuplicates,
          other = _objectWithoutProperties(_props2, ['children', 'className', 'dataSourceConfig', 'disabled', 'errorStyle', 'errorText', 'fullWidth', 'fullWidthInput', 'hintText', 'hintStyle', 'id', 'inputStyle', 'clearOnBlur', 'onBlur', 'onChange', 'onFocus', 'style', 'chipContainerStyle', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'defaultValue', 'filter', 'value', 'dataSource', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelStyle', 'floatingLabelText', 'onBeforeRequestAdd', 'onRequestAdd', 'onRequestDelete', 'chipRenderer', 'newChipKeyCodes', 'allowDuplicates']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = id || this.uniqueId;

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          _this4.input = elem;
        },
        disabled: !!this.props.disabled,
        onBlur: this.handleInputBlur,
        onFocus: this.handleInputFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onKeyPress: this.handleKeyPress,
        onUpdateInput: this.handleUpdateInput,
        fullWidth: !!fullWidthInput
      };

      var inputStyleMerged = _extends(styles.input, inputStyle);

      var hasInput = (this.props.value || this.state.chips).length > 0 || this.state.inputValue.length > 0;
      var showHintText = hintText && !hasInput;
      var shrinkFloatingLabel = floatingLabelText && (hasInput || this.state.isFocused || floatingLabelFixed);

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles(_extends(styles.error, errorStyle)) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: _extends(styles.floatingLabel, this.props.floatingLabelStyle),
          shrinkStyle: _extends(styles.floatingLabelFocusStyle, this.props.floatingLabelFocusStyle),
          htmlFor: inputId,
          shrink: shrinkFloatingLabel,
          disabled: disabled
        },
        floatingLabelText
      );

      var overrideRootStyles = {};
      if (floatingLabelText) {
        overrideRootStyles.marginTop = 14;
      }
      if (fullWidth) {
        overrideRootStyles.width = '100%';
      }
      if (disabled) {
        overrideRootStyles.cursor = 'not-allowed';
      }

      var chips = this.props.value || this.state.chips;
      var autoCompleteData = dataSourceConfig ? (dataSource || []).filter(function (value) {
        return !chips.some(function (c) {
          return c[dataSourceConfig.value] === value[dataSourceConfig.value];
        });
      }) : (dataSource || []).filter(function (value) {
        return chips.indexOf(value) < 0;
      });

      var actualFilter = other.openOnFocus ? function (search, key) {
        return search === '' || filter(search, key);
      } : filter;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: prepareStyles(_extends(styles.root, style, overrideRootStyles)),
          onClick: function onClick() {
            return _this4.focus();
          }
        },
        _react2.default.createElement(
          'div',
          null,
          floatingLabelTextElement,
          _react2.default.createElement(
            'div',
            { style: _extends(styles.chipContainer, chipContainerStyle) },
            chips.map(function (tag, i) {
              var value = dataSourceConfig ? tag[dataSourceConfig.value] : tag;
              return chipRenderer({
                value: value,
                text: dataSourceConfig ? tag[dataSourceConfig.text] : tag,
                chip: tag,
                isDisabled: disabled,
                isFocused: dataSourceConfig ? _this4.state.focusedChip && _this4.state.focusedChip[dataSourceConfig.value] === value : _this4.state.focusedChip === value,
                handleClick: function handleClick() {
                  return _this4.setState({ focusedChip: value });
                },
                handleRequestDelete: function handleRequestDelete() {
                  return _this4.handleDeleteChip(value, i);
                },
                defaultStyle: styles.defaultChip
              }, i);
            })
          )
        ),
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: showHintText && !(floatingLabelText && !floatingLabelFixed && !this.state.isFocused),
          style: _extends({ bottom: 20, pointerEvents: 'none' }, hintStyle),
          text: hintText
        }) : null,
        _react2.default.createElement(_AutoComplete2.default, _extends({}, other, inputProps, {
          filter: actualFilter,
          style: inputStyleMerged,
          dataSource: autoCompleteData,
          dataSourceConfig: dataSourceConfig,
          searchText: this.state.inputValue,
          underlineShow: false,
          ref: this.setAutoComplete
        })),
        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }) : null,
        errorTextElement
      );
    }
  }]);

  return ChipInput;
}(_react2.default.Component);

ChipInput.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};


ChipInput.propTypes = {
  style: _propTypes2.default.object,
  chipContainerStyle: _propTypes2.default.object,
  floatingLabelText: _propTypes2.default.node,
  hintText: _propTypes2.default.node,
  id: _propTypes2.default.string,
  dataSourceConfig: _propTypes2.default.shape({
    text: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired
  }),
  disabled: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.array,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.array,
  onBeforeRequestAdd: _propTypes2.default.func,
  onRequestAdd: _propTypes2.default.func,
  onRequestDelete: _propTypes2.default.func,
  dataSource: _propTypes2.default.array,
  onUpdateInput: _propTypes2.default.func,
  openOnFocus: _propTypes2.default.bool,
  chipRenderer: _propTypes2.default.func,
  newChipKeyCodes: _propTypes2.default.arrayOf(_propTypes2.default.number),
  clearOnBlur: _propTypes2.default.bool,
  allowDuplicates: _propTypes2.default.bool
};

ChipInput.defaultProps = {
  filter: _AutoComplete2.default.caseInsensitiveFilter,
  newChipKeyCodes: [13],
  clearOnBlur: true,
  allowDuplicates: false,
  underlineShow: true
};

exports.default = ChipInput;