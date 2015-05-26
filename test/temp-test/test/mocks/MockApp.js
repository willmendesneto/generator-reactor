'use strict';

var MockApp = {

  getCardListItem: function () {
    return [
        {
          id: 1,
          name: "Yeoman",
          website: "http://yeoman.io",
          description: "yo scaffolds out a new application, writing your build configuration (e.g Gruntfile, Gulpfile) and pulling in relevant build tasks and package manager dependencies (Bower, npm) that you might need for your build.",
          image: "/images/yeoman.png"
        },
        {
          id: 2,
          name: "Grunt",
          website: "http://gruntjs.com",
          description: "The Build System is used to build, preview and test your project. Grunt and Gulp are two popular options.",
          image: "/images/grunt.png"
        },
        {
          id: 3,
          name: "Bower",
          website: "http://bower.io",
          description: "The Package Manager is used for dependency management, so that you no longer have to manually download and manage your scripts. Bower and npm are two popular options.",
          image: "/images/bower.png"
        }
    ];
  },
  getCardItem: function () {
    return {
      id: 1,
      name: "Yeoman",
      website: "http://yeoman.io",
      description: "yo scaffolds out a new application, writing your build configuration (e.g Gruntfile, Gulpfile) and pulling in relevant build tasks and package manager dependencies (Bower, npm) that you might need for your build.",
      image: "/images/yeoman.png"
    };
  },
};
