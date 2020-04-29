/**
 * Handles a click on a photo by showing a popup with more information.
 * @param {event} event The click event.
 */
function onPhotoClick(event) {
  var parent = event.currentTarget;
  var id = parent.id;
  var bio = bios[id];
  var result = results[id];
  if (!(bio || result)) {
    return;
  }
  document.getElementById('overlay').classList.toggle('hidden', false);
  if (bio) {
    document.getElementById('description').textContent = bio;
  } else {
    var title = result['title'];
    var times = result['times'];
    var el = document.getElementById('description');
    var titleEl = document.createElement('div');
    titleEl.appendChild(document.createTextNode(title));
    titleEl.classList.toggle('description-title', true);
    el.appendChild(titleEl);
    el.appendChild(document.createTextNode(times[0]));
    for (var i = 1; i < times.length; i++) {
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode(times[i]));
    }
  }
}

/**
 * Handles a click on the grayed out overlay by closing the popup.
 * @param {event} event The click event.
 */
function onOverlayClick(event) {
  event.preventDefault();
  document.getElementById('overlay').classList.toggle('hidden', true);
  var descriptionEl = document.getElementById('description');
  while (descriptionEl.firstChild) {
    descriptionEl.removeChild(descriptionEl.firstChild);
  }
}

var bios = {
  'allison': 'When Allison decides whether to sign up for a ski race, her priorities, in order, are (1) what food will be served at the finish line (2) whether the race has a cute rhyming or punny name (3) how good the race tshirt is (4 – optional) the distance and elevation of the course. A native of the east coast, Allison was on her high school cross country ski team, so we’re looking forward to the years of teenage wisdom she’ll share with Aloha Nordic.',
  'birkiejoe': 'Birkie Joe is the only person to have been recruited to Aloha through Tinder.  He is the undisputed hot tub submersion champion, outlasting his competition by hours.  He was a high school chess superstar, but is not a great poker player - he once had to cover himself in olive oil after a bad poker hand.  He enjoys driving small 2 wheel drive rentals in the most technical snow conditions.',
  'bronwen': 'Bronwen heard about Aloha through the friend of a friend of a friend, and we\'re so glad she made the connection! She can start any party with music genres you didn\'t know were missing from your life, she can ski faster than all the Aloha boys, and oh yeah, we hear she\'s a man-eater.',
  'caryn': 'Born at high-elevation in the Land of Enchantment to track athlete parents, Caryn joined the team because she has a genetic predisposition to suffering and skate skiing was the next logical level.  In the off season, Caryn brings her data science knowledge to the team writing complex models to recruit new members or to help team members up their dating profile game.  #alsolooksgreatinspandex',
  'centro': 'Centro really wants to be a part of Aloha, but she hates xc skiing.',
  'cody': 'Cody\'s first experience skate skiing was a 26km race in Tahoe, directly after the cheerful encouragement of "you\'ll be fine!" Luckily he was fine, and he\'s been living and breathing the Aloha skiing spirit ever since.  When it\'s not snowing, he is dedicated to using his computational genetics knowledge to identify the cannabinoid that is best suited for Nordic skiers and skate skiing "recovery".  He is the person you want to play on your sloshball team, no matter what anyone says about their batting averages.',
  'diederik': 'The only team member, or as a matter of fact, member of the human race, to be offered a spot via loudspeaker on Tahoe Nordic Search and Rescue as he crossed the finish line of his first Great Ski Race wearing telemark skis. When not crushing the kms on a two wheeled vehicle or running hill repeats on Old La Honda while pushing his daughter in a stroller, you\'ll probably find him deep deep in the backcountry with a 70lb pack and a secret stash of adult beverages for his compatriots. A lover of long uphills over long downhills and good views over good shortcuts, word has it that the Belgian National Team is holding his spot for when that day comes that he learns to skate ski. Keep your eyes peeled for him at the finish line, he\'ll be the one waiting to hand you the most delicious beer you\'ve ever tasted.',
  'egan': 'Big waves, big mountains, big sweet tooth – Egan isn’t one known for doing things halfway. A former college swimmer, he has been known to hold his breath while skiing V1 uphill because you know, why not? During those rare moments when he’s not rollerskiing Old La Honda, he can be found in his day job – designing satellites that go into space. He’s the creator of those sexy team onesies, and if history holds true, we can count on him to be the first team member with an Aloha Nordic tattoo.',
  'elliott': 'According to Strava, Elliott has skied more kms than any other person in Bend.  Elliott\'s energetic out-of-the-blue email invite has propelled all of the ladies of Aloha Nordic to not only attend the Bend race, but to move permanently to the Pacific Northwest.  "We want to get a bite out of that Heath bar" - Anonymous',
  'fannie': 'Every day with Fannie is a fairytale.  We hope Fannie stay stay stays on Aloha forever.  This is the story of us: Fannie summited Lola\'s Lookout the first time she ever tried on skate skis and hasn\'t looked back since.  Fannie has a smile that could light up this whole town and an Instagram game that lights up our whole feeds.  She\'s our positive, smiling, gluten-free Juliet forever and always.',
  'garrett': 'He hasn\'t lost a cross-country ski race since 2002.  He hasn\'t lost a life race ever.  People in the ski cabin warm up just looking at his beard.  His Minnesota charm and good manners have been recruited by diplomats for world conflicts.  In fact, even Petter Northug wishes he were as interesting as Garrett Heath.',
  'juice': 'Juice has been known to filter Aloha emails from her inbox, but we know how she really feels about us... Once she sheds her "backcountry skis" for the real deal, we know her LAX prowess will lead her to victories on and off course.  Fun fact: she loved JT early, but it was clinched by his smooth jam "suit and tie".',
  'kalina': 'Kalina hopped on xc skis with a smile in the parking lot of Glacier Point (a 21-mile round trip hill-a-palooza) and has never looked back.  Glacier Point may have been her first day on skis, but it wasn\'t her first rodeo: other notable athletic achievements include the Wildflower Half-Ironman and riding a razor scooter overnight from Fremont to San Francisco.  She loves her Billie Eilish, her Five Bulgarian Sisters, and the Birkebeiner, and she\'ll pass you up hills or close down the Sawmill dance floor.',
  'laura': 'With the unique ability to sleep in any imaginable position and in any location, Shaner arrives at an early AM start line well rested and with a stomach full of fire (typically augmented by the combination of soup and hot chocolate she “crushes” for breakfast). A direct descendent of the Swedish heroine (and lesser known Nordic ski aficionado) Blenda, she leads her army of #AlohaNordic teammates off the start line and into the fray. A competitor so determined, considering no sport too extreme, she once had worried friends deploy Tahoe Search and Rescue in a hilarious mix-up between “lost in the backcountry” and “laying down my early season aerobic base”.',
  'leslie': 'For the past 25 years, Leslie has been training for her debut with #AlohaNordic. Her lifelong dedication to colorful spandex costumes, catchy playlists, February Hawaii trips, and niche sporting events (ultimate frisbee what?…) make her an unstoppable cross-country ski competitor. These days, she trains in Silicon Valley for her position as the #AlohaNordic webmaster. She can also be found running morning hills and taking swoonworthy Instagram pics with her @novemberproject pals. But we know which hashtag she really prefers…. #newfavoritesport #skiraceeverything',
  'lutz': 'Lutz has the coolest name of anyone on Aloha.  Lutz met Aloha at a post-race bus stop and by the time the bus showed up an hour later, we knew we\'d be lucky to have him on the team.  Lutz consistently crushes his goals of not placing last in Tahoe races, and if you\'re looking for the best German chocolate in the bay, he\'s your guy!',
  'maddie': 'A burgeoning artist and endurance athlete, Madeleine, or “Matterhorn” as she’s known in hardcore mountaineering circles, has been known to laugh about climbs that would bring other mortals to tears. Just ask her competitors in The Great Ski Race. Perhaps it’s due to her intense trail running foundation, or perhaps it’s due to the fact that she just likes to laugh a lot. Whatever the reason, she undoubtedly brings the “ha” in #AlohaNordic. It’s no wonder she invented the team’s name.',
  'megan': 'Megan is a straight-up Bomber. Whether it’s on the wide boards in the back bowls or on the skinny skis flying down the fiber board at Tahoe XC, she can never have enough wind flowing through her hair. Some Nordic purists may snicker a bit at her dual focus, but #AlohaNordic welcomed her with open arms, as they were longing for a Bomber to hone their descending tactics. Sometimes, Megan has to be gently reminded to substitute words such as “pow-pow” “Epic” and “Bode Miller” with “high-fluoro” “aerobic capacity” and “Petter Northug.” But this a small price to pay for the extra dimension she brings to the team.',
  'mike': 'Mike is a world-class teammate, and maybe also the World\'s Most Interesting Man.  Professional caterer?  Google wizard?  Semi-pro Suburban snow driver?  Superdad?  Mike\'s got it all.  He\'ll distract you with interesting conversation as you\'re gasping for breath up Hawk Hill, and greet you with an Arsicault chocolate croissant on the other side.  Mike made us a lasagna once; we\'re still talking about it 3+ years later.',
  'miles': 'Sports fans who call Mike Ditka the greatest player-coach of all time haven’t met Miles Rosen. Miles’ accomplishments as a nordic skier are as impressive and vast as a polar bear’s girth. And on the coaching front, he has helped many Aloha Nordic teamsters achieve PBs. Miles’ favorite pastimes include vigorous hill repeats, building new capillaries by whatever means possible and waxing poetically about Northern Minnesota and female anatomy. When not V2’ing in the mountains, Miles can be found crushing the Old La Honda roller ski record (check out his Strava account for proof).',
  'nick': 'Were it not for his intimate knowledge of Minnesota\'s best pizza joints, gravel bike rides, and multi-day canoe routes, you wouldn\'t be amiss for thinking he had hailed straight from the snowy slopes of Scandanavia.  A 7-time Birkie racer, Nick is the one you\'ll want to be with before (ever heard of pure fluoro spray?), during (maybe a tow-rope?), and after (follow to the the best beer and brats on Main Street) the race.  Rain, snow, or shine he is always in for a speedy roller ski ascent of Old La Honda or Tunitas.  But don\'t forget to bring your brakes - Nick is one of the few humans on earth who will roller ski not just up, but also down, these giant hills.',
  'peter': 'NYC finance bro turned bleeding heart academic and all around Mahalo dude.  If you ever go to a Chinese language trivia night, you want him on your team.  This guy has real Aloha potential - high school xc ski extraordinaire and college varsity crew - if he decides to commit a season to it.',
  'rachel': 'Rachel has been skiing at Royal Gorge for over 20 years.  We knew she was Aloha material when she broke her ski pole by getting it stuck on the Yuba rope tow.  Rachel has promised to dress up like an M&M and deliver candy to xc skiers every Easter.  Sometimes Rachel sleeps in until 1pm and misses the entire day\'s activities, but trust us, it\'s worth it to bring her along',
  'tom': 'Most famous for his romantic plights, Tom is known as the “emotional thrill seeker” of the group. He skis fast and never falls… except in the amorous sense. Once in a cozy irish pub, over countless White Russians and Gin Creamies, he lectured a group of innocent bystanders deep into the night on the toxic repercussions of internet dating in modern society. They laughed, they cried, and at the end they all joined Aloha Nordic. He’s the Elmer’s glue stick to your scrapbook, the vitamin D to your cold and flu season, the milk snort to your laugh… and just one of the stallions you will meet on this amazing ski team.',
  'sergey': 'Was a chance encounter with the Aloha Nordic team over New Years weekend the best or worst thing that could have happened to Sergey? Only time will tell. Sergey brings a unique, cutting-edge, European-style training strategy to the team. For example, to rest and recharge one day prior to the race, he likes to ski 4.5X the race distance at a brisk pace with unwaxed skis, no poles, and a weight vest. Since he resides in Santa Barbara he is exploring carbon offset options in order to make his commutes to Bay Area workouts good for the team AND the environment! Isn’t that great?',
  'sooder': 'This guy lives at elevation, skis most days, and runs in an exclusive pack of extreme endurance athletes.  No wonder he wins every race.  The end.',
  'wheeler': 'An ominous master in the art of persuasion, Wheeler once convinced three grown men to buy camper vans just so he could have company rebuilding his own. This psychological superiority pays dividends on any race day — non #AlohaNordic competitors beware the innocent pre-race chit-chat as he pumps you for knowledge and whittles down your confidence. An undergraduate experience spent more on skis at CU Boulder than in the classroom, his devotion to snow sports is world renown and his love of a good wax job legendary (and we’re not talking about the skis!).',
  'zack': 'Lover of The Economist Radio, proponent of the most fair cabin bed division algorithm in history, and the only Aloha member man enough to race Tahoe Rim in a pink tutu.  This guy is more mysterious than an onion and has more layers than an enigma.  How do you compete with that?',
  'zoe': 'Co-founder of Aloha Nordic in Bend, Zoë will pass you in a grinning blur so quickly you\'ll reconsider whether you were moving on your skis (or bike, or kayak, or feet, or surf board) at all. She spends her days winning the Bend Olympics (Pole Pedal Paddle), delivering flowers on her bike cruiser, dancing in onesies, hosting Aloha teammates, and is rumored to be the inspiration for the next Picky bar flavor. Spread the love, and dominate the world!'
}

var results = {
  'auburn-jan-16': {
  	'title': 'Paco\'s Fun Freestyle 10k - 2016',
  	'times': [
		'Sooder - 28:41 - 13th place',
		'Miles – 29:11 – 15th place',
		'Tom – 31:54 – 28th place',
		'Sergey – 31:55 – 29th place'
	]
  },
  'skio-jan-16': {
  	'title': 'Sierra Ski-O Round 1',
  	'times': [
  	    'Leslie – Advanced Long Blue Course – 95:18 – 11th place'
    ]
  },
  'tahoe-rim-16': {
    'title': 'Tahoe Rim Tour 26k',
    'times':  [
		'Sooder - 1:29 - 2nd place',
		'Miles – 1:32:01 – 4th place',
		'Tom – 1:39:19 – 10th place',
		'Sergey – 1:43:33 – 13th place',
		'Leslie – 2:09:44 – 49th place; 13th female',
		'Allison – 2:35:52 – 71st place; 30th female',
		'Megan – 2:43:16 – 74th place; 31st female',
		'Caryn – 3:20:33 – 52nd place; 16th female (Classic)',
		'Fannie – 3:23:49 – 54th place; 17th female (Classic)'
	]
  },
  'presidents-16': {
    'title': 'President\'s Cup 15k',
    'times': [
		'Miles – 45:57 – 9th place',
		'Mike – 47:48 – 14th place'
	]
  },
  'skio-feb-16': {
    'title': 'Sierra Ski-O Round 2',
    'times': [
		'Laura – Orange Course – 49:52 – 1st place',
		'Leslie & Rachel – Green Course – 1:55:58 – 3rd place',
		'Egan – Blue Course – 1:30:09 – 7th place'
    ]
  },
  'great-ski-race-16': {
    'title': 'The Great Ski Race 30k',
    'times': [
		'Mike Sooder – 1:44:22 – 16th place',
		'Miles – 1:50:06 – 25th place',
		'Tom – 1:50:32 – 30th place',
		'Egan – 1:54:30 – 36th place',
		'Sergey – 2:06:51 – 69th place',
		'Laura – 2:31:30 – 152nd place',
		'Fink – 3:17:19 – 271st place',
		'Diederik – 3:31:52 – 298th place',
		'Matt (classics) – 3:40:13 – 307th place',
		'Kelly + Leo – 3:46:06 – 317th place'
    ]
  },
  'napa-triathlon-16': {
    'title': 'HITS Napa Half Ironman Triathlon Relay',
    'times': [
        'Leslie, Megan, and Allison - 5:51:44'
    ]
  },
  'golden-gate-16': {
    'title': 'Golden Gate Half Marathon Run',
    'times': [
		'Tom - 1:28:08',
		'Kalina - 1:51:11',
		'Megan - 1:58:33'
	]
  },
  'pacos-jan-17': {
  	'title': 'Paco\'s Fun Freestyle 10k - 2017',
  	'times': [
		'Miles - 24:42 - 9th place',
		'Sooder - 25:09 - 15th place',
		'Egan - 25:19 - 16th place',
		'Tom - 26:45 - 19th place',
		'Wheeler - 27:41 - 24th place',
		'Birkie Joe - 27:54 - 25th place',
		'Sergey - 28:51 - 29th place',
		'Shwe - 30:50 - 36th place',
		'Leslie - 37:01 - 43rd place (4th female)',
		'Fannie - 40:04 - 47th place (6th female)',
		'Erin - 42:09 - 48th place (7th female)',
		'Evan - 43:32 - 50th place'
	]
  },
  'tahoe-rim-jan-17': {
    'title': 'Tahoe Rim Tour 26k - 2017',
    'times': [
	    'Sooder - 1:26:35 - 5th place',
    	'Birkie Joe - 1:28:27 - 6th place',
		'Miles - 1:29:19 - 7th place',
		'Egan - 1:33:20 - 9th place',
		'Tom - 1:33:40 - 10th place',
		'Peter - 1:41:30 - 18th place',
		'Shwe - 1:49:57 - 26th place',
		'Allison - 2:09:25 - 48th place (18th female)',
		'Leslie - 2:14:36 - 53rd place (21st female)',
		'Cody - 2:22:06 - 63rd place',
		'Maddie - 2:23:56 - 67th place (27th female)',
		'William Zachary - 2:30:18 - 69th place',
		'Fannie - 2:32:47 - 70th place (28th female)',
		'Caryn - 2:35:33 - 72nd place (30th female)',
		'Tex - 2:36:50 - 73rd place (31st female)'
    ]
  },
  'boulder-tour': {
    'title': 'Boulder Mountain Tour 34k - 2017',
    'times': [
    	'Birkie Joe - 1:56:00 - 76th place',
	    'Egan - 1:58:36 - 89th place'
    ]
  },
  'great-ski-race-17': {
    'title': 'The Great Ski Race 30k - 2017',
    'times': [
        'After spending hours digging our cars out of 2 feet of fresh snowfall, the team was late to the starting line, so accurate times aren\'t available!',
    	'Alex - Survived',
    	'Allison - Survived',
    	'Bronwen - Survived',
    	'Caryn - Survived',
    	'Chris - Survived',
    	'Diederick - Survived',
    	'Miles - Survived',
    	'Nick - Survived',
    	'Tom - Survived',
    	'Wheeler - Survived',
    	'William Zachary - Survived'
    ]
  },
  'cascade-crest': {
    'title': 'Cascade Crest 50k Relay',
    'times': [
    	'Allison, Elliott, Fannie, and Leslie - 5th place'
    ]
  },
  'gold-rush-17': {
    'title': '2017 Gold Rush 15, 30, and 45k',
    'times': [
    	'(15k) Miles - 45:32 - 1st place',
    	'(30k) Egan - 1:41:35 - 2nd place',
    	'(30k) Peter - 1:41:56 - 3rd place',
    	'(30k) Bronwen - 1:47:14 - 1st place (female)',
    	'(30k) William Zachary - 2:29:23 - 18th place',
    	'(45k) Birkie Joe - 2:42:47 - 20th place',
    	'(45k) Leslie - 4:23:12 - 10th place (female)',
    	'(45k) Allison - 4:25:53 - 11th place (female)',
    	'(45k) Nick - Race was interrupted'
    ]
  },
  'ppp-17': {
    'title': 'Pole Pedal Paddle: Alpine ski - 8km nordic ski - 22 mile bike - 5 mile run - 2km paddle - 800m sprint',
    'times': [
        'Zoe - 2:03:52 - 1st Elite Female',
        'Egan and Sage - 2:25:00 - 4th Male Pair (30-34)',
        'Tex and Juice - 2:36:07 - 1st Female Pair (25-29)',
        'Fannie and Al - 2:40:03 - 2nd Female Pair (25-29)',
        'Wheeler, Tom, and Robbie - 2:44:21 - 2nd Male Team (25-29)',
        'Bronwen and Lizzy - 2:47:06 - 3rd Female Pair (30-34)',
        'Leslie and Shaner - 2:47:35 - 3rd Female Pair (25-29)'
    ]
  },
  'birkie-18': {
    'title': 'American Birkebeiner 50k - 2018',
    'times': [
        'Nick - 2:40:47 (Wave 1)',
        'Miles - 2:41:14 (Wave 1)',
        'Joe - 2:43:22 (Wave 1)',
        'Egan - 2:59:31 (Wave 1)',
        'Bronwen - 3:15:23 (Wave 6)',
        'Allison - 4:07:40 (Wave 7)',
        'Leslie - 4:11:13 (Wave 7)'
    ]
  },
  'alpenglow-18': {
    'title': 'Alpenglow 20k - 2018',
    'times': [
        'Sooder - 1:12:34 - 5th place',
        'Bronwen - 1:26:24 - 17th place (3rd female)',
        'Leslie - 1:43:21 - 35th place (7th female)'
    ]
  },
  'gold-rush-18': {
    'title': '2018 Gold Rush 15, 30, and 45k',
    'times': [
        '(15k) Egan - 58:51 - 2nd place',
        '(15k) Bronwen - 1:05:28 - 6th place (female)',
        '(15k) Mike - 1:16:25 - 11th place',
        '(15k) Caryn - 1:30:17 - 9th place (female)',
        '(15k) Kalina - 1:35:55 - 11th place (female)',
        '(15k) Fannie - 1:36:23 - 12th place (female)',
        '(30k) Leslie - 2:39:43 - 6th place (female)',
        '(30k) Allison - 2:46:48 - 7th place (female)',
        '(30k) William Zachary - 3:37:04 - 14th place',
        '(45k) Chris - 2:47:37 - 11th place'
    ]
  },
  'tahoe-rim-19': {
    'title': 'Tahoe Rim Tour 26k - 2019',
    'times': [
        'Sooder - 1:25:35 - 2nd male',
        'Birkie Joe - 1:27:54 - 4th male',
        'Miles - 1:34:22 - 7th male',
        'Wheeler - 1:37:02 - 15th male',
        'Allison - 1:54:51 - 17th female',
        'Leslie - 1:57:50 - 21st female',
        'Fannie - 2:11:14 - 32nd female',
        'Kalina - 2:13:17 - 36th female',
        'Jenn - 2:48:05 - 43rd female'
    ]
  },
  'birkie-19': {
    'title': 'American Birkebeiner 50k - 2019',
    'times': [
        'Birkie Joe - 2:52:05 (Wave 1)',
        'Nick - 2:53:02 (Wave 1)',
        'Miles - 3:22:00 (Wave 1)',
        'Wheeler - 3:42:41 (Wave 8)',
        'Leslie - 4:04:19 (Wave 6)',
        'Allison - 4:04:41 (Wave 6)',
        'Shaner - 4:05:05 (Wave 8)',
        'Mike - 4:07:54 (Wave 8)',
        'Kalina - 4:31:01 (Wave 8)',
	'Egil - 4:31:36 (Wave 8)',
	'Fannie - 4:33:14 (Wave 8)',
	'Cody - 4:34:04 (Wave 8)',
	'Caryn - 4:44:25 (Wave 8)',
	'Lars - 4:44:54 (Wave 8)',
	'Robbie - 2:00:19 (29k Korte)',
	'Adrienne - 2:58:46 (29k Korte)'
    ]
  },
  'giant-ski-19': {
    'title': 'Birkie Giant Ski - 2019',
    'times': [
    	'Allison, Fannie, Leslie, Kalina, Caryn, and Cody - 1:08 (5th place)'
    ]
  },
  'skogsloppet-19': {
    'title': 'Skogsloppet 15k - 2019',
    'times': [
        'Sooder - 45:49',
        'Mike - 1:03:00'
    ]
  },
  'rg-classic-19': {
    'title': 'RG Classic - 2019',
    'times': [
        '(5k) Leslie - 30:26',
        '(5k) Rachel - 31:35',
        '(10k) Rachael - 1:11:17'
    ]
  },
  'gold-rush-19': {
    'title': 'Gold Rush 15k - 2019',
    'times': [
        'Mike - 57:14 - 3rd male',
        'Leslie - 58:25 - 2nd female',
        'Lutz - 1:25:26 - 14th male'
    ]
  },
  'billy-dutton-19': {
    'title': 'Billy Dutton Uphill - 2019',
    'times': [
        '(running) Nate - 46:04 - 9th place',
        '(nordic skiing) Bronwen - 52:54 - 19th place',
        '(nordic skiing) Leslie - 53:23 - 20th place'
    ]
  },
  'snowshoe-20': {
    'title': 'Snowshoe Thompson Classic 10k - 2020',
    'times': [
        'Davey - 48:39 - 11th place'
    ]
  },
  'pacos-20': {
    'title': 'Paco\'s Freestyle - 2020',
    'times': [
        '(10k) Gabe - 39:00 - 3rd male',
        '(15k) Peter - 47:50 - 15th male',
        '(15k) Joe - 47:58 - 16th male'
    ]
  },
  'tahoe-rim-20': {
    'title': 'Tahoe Rim Tour 26k',
    'times':  [
        'Birkie Joe - 2:01:17 - 3rd male',
        'Jacob - 2:02:52 - 4th male',
        'Sooder - 2:05:55 - 6th male (classic)',
        'Miles - 2:13:47 - 9th male',
        'Yara - 2:15:27 - 3rd female',
        'Davey - 2:18:06 - 12th male',
        'Mike - 2:28:19 - 17th male',
        'Leslie - 2:31:19 - 7th female',
        'Gabe - 2:33:25 - 21st male',
        'Allison - 2:34:14 - 8th female',
        'Fannie - 2:36:28 - 11th female',
        'Kalina - 2:45:18 - 13th female',
        'Eliza - 3:00:11 - 4th female (classic)',
        'Lily - 3:09:13 - 17th female',
        'Christine - 3:28:03 - 20th female',
        'Claire - 3:46:24 - 23rd female'
	]
  },
  'birkie-20': {
    'title': 'American Birkebeiner 50k - 2020',
    'times': [
        'Birkie Joe - 2:25:49 (Wave 1)',
        'Miles - 2:46:12 (Wave 1)',
        'Yara - 2:47:54 (Wave 4)',
        'Peter - 2:48:48 (Wave 8)',
        'Wheeler - 2:59:25 (Wave 3)',
        'Bronwen - 3:02:21 (Wave 3)',
        'Mike - 3:10:16 (Wave 5)',
        'Leslie - 3:13:17 (Wave 4)',
        'Eliza - 3:27:51 (Wave 8)',
        'Allison - 3:33:38 (Wave 5)',
        'Fannie - 3:35:59 (Wave 6)',
        'Gabe - 3:46:10 (Wave 8)',
        'Kalina - 3:56:52 (Wave 6)',
        'Christine - 4:43:44 (Wave 7)',
        'Lutz - 4:56:52 (Wave 8)',
        'Davey - 3:20:24 (55k Classic)',
        'Eliza - 5:40:06 (55k Classic)',
        'Steve - 5:38:39 (55k Classic)',
        'Sara - 5:39:27 (55k Classic)', 
        'Lily - 2:18:16 (29k Korte)'
    ]
  },
}
