export const getCurrentAthletesIds = () => {
  const currentAthletesIds = localStorage.getItem("current_athletes")
    ? JSON.parse(localStorage.getItem("current_athletes"))
    : [];

  return currentAthletesIds;
};

//   export const saveBookIds = (bookIdArr) => {
//     if (bookIdArr.length) {
//       localStorage.setItem("saved_books", JSON.stringify(bookIdArr));
//     } else {
//       localStorage.removeItem("saved_books");
//     }
//   };

export const removeAthleteId = (athleteId) => {
  const currentAthleteId = localStorage.getItem("current_athletes")
    ? JSON.parse(localStorage.getItem("current_athletes"))
    : null;

  if (!currentAthleteId) {
    return false;
  }

  const updatedCurrentAthletesIds = currentAthleteId?.filter(
    (currentAthleteId) => currentAthleteId !== athleteId
  );
  localStorage.setItem(
    "current_athletes",
    JSON.stringify(updatedCurrentAthletesIds)
  );

  return true;
};
