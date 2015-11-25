
describe('THIS IS THE FIRST ROOT "DESCRIBE"', function () {
    it('THIS IS THE FIRST "IT" FIRST ROOT "DESCRIBE"', function () {
        expect(true).toBe(true);
    });
    it('THIS IS THE SECOND "IT" FIRST ROOT "DESCRIBE"', function () {
        expect(true).toBe(true);
    });

});


describe('THIS IS THE SECOND ROOT "DESCRIBE"', function () {
    it('THIS IS THE FIRST "IT" IN SECOND ROOT "DESCRIBE"', function () {
        expect(true).toBe(true);
    });
    it('THIS IS THE SECOND IT IN SECOND ROOT "DESCRIBE"', function () {
        expect(true).toBe(true);
    });

    describe('THIS IS THE FIRST NESTED "DESCRIBE"', function () {
        it('THIS IS THE FIRST "IT" IN SECOND ROOT "DESCRIBE"', function () {
            expect(true).toBe(true);
        });
        it('THIS IS THE SECOND "IT" IN SECOND ROOT "DESCRIBE"', function () {
            expect(true).toBe(true);
        });
    });

});