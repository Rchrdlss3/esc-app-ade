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
    static createFromUAParser() {
        let parser = new UAParser();
        let deviceType = parser.getDevice().type;
        let isMobile = deviceType === 'mobile';
        let isDesktop = deviceType === 'desktop';
        let isTablet = deviceType === 'tablet';

        let primaryColor = '#007bff';
        let secondaryColor = '#6c757d';
        let tertiaryColor = '#dee2e6';
        let mainColor = '#ffffff';
        let fontRegular = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
        let fontLink = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
        let logo = isMobile ? 'https://rchrdlss3.github.io/InnovativeRichLogo/darkLogo.png' : 'https://rchrdlss3.github.io/InnovativeRichLogo/lightLogo.png';

        let font = new Font(fontRegular, fontLink);
        let theme = new Theme(primaryColor, secondaryColor, tertiaryColor, mainColor, font, isMobile, logo);

        return theme;
    }
}


export default Theme;