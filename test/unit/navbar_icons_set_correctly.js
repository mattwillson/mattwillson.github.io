const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Navbar icons', function() {
  describe('GitHub', function() {
    describe('title', function() {
      it('should be - GitHub', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const githubIconTitle = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[0].getAttribute('title');
  
          expect(githubIconTitle).to.equal('GitHub');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('href', function() {
      it('should be - https://www.github.com/mattwillson', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const githubIconHref = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[0].getAttribute('href');
  
          expect(githubIconHref).to.equal('https://www.github.com/mattwillson');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('target', function() {
      it('should be - _blank', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const githubIconTarget = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[0].getAttribute('target');
  
          expect(githubIconTarget).to.equal('_blank');
          done();
        }).catch(err => done(err));
      });
    });
  });

  describe('Instagram', function() {
    describe('title', function() {
      it('should be - Instagram', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const instagramIconTitle = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[1].getAttribute('title');
  
          expect(instagramIconTitle).to.equal('Instagram');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('href', function() {
      it('should be - https://www.instagram.com/matt.willson', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const instagramIconHref = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[1].getAttribute('href');
  
          expect(instagramIconHref).to.equal('https://www.instagram.com/matt.willson');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('target', function() {
      it('should be - _blank', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const instagramIconTarget = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[1].getAttribute('target');
  
          expect(instagramIconTarget).to.equal('_blank');
          done();
        }).catch(err => done(err));
      });
    });
  });

  describe('LinkedIn', function() {
    describe('title', function() {
      it('should be - LinkedIn', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const linkedinIconTitle = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[2].getAttribute('title');
  
          expect(linkedinIconTitle).to.equal('LinkedIn');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('href', function() {
      it('should be - https://www.linkedin.com/in/matt-willson', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const linkedinIconHref = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[2].getAttribute('href');
  
          expect(linkedinIconHref).to.equal('https://www.linkedin.com/in/matt-willson');
          done();
        }).catch(err => done(err));
      });
    });
  
    describe('target', function() {
      it('should be - _blank', function(done) {
        JSDOM.fromURL('http://localhost:8080/').then(dom => {
          const linkedinIconTarget = dom.window.document.getElementsByClassName('navbar__icon-box')[0].children[2].getAttribute('target');
  
          expect(linkedinIconTarget).to.equal('_blank');
          done();
        }).catch(err => done(err));
      });
    });
  });
});