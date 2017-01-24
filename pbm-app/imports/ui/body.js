import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './task.js';
import './newtask.js';
import './body.html';
 
Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 }});
  },
});