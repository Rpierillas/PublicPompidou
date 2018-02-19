/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import Logout from 'src/components/Logout';


/*
 * Code
 */
should();


/*
 * Code
 */
describe('Logout', () => {
  it('should be a function', () => {
    Logout.should.be.a('function');
  });
});
