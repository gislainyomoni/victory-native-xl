import React from "react";
import type { InputDatum, InputFields, ValueOf, XAxisProps } from "../../types";
export declare const XAxis: <RawData extends Record<string, unknown>, XK extends keyof InputFields<RawData>>({ xScale, yScale, axisSide, yAxisSide, labelPosition, tickCount, tickValues, labelOffset, labelColor, lineWidth, lineColor, font, formatXLabel, ix, isNumericalData, linePathEffect, }: XAxisProps<RawData, XK>) => React.JSX.Element[];
export declare const XAxisDefaults: {
    lineColor: string;
    lineWidth: number;
    tickCount: number;
    labelOffset: number;
    axisSide: "bottom";
    yAxisSide: "left";
    labelPosition: "outset";
    formatXLabel: (label: ValueOf<InputDatum>) => string;
    labelColor: string;
};
