describe('timer', function() {

    it('starts out at 0', function() {
        var clock = sinon.useFakeTimers();

        var time = timer();
        time.start();
        expect(time()).toEqual(0);

        clock.restore();
    });

    it('ticks as expected', function() {
        var clock = sinon.useFakeTimers();

        var time = timer();
        time.start();

        clock.tick(10);
        clock.tick(10);

        expect(time()).toEqual(20);

        clock.restore();
    });

});
