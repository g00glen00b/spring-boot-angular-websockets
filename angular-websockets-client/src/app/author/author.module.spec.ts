import { AuthorModule } from './author.module';

describe('AuthorModule', () => {
  let authorModule: AuthorModule;

  beforeEach(() => {
    authorModule = new AuthorModule();
  });

  it('should create an instance', () => {
    expect(authorModule).toBeTruthy();
  });
});
