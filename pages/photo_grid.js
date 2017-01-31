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
  'carl': 'Carl was sucked into the vortex of #AlohaNordic through the wit, charm, and general gregariousness of Tom and Miles. Thanks to them, he will spend the next 8 years desperately trying to claw his way out of yet another sports team. As a biophysicist, Carl’s approach to racing is not to practice, but to calculate. The night before, Carl measures every curve and catalogues every condition of the track to determine the precise force and angle needed for each kick. By exerting only the necessary newtons, Carl saves his strength for the after-party, where the real Aloha Nordic champion is chosen.',
  'egan': 'Big waves, big mountains, big sweet tooth – Egan isn’t one known for doing things halfway. A former college swimmer, he has been known to hold his breath while skiing V1 uphill because you know, why not? During those rare moments when he’s not rollerskiing Old La Honda, he can be found in his day job – designing satellites that go into space. He’s the creator of those sexy team onesies, and if history holds true, we can count on him to be the first team member with an Aloha Nordic tattoo.',
  'fannie': 'Bio on the way!',
  'jamie': 'Some people in life are afraid of failure. Jamie cavalierly embraces it. Nothing thwarts the cruelty of a difficult jigsaw puzzle like planning to only do the perimeter and then stop there. Perhaps it’s this contrarian attitude that led Jamie to the band of rebels known as #AlohaNordic. At first she was skeptical — turning a questioning brow to the enthusiastic pleas of Tom, Miles and Carl. However, as the light started to shine on the array of apparel options that could exist with Aloha, so too did the light of Jamie’s eyes begin to glow. She may plan to exclude certain pieces of the race course, but isn’t that a brilliant strategy?',
  'laura': 'With the unique ability to sleep in any imaginable position and in any location, Shaner arrives at an early AM start line well rested and with a stomach full of fire (typically augmented by the combination of soup and hot chocolate she “crushes” for breakfast). A direct descendent of the Swedish heroine (and lesser known Nordic ski aficionado) Blenda, she leads her army of #AlohaNordic teammates off the start line and into the fray. A competitor so determined, considering no sport too extreme, she once had worried friends deploy Tahoe Search and Rescue in a hilarious mix-up between “lost in the backcountry” and “laying down my early season aerobic base”.',
  'leslie': 'For the past 25 years, Leslie has been training for her debut with #AlohaNordic. Her lifelong dedication to colorful spandex costumes, catchy playlists, February Hawaii trips, and niche sporting events (ultimate frisbee what?…) make her an unstoppable cross-country ski competitor. These days, she trains in Silicon Valley for her position as the #AlohaNordic webmaster. She can also be found running morning hills and taking swoonworthy Instagram pics with her @novemberproject pals. But we know which hashtag she really prefers…. #newfavoritesport #skiraceeverything',
  'maddie': 'A burgeoning artist and endurance athlete, Madeleine, or “Matterhorn” as she’s known in hardcore mountaineering circles, has been known to laugh about climbs that would bring other mortals to tears. Just ask her competitors in The Great Ski Race. Perhaps it’s due to her intense trail running foundation, or perhaps it’s due to the fact that she just likes to laugh a lot. Whatever the reason, she undoubtedly brings the “ha” in #AlohaNordic. It’s no wonder she invented the team’s name.',
  'megan': 'Megan is a straight-up Bomber. Whether it’s on the wide boards in the back bowls or on the skinny skis flying down the fiber board at Tahoe XC, she can never have enough wind flowing through her hair. Some Nordic purists may snicker a bit at her dual focus, but #AlohaNordic welcomed her with open arms, as they were longing for a Bomber to hone their descending tactics. Sometimes, Megan has to be gently reminded to substitute words such as “pow-pow” “Epic” and “Bode Miller” with “high-fluoro” “aerobic capacity” and “Petter Northug.” But this a small price to pay for the extra dimension she brings to the team.',
  'miles': 'Sports fans who call Mike Ditka the greatest player-coach of all time haven’t met Miles Rosen. Miles’ accomplishments as a nordic skier are as impressive and vast as a polar bear’s girth. And on the coaching front, he has helped many Aloha Nordic teamsters achieve PBs. Miles’ favorite pastimes include vigorous hill repeats, building new capillaries by whatever means possible and waxing poetically about Northern Minnesota and female anatomy. When not V2’ing in the mountains, Miles can be found crushing the Old La Honda roller ski record (check out his Strava account for proof).',
  'rachel': 'Bio on its way!',
  'tom': 'Most famous for his romantic plights, Tom is known as the “emotional thrill seeker” of the group. He skis fast and never falls… except in the amorous sense. Once in a cozy irish pub, over countless White Russians and Gin Creamies, he lectured a group of innocent bystanders deep into the night on the toxic repercussions of internet dating in modern society. They laughed, they cried, and at the end they all joined Aloha Nordic. He’s the Elmer’s glue stick to your scrapbook, the vitamin D to your cold and flu season, the milk snort to your laugh… and just one of the stallions you will meet on this amazing ski team.',
  'sergey': 'Was a chance encounter with the Aloha Nordic team over New Years weekend the best or worst thing that could have happened to Sergey? Only time will tell. Sergey brings a unique, cutting-edge, European-style training strategy to the team. For example, to rest and recharge one day prior to the race, he likes to ski 4.5X the race distance at a brisk pace with unwaxed skis, no poles, and a weight vest. Since he resides in Santa Barbara he is exploring carbon offset options in order to make his commutes to Bay Area workouts good for the team AND the environment! Isn’t that great?',
  'sooder': 'Bio coming soon!',
  'wheeler': 'An ominous master in the art of persuasion, Wheeler once convinced three grown men to buy camper vans just so he could have company rebuilding his own. This psychological superiority pays dividends on any race day — non #AlohaNordic competitors beware the innocent pre-race chit-chat as he pumps you for knowledge and whittles down your confidence. An undergraduate experience spent more on skis at CU Boulder than in the classroom, his devotion to snow sports is world renown and his love of a good wax job legendary (and we’re not talking about the skis!).',
  'zack': 'Check back later for a bio!'
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
    	'Birkie Joe - 1:28:27 - 5th place',
	'Miles - 1:29:19 - 6th place',
	'Egan - 1:33:20 - 8th place',
	'Tom - 1:33:40 - 9th place',
	'Peter - 1:41:30 - 17th place',
	'Shwe - 1:49:57 - 25th place',
	'Sooder - 1:56:54 - 35th place',
	'Allison - 2:09:25 - 48th place (18th female)',
	'Leslie - 2:14:36 - 53rd place (21st female)',
	'Cody - 2:22:06 - 63rd place',
	'Maddie - 2:23:56 - 67th place (27th female)',
	'William Zachary - 2:30:18 - 69th place',
	'Fannie - 2:32:47 - 70th place (28th female)',
	'Caryn - 2:35:33 - 72nd place (30th female)',
	'Tex - 2:36:50 - 73rd place (31st female)'
    ]
  }
}
