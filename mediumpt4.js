var car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    mileage: 0,
    color: 'Silver',
    
    driveToWork: function(distance) {
      var oldMileage = this.mileage;
      this.mileage += distance;
      console.log('Previous Mileage: ' + oldMileage + ' miles');
      console.log('New Mileage: ' + this.mileage + ' miles');
    },

    driveAroundTheWorld: function(distance) {
      var oldMileage = this.mileage;
      this.mileage += distance;
      console.log('Previous Mileage: ' + oldMileage + ' miles');
      console.log('New Mileage: ' + this.mileage + ' miles');
    },

    runErrands: function(distance) {
      var oldMileage = this.mileage;
      this.mileage += distance;
      console.log('Previous Mileage: ' + oldMileage + ' miles');
      console.log('New Mileage: ' + this.mileage + ' miles');
    }
  };
  
  car.driveToWork(33);
  car.driveAroundTheWorld(24000);
  car.runErrands(30);
  