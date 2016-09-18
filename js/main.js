var TodoComponent = Vue.extend({
	data:function(){
		return {
			inEditMode:false
		}
	},
	props:['todo'],
	template: '<div><span v-on:click="clicked" v-show="!inEditMode">{{todo.title}}</span><input v-on:keyup.enter="save" v-model="todo.title" v-show="inEditMode" /></div>',
	methods:{
		clicked: function (){
			this.inEditMode = true;
		},
		save: function(){
			this.inEditMode = false;
		}
	}
});

Vue.component('todo-component', TodoComponent);

new Vue({
	el: '#app',
	data: {
		message: 'hello vue todo',
		url:'http://www.google.com',
		todoText:'',
		todos: [
			{title: 'Todo 1'},
			{title: 'Todo 2'},
			{title: 'Todo 3'},
			{title: 'Todo 4'}
		],
		showTodos: true,
		count:1

	},
	methods:{
		createTodos: function (){
			var todoText = this. todoText.trim();
			if(todoText){
				this.todos. push({title:todoText});
				this.todoText='';
			}
		},
		clearTodos: function() {
			this.todoText='';
		},
		increaseCount: function(){
			this.count+=1;
		},
		removeTodo: function(index){
			this.todos.splice(index, 1);
		}
	}
});