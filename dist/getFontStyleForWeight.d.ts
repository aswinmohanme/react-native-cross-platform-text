declare const getFontStyleForWeight: (fontFamily?: string | undefined, fontWeight?: any) => {
    fontFamily: string | undefined;
    fontWeight: any;
} | {
    fontFamily?: undefined;
    fontWeight?: undefined;
};
export default getFontStyleForWeight;
