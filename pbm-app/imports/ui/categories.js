import { Template } from 'meteor/templating';
 
import { Categories } from '../config/categories.js';

import "./categories.html";

Template.categories.helpers({
    categories: function(){
        return Categories;
    },
});