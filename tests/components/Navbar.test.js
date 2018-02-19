/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import NavBar from 'src/components/NavBar';


/*
 * Code
 */
should();


/*
 * Code
 */
describe('NavBar', () => {
  it('should be a function', () => {
    NavBar.should.be.a('function');
  });
});
