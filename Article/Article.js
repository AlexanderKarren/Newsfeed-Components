/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Italian Mafia Merges With Microsoft',
    date: 'Feb 12th, 2020',
    firstParagraph: `The only ones I’ve had issues with noise, but this is a fun album from the UK, very excited....
          Yeah, some records are not a perfect science but there has to be in NM condition and it was bent.
          If you're looking for from a record store, ask if they wouldn't mind.`,

    secondParagraph: `Proper tactical positioning is for those reasons I make a text post, instead of just leave (by my own experience, being able to effectively watch and target you. 
      Well, I don't think rushing the players is amazing and feels like a murder trek across the multiverse.`,

    thirdParagraph: `Also I would cut out Chesky and take a nap after you get off The Strip.
    None are bad choices, though most in-the-know folks in the thread by saying that he stayed with us while going from Zurich to bern?
    I also read there are no transfer desks in Frankfurt - at least a week, as I don't think of renting a car?`
  },
  {
    title: `Cat Stevens' New ASMR Youtube Channel`,
    date: 'Feb 12th, 2020',
    firstParagraph: `It was certainly known he did not write some of it can be shown to violate that law. Not sure when the last time I tried to skip some gruesome details.
    Easiest way since I tend to stay away from graphite shafts on irons. I find so many other things to just go past them, even if I have to see which one has the M6.
    I cannot describe how much better their lives are getting better. Then I’m less hungry in the middle of the normal range. My partner now openly acknowledges how exercise and eating well for a week and a half and then suddenly POOF!`,

    secondParagraph: `After Joker, and how bad he was in on it generally but up until the age of directors taking their own liberties with his auto-biography, which they turned into American Sniper.
    This genocide is where the mass shooters that may have a glass eye or he may have been involved with "gun control" issues since the 70's.`,

    thirdParagraph: `If this is a future change in coverage that didn't come with an open cylinder 870 using Wolf ammo.
    What populations have never been to war I can't imagine getting a message like that. You mean the person who asked for examples aren't going to make any deeper discussion seem pedantic. You meet a lot of evidence to these claims.
    No links, please, mods will still ban you for a long time since VX was sexy enough for the both of you, I completely overlooked those. If theres something wrong you send it in, they'll send you the link.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const createData = (data) => {
  let articleOpen = false;
  // Parent Container
  const article = document.createElement("div");
  article.classList.add("article");
  // Children
  const title = document.createElement("h2"); // h2
  const date = document.createElement("p"); // p.date
  date.classList.add("date");
  const content = []; // three paragraph elements
  for (let i = 0; i < 3; i++) {
    content.push(document.createElement("p"));
  }
  const span = document.createElement("span");
  span.classList.add("expandButton");
  span.textContent = "\u25BC";

  // Event Listener for span
  span.addEventListener("click", function(event) {
    article.classList.toggle("article-open");
    if (articleOpen === false) {
      span.textContent = "\u25B2";
      articleOpen = true;
    }
    else {
      span.textContent = "\u25BC";
      articleOpen = false;
    }
  });

  // Add data to elements
  title.textContent = data.title;
  date.textContent = data.date;
  content[0].textContent = data.firstParagraph;
  content[1].textContent = data.secondParagraph;
  content[2].textContent = data.thirdParagraph;

  // Append Children
  article.appendChild(title);
  article.appendChild(date);
  content.forEach(function(element) {
    article.appendChild(element);
  })
  article.appendChild(span);

  return article;
}

data.forEach(object => {
  document.querySelector(".articles").appendChild(createData(object));
});

function dateString() {
  let month = new Date();
  month = month.getMonth();
  month++;
  if (month === 1) {
    month = "Jan";
  }
  else if (month === 2) {
    month = "Feb";
  }
  else if (month === 3) {
    month = "March";
  }
  else if (month === 4) {
    month = "April";
  }
  else if (month === 5) {
    month = "May";
  }
  else if (month === 6) {
    month = "June";
  }
  else if (month === 7) {
    month = "July";
  }
  else if (month === 8) {
    month = "Aug";
  }
  else if (month === 9) {
    month = "Sep";
  }
  else if (month === 10) {
    month = "Oct";
  }
  else if (month === 11) {
    month = "Nov";
  }
  else {
    month = "Dec";
  }
  let day = new Date();
  day = day.getDate();

  let year = new Date();
  year = year.getFullYear();
  
  return `${month} ${day}, ${year}`;
}

const inputFields = document.querySelectorAll(".text-area");
inputFields.forEach(function(element) {
  element.addEventListener("input", function(event) {
    element.style.backgroundColor = "white";
  })
})

document.querySelector("button").addEventListener("click", function(event) {
  event.preventDefault();
  // const textAreas = document.querySelectorAll(".text-area");
  let allFieldsPassed = false;
  inputFields.forEach(function(element) {
    if (element.value.length <= 0) {
      allFieldsPassed = false;
      element.style.backgroundColor = "salmon";
    }
    else {
      allFieldsPassed = true;
    }
  });
  console.log(allFieldsPassed);
  if (allFieldsPassed === true) {
    newData = {
      title: document.querySelector("#title").value,
      date: dateString(),
      firstParagraph: `${document.querySelector("#title").value} by ${document.querySelector("#name").value}`,
      secondParagraph: document.querySelector("textarea").value,
      thirdParagraph: "",
    };
    document.querySelector(".articles").appendChild(createData(newData));
  }
});