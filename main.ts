let convertValid = false
scene.setBackgroundColor(6)
const usdValue = {
    toUSD: 1.00, // 1 USD = USD
    toEUR: 0.86, // 1 USD = EUR
    toJPY: 112.85, // 1 USD = JPY
    toGBP: 0.74, // 1 USD = GBP
    toCAD: 1.24, // 1 USD = CAD
    toCHF: 0.91, // 1 USD = CHF
    toAUD: 1.36, // 1 USD = AUD
    toCNY: 6.39 // 1 USD = CNY
}
const eurValue = {
    toUSD: 1.16, // 1 EUR = USD
    toEUR: 1.00, // 1 EUR = EUR
    toJPY: 130.88, // 1 EUR = JPY
    toGBP: 0.86, // 1 EUR = GBP
    toCAD: 1.44, // 1 EUR = CAD
    toCHF: 1.06, // 1 EUR = CHF
    toAUD: 1.57, // 1 EUR = AUD
    toCNY: 7.41 // 1 EUR = CNY
}
const jpyValue = {
    toUSD: 0.0089, // 1 JPY = USD
    toEUR: 0.0076, // 1 JPY = EUR
    toJPY: 1.00, // 1 JPY = JPY
    toGBP: 0.0065, // 1 JPY = GBP
    toCAD: 0.011, // 1 JPY = CAD
    toCHF: 0.0081, // 1 JPY = CHF
    toAUD: 0.012, // 1 JPY = AUD
    toCNY: 0.057 // 1 JPY = CNY
}
const gbpValue = {
    toUSD: 1.35, // 1 GBP = USD
    toEUR: 1.17, // 1 GBP = EUR
    toJPY: 152.99, // 1 GBP = JPY
    toGBP: 1.00, // 1 GBP = GBP
    toCAD: 1.68, // 1 GBP = CAD
    toCHF: 1.23, // 1 GBP = CHF
    toAUD: 1.84, // 1 GBP = AUD
    toCNY: 6.39 // 1 GBP = CNY
}
const cadValue = {
    toUSD: 0.80, // 1 CAD = USD
    toEUR: 0.69, // 1 CAD = EUR
    toJPY: 90.83, // 1 CAD = JPY
    toGBP: 0.59, // 1 CAD = GBP
    toCAD: 1.00, // 1 CAD = CAD
    toCHF: 0.73, // 1 CAD = CHF
    toAUD: 1.09, // 1 CAD = AUD
    toCNY: 5.14 // 1 CAD = CNY
}
const chfValue = {
    toUSD: 1.10, // 1 CHF = USD
    toEUR: 0.95, // 1 CHF = EUR
    toJPY: 123.89, // 1 CHF = JPY
    toGBP: 0.81, // 1 CHF = GBP
    toCAD: 1.36, // 1 CHF = CAD
    toCHF: 1.00, // 1 CHF = CHF
    toAUD: 1.49, // 1 CHF = AUD
    toCNY: 7.01 // 1 CHF = CNY
}
const audValue = {
    toUSD: 0.74, // 1 AUD = USD
    toEUR: 0.64, // 1 AUD = EUR
    toJPY: 83.20, // 1 AUD = JPY
    toGBP: 0.92, // 1 AUD = GBP
    toCAD: 1.24, // 1 AUD = CAD
    toCHF: 0.67, // 1 AUD = CHF
    toAUD: 1.00, // 1 AUD = AUD
    toCNY: 4.71 // 1 AUD = CNY
}
const cnyValue = {
    toUSD: 0.16, // 1 CNY = USD
    toEUR: 0.13, // 1 CNY = EUR
    toJPY: 17.66, // 1 CNY = JPY
    toGBP: 0.12, // 1 CNY = GBP
    toCAD: 0.19, // 1 CNY = CAD
    toCHF: 0.14, // 1 CNY = CHF
    toAUD: 0.21, // 1 CNY = AUD
    toCNY: 1.00 // 1 CNY = CNY
}
let finalAmount;
game.splash("List of convertable currencies: USD, EUR, JPY, GBP, CAD, CHF, AUD, CNY")
game.splash("Please input currencies as their abbreviations and in all capital letters")
let convertFrom = game.askForString("What currency are you converting from?", 3)
let convertFromAmount = game.askForNumber("How much" + " " + convertFrom + " " + "are you converting?")
let convertTo = game.askForString("What currency are you converting to?", 3)
if (convertFromAmount >= 0) {
    convertValid = true
} else {
    game.splash("Invalid currency amount")
    game.reset;
}
switch (convertFrom) {
    case "USD":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * usdValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * usdValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * usdValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * usdValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * usdValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * usdValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * usdValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * usdValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    case "EUR":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * eurValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * eurValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * eurValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * eurValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * eurValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * eurValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * eurValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * eurValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    case "JPY":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * jpyValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * jpyValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * jpyValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * jpyValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * jpyValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * jpyValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * jpyValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * jpyValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    case "GBP":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * gbpValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * gbpValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * gbpValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * gbpValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * gbpValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * gbpValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * gbpValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * gbpValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        };
        break;
    case "CAD":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * cadValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * cadValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * cadValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * cadValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * cadValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * cadValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * cadValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * cadValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    case "CHF":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * chfValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * chfValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * chfValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * chfValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * chfValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * chfValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * chfValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * chfValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    case "AUD":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * audValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * audValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * audValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * audValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * audValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * audValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * audValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * audValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    case "CNY":
        switch (convertTo) {
            case "USD":
                finalAmount = convertFromAmount * cnyValue.toUSD;
                break;
            case "EUR":
                finalAmount = convertFromAmount * cnyValue.toEUR;
                break;
            case "JPY":
                finalAmount = convertFromAmount * cnyValue.toJPY;
                break;
            case "GBP":
                finalAmount = convertFromAmount * cnyValue.toGBP;
                break;
            case "CAD":
                finalAmount = convertFromAmount * cnyValue.toCAD;
                break;
            case "CHF":
                finalAmount = convertFromAmount * cnyValue.toCHF;
                break;
            case "AUD":
                finalAmount = convertFromAmount * cnyValue.toAUD;
                break;
            case "CNY":
                finalAmount = convertFromAmount * cnyValue.toCNY;
                break;
            default:
                game.splash('That currency is not supported or cannot be converted');
        }
        break;
    default:
        game.splash('That currency is not supported or cannot be converted');
}
// I did not come up with the code in line 339, it is from here: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
finalAmount = Math.round((finalAmount + Number.EPSILON) * 100) / 100
game.splash("" + convertFromAmount + " " + convertFrom + " " + "is equal to" + " " + finalAmount + " " + convertTo)
game.reset()
