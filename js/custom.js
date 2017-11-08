$(document).ready(function() {

var loadFeffect = function(target, feffect) {
    $(target).removeClass(feffect).addClass(feffect);

    var wait = window.setTimeout( function(){
       $(target).removeClass(feffect);
    }, 1500);
};

loadFeffect('.login-form-wrapper', 'magictime spaceInUp');    
loadFeffect('.tab-content', 'magictime slideLeftRetourn');    
   
$('.login-wrapper').on('click', function(){
    loadFeffect('.login-form-wrapper', 'shake');    
});

$('.pay').on('click', function(){
    $('.modal-dialog').addClass('magictime spaceOutLeft');
    
    window.setTimeout(function(){
        var taskWrapper = $('.tasks-wrapper'),
            container = '<div class="tasks-wrapper sidebar-table"><p>Processed payments</p><table class="table small"><tbody></tbody></table></div>',
            newBar = '<div class="bar bar-animated"></div><div class="in-progress">In progress</div><div class="done">Done</div>';

            if ( !($('.tasks-wrapper').length) ) {
                $('.tasks').html(container);        
            }

            $('.tasks-wrapper').append(newBar);
        
            $('.modal-dialog').removeClass('magictime spaceOutLeft');
            $('#myModal').modal('hide');
    
            function complete() {
                var newDeposit = '<tr><td>#3061744</td><td class="text-right">Deposited</td></tr>',
                    newPartial = '<tr><td>#3061744</td><td class="text-right">Partially Deposited</td></tr>',
                    newCancel = '<tr><td>#3061744</td><td class="text-right">Cancelled</td></tr>';

                $('.bar').css('background-color', 'green');
                $('.done').fadeIn(300, function(){
                    $('.tasks-wrapper').find('div').remove();
                    $('.sidebar-table tbody').append(newDeposit);
                });
            };
       
            $('.in-progress').fadeOut(2000, complete);
    }, 500);
});



$('.merchant-links').on('click', function(){
    loadFeffect('.tab-content', 'magictime slideLeftRetourn');
});

$('.profile .submit').on('click', function(e){
    var success = $('.success');
    e.preventDefault();
    success.css('display', 'inline-block');

    loadFeffect('.success', 'magictime vanishIn');
});
    
    
$('body').on('click', function(){
    $('.invalid-message').slideToggle();
});



 /*var images = ['63.gif', '106.gif', '106-1.gif', '109.gif', '477.png'];

  $('<img class=" class="fade-in" src="images/' 
    + images[Math.floor(Math.random() * images.length)] 
    + '">').appendTo('.wrapper-404 div');*/


//  var merchantsTd = $('.merchants tbody > .sub-thead');
//  merchantsTd.on('click', function(){
//    var currGlyph = $(this).find('.glyphicon');
//    currGlyph.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
//  });


$(function () {
        $('#container1').highcharts({
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            xAxis: {
                type: 'hour'
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} at {point.x} o\'clock convertion rate was <b>{point.y}%</b>'
            },
            plotOptions: {
                area: {
                    pointStart: 0000,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Yesterday',
                color: '#7cb5ec',
                data: [0, 0, 1, 3, 4, 5, 6, 3, 2, 1, 0, 0, 0, 4, 5, 6, 7, 7, 7, 8, 7, 6, 5, 4 ]
            }, {
                name: 'Today',
                color: '#fe4481',
                data: [1, 2, 3, 4, 6, 5, 4, 3, 1, 0, 0, 1, 1, 3, 4, 5, 6, 7, 7, 6, 7, 5, 4, 3]
            }]
        });
    });
  
$(function () {
    $('#container4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            area: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'area',
            name: 'Payment state',
            data: [
                ['Initiated',   45.0],
                ['Deposited',       26.8],
                {
                    name: 'Cancelled',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Declined',    8.5],
                ['Approved',     6.2],
            ]
        }]
    });
});
    
$(function () {
    var chart;
    
    $(document).ready(function () {
        
        // Build the chart
        $('#container9').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: 'transparent'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Declined / Unapproved',
                data: [
                    ['3d secure authentication failed',  60],
                    ['Abandoned', 82],
                    ['Do not honour', 67],
                    ['Expired card', 10],
                    ['Invalid Amount', 12],
                    ['No account of type requested', 7],
                    ['Not sufficient funds', 70],
                    ['Exceeds withdrawal frequency limit', 6],
                    ['Invalid transaction', 69]
                ]
            }]
        });
    });
    
});

$(function(){

$('#container10 .highcharts-axis').remove();                      // remove axe
$('#container10 .highcharts-axis-labels').remove();               //remove axe label
$('#container10 .highcharts-markers.highcharts-tracker').remove();// remove dot   

$('#container10').find('text').remove();
$('#container11 .highcharts-axis').remove();                      // remove axe
$('#container11 .highcharts-axis-labels').remove();               //remove axe label
$('#container11 .highcharts-markers.highcharts-tracker').remove();// remove dot   

$('#container12').find('text').remove();
$('#container12 .highcharts-axis').remove();                      // remove axe
$('#container12 .highcharts-axis-labels').remove();               //remove axe label
$('#container12 .highcharts-markers.highcharts-tracker').remove();// remove dot   

$('#container11').find('text').remove();

})

$(function () {
    $('#container20').highcharts({
       chart: {
        backgroundColor: 'transparent'
      },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            type: 'column',
            name: 'Number of Chargebacks',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            type: 'spline',
            name: 'Amount (EUR)',
            data: [6.0, 6.1, 10.5, 12.5, 12.4, 2.5, 15, 13, 21, 16, 11.9, 5.2],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }]
    });
});

$(function () {
    $('#container21').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },
        showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Payments',
            data: [
                ['Authorised',   45.0],
                ['Abandoned',       26],
                {
                    name: 'Declined',
                    y: 12,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    });
});


$(function () {
    
    $(document).ready(function () {
        $('#mixed_container').highcharts({
            chart: {
                type: 'bar',
                backgroundColor: 'transparent'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: [{
                categories: '-',
                reversed: false,
                labels: {
                    // step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: '+',
                linkedTo: 0,
                labels: {
                    // step: 1

                }
            }],
          legend: {
              labelFormatter: function () {
                  return this.yData[0] + ' ' + this.name;
              }
          },
            yAxis: {
                title: {
                    text: null
                },
                labels: {

                    enabled: false
                },
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    dataLabels: {
                      enabled: false,
                      
                      color: '#000000',
                      x: 0,
                      y: -80

                  },
                pointPadding: 0.1,
                groupPadding: 0,
                pointWidth: 30
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b> ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
            series: [{
                name: 'Declined',
                data: [-391], 
                color: '#cb193c'
            }, {
                name: 'Reversed',
                data: [-20],
                color: '#90001c'
            },{
                name: 'Approved',
                data: [62],
                color: '#588040'
            }, {
                name: 'Processed',
                data: [1056],
                color: '#85bb65'
            }]
        });
    });

});

jQuery(function () {
        jQuery('#container7').highcharts({
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    hour: '%I %p',
                    minute: '%I:%M'
                }
            },
            title: {
                text: ''
            },
            yAxis: {
                allowDecimals: true,

                title: {
                    text: 'Sum'
                }
            },
            tooltip: {
                pointFormat: 'Credit: {point.y}.'
            },
            plotOptions: {
                area: {
                    pointStart: 0000,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'RUB',
                color: '#3c9581',
                data: [18470.00, 13507.00, 3703.00, 12855.25, 5267.75, 19209.75, 8046.75, 30141.25, 12909.25, 9378.00, 44806.00, 42111.50, 39808.25, 48514.25, 51403.00, 28772.00, 5874.00, 58501.00, 57688.75, 62900.50, 7461.00, 6078.97, 43944.00, 45125],
                pointStart: Date.UTC(2014, 07, 1, 0, 0, 0),
                pointInterval: 1 // one day
            },{
                name: 'USD',
                color: '#2d3e50',
                data: [60.00, 98.00, 59.69, 41.90, 11.38, 17.90, 8046.75, 30141.25, 1209.25, 32635.29, 108.00, 7836.50, 3808.25, 3156.10, 65.00, 300.00, 4765.00, 257.00, 5788.75, 6200.50, 7041.00, 469.50, 439.00, 45],
                pointStart: Date.UTC(2014, 07, 1, 0, 0, 0),
                pointInterval: 1 // one day
            },{
                name: 'EUR',
                color: '#FECD23',
                data: [138, 103, 128, 106, 2, 91, 140, 47, 24, 133, 57, 131, 99, 87, 111, 33, 76, 135, 96, 100, 105, 58, 108, 89],
                pointStart: Date.UTC(2014, 07, 1, 0, 0, 0),
                pointInterval: 1 // one day
            }]

        });
    });
});



$(function(){
    var searchField = $('.search-field');
          

    searchField.on('keyup', function(){
        var searchVal = searchField.val();
        console.log(searchVal);

        if(searchVal === "Description"){
            $('.search-desc .dropdown-menu').slideDown();
        } else if (searchVal === "123456") {
            $('.im-lucky-payment .dropdown-menu').slideDown();
        } else if (searchVal === "987654") {
            $('.im-lucky-order .dropdown-menu').slideDown();
        } else {
            $('.dropdown-menu').slideUp();
        }
    });

    $('.search-wrapper li').on('click', function(){
        $(this).find('.glyphicon').css('display', 'block');
    });
});

$(function (){
    var collapsedEls = $(".collapse");

    $('.expand-interfaces').on("click", function(){
        collapsedEls.collapse('show');
    });
    $('.collapse-interfaces').on("click", function(){
        collapsedEls.collapse('hide');
    });
})

// $('.example').tooltip();

 $(document).ready(function () {

      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('.scrollup').fadeIn();
          } else {
              $('.scrollup').fadeOut();
          }
      });

      $('.scrollup').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
  });

 

$(function() {
  
  
  var availableTags = [
      "3704962 – RBKM Whotrades",
    "3705720 – alpari rbkmoney",
    "3705738 – Roboforex rbkmoney",
    "3705928 – americanadom rbkmoney",
    "3705787 – Forex4you rbkmoney",
    "3705845 – FXGlory rbkmoney",
    "3705894 – FXGM rbkmoney",
    "3705779 – Freshforex rbkmoney",
    "3705753 – Online Posrednik rbkmoney",
    "3705803 – Vivatao rbkmoney",
    "3705837 – Izobility rbkmoney",
    "3705860 – ProfitGroup rbkmoney",
    "3705878 – Gaijin rbkmoney",
    "3705886 – Pokoopka rbkmoney",
    "3705761 – AmberGames rbkmoney",
    "3705902 – FIT4LIFE rbkmoney",
    "3705746 – DimonGuitars rbkmoney",
    "3705795 – FxPrivate rbkmoney",
    "3705829 – MaxiForex rbkmoney",
    "3705910 – GRANDTAO rbkmoney",
    "3705811 – tebebuy rbkmoney",
    "3705852 – TravianGames rbkmoney",
    "3705704 – GlobalFX rbkmoney",
    "3705712 – taobaofocus rbkmoney",
    "3706066 – GAINSY rbkmoney",
    "3706082 – Prostoprint rbkmoney",
    "3706116 – Zadarma rbkmoney",
    "3706124 – WorldofWigs rbkmoney",
    "3706140 – LuxTao rbkmoney",
    "3706181 – FOREXITE rbkmoney",
    "3706249 – Agea rbkmoney",
    "3706264 – andreevalexandr rbkmoney",
    "3706470 – Gaijin rbkmoney",
    "3706611 – shopvill rbkmoney",
    "3706058 – mindmethods rbkmoney",
    "3706132 – Weship2you rbkmoney",
    "3706173 – ifcmarkets rbkmoney",
    "3706439 – FIGARO rbkmoney",
    "3706447 – NasBroker rbkmoney",
    "3706538 – Shopozz rbkmoney",
    "3706645 – Euroshopping24 rbkmoney",
    "3706108 – emexdwc rbkmoney",
    "3706165 – goldcoach rbkmoney",
    "3706389 – nordfx rbkmoney",
    "3706397 – bigpoint rbkmoney",
    "3706421 – zakazzaraz rbkmoney",
    "3706546 – imhoster rbkmoney",
    "3706157 – Dinodirect rbkmoney",
    "3706199 – NEWICEBERG rbkmoney",
    "3706223 – tao rbkmoney",
    "3706280 – K-Booking rbkmoney",
    "3706348 – GKFX rbkmoney",
    "3706355 – ftinvest rbkmoney",
    "3706363 – PALMARY rbkmoney",
    "3706405 – 365tickets rbkmoney",
    "3706496 – my60s rbkmoney",
    "3706579 – BURJAUTO rbkmoney",
    "3706587 – Altivoip rbkmoney",
    "3706595 – AForex rbkmoney",
    "3706603 – taobao rbkmoney",
    "3706660 – Rutopbuy rbkmoney",
    "3706017 – Streamforex rbkmoney",
    "3706025 – Tinydeal rbkmoney",
    "3706629 – ForexClub rbkmoney",
    "3706009 – RusBid rbkmoney",
    "3706033 – ClonoShop rbkmoney",
    "3706041 – Teletrade rbkmoney",
    "3706074 – xDirect rbkmoney",
    "3706090 – Shopotam rbkmoney",
    "3706231 – OptoSpot rbkmoney",
    "3706298 – panteon-finance rbkmoney",
    "3706306 – Usbrands rbkmoney",
    "3706330 – pochtoy rbkmoney",
    "3706504 – Kitmall rbkmoney",
    "3706512 – BFOREX rbkmoney",
    "3706520 – RiotGames rbkmoney",
    "3706637 – ASTclub rbkmoney",
    "3706256 – govorun-card rbkmoney",
    "3706272 – Kupinatao rbkmoney",
    "3706314 – Fotourism rbkmoney",
    "3706371 – Aeolusexpress rbkmoney",
    "3706553 – nazya rbkmoney",
    "3706207 – RBKGames rbkmoney",
    "3706215 – Trading System rbkmoney",
    "3706322 – Lionstone rbkmoney",
    "3706413 – come365 rbkmoney",
    "3706454 – Incomm rbkmoney",
    "3706462 – forex-m rbkmoney",
    "3706488 – lh-broker rbkmoney",
    "3706561 – Superposilka rbkmoney",
    "3706652 – Fibo rbkmoney",
    "3706694 – FBS rbkmoney"
    ];
    
       
  
    $( "#dep-names" ).autocomplete({
        source: availableTags,
        close: function(event, ui) {
          console.log();
          
          $(this).css('width', $(this).val().length + "0") ;
//          $(this).attr('size', $(this).val().length);

        }
      });
});

$('.payment-state').tooltip();

$(".merchant-select, .state").chosen();

$(function() {
    $( ".date-from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( ".date-to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( ".date-to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( ".date-from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });


  

