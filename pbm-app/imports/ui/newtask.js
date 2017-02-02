/*global Pikaday*/
import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';

import Pikaday from 'pikaday-time';

import moment from 'moment';

import "./categories.js";

import './newtask.html';

Template.newtask.rendered = function(){
  const picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    use24hour: true
    });
    picker.setMoment(moment());
};

Template.newtask.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const category = parseInt(target.categoryselect.value);
    const duetime = moment(target.datepicker.value).valueOf();
 
    // Insert a task into the collection
    Tasks.insert({
      text: text,
      createdAt: new Date(),
      category: isNaN(category) ? 0 : category,
      duetime: duetime
    });
 
    // Clear form
    target.text.value = '';
  },
});