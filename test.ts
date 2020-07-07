import worldometer from 'worldometer-coronavirus-info'
worldometer.trackAll().then(corona=>console.log(corona))