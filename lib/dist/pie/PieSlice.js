"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieSlice = void 0;
const react_1 = __importDefault(require("react"));
const react_native_skia_1 = require("@shopify/react-native-skia");
const useSlicePath_1 = require("./hooks/useSlicePath");
const PieSliceContext_1 = require("./contexts/PieSliceContext");
const PieLabel_1 = __importDefault(require("./PieLabel"));
const PieSlice = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const { slice } = (0, PieSliceContext_1.usePieSliceContext)();
    const path = (0, useSlicePath_1.useSlicePath)({ slice });
    let label;
    const childrenArray = react_1.default.Children.toArray(children);
    const labelIndex = childrenArray.findIndex((child) => child.type === PieLabel_1.default);
    if (labelIndex > -1) {
        label = childrenArray.splice(labelIndex, 1);
    }
    return (<>
      <react_native_skia_1.Path path={path} style="fill" color={slice.color} {...rest}>
        {childrenArray}
      </react_native_skia_1.Path>
      {label}
    </>);
};
exports.PieSlice = PieSlice;
