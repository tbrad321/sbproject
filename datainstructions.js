//url for getting upcoming in all formats
//https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h,spreads,totals&oddsFormat=american&apiKey=9e79f3a83cd482ed5d1ffe8e753f3116
//url for getting in-season sports
//https://api.the-odds-api.com/v4/sports?
//api key
//9e79f3a83cd482ed5d1ffe8e753f3116

$.getJSON('\\DESKTOP-1HJ8DPR\Users\tbrad\OneDrive\Desktop\sb_project\sportstest.json', function(data) {
  console.log(data);
  
  $.each(data, function(index, value) {
        console.log(value);
    
        var gameid = value.id;
        var hometeam = value.home_team;
        var awayteam = value.away_team;
    
 //  $('.gameid').text(gameid);
 //  $('.hometeam').text(hometeam);
 //  $('.awayteam').text(awayteam);
    
    $('.output').append('<h1 class="gameid">' + gameid + '</h1><h2 class="hometeam">' + hometeam + '</h2><h2 class="awayteam">' + awayteam + '</h2></div>');
  });
});

//