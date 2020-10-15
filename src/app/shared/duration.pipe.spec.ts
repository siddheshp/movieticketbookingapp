import { DurationPipe } from './duration.pipe';

//test suite
describe('Duration Pipe', () => {
    //Arrange
    let durationPipe: DurationPipe;
    beforeEach(() => {
        durationPipe = new DurationPipe();
    });

    //unit test case
    it('create an instance', () => {
        expect(durationPipe).toBeTruthy();
    });

    //unit test case for transform method
    it('should return formatted duration', () => {
        //Act
        const minutes = durationPipe.transform(155);
        //Assert
        expect(minutes).toBe('2 hr 35 mins');
    });
});
