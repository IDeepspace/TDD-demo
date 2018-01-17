describe('mommify', () => {

    it('should return b when given b', () => {
        const expection = 'b';
        const result = mommy('b');
        expect(result).toEqual(expection);
    });

    it('should return hmm when given hmm', () => {
        const expection = 'hmm';
        const result = mommy('hmm');
        expect(result).toEqual(expection);
    });

    it('should return mommy when given a', () => {
        const expection = 'mommy';
        const result = mommy('a');
        expect(result).toEqual(expection);
    });

    it('should return mommy when given e', () => {
        const expection = 'mommy';
        const result = mommy('e');
        expect(result).toEqual(expection);
    });

    it('should return mommy when given i', () => {
        const expection = 'mommy';
        const result = mommy('i');
        expect(result).toEqual(expection);
    });

    it('should return mommy when given o', () => {
        const expection = 'mommy';
        const result = mommy('o');
        expect(result).toEqual(expection);
    });

    it('should return mommy when given u', () => {
        const expection = 'mommy';
        const result = mommy('u');
        expect(result).toEqual(expection);
    });
    
    it('should return mommy when given ae', () => {
        const expection = 'mommy';
        const result = mommy('ae');
        expect(result).toEqual(expection);
    });

    it('should return shmommy when given she', () => {
        const expection = 'shmommy';
        const result = mommy('she');
        expect(result).toEqual(expection);
    });

    it('should return hmommyr when given hear', () => {
        const expection = 'hmommyr';
        const result = mommy('hear');
        expect(result).toEqual(expection);
    });

});