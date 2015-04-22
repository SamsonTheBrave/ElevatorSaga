

{
    init: function(elevators, floors) {
        //code works through lvl 5 and 6 with tweak
        var floor = floors[floors.length];
       
        var elevatorCall = function(elevatorNumber){   
            var elevator = elevatorNumber;
            //comment out elevator.on("idle") to make it past lvl 6
            elevator.on("idle", function() { toFloor(0); });
            elevator.on("floor_button_pressed", function(floorNum) { 
                for (i = 0 ; i < elevator.getPressedFloors().length; i++ ){
                    toFloor(floorNum);
                }
            });   
            var toFloor = function(floorNumber){
                    elevator.goToFloor(floorNumber);
                    
            };

        }
        for (var e = 0 ; e < elevators.length; e++){
            elevatorCall(elevators[e]);
        }   

    },

    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }

}