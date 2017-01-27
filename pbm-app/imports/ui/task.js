/*global _*/
import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';

import { Categories } from '../config/categories.js';
 
import './task.html';

Template.task.helpers(
  {
    getImagePath(id) {
      const filtered = _.where(Categories,{key: id});
      const first = _.first(filtered);
      return first.image;
    }
  });

Template.task.events({
  'click .delete'() {
    Tasks.remove(this._id);
  },
});