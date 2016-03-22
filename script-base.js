'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var generalUtils = require('./util.js');
var _ = require('underscore.string');

var Generator = module.exports = function Generator() {
	yeoman.generators.NamedBase.apply(this, arguments);

	this.appname = path.basename(process.cwd());

	this.appname = _.slugify(_.humanize(this.appname));
	this.scriptAppName = _.camelize(generalUtils.capitalize(this.appname)) + generalUtils.appName(this);
	this.classedFileName = generalUtils.capitalizeFile(this.name);
  this.classedName = generalUtils.capitalizeClass(this.name);
	this.stylesLanguage = this.config.get('styles-language');
  this.cssExtension = this.config.get('cssExtension');
  this.architecture = this.config.get('architecture');

	if (typeof this.options.appPath === 'undefined') {
		this.options.appPath = this.options.appPath || 'src';
	}

	if (typeof this.options.testPath === 'undefined') {
		this.options.testPath = this.options.testPath || 'test/spec';
	}

	if (typeof this.options.stylesPath === 'undefined') {
		this.options.stylesPath = this.options.stylesPath || 'src/styles';
	}

	var sourceRoot = '/templates/';
	this.scriptSuffix = '.js';
	this.reactSuffix = '.js';

	this.stylesSuffix = '.' + this.cssExtension;
	this.sourceRoot(path.join(__dirname, sourceRoot));
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function (src, dest) {
	yeoman.Base.prototype.template.apply(this, [
		path.join('javascript', src + this.scriptSuffix),
		path.join(this.options.appPath, dest) + this.scriptSuffix
	]);
};

Generator.prototype.reactComponentTemplate = function (src, dest) {
	yeoman.Base.prototype.template.apply(this, [
		path.join('javascript', src + this.reactSuffix),
		path.join(this.options.appPath, dest) + this.reactSuffix
	]);
};

Generator.prototype.reactClassTemplate = function (src, dest) {
	yeoman.Base.prototype.template.apply(this, [
		path.join('javascript', src + this.reactSuffix),
		path.join(this.options.appPath, dest) + this.reactSuffix
	]);
};

Generator.prototype.testTemplate = function (src, dest) {
	dest = dest.replace('scripts/', '');
	yeoman.Base.prototype.template.apply(this, [
		src + this.scriptSuffix,
		path.join(this.options.testPath, dest) + this.scriptSuffix
	]);
};

Generator.prototype.stylesTemplate = function (src, dest) {
	yeoman.Base.prototype.template.apply(this, [
		src + this.stylesSuffix,
		path.join(this.options.stylesPath, dest) + this.stylesSuffix
	]);
};

Generator.prototype.htmlTemplate = function (src, dest) {
	yeoman.Base.prototype.template.apply(this, [
		src,
		path.join(this.options.appPath, dest.toLowerCase())
	]);
};

Generator.prototype.generateSourceAndTest = function (appTemplate, testTemplate, targetDirectory) {
	this.appTemplate(appTemplate, path.join(targetDirectory, generalUtils.capitalizeFile(this.name)));
	this.testTemplate(testTemplate, path.join(targetDirectory, generalUtils.capitalizeFile(this.name)));
};

Generator.prototype.generateComponentTestAndStyle = function (componentTemplate, testTemplate, targetDirectory, stylesTemplate) {

	stylesTemplate = typeof stylesTemplate !== 'undefined' ? !!stylesTemplate : false;

	this.reactClassTemplate(componentTemplate, path.join(targetDirectory, generalUtils.capitalizeFile(this.name)));
  this.testTemplate(testTemplate, path.join(targetDirectory, generalUtils.capitalizeFile(this.name)));
	if (!!stylesTemplate) {
		this.stylesTemplate(stylesTemplate, path.join(generalUtils.capitalizeFile(this.name)));
	}
};

Generator.prototype.generateClassTestAndStyle = function (classTemplate, testTemplate, targetDirectory, stylesTemplate) {

	stylesTemplate = typeof stylesTemplate !== 'undefined' ? !!stylesTemplate : false;

	this.reactComponentTemplate(classTemplate, path.join(targetDirectory, generalUtils.capitalizeFile(this.name)));
  this.testTemplate(testTemplate, path.join(targetDirectory, generalUtils.capitalizeFile(this.name)));

	if (!!stylesTemplate) {
		this.stylesTemplate(stylesTemplate, path.join(generalUtils.capitalizeFile(this.name)));
	}
};
