/*
Copyright (c) MyTeksi GrabTaxi 2013
Author: Fadrizul Hasani <fadrizul@gmail.com>
*/

var should = require('should')
var logger = require('../lib/logger')

describe('Logger', function () {
  describe('when log level config is 0', function () {
    before(function () {
      logger.levels.info = 0
    })

    it('should display info logs', function () {
      logger.levels.info.should.equal(0)
    })

    it('should display verbose logs', function () {
      logger.levels.verbose.should.equal(1)
    })

    it('should display debug logs', function () {
      logger.levels.debug.should.equal(2)
    })

    it('should display data logs', function () {
      logger.levels.data.should.equal(3)
    })

    it('should display warn logs', function () {
      logger.levels.warn.should.equal(4)
    })

    it('should display error logs', function () {
      logger.levels.error.should.equal(5)
    })
  })

  describe('when log level config is 1', function () {
    before(function () {
      logger.levels.info = 1
    })

    it('should display info logs', function () {
      logger.levels.info.should.equal(1)
    })

    it('should display verbose logs', function () {
      logger.levels.verbose.should.equal(1)
    })

    it('should display debug logs', function () {
      logger.levels.debug.should.equal(2)
    })

    it('should display data logs', function () {
      logger.levels.data.should.equal(3)
    })

    it('should display warn logs', function () {
      logger.levels.warn.should.equal(4)
    })

    it('should display error logs', function () {
      logger.levels.error.should.equal(5)
    })
  })

  describe('when log level config is 2', function () {
    before(function () {
      logger.levels.info = 2
    })

    it('should display info logs', function () {
      logger.levels.info.should.equal(2)
    })

    it('should display verbose logs', function () {
      logger.levels.verbose.should.equal(1)
    })

    it('should display debug logs', function () {
      logger.levels.debug.should.equal(2)
    })

    it('should display data logs', function () {
      logger.levels.data.should.equal(3)
    })

    it('should display warn logs', function () {
      logger.levels.warn.should.equal(4)
    })

    it('should display error logs', function () {
      logger.levels.error.should.equal(5)
    })
  })

  describe('when log level config is 3', function () {
    before(function () {
      logger.levels.info = 3
    })

    it('should display info logs', function () {
      logger.levels.info.should.equal(3)
    })

    it('should display verbose logs', function () {
      logger.levels.verbose.should.equal(1)
    })

    it('should display debug logs', function () {
      logger.levels.debug.should.equal(2)
    })

    it('should display data logs', function () {
      logger.levels.data.should.equal(3)
    })

    it('should display warn logs', function () {
      logger.levels.warn.should.equal(4)
    })

    it('should display error logs', function () {
      logger.levels.error.should.equal(5)
    })
  })

  describe('when log level config is 3', function () {
    before(function () {
      logger.levels.info = 4
    })

    it('should display info logs', function () {
      logger.levels.info.should.equal(4)
    })

    it('should display verbose logs', function () {
      logger.levels.verbose.should.equal(1)
    })

    it('should display debug logs', function () {
      logger.levels.debug.should.equal(2)
    })

    it('should display data logs', function () {
      logger.levels.data.should.equal(3)
    })

    it('should display warn logs', function () {
      logger.levels.warn.should.equal(4)
    })

    it('should display error logs', function () {
      logger.levels.error.should.equal(5)
    })
  })

  describe('when log level config is 3', function () {
    before(function () {
      logger.levels.info = 5
    })

    it('should display info logs', function () {
      logger.levels.info.should.equal(5)
    })

    it('should display verbose logs', function () {
      logger.levels.verbose.should.equal(1)
    })

    it('should display debug logs', function () {
      logger.levels.debug.should.equal(2)
    })

    it('should display data logs', function () {
      logger.levels.data.should.equal(3)
    })

    it('should display warn logs', function () {
      logger.levels.warn.should.equal(4)
    })

    it('should display error logs', function () {
      logger.levels.error.should.equal(5)
    })
  })
})