/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import Description from 'src/components/Description';


/*
 * Code
 */
should();


/*
 * Code
 */
describe('Description', () => {
  it('should be a function', () => {
    Description.should.be.a('function');
  });
});
