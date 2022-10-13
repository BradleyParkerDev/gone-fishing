
const prompt = require('prompt-sync')({sigint:true});
let time = 6;
let action = '';
let daysCatch =  {
    totalFishCaught:0,
    totalWeight: 0,
    totalValue: 0,
    caughtFish:[]
    };

   
console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish");
console.log("for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");
while(time <= 12){
if(time < 12 && daysCatch.totalWeight < 10){
    console.log(`The time is ${time}:00am. So far you've caught:`);
    (`${daysCatch.totalFishCaught} fish, ${daysCatch.totalWeight} lbs, $${daysCatch.totalValue}`)
    let tempCatch = generateFish(daysCatch);
    console.log(`You caught a "${tempCatch.name}" weighing ${tempCatch.weight} lbs`)
    console.log(`and valued at $${tempCatch.value}`);
    console.log("Your action: [c]atch or [r]elease?"); 
    action = prompt("> ")
    if(action === 'c'){
        addToDaysCatch(tempCatch);
        console.log("You chose to keep the fish.");
    }
    console.log("==========================================");
}
else if(time >= 12)

time++;
}


















function addToDaysCatch(fish){
    daysCatch.caughtFish.push(fish);
    daysCatch.totalWeight = daysCatch.totalWeight + Number(fish.weight);
    daysCatch.totalValue = daysCatch.totalValue + Number(fish.value); 
    daysCatch.totalFishCaught = daysCatch.totalFishCaught + 1;
    return daysCatch;
}

function generateFish(daysCatch){
    let weight = 0;
    let value = 0;
    //let w2 = (Math.random().toPrecision(2));
    if(daysCatch.totalWeight >= 9 && daysCatch.totalWeight <= 9.5){
        weight = .2;
        value = .50;
    }
    else if(daysCatch.totalWeight > 9.5 && daysCatch.totalWeight < 10){
        weight = .1
        value = .25;
    }
    
    weight =  ((Math.random() * 5)+ 1).toPrecision(3);
    
    if(weight < 3){
        value = (weight * 2.2).toPrecision(3)
    }
    else if(weight >= 3){
        value = (weight * 3.3).toPrecision(3)
    }

    let name = createFishName(weight);
    let fish = {
    name:name,
    weight:weight,
    value:value
    }

    return fish
}

// Creates fish's name
function createFishName(weight) {
    let size, desc, type = '';
    let randSizeName = Math.floor((Math.random() * 3)+ 1)
    let randDesc = Math.floor((Math.random() * 3)+ 1)
    let randType =  Math.floor((Math.random() * 8)+ 1)
    const big = ["Jumbo", "Huge", "Enormous"]
    const small = ["Lean", "Tiny","Mini"]
    const descriptor = ["Slimy", "Scaly", "Fresh"]
    const fishTypes = ["Salmon", "Tuna", "Tilapia", "Cod", "Red Snapper", "Flounder", "Cat Fish", "Trout"]

    // Chooses size (big or small) and an adjective relative to fish's size
    if(weight >= 3){
        if(randSizeName === 1){
            size = big[0];
        }
        else if(randSizeName === 2){
            size = big[1];
        }
        else if(randSizeName === 3){
            size = big[2];
        }
    }
    else if(weight < 3){
        if(randSizeName === 1){
            size = small[0];
        }
        else if(randSizeName === 2){
            size = small[1];
        }
        else if(randSizeName === 3){
            size = small[2];
        }
    }

    //Chooses a descriptor (Slimy, Scaly, or Fresh)
    if(randDesc === 1){
        desc = descriptor[0];
    }
    else if(randDesc === 2){
        desc = descriptor[1];
    }
    else if(randDesc === 3){
        desc = descriptor[2];
    }

    //Chooses fish type
    if(randType === 1){
        type = fishTypes[0];
    }
    if(randType === 2){
        type = fishTypes[1];
    }
    if(randType === 3){
        type = fishTypes[2];
    }
    if(randType === 4){
        type = fishTypes[3];
    }
    if(randType === 5){
        type = fishTypes[4];
    }
    if(randType === 6){
        type = fishTypes[5];
    }
    if(randType === 7){
        type = fishTypes[6];
    }
    if(randType === 8){
        type = fishTypes[7];
    }

    let fishName = `${size} ${desc} ${type}`;
    return fishName;

}


for(let i = 0; i < 10; i++){
    let temp = generateFish(daysCatch)
    console.log(temp);
    addToDaysCatch(temp)

}

console.log(daysCatch);

