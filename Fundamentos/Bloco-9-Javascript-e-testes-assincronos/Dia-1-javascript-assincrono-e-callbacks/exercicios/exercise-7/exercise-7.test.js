const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testa se o retorno da função está Maiúsculo', (done) => {
   uppercase('Cuscuz é muito bom!', (string) => {
      try {
          expect(string).toBe('CUSCUZ É MUITO BOM!');
          done();
      } catch (error) {
          done(error);
      }
   });
});