const TigerEyeOrange = "#e5a13e"
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

export const lightTheme = new Theme(
    "#ffffff",
    "#fcf5eb",
    "#f2d09e",
    TigerEyeOrange,
    new Font("#000000",TigerEyeOrange),
    false,
    ""
)

export const darkTheme = new Theme(
    "#000000",
    "#161006",
    "#72501f",
    TigerEyeOrange,
    new Font("#000000",TigerEyeOrange),
    false,
    ""
)