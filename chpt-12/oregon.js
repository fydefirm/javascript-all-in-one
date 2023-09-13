const stateButton = document.getElementById("oregonButton");
stateButton.addEventListener("click", () =>
  import("./oregonInfo.js").then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);
