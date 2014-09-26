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

    it('stops timer when stopped', function() {
        var clock = sinon.useFakeTimers();

        var time = timer();
        time.start();

        clock.tick(10);

        time.stop();

        clock.tick(10);

        expect(time()).toEqual(10);

        clock.restore();
    });

    it('restarts timer when started after stopped', function() {
        var clock = sinon.useFakeTimers();

        var time = timer();
        time.start();

        clock.tick(10);

        time.stop();
        time.start();

        clock.tick(15);

        expect(time()).toEqual(15);

        clock.restore();
    });

    it('can tick on animation frame', function(done) {
        var time = timer();
        time.start();

        var count = 0;

        time.onAnimationFrame(function() {
            count++;
            if (count > 3) {
                time.stop();
                done();
            }
        });
    });

});
