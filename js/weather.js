/* Targets switch */
var $checkbox = $('#check');
/* Colors for background */
var blue = "#47BAE6";
var orange = "#FCAD44";

/* loc = location, card = la/roc, tz = timezone (only la/roc) */
function getWeather(loc, card, tz) {
    $.simpleWeather({
            location: loc,
            woeid: '',
            unit: 'f',
            success: function (weather) {
                /* Weather icon, with alt of current weather */
                html = '<img class="icon" src="images/icons/' + weather.code + '.svg" alt=' + weather.currently.replace(/\s+/g, '_') + '>';
                /* Temperature */
                html += '<h2 class="temp">' + weather.temp + '&deg;</h2>';
                /* City */
                html += '<h3 class="city">' + weather.city.toUpperCase() + '</h3>';
                /* Date & Time */
                if(tz) {
                    html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase() + '<br>' + moment().tz(tz).format('h:mm a') + '</p>'; + '</p>';
                } else {
                    html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase();
                }
                
                /* Current conditions */
                html += '<p class="rn">' + weather.currently + '<p>';
                /* High & low */
                html += '<ul class="extremes"><li>' + weather.high + '</li><li>' + weather.low + '</li></ul>'
                    /* Forecasts */
                    // Placeholder
                html += '<div class="row"><div class="col s3"> </div>';
                for (var i = 1; i < 4; i++) {
                    html += '<div class="col s2 forecast"><img class="thumb" src="images/icons/' + weather.forecast[i].code + '.svg"><span><p>' + weather.forecast[i].day + '</p><ul class="extremes small"><li>' + weather.forecast[i].high + '</li><li>' + weather.forecast[i].low + '</li></ul></span></div>';
                }
                // Placeholder
                html += '<div class="col s3"></div> </div>';
                $('#' + card + '-label').text(weather.city + ', ' + weather.region);
                $('#' + card).html(html);
            },
            error: function (error) {
                $('#' + card).html('<p>' + error + '</p>');
            }
        });
};

$(document).ready(function () {
    $('#roc').hide(100);
    moment.tz.add([
    'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
]);
    /* If user does not have local storage of locations set */
    if (localStorage.getItem("weather-location1") === null &&
        localStorage.getItem("weather-location2") === null) {

        getWeather('Los Angeles, CA', 'la', 'America/Los_Angeles');
        getWeather('Rochester, NY', 'roc', 'America/New_York');

        /* If user has localStorage of locations */
    } else {
        var storedLocation1 = localStorage.getItem("weather-location1");
        var storedLocation2 = localStorage.getItem("weather-location2");
        
        getWeather(storedLocation1, 'la');
        getWeather(storedLocation2, 'roc');
        
        $('#custom').after('<br><a id="reset" class="waves-effect waves-dark btn grey darken-3">Reset Saved Locations</a>');
        $('#reset').click(function() {
            localStorage.removeItem('weather-location1');
            localStorage.removeItem('weather-location2');
            $('#reset').after('<p class="white-text">Saved locations cleared!</p>')
        });
    }
    
    
    $checkbox.click(function () {
        /* If Rochester */
        if ($checkbox.is(':checked')) {
            $('#roc').fadeIn(10);
            $('#weather').addClass('flipped');
            $('#la').hide(400);
            $('body').css("background-color", orange);
            $('html').css("background-color", orange);
            $('meta[name=theme-color]').attr('content', '#FCAD44');


            /* If LA */
        } else {
            $('#la').fadeIn(10);
            $('#weather').removeClass('flipped');
            $('#roc').hide(400);
            $('body').css("background-color", blue);
            $('html').css("background-color", blue);
            $('meta[name=theme-color]').attr('content', '#47bae6');
        }
    });

    $('#custom').click(function () {
        $('#customize').slideToggle();
    });

    $('#submit').click(function () {
        $('#save').slideDown();
        var firstLocation = $('#firstLocation').val();
        var secondLocation = $('#secondLocation').val();
        getWeather(firstLocation, 'la');
        getWeather(secondLocation, 'roc');

    });

    $('#save').click(function () {
        if ($('#firstLocation').val() && $('#secondLocation').val()) {
            localStorage.setItem('weather-location1', $('#firstLocation').val().toString());
            localStorage.setItem('weather-location2', $('#secondLocation').val().toString());
            $('#save').html('Custom locations saved!<br>Visit this page later to see their weather again, automatically!').css('color', 'white');

        } else {
            alert("Enter two locations in the customization fields to save them locally!");
        }
    });

});