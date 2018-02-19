/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import Character from 'src/components/Character';


/*
 * Code
 */
should();


/*
 * Code
 */
describe('Character', () => {
  it('should be a function', () => {
    Character.should.be.a('function');
  });
});
