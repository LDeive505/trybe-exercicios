import readline from "readline-sync";
import Months from "./exercise-2";
import Seasons from "./exercise-3";

const hemisphereNorthern = (month: string) => {
  switch (month) {
    case Months.JANUARY: return [Seasons.WINTER];
    case Months.FEBRUARY: return [Seasons.WINTER];
    case Months.MARCH: return [Seasons.WINTER, Seasons.SPRING];
    case Months.APRIL: return [Seasons.SPRING];
    case Months.MAY: return [Seasons.SPRING];
    case Months.JUNE: return [Seasons.SPRING, Seasons.SUMMER];
    case Months.JULY: return [Seasons.SUMMER];
    case Months.AUGUST: return [Seasons.SUMMER];
    case Months.SEPTEMBER: return [Seasons.SUMMER, Seasons.AUTUMN];
    case Months.OCTOBER: return [Seasons.AUTUMN];
    case Months.NOVEMBER: return [Seasons.AUTUMN];
    case Months.DECEMBER: return [Seasons.AUTUMN, Seasons.WINTER];
    default: return [];
  }
};

const hemisphereSouthern = (month: string) => {
  switch (month) {
    case Months.JANUARY: return [Seasons.WINTER];
    case Months.FEBRUARY: return [Seasons.WINTER];
    case Months.MARCH: return [Seasons.WINTER, Seasons.SPRING];
    case Months.APRIL: return [Seasons.SPRING];
    case Months.MAY: return [Seasons.SPRING];
    case Months.JUNE: return [Seasons.SPRING, Seasons.SUMMER];
    case Months.JULY: return [Seasons.SUMMER];
    case Months.AUGUST: return [Seasons.SUMMER];
    case Months.SEPTEMBER: return [Seasons.SUMMER, Seasons.AUTUMN];
    case Months.OCTOBER: return [Seasons.AUTUMN];
    case Months.NOVEMBER: return [Seasons.AUTUMN];
    case Months.DECEMBER: return [Seasons.AUTUMN, Seasons.WINTER];
    default: return [];
  }
};

const selectSeason = (month: string, hemisphere: string) => {
  switch (hemisphere) {
    case 'Northern': return hemisphereNorthern(month);
    case 'Southern': return hemisphereSouthern(month);
  };
};

const seasonOfTheMonth = ():void => {
  const monthN:number = readline.keyInSelect(Object.values(Months), 'Escolha um mês: ');
  const hemisphereN:number = readline.keyInSelect(['Norte', 'Sul'], 'Escolha um Hemisfério: ');
  const month:string = Object.values(Months)[monthN];
  const hemisphere:string = ['Northern', 'Southern'][hemisphereN - 1];

  const season = selectSeason(month, hemisphere);

  console.log(`O mês de ${month} é na estação ${season}`);
}

seasonOfTheMonth();

