import symbolonCacheUpdater from './symbolonReducer';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('menuReducer:', () => {
    it(`should handle payload "Aries" correctly (array empty) `, () => {
        const Cards = [];
        let Article = 'BlankPage';
        let zodiacName = 'Aries';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual([zodiacName]);
        expect(newArticle).toEqual(zodiacName);
    });

    it(`should handle payload "Aries" correctly (Aries   in array) `, () => {
        const Cards = ['Aries'];
        let Article = 'Aries';
        let zodiacName = 'Aries';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual([]);
        expect(newArticle).toEqual('BlankPage');
    });

    it(`should handle payload "Aries" correctly ( Taurus in array) `, () => {
        const Cards = ['Taurus'];
        let Article = 'Taurus';
        let zodiacName = 'Aries';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        //   expect(Cards).toEqual([zodiacName, 'Taurus']); /// ?
        expect(newArticle).toEqual('AriesTaurus');
    });

    it(`should handle payload "Aries" correctly (Aries and Taurus in array) `, () => {
        const Cards = ['Aries', 'Taurus'];
        let Article = 'AriesTaurus';
        let zodiacName = 'Aries';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual(['Taurus']);
        expect(newArticle).toEqual('Taurus');
    });

    it(`should handle payload "Taurus" correctly (Aries and Taurus in array) `, () => {
        const Cards = ['Aries', 'Taurus'];
        let Article = 'AriesTaurus';
        let zodiacName = 'Taurus';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual(['Aries']);
        expect(newArticle).toEqual('Aries');
    });

    it(`should handle payload "Cancer" correctly (Aries and Taurus in array) `, () => {
        const Cards = ['Aries', 'Taurus'];
        let Article = 'AriesTaurus';
        let zodiacName = 'Cancer';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual(['Cancer']);
        expect(newArticle).toEqual('Cancer');
    });

    it(`should handle payload "Taurus" correctly (Aries in array)`, () => {
        const Cards = ['Aries'];
        let Article = 'Aries';
        let zodiacName = 'Taurus';
        const symbolonReducer = symbolonCacheUpdater;
        let newArticle = symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual(['Aries', 'Taurus']);
        expect(newArticle).toEqual('AriesTaurus');
    });

    it(`should handle correctly if switch check causes break`, () => {
        const Cards = ['Aries', 'Taurus', 'Taurus'];
        let Article = 'AriesTaurus';
        let zodiacName = 'Cancer';
        const symbolonReducer = symbolonCacheUpdater;
        symbolonReducer(Cards, Article, zodiacName);

        expect(Cards).toEqual(['Aries', 'Taurus', 'Taurus']);
    });
});
