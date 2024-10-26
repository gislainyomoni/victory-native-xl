"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBarWidth = void 0;
const react_1 = __importDefault(require("react"));
const useBarWidth = ({ customBarWidth, chartBounds, innerPadding, barCount, points, }) => {
    const barWidth = react_1.default.useMemo(() => {
        if (customBarWidth)
            return customBarWidth;
        const domainWidth = chartBounds.right - chartBounds.left;
        const numerator = (1 - innerPadding) * domainWidth;
        const denominator = barCount
            ? barCount
            : points.length - 1 <= 0
                ? // don't divide by 0 if there's only one data point
                    points.length
                : points.length - 1;
        const barWidth = numerator / denominator;
        return barWidth;
    }, [
        customBarWidth,
        chartBounds.left,
        chartBounds.right,
        innerPadding,
        points.length,
        barCount,
    ]);
    return barWidth;
};
exports.useBarWidth = useBarWidth;
