function init(){


  new Vue({

    el: '#app',

    data: {

      'addtodo':'Add task',
      'todos': [

        'Gym',
      ],

      'newTask':'',
    },

    methods:{

      removeTask: function (parametroIndex) {

        this.todos.splice(parametroIndex, 1);
      },

      addTask: function (){

        if(this.newTask.length > 0){
          this.todos.push(this.newTask);
          this.newTask = '';
        }
      }

    },

  })

}



document.addEventListener('DOMContentLoaded', init);
