/* Targets switch */
var $checkbox = $('#check');
/* Colors for background */
var blue = "#47BAE6";
var orange = "#FCAD44";

$(document).ready(function () {
    $('#roc').hide(100);
    moment.tz.add([
    'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
]);

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
            /* Date & Time */
            html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase() + '<br>' + moment().tz("America/Los_Angeles").format('h:mm a') + '</p>'; + '</p>';
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
            html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase() + '<br>' + moment().tz("America/New_York").format('h:mm a') + '</p>'; + '</p>';
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

            $("#roc").html(html);
        },
        error: function (error) {
            $("#roc").html('<p>' + error + '</p>');
        }
    });

    $checkbox.click(function () {
        /* If Rochester */
        if ($checkbox.is(':checked')) {
            $('#roc').fadeIn(10);
            $('#weather').addClass('flipped');
            $('#la').hide(400);
            $('body').css("background-color", orange);
            $('html').css("background-color", orange);

            /* If LA */
        } else {
            $('#la').fadeIn(10);
            $('#weather').removeClass('flipped');
            $('#roc').hide(400);
            $('body').css("background-color", blue);
            $('html').css("background-color", blue);
        }
    });

    $('#custom').click(function () {
        $('#customize').slideToggle();
    });

    $('#submit').click(function () {
        var firstLocation = $('#firstLocation').val();
        var secondLocation = $('#secondLocation').val();


        $.simpleWeather({
            location: firstLocation,
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
                html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase();
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
                $('#la-label').text(weather.city + ', ' + weather.region);
                $("#la").html(html);
            },
            error: function (error) {
                $("#la").html('<p>' + error + '</p>');
            }
        });
        
        
        
        
        $.simpleWeather({
            location: secondLocation,
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
                html += '<p class="date">' + moment().format('dddd[,] MMMM Do').toUpperCase();
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
                $('#roc-label').text(weather.city + ', ' + weather.region);
                $("#roc").html(html);
            },
            error: function (error) {
                $("#roc").html('<p>' + error + '</p>');
            }
        });

    });

});