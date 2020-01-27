import React from 'react';
import Articles from '../components/Articles';

const articleResolver = (article) => {
    switch (article) {
        case 'Aries':
            return <Articles.Aries />;
        case 'AriesTaurus':
            return <Articles.AriesTaurus />;
        case 'AriesGemini':
            return <Articles.AriesGemini />;
        case 'AriesCancer':
            return <Articles.AriesCancer />;
        case 'AriesLeo':
            return <Articles.AriesLeo />;
        case 'AriesVirgo':
            return <Articles.AriesVirgo />;
        case 'AriesLibra':
            return <Articles.AriesLibra />;
        case 'AriesScorpio':
            return <Articles.AriesScorpio />;
        case 'AriesSagittarius':
            return <Articles.AriesSagittarius />;
        case 'AriesCapricorn':
            return <Articles.AriesCapricorn />;
        case 'AriesAquarius':
            return <Articles.AriesAquarius />;
        case 'AriesPisces':
            return <Articles.AriesPisces />;
        case 'Taurus':
            return <Articles.Taurus />;
        case 'TaurusGemini':
            return <Articles.TaurusGemini />;
        case 'TaurusCancer':
            return <Articles.TaurusCancer />;
        case 'TaurusLeo':
            return <Articles.TaurusLeo />;
        case 'TaurusVirgo':
            return <Articles.TaurusVirgo />;
        case 'TaurusLibra':
            return <Articles.TaurusLibra />;
        case 'TaurusScorpio':
            return <Articles.TaurusScorpio />;
        case 'TaurusSagittarius':
            return <Articles.TaurusSagittarius />;
        case 'TaurusCapricorn':
            return <Articles.TaurusCapricorn />;
        case 'TaurusAquarius':
            return <Articles.TaurusAquarius />;
        case 'TaurusPisces':
            return <Articles.TaurusPisces />;
        case 'Gemini':
            return <Articles.Gemini />;
        case 'GeminiCancer':
            return <Articles.GeminiCancer />;
        case 'GeminiLeo':
            return <Articles.GeminiLeo />;
        case 'GeminiVirgo':
            return <Articles.GeminiVirgo />;
        case 'GeminiLibra':
            return <Articles.GeminiLibra />;
        case 'GeminiScorpio':
            return <Articles.GeminiScorpio />;
        case 'GeminiSagittarius':
            return <Articles.GeminiSagittarius />;
        case 'GeminiCapricorn':
            return <Articles.GeminiCapricorn />;
        case 'GeminiAquarius':
            return <Articles.GeminiAquarius />;
        case 'GeminiPisces':
            return <Articles.GeminiPisces />;
        case 'Cancer':
            return <Articles.Cancer />;
        case 'CancerLeo':
            return <Articles.CancerLeo />;
        case 'CancerVirgo':
            return <Articles.CancerVirgo />;
        case 'CancerLibra':
            return <Articles.CancerLibra />;
        case 'CancerScorpio':
            return <Articles.CancerScorpio />;
        case 'CancerSagittarius':
            return <Articles.CancerSagittarius />;
        case 'CancerCapricorn':
            return <Articles.CancerCapricorn />;
        case 'CancerAquarius':
            return <Articles.CancerAquarius />;
        case 'CancerPisces':
            return <Articles.CancerPisces />;
        case 'Leo':
            return <Articles.Leo />;
        case 'LeoVirgo':
            return <Articles.LeoVirgo />;
        case 'LeoLibra':
            return <Articles.LeoLibra />;
        case 'LeoScorpio':
            return <Articles.LeoScorpio />;
        case 'LeoSagittarius':
            return <Articles.LeoSagittarius />;
        case 'LeoCapricorn':
            return <Articles.LeoCapricorn />;
        case 'LeoAquarius':
            return <Articles.LeoAquarius />;
        case 'LeoPisces':
            return <Articles.LeoPisces />;
        case 'Virgo':
            return <Articles.Virgo />;
        case 'VirgoLibra':
            return <Articles.VirgoLibra />;
        case 'VirgoScorpio':
            return <Articles.VirgoScorpio />;
        case 'VirgoSagittarius':
            return <Articles.VirgoSagittarius />;
        case 'VirgoCapricorn':
            return <Articles.VirgoCapricorn />;
        case 'VirgoAquarius':
            return <Articles.VirgoAquarius />;
        case 'VirgoPisces':
            return <Articles.VirgoPisces />;
        case 'Libra':
            return <Articles.Libra />;
        case 'LibraScorpio':
            return <Articles.LibraScorpio />;
        case 'LibraSagittarius':
            return <Articles.LibraSagittarius />;
        case 'LibraCapricorn':
            return <Articles.LibraCapricorn />;
        case 'LibraAquarius':
            return <Articles.LibraAquarius />;
        case 'LibraPisces':
            return <Articles.LibraPisces />;
        case 'Scorpio':
            return <Articles.Scorpio />;
        case 'ScorpioSagittarius':
            return <Articles.ScorpioSagittarius />;
        case 'ScorpioCapricorn':
            return <Articles.ScorpioCapricorn />;
        case 'ScorpioAquarius':
            return <Articles.ScorpioAquarius />;
        case 'ScorpioPisces':
            return <Articles.ScorpioPisces />;
        case 'Sagittarius':
            return <Articles.Sagittarius />;
        case 'SagittariusCapricorn':
            return <Articles.SagittariusCapricorn />;
        case 'SagittariusAquarius':
            return <Articles.SagittariusAquarius />;
        case 'SagittariusPisces':
            return <Articles.SagittariusPisces />;
        case 'Capricorn':
            return <Articles.Capricorn />;
        case 'CapricornAquarius':
            return <Articles.CapricornAquarius />;
        case 'CapricornPisces':
            return <Articles.CapricornPisces />;
        case 'Aquarius':
            return <Articles.Aquarius />;
        case 'AquariusPisces':
            return <Articles.AquariusPisces />;
        case 'Pisces':
            return <Articles.Pisces />;
        case 'BlankPage':
            return <Articles.BlankPage />;

        default:
            return <Articles.BlankPage />;
    }
};

export default articleResolver;
