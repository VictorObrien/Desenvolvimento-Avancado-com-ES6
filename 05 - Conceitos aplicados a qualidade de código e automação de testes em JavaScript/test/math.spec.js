const assert = require('assert');
const Math = require('../src/math');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function () {
    // hooks
    beforeEach(function () {
        value = 0;
    })

    it('Sum two numbers', function (done) {
        const math = new Math();
        value = 5;
        this.timeout(3000); // define o tempo de espera do teste

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });

    it('Sum two numbers with chai', function (done) {
        const math = new Math();
        value = 5;
        this.timeout(3000); // define o tempo de espera do teste

        math.sum(value, 5, value => {
            expect(value).to.equal(10) //uso do 'expect' da biblioteca chai
            done();
        });
    });

    it('Multiply two numbers', function () {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });

    it('Multiply two numbers with chai', function () {
        const math = new Math();
        const obj = {
            name: 'Victor Obrien'
        };
        const obj2 = {
            name: 'Victor Obrien'
        };
        expect(obj).to.deep.equal(obj2);
        //expect(math.multiply(value, 5)).to.equal(0);
    });

    it.only('Calls req with sum and index values', function () {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called')
            }
        };
        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0][0]).to.equal('index');
    });
});