const sumNode = require('../func/sumNode');
const { SUM_NODE } = require('../func/constants');
const chai = require('chai');
const expect = chai.expect;

describe('#SUM_NODE Test 2020', () => {
  describe('#sumNode(arr)', () => {

    it('should throw exception when arr length is not in range (SUM_NODE.ARRAY_MIN_LENGTH - SUM_NODE.ARRAY_MAX_LENGTH)', () => {
      const arrMin = new Array(SUM_NODE.ARRAY_MIN_LENGTH - 1);
      const arrMax = new Array(SUM_NODE.ARRAY_MAX_LENGTH + 1);
      expect(() => {
        sumNode(arrMin);
      }).to.throw(Error, SUM_NODE.ERRORS.ARRAY_LENGTH_INVALID);
      expect(() => {
        sumNode(arrMax);
      }).to.throw(Error, SUM_NODE.ERRORS.ARRAY_LENGTH_INVALID);
    });
    
    it('should throw exception when arr param is not Array', () => {
      const arr1 = null;
      const arr2 = "test";
      const arr3 = {};
      expect(() => {
        sumNode(arr1);
      }).to.throw(Error, SUM_NODE.ERRORS.PARAMS_NOT_IS_ARRAY);
      expect(() => {
        sumNode(arr2);
      }).to.throw(Error, SUM_NODE.ERRORS.PARAMS_NOT_IS_ARRAY);
      expect(() => {
        sumNode(arr3);
      }).to.throw(Error, SUM_NODE.ERRORS.PARAMS_NOT_IS_ARRAY);
    });

    it('should throw exception when node value is not integer or null', () => {
      const arr1 = ["a"];
      const arr2 = [0.1];
      expect(() => {
        sumNode(arr1);
      }).to.throw(Error, SUM_NODE.ERRORS.NODE_VALUE_INVALID);
      expect(() => {
        sumNode(arr2);
      }).to.throw(Error, SUM_NODE.ERRORS.NODE_VALUE_INVALID);
    });

    it('should throw exception when node value is out of range (SUM_NODE.NODE_VALUE_MIN - SUM_NODE.NODE_VALUE_MAX)', () => {
      const arr = [0];
      const arr1 = [101];
      expect(() => {
          sumNode(arr);
      }).to.throw(Error, SUM_NODE.ERRORS.NODE_VALUE_INVALID);
      expect(() => {
          sumNode(arr1);
      }).to.throw(Error, SUM_NODE.ERRORS.NODE_VALUE_INVALID);
    });
    
    it('should throw exception when array is invalid relation', () => {
      const arr = [null, 1, 2, 3, 4, 5, 6];
      expect(() => {
          sumNode(arr);
      }).to.throw(Error, SUM_NODE.ERRORS.NODE_RELATION_INVALID);
    });

    it('should return valid sum value', () => {
      const arr1 = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5];
      expect(sumNode(arr1)).to.eq(18);
      //
      const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      expect(sumNode(arr2)).to.eq(38);
      //
      const arr3 = [1,3,5,7,9,11,13];
      expect(sumNode(arr3)).to.eq(0);
    });
  });
});