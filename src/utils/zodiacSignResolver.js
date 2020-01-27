import aquarius from '../svgs/aquarius.svg';
import aries from '../svgs/aries.svg';
import cancer from '../svgs/cancer.svg';
import capricorn from '../svgs/capricorn.svg';
import gemini from '../svgs/gemini.svg';
import leo from '../svgs/leo.svg';
import libra from '../svgs/libra.svg';
import pisces from '../svgs/pisces.svg';
import sagittarius from '../svgs/sagittarius.svg';
import scorpion from '../svgs/scorpion.svg';
import taurus from '../svgs/taurus.svg';
import virgo from '../svgs/virgo.svg';

const zodiacSignResolver = (zodiacSign) => {
    switch (zodiacSign) {
        case 'Aquarius':
            return aquarius;
        case 'Aries':
            return aries;
        case 'Cancer':
            return cancer;
        case 'Capricorn':
            return capricorn;
        case 'Gemini':
            return gemini;
        case 'Leo':
            return leo;
        case 'Libra':
            return libra;
        case 'Pisces':
            return pisces;
        case 'Sagittarius':
            return sagittarius;
        case 'Scorpion':
            return scorpion;
        case 'Taurus':
            return taurus;
        case 'Virgo':
            return virgo;

        default:
            return null;
    }
};

export default zodiacSignResolver;
