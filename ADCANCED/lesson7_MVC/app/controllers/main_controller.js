TaskListApp.controller("TaskListCtrl", function () {
    var self = this;
    self.tasklist = model;
    self.changeIndex;
    self.addNewTask = function () {
        self.tasklist.tasks.push({
            name: self.TaskName
            , checked: false
        });
        self.TaskName = '';
    };
    self.deleteTask = function () {
        //var index=$scope.tasklist.indexOf(tasks);
        self.tasklist.tasks.splice(this.$index, 1);
        self.TaskName = " ";
    };
    
   
    self.showText = function (checked) {
        //  return checked ? "done": "undone";
      
        if (checked == true) {
            return "done";
            
        }
        else {
            return "undone";
        }
    };
    self.setStyle= function(checked){
         if (checked == true) {
            return "color:green";
        }
        else {
            return "color:red";
        }
    };
    self.edit = function(e){
        self.changeIndex=e;
        $('#edit').val(self.tasklist.tasks[0].name);
        $('#edit').show();
    };
    self.editTask = function(e){
        self.tasklist.tasks[self.changeIndex].name = $(".editInput").val();
            // self.tasklist.tasks[0].name = $(".editInput").val();
        $('#edit').hide();
    };
     self.editClose = function () {
        $('#edit').hide();
    };
});