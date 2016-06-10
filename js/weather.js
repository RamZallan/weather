/* Targets switch */
var $checkbox = $('#check');
/* Colors for background */
var blue = "#47BAE6";
var orange = "#FCAD44";

$(document).ready(function () {
    /* Defaults weather to LA */
    $.simpleWeather({
        location: 'Los Angeles, CA',
        woeid: '',
        unit: 'f',
        success: function (weather) {
            /* Weather icon, with alt of current weather */
            html = '<img class="icon" src="images/icons/' + weather.code + '.svg" alt=' + weather.currently.replace(/\s+/g, '_') + '>';
            /* Temperature */
            html += '<h2 class="temp">' + weather.temp + '&deg;</h2>';
            /* City */
            html += '<h3 class="city">' + weather.city.toUpperCase() + '</h3>';
            /* Date */
            html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase() + '</p>';
            /* Current conditions */
            html += '<p class="rn">' + weather.currently + '<p>';
            /* High & low */
            html += '<ul class="extremes"><li>' + weather.high + '</li><li>' + weather.low + '</li></ul>'
            /* Forecasts */
            // Placeholder
            html += '<div class="row"><div class="col s3"> </div>';
            for (var i = 1; i < 4; i++) {
                html += '<div class="col s2 forecast">' + '<span><p>' + weather.forecast[i].day + '</p><ul class="extremes small"><li>' + weather.forecast[i].high + '</li><li>' + weather.forecast[i].low + '</li></ul></span></div>';
            }
            // Placeholder
            html += '<div class="col s3"></div> </div>';

            $("#la").html(html);
        },
        error: function (error) {
            $("#la").html('<p>' + error + '</p>');
        }
    });

    $.simpleWeather({
        location: 'Rochester, NY',
        woeid: '',
        unit: 'f',
        success: function (weather) {
            /* Weather icon, with alt of current weather */
            html = '<img class="icon" src="images/icons/' + weather.code + '.svg" alt=' + weather.currently.replace(/\s+/g, '_') + '>';
            /* Temperature */
            html += '<h2 class="temp">' + weather.temp + '&deg;</h2>';
            /* City */
            html += '<h3 class="city">' + weather.city.toUpperCase() + '</h3>';
            /* Date */
            html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase() + '</p>';
            /* Current conditions */
            html += '<p class="rn">' + weather.currently + '<p>';
            /* High & low */
            html += '<ul class="extremes"><li>' + weather.high + '</li><li>' + weather.low + '</li></ul>'
            /* Forecasts */
            // Placeholder
            html += '<div class="row"><div class="col s3"> </div>';
            for (var i = 1; i < 4; i++) {
                html += '<div class="col s2 forecast">' + '<span><p>' + weather.forecast[i].day + '</p><ul class="extremes small"><li>' + weather.forecast[i].high + '</li><li>' + weather.forecast[i].low + '</li></ul></span></div>';
            }
            // Placeholder
            html += '<div class="col s3"></div> </div>';

            $("#roc").html(html);
        },
        error: function (error) {
            $("#roc").html('<p>' + error + '</p>');
        }
    });

    $checkbox.click(function () {
        /* If Rochester */
        if ($checkbox.is(':checked')) {
            $('#weather').addClass('flipped');
            $('body').css("background-color", orange);
            $('html').css("background-color", orange);

            /* If LA */
        } else {
            $('#weather').removeClass('flipped');
            $('body').css("background-color", blue);
            $('html').css("background-color", blue);
        }
    });
});