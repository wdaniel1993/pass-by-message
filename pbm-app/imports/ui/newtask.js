import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';

import "./categories.js";

import './newtask.html';


Template.newtask.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const category = target.categoryselect.value;
    const duetime = new Date();
 
    // Insert a task into the collection
    Tasks.insert({
      text: text,
      createdAt: new Date(),
      category: category,
      duetime: duetime
    });
 
    // Clear form
    target.text.value = '';
  },
});