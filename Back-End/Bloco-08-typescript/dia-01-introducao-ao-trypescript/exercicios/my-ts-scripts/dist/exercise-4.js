"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercise_2_1 = __importDefault(require("./exercise-2"));
const exercise_3_1 = __importDefault(require("./exercise-3"));
const hemisphereNorthern = (month) => {
    switch (month) {
        case exercise_2_1.default.JANUARY: return [exercise_3_1.default.WINTER];
        case exercise_2_1.default.FEBRUARY: return [exercise_3_1.default.WINTER];
        case exercise_2_1.default.MARCH: return [exercise_3_1.default.WINTER, exercise_3_1.default.SPRING];
        case exercise_2_1.default.APRIL: return [exercise_3_1.default.SPRING];
        case exercise_2_1.default.MAY: return [exercise_3_1.default.SPRING];
        case exercise_2_1.default.JUNE: return [exercise_3_1.default.SPRING, exercise_3_1.default.SUMMER];
        case exercise_2_1.default.JULY: return [exercise_3_1.default.SUMMER];
        case exercise_2_1.default.AUGUST: return [exercise_3_1.default.SUMMER];
        case exercise_2_1.default.SEPTEMBER: return [exercise_3_1.default.SUMMER, exercise_3_1.default.AUTUMN];
        case exercise_2_1.default.OCTOBER: return [exercise_3_1.default.AUTUMN];
        case exercise_2_1.default.NOVEMBER: return [exercise_3_1.default.AUTUMN];
        case exercise_2_1.default.DECEMBER: return [exercise_3_1.default.AUTUMN, exercise_3_1.default.WINTER];
        default: return [];
    }
};
const hemisphereSouthern = (month) => {
    switch (month) {
        case exercise_2_1.default.JANUARY: return [exercise_3_1.default.WINTER];
        case exercise_2_1.default.FEBRUARY: return [exercise_3_1.default.WINTER];
        case exercise_2_1.default.MARCH: return [exercise_3_1.default.WINTER, exercise_3_1.default.SPRING];
        case exercise_2_1.default.APRIL: return [exercise_3_1.default.SPRING];
        case exercise_2_1.default.MAY: return [exercise_3_1.default.SPRING];
        case exercise_2_1.default.JUNE: return [exercise_3_1.default.SPRING, exercise_3_1.default.SUMMER];
        case exercise_2_1.default.JULY: return [exercise_3_1.default.SUMMER];
        case exercise_2_1.default.AUGUST: return [exercise_3_1.default.SUMMER];
        case exercise_2_1.default.SEPTEMBER: return [exercise_3_1.default.SUMMER, exercise_3_1.default.AUTUMN];
        case exercise_2_1.default.OCTOBER: return [exercise_3_1.default.AUTUMN];
        case exercise_2_1.default.NOVEMBER: return [exercise_3_1.default.AUTUMN];
        case exercise_2_1.default.DECEMBER: return [exercise_3_1.default.AUTUMN, exercise_3_1.default.WINTER];
        default: return [];
    }
};
const selectSeason = (month, hemisphere) => {
    switch (hemisphere) {
        case 'Northern': return hemisphereNorthern(month);
        case 'Southern': return hemisphereSouthern(month);
    }
    ;
};
const seasonOfTheMonth = () => {
    const monthN = readline_sync_1.default.keyInSelect(Object.values(exercise_2_1.default), 'Choose a month: ');
    const hemisphereN = readline_sync_1.default.keyInSelect(['Northern', 'Southern'], 'Choose a hemisphere: ');
    const month = Object.values(exercise_2_1.default)[monthN];
    const hemisphere = ['Northern', 'Southern'][hemisphereN];
    const season = selectSeason(month, hemisphere);
    console.log(`The month of ${month} is in the ${season} season.`);
};
seasonOfTheMonth();
