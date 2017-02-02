/* global location */
import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
import '../hooks/task-hook.js';

import 'pikaday-time/css/pikaday.css';
 
import './task.js';
import './newtask.js';
import './body.html';
 
Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { duetime: 1 }});
  },
  isAdmin() {
    return location.hash == "#admin";
  }
});