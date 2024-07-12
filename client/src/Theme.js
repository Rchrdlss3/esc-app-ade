import { UAParser } from 'ua-parser-js';
let parser = new UAParser();

export const isMobileDevice = parser.getDevice().type === 'mobile';
export const isDesktopDevice = parser.getDevice().type === 'desktop';
export const isTabletDevice = parser.getDevice().type === 'tablet';

export const celadoGreen = '#AFE1AF';
export const darkLogoImageURL = 'https://rchrdlss3.github.io/InnovativeRichLogo/darkLogo.png';
export const lightLogoImageURL = 'https://rchrdlss3.github.io/InnovativeRichLogo/lightLogo.png';


class Font {
    constructor(regular, link) {
        this.regular = regular;
        this.link = link;
    }
}

class Theme {
    constructor(primary, secondary, tertiary, main, font, isMobile, logo) {
        this.primary = primary;
        this.secondary = secondary;
        this.tertiary = tertiary;
        this.main = main;
        this.font = font;
        this.isMobile = isMobile;
        this.logo = logo;
    }
}


export default Theme;