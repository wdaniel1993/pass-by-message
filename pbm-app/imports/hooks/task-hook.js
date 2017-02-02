import {
    Tasks
}
from '../api/tasks.js';

import moment from 'moment';

Tasks.find().observeChanges({
    added : function(userId, task) {

        function notify() {
            const sound = document.getElementById("audio");
            sound.play();
        }
        if (task.duetime) {
            const difftime = moment(task.duetime).valueOf() - moment().valueOf();
    
            if (difftime > 0) {
                setTimeout(notify, difftime);
            }
            else {
                notify();
            }
        }
    }
});
