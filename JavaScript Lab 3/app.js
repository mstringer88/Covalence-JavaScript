let sentence = "michael stringer";

console.log("Name: " + sentence.toUpperCase());

console.log("Career: Full Stack Development Student");

console.log("Description: I am 30 years old. I have a been married since May of 2017. I spent 5 years in the U.S. Marine Corps until I was Honorably discharged in 2011. I went to college after exiting the military where I graduated with a Bachelors degree in Industrial Distribution in 2016.")

console.log(" ");

console.log("My Interests:");

function interests(myInterests, hobby) {
    if (myInterests == true, hobby == true) {
        console.log("* " + myInterests)
    }
    else {
        console.log(" ")
    };
};

let myInterests = ("Football", "Gaming", "Golf", "Hanging out with friends and family", "Going to breweries");
hobby = true;

interests("Football", true);
interests("Gaming", true);
interests("Golf", true);
interests("Hanging out with friends and family", true);
interests("Going to breweries", true);


console.log(' ');

console.log("My Previous Experience:");

let companyName = ["U.S. Marine Corps", "New Latitude", "Bamboo on 2nd"];
let jobTitle = [" - Aviation Life Support Systems Specialist", " - Inventory Manager", " - Bartender"];
let description = [" - Worked on survival equipment for all aircrew and aircraft.", " - Responsible for maintaining accurate inventory for warehouse.", " - Worked as bartender."];


function displayPosition(companyName, jobTitle, description) {
    console.log("*" + companyName + jobTitle + description)
};

displayPosition(companyName[0], jobTitle[0], description[0]);
displayPosition(companyName[1], jobTitle[1], description[1]);
displayPosition(companyName[2], jobTitle[2], description[2]);

console.log(" ");

console.log("My Skills:");

function displaySkill(skillName, isCool) {
    if (skillName == isCool, isCool == true) {
        console.log("* BAM: " + skillName)
    }
    else {
        console.log("* " + skillName)
    };
};

let skillName = ["Guitar", "Handgliding", "PowerPoint", "Walking", "Spanish", "Math"];
let isCool = true;

displaySkill("Guitar", true);
displaySkill("Handgliding", true);
displaySkill("PowerPoint", false);
displaySkill("Walking", true);
displaySkill("Spanish", true);
displaySkill("Math", false);
