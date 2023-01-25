import readlineSync from "readline-sync";
import chalk from "chalk";
var score = 0;
var highScores=[{
  name:"Utso",
  score:0
},{
  name:"",
  score:0
}]
function welcome(){
  var userName = readlineSync.question(chalk.red("What is your name ?  "));
  console.log("Welcome "+chalk.blue(userName)+" to Game Of Thrones Fandom Quiz ");
  }
var questions = [{
  question:"Q1.Which King ruled before Robert Baratheon in the seven Kingdoms ?",
  options: "a.Jahareys Targeryan b.Areys Targeryan c.Rhager Targeryan d.Aneys Targeryan ",
  answer:"b"
},{
  question:"Q2.Ned Stark's valyrian steel sword was melted into two swords , the first one , 'The Oathkeeper' was given to Jamie which he gave to Brienne of Tarth , what was the name of the second sword ?",
  options:"a.Dark Sister b.Needle c.Ice d.Widdow's Wail ",
  answer:"d"
},{
  question:"Q3.Which house Catelyn Stark was from before marrying Ned? ",
  options:"a.Tully b.Aryn c.Blackwood d.Royce ",
  answer:"a"
},{
  question:"Q4.'Any man who must say 'I am the king' is no true king' whose quote was this? ",
  options:"a.Tyrion b.Littlefinger c.Tywin d.Varys ",
  answer:"c",
},{
  question:"Q5.In which battle Robb Stark captured Jamie Lanniester?",
  options:"a.Battle of GodsWoods b.Battle of Maidenpool c.Battle of Harrenhall d.Battle of Whispering Woods ",
  answer:"d"
},{
  question:"Q6.In which battle Danerys for the first time rode Drogon ?",
  options:"a.Battle of Yunkai b.Battle of Meereen c.Battle of Slavers' Bay d.Battle of Astapor ",
  answer:"b"
},{
  question:"Q7.Danerys is direct descendant of which great Targeryan icon? ",
  options:"a.Aemond Targeryan b.Rhaenyra Targeryan c.Rhaenys Targeryan d.Maegor 'The Cruel' Targeryan ",
  answer:"b"
},{
  question:"Q8.To whom Daemon Targeryan's sword 'Black Sister' belonged to",
  options:"a.Rhaenys Targeryan b.Maegor Targeryan c.Aegon The Conqureor d.Visenya Targeryan ",
  answer:"d"
},{
  question:"Q9.What was the name of Rhaenyra's unborn child ?",
  options:"a.Rhaenys b.Visenya c.Emma d.Rhaena ",
  answer:"b"
},{
  question:"Q10.Where did Tyrion land after escaping King's Landing ?",
  options:"a.Essos b.Pentos c.Volantis d.Bravvos ",
  answer:"a"
}]
function game(questions)
  {
    for(var i=0;i<questions.length;i++)
      {
        console.log(chalk.bold.italic.cyanBright(questions[i].question));
        var userAnswer = readlineSync.question(chalk.bold.italic.cyanBright(questions[i].options));
        if(userAnswer.toLowerCase()===questions[i].answer)
        {
          console.log(chalk.green("You are right!"));
          score++;
        }else{
          console.log(chalk.red("You are wrong!"));
          console.log(chalk.green("The correct option is "+questions[i].answer));
        }
        console.log(chalk.yellowBright("Your current score is "+score));
        console.log(chalk.yellowBright("____________"));
      }
  }
function showScores(){
  console.log(chalk.yellowBright("Congratulations the game is over , your score is "+score));
  console.log(chalk.yellowBright("check out the top 3 , if you score more than any one of them , send me a screenshot and i'll change the leader board accordingly"));
  for(var i=0;i<highScores.length;i++)
    {
      var v = i+1;
      console.log(chalk.gray(v+". "+highScores[i].name+"-"+highScores[i].score));
    }
  
}
welcome();
game(questions);
showScores();