const gameContainer = document.querySelector(".container"),
  playerResult = document.querySelector(".player_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    playerResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Espere...";

    optionImages.forEach((image2, index2) => {

      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      playerResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];

      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];

      let playerValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Empate",
        RP: "Cpu",
        RS: "Player",
        PP: "Empate",
        PR: "Player",
        PS: "Cpu",
        SS: "Empate",
        SR: "Cpu",
        SP: "Player",
      };

      let outComeValue = outcomes[playerValue + cpuValue];

      result.textContent = playerValue === cpuValue ? "Empate" : `${outComeValue} Venceu!!`;
    }, 2500);
  });
});
