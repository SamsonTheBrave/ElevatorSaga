
/////Funtional Code up to level 7
{
    init: function(elevators, floors) {
         // Let's use the first elevator
        // var elevator = elevators[0];
        var floor = floors[floors.length];
       
        var elevatorCall = function(elevatorNumber){   
            var elevator = elevatorNumber;
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