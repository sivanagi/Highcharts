Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    
    title: {
        text: 'Location wise sales in March, 2022'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Locations',
        colorByPoint: true,
        data: [{
            name: 'Bangalore',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Hyderabad',
            y: 11.84
        }, {
            name: 'Delhi',
            y: 10.85
        }, {
            name: 'Chennai',
            y: 4.67
        }, {
            name: 'Pune',
            y: 4.18
        }, {
            name: 'Kolkata',
            y: 1.64
        }, {
            name: 'Lucknow',
            y: 1.6
        }, {
            name: 'Bihar',
            y: 1.2
        }, {
            name: 'Jaipur',
            y: 2.61
        }]
    }]
});