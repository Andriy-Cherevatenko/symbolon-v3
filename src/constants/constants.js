import React from 'react';
import Articles from '../components/Articles';
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

const ZODIAC = {
    Aries: {
        id: 0,
        sign: aries,
        articles: {
            Aries: <Articles.Aries />,
            Taurus: <Articles.AriesTaurus />,
            Gemini: <Articles.AriesGemini />,
            Cancer: <Articles.AriesCancer />,
            Leo: <Articles.AriesLeo />,
            Virgo: <Articles.AriesVirgo />,
            Libra: <Articles.AriesLibra />,
            Scorpio: <Articles.AriesScorpio />,
            Sagittarius: <Articles.AriesSagittarius />,
            Capricorn: <Articles.AriesCapricorn />,
            Aquarius: <Articles.AriesAquarius />,
            Pisces: <Articles.AriesPisces />,
        },
    },
    Taurus: {
        id: 1,
        sign: taurus,
        articles: {
            Taurus: <Articles.Taurus />,
            Gemini: <Articles.TaurusGemini />,
            Cancer: <Articles.TaurusCancer />,
            Leo: <Articles.TaurusLeo />,
            Virgo: <Articles.TaurusVirgo />,
            Libra: <Articles.TaurusLibra />,
            Scorpio: <Articles.TaurusScorpio />,
            Sagittarius: <Articles.TaurusSagittarius />,
            Capricorn: <Articles.TaurusCapricorn />,
            Aquarius: <Articles.TaurusAquarius />,
            Pisces: <Articles.TaurusPisces />,
        },
    },
    Gemini: {
        id: 2,
        sign: gemini,
        articles: {
            Gemini: <Articles.Gemini />,
            Cancer: <Articles.GeminiCancer />,
            Leo: <Articles.GeminiLeo />,
            Virgo: <Articles.GeminiVirgo />,
            Libra: <Articles.GeminiLibra />,
            Scorpio: <Articles.GeminiScorpio />,
            Sagittarius: <Articles.GeminiSagittarius />,
            Capricorn: <Articles.GeminiCapricorn />,
            Aquarius: <Articles.GeminiAquarius />,
            Pisces: <Articles.GeminiPisces />,
        },
    },
    Cancer: {
        id: 3,
        sign: cancer,
        articles: {
            Cancer: <Articles.Cancer />,
            Leo: <Articles.CancerLeo />,
            Virgo: <Articles.CancerVirgo />,
            Libra: <Articles.CancerLibra />,
            Scorpio: <Articles.CancerScorpio />,
            Sagittarius: <Articles.CancerSagittarius />,
            Capricorn: <Articles.CancerCapricorn />,
            Aquarius: <Articles.CancerAquarius />,
            Pisces: <Articles.CancerPisces />,
        },
    },
    Leo: {
        id: 4,
        sign: leo,
        articles: {
            Leo: <Articles.Leo />,
            Virgo: <Articles.LeoVirgo />,
            Libra: <Articles.LeoLibra />,
            Scorpio: <Articles.LeoScorpio />,
            Sagittarius: <Articles.LeoSagittarius />,
            Capricorn: <Articles.LeoCapricorn />,
            Aquarius: <Articles.LeoAquarius />,
            Pisces: <Articles.LeoPisces />,
        },
    },
    Virgo: {
        id: 5,
        sign: virgo,
        articles: {
            Virgo: <Articles.Virgo />,
            Libra: <Articles.VirgoLibra />,
            Scorpio: <Articles.VirgoScorpio />,
            Sagittarius: <Articles.VirgoSagittarius />,
            Capricorn: <Articles.VirgoCapricorn />,
            Aquarius: <Articles.VirgoAquarius />,
            Pisces: <Articles.VirgoPisces />,
        },
    },
    Libra: {
        id: 6,
        sign: libra,
        articles: {
            Libra: <Articles.Libra />,
            Scorpio: <Articles.LibraScorpio />,
            Sagittarius: <Articles.LibraSagittarius />,
            Capricorn: <Articles.LibraCapricorn />,
            Aquarius: <Articles.LibraAquarius />,
            Pisces: <Articles.LibraPisces />,
        },
    },
    Scorpio: {
        id: 7,
        sign: scorpion,
        articles: {
            Scorpio: <Articles.Scorpio />,
            Sagittarius: <Articles.ScorpioSagittarius />,
            Capricorn: <Articles.ScorpioCapricorn />,
            Aquarius: <Articles.ScorpioAquarius />,
            Pisces: <Articles.ScorpioPisces />,
        },
    },
    Sagittarius: {
        id: 8,
        sign: sagittarius,
        articles: {
            Sagittarius: <Articles.Sagittarius />,
            Capricorn: <Articles.SagittariusCapricorn />,
            Aquarius: <Articles.SagittariusAquarius />,
            Pisces: <Articles.SagittariusPisces />,
        },
    },
    Capricorn: {
        id: 9,
        sign: capricorn,
        articles: {
            Capricorn: <Articles.Capricorn />,
            Aquarius: <Articles.CapricornAquarius />,
            Pisces: <Articles.CapricornPisces />,
        },
    },
    Aquarius: {
        id: 10,
        sign: aquarius,
        articles: {
            Aquarius: <Articles.Aquarius />,
            Pisces: <Articles.AquariusPisces />,
        },
    },
    Pisces: {
        id: 11,
        sign: pisces,
        articles: {
            Pisces: <Articles.Pisces />,
        },
    },
};

export default ZODIAC;
