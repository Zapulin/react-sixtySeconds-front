
// Funcionalidad para calcular entre dos fechas

export function generateCreationDateSinceText(creationDate) {
  const ONE_MINUTE = 60;
  const TWO_MINUTES = ONE_MINUTE * 2;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const TWO_HOURS = ONE_HOUR * 2;
  const ONE_DAY = ONE_HOUR * 24;
  const WEEK = ONE_DAY * 7;
  const MONTH = WEEK * 4;

  let creationDateText = "Hace más de 1 mes..";

  const now = new Date();
  const cDate = new Date(creationDate);
  var diffSeconds = parseInt((now.getTime() - cDate.getTime()) / 1000);

  if (diffSeconds < ONE_MINUTE) {
    creationDateText = "Hace un momento..";
  }
  if (diffSeconds >= ONE_MINUTE && diffSeconds < TWO_MINUTES) {
    creationDateText = "Hace 1 minuto..";
  }
  if (diffSeconds > TWO_MINUTES && diffSeconds < ONE_HOUR) {
    creationDateText = "Hace menos de 1 hora..";
  }
  if (diffSeconds > ONE_HOUR && diffSeconds < TWO_HOURS) {
    creationDateText = "Hace más de 1 hora..";
  }
  if (diffSeconds > TWO_HOURS && diffSeconds < ONE_DAY) {
    creationDateText = "Hace más de 2 horas..";
  }
  if (diffSeconds > ONE_DAY && diffSeconds < WEEK) {
    creationDateText = "Hace más de 1 día..";
  }
  if (diffSeconds > WEEK && diffSeconds < MONTH) {
    creationDateText = "Hace más de 1 semana..";
  }

  return creationDateText;
}
