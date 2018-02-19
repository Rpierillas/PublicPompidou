/*
 * Npm Import
 */
import { should } from 'chai';

/*
 * Local Import
 */
import { Scene, loadCurrentPage } from 'src/components/Scene';
/*
 * Code
 */
should();


/*
 * Code
 */
describe('Scene', () => {
  it('should be a function', () => {
    Scene.should.be.a('function');
  });
  it('should contain a function', () => {
    Scene.should.contain.a('function');
  });
  describe('loadCurrentPage', () => {
    it('should be a function', () => {
      loadCurrentPage.should.be.a('function');
    });
  });
});
