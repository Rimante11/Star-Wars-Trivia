console.log("Final Star_Wars!"); //test

const characterChoise1 = document.querySelector("#character1"); //hämtar choise 1 
const characterChoise2 = document.querySelector("#character2"); //hämtar choise 2
const showCharactersButton = document.querySelector("#showCharacters"); //hämtar show character button
const compareContainer1 = document.querySelector("#compareContainer1"); //hämtar compare container 1 
const compareContainer2 = document.querySelector("#compareContainer2"); //hämtar compare container 2
const startImage = document.querySelector(".startImage");


//skapar class objekt med metoder gender, weight osv.
class Character{
  constructor(name, gender, height, mass, haircolor, mark){
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.haircolor = haircolor;
    this.pictureUrl;
    this.mark = mark;

        if(this.name == "Luke Skywalker") {
          this.pictureUrl = "./images_SW/LukeSkywalker.png";
        } 
        else if(this.name == "C-3PO") {
          this.pictureUrl = "./images_SW/C3P0.png";
        } 
        else if(this.name == "R2-D2") {
          this.pictureUrl = "./images_SW/R2D2.png";
        }
        else if(this.name == "Darth Vader") {
          this.pictureUrl = "./images_SW/DarthVader.png";
        }
        else if(this.name == "Leia Organa") {
          this.pictureUrl = "./images_SW/Leia.png";
        }
        else if(this.name == "Owen Lars") {
          this.pictureUrl = "./images_SW/OwenLars.png";
        }
        else if(this.name == "Beru Whitesun lars") {
          this.pictureUrl = "./images_SW/beru.jpg"; 
        }
        else if(this.name == "R5-D4") {
          this.pictureUrl = "./images_SW/R5D4.png";
        }
        else if(this.name == "Biggs Darklighter") {
          this.pictureUrl = "./images_SW/biggs.jpg"; 
        }
        else if(this.name == "Obi-Wan Kenobi") {
          this.pictureUrl = "./images_SW/ObiWan.png";
        } 

    }

    weight(charUser){
      //räknar ut skillnaden i weight
      
      let differenceOfWeight =  (this.mass - charUser.mass);
      if(this.mass > charUser.mass){
          if(this == character1){
              compareContainer1.innerHTML= `<p>My weight is ${this.mass}kg and ${charUser.name} weigh is ${charUser.mass}kg. It is ${differenceOfWeight}kg difference between us.</p>`;
          }else if(this == character2){
              compareContainer2.innerHTML= `<p>My weight is ${this.mass}kg and ${charUser.name}'s weigh is ${charUser.mass}kg. And it is ${differenceOfWeight}kg difference between us.</p>`;
          }

      }else if(character1.name === "Darth Vader"){
        compareContainer1.innerHTML= `<p>My weight is ${this.mass}kg and ${charUser.name} weigh is ${charUser.mass}kg. It is ${differenceOfWeight}kg difference between us.</p>`;

      }else if(character2.name === "Darth Vader"){
        compareContainer2.innerHTML= `<p>My weight is ${this.mass}kg and ${charUser.name} weigh is ${charUser.mass}kg. It is ${differenceOfWeight}kg difference between us.</p>`;

      }else if(this.mass < charUser.mass){
          if(this ==character1){
              compareContainer1.innerHTML= `<p>I need to eat more, because I weight ${differenceOfWeight}kg less than ${charUser.name}.</p>`;
          }else{
              compareContainer2.innerHTML= `<p>I need to eat more, because I weight ${differenceOfWeight}kg less than ${charUser.name}.</p>`;
          }
      }else{
          if(this ==character1){
              compareContainer1.innerHTML= `<p>We have the exact same weight</p>`;
          }else{
              compareContainer2.innerHTML= `<p>We have the exact same weight</p>`;
          }
        }

        console.log(character1.mass, character1.name);
        console.log(character2.mass);
    }

    length(charUser){
        //räknar skillnaden i längden av båda karaktärer 
        
        let differenceOfLenght =  (this.height - charUser.height);

        if(this.height > charUser.height){
            if(this == character1){
                compareContainer1.innerHTML= `<p>I am ${this.height}cm tall, and ${charUser.name} is ${charUser.height}cm tall. It is ${differenceOfLenght}cm difference between us.</p>`;
            }else if(this == character2){
                compareContainer2.innerHTML= `<p>I am ${this.height}cm tall, and ${charUser.name} is ${charUser.height}cm tall. It is ${differenceOfLenght}cm difference between us.</p>`;
            }
        }else if(this.height < charUser.height){
            if(this ==character1){
                compareContainer1.innerHTML= `<p>I am ${this.height}cm tall and I am ${differenceOfLenght}cm shorter than ${charUser.name}.</p>`;
            }else{
                compareContainer2.innerHTML= `<p>I am ${this.height}cm tall and I am ${differenceOfLenght}cm than ${charUser.name}.</p>`;
            }
        }else{
            if(this ==character1){
                compareContainer1.innerHTML= `<p>We have same length</p>`;
            }else{
                compareContainer2.innerHTML= `<p>We have same length</p>`;
            }

        }
    }

    hairColor(charUser){

      if(this==character1){
            if(this.haircolor==="none" || this.haircolor === "n/a"){
                compareContainer1.innerHTML=`<p>I do not have any haircolor to share with ${charUser.name}. But I like ${charUser.name}'s ${charUser.haircolor} haircolor.</p>`;
            }else if(this.haircolor== charUser.haircolor){
                compareContainer1.innerHTML=`<p>We both with ${charUser.name} have the same haircolor.</p>`;
            }else{
                compareContainer1.innerHTML=`<p> I love my ${this.haircolor} hair. But I would like to try ${charUser.name}'s  ${charUser.haircolor} haircolor.</p>`;
            }
            //kopiera samma för characters2 haircolorBtn under else{}
        }else{
            if(this.haircolor==="none" || this.haircolor === "n/a"){
                compareContainer2.innerHTML=`<p>I do not have any haircolor to share with ${charUser.name}. But I like ${charUser.name}'s ${charUser.haircolor} haircolor.</p>`;
            }else if(this.haircolor== charUser.haircolor){
                compareContainer2.innerHTML=`<p>We both with ${charUser.name} have the same haircolor.</p>`;
            }else{

            compareContainer2.innerHTML=`<p>I love my ${this.haircolor} hair. But I would like to try ${charUser.name}'s ${charUser.haircolor} haircolor.</p>`;
            
        }
           
      }
    }//end of haircolor method

    //genderGender pga det blev krock med constructor gender, kanske andra senare
    genderGender(charUser){
        if(this == character1){
          //kollar om det samma kön char1
            if(this.gender==charUser.gender){
                compareContainer1.innerHTML=`<p>Me and ${charUser.name} are both ${this.gender}.</p>`;
            }else{
                compareContainer1.innerHTML=`<p>Sorry, we are not the same gender. You are a ${charUser.gender} and not a ${this.gender} as I am.</p>`;
            }
        }else{
          //kollar om det samma kön char2
            if(this.gender==charUser.gender){
            compareContainer2.innerHTML=`<p>Me and ${charUser.name} are both ${this.gender}.</p>`
        }else{
            compareContainer2.innerHTML=`<p>Sorry, we are not the same gender. You are a ${charUser.gender} and not a ${this.gender} as I am.</p>`;
          }
        }
        
    } //end of genderGender method

}


//fetchar data från länken
let fetchData = async (choiseOfCharacter)=>{
  let response = await fetch(`https://swapi.dev/api/people/${choiseOfCharacter}`);
  let data = response.json();
  return data;
}

//skapar characters som ska ha fetchat data
let character1;
let character2;

//show characters button
showCharactersButton.addEventListener("click", () => {
    startImage.style.display = "none";
    //kollar om ingen karaktär är valt, option som har value none i html:en
    if(characterChoise1.value === "none" || characterChoise2.value === "none"){
        alert("Please, choose your characters.");
    }
    //kollar om det är samma character och ber att välja annan karaktär
    else if(characterChoise1.value === characterChoise2.value){
        alert("Please, choose a different characters.");
    }
    else{
      //fetchar data för character1 & character2 för att kunna jämföra som Brandon sa.
      fetchData(characterChoise1.value).then(dataInfo=>{
          character1 = new Character(dataInfo.name, dataInfo.gender, dataInfo.height, dataInfo.mass, dataInfo.hair_color, characterChoise1.value);
          //sätter in character1 to buildCharacter för att 'pusha' in den i html:en
          charContainer1.innerHTML = buildCharacter(character1);
          console.log("Character 1 ",character1);
        
          //compare buttons för character 1
          const buttonsToCompare = (character1) => {
            const compareButton = document.querySelectorAll("#compareBtn")
              compareButton.forEach( btn => {
                btn.addEventListener("click", () => {
                  let attribut = btn.getAttribute("data-id");
                    if(character1 === character1){
                      buttonCheck(character1, character2, attribut, btn);
                    }else{
                      console.log("Funkar inte");
                    }
                });
              });
          }
          buttonsToCompare(character1);


          //Jobba hemma med det! för värje btn to compare
          /* let compareGenderBtn = document.querySelector(".gender");
          compareGenderBtn.addEventListener("click", () => {
            console.log("Gender button");
            genderGender(character1);
          }); */
          

      });
      
      fetchData(characterChoise2.value).then(dataInfo=>{
          character2 = new Character(dataInfo.name, dataInfo.gender, dataInfo.height, dataInfo.mass, dataInfo.hair_color, characterChoise2.value);
          charContainer2.innerHTML = buildCharacter(character2);
          console.log("Character 2",character2);
          //compare buttons för character 2
          const buttonsToCompare = (character2) => {
            const compareButton = document.querySelectorAll("#compareBtn");
              //för värje btn
              compareButton.forEach( btn => {
                btn.addEventListener("click", () => {
                  let attribut = btn.getAttribute("data-id");
                    if(character2 === character2){
                      buttonCheck(character2, character1, attribut, btn);
                    }else{
                      console.log("Funkar inte");
                    }
                });
              });
          }
          buttonsToCompare(character2);
      });
    }
});


const charContainer1 = document.querySelector("#characterContainer1"); //hämtar container 1 för char1
const charContainer2 = document.querySelector("#characterContainer2"); //hämtar container 2 för char2

//ritar character 1 och character 2
let buildCharacter = (charUser) =>
`
  <div class="characterContainer">
    <div class="info">
      <h3 class="characterName">${charUser.name}</h3>
      <img class="imgC" src="${charUser.pictureUrl}" alt="${charUser.name}">
        <ul class="generalInfo">
          <li>Gender: ${charUser.gender}<li>
          <li>Height: ${charUser.height} cm<li>
          <li>Mass: ${charUser.mass} kg<li>
          <li>Hair color: ${charUser.haircolor}<li>
        </ul>
    </div>
    <div class="buttonContainer">
      <button id="compareBtn" class="gender" data-id="${charUser.mark}">Gender</button>
      <button id="compareBtn" class="length" data-id="${charUser.mark}">Length</button>
      <button id="compareBtn" class="weight" data-id="${charUser.mark}">Weight</button>
      <button id="compareBtn" class="hairColor" data-id="${charUser.mark}">Haircolor</button>
    </div>
  </div>
`

///////////////////////////////////////////////////////////////////////////////////////////////
//sist
//kollar button class lika med class namn och sen sätter method till den class 
let buttonCheck = (characterProfile, nextToShow, attribut, btn) => {
  if(characterProfile.mark == attribut){
      if(btn.className=="weight"){
          characterProfile.weight(nextToShow);
      }else if(btn.className =="length"){
          characterProfile.length(nextToShow);
      }else if(btn.className =="hairColor"){
          characterProfile.hairColor(nextToShow);
      }else if(btn.className =="gender"){
          characterProfile.genderGender(nextToShow);
      }
  }
}
