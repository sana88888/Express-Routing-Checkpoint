module.exports = (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next();
  } else {
    res.send(
      "L'application n'est disponible que pendant les heures ouvrables (du lundi au vendredi, de 12h à 17h)."
    );
  }
};
