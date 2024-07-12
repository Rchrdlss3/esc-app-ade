class Font {
    constructor(regular, link) {
        this.regular = regular;
        this.link = link;
    }
}

export class Theme {
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