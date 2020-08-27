 const log = new console.Console({
        stdout: process.stdout,
        strerr: process.strerr
      });
      
      const color = {
        log: "  \u001b[37m",
        info: "  \x1b[1;32m",
        warning: " \u001b[33m",
        false: "  \x1b[1;31m",
        dang: "  \x1b[0;36m"
        
      

      };
      
      console.Console.prototype.logger = function(text) {
        this.log(`${color.log}${text}`);
      };
      
      console.Console.prototype.information = function(text) {
        this.info(`${color.info}${text}`);
      };

      console.Console.prototype.warning = function(text) {
        this.warn(`${color.warning}${text}`);
      };
      
      console.Console.prototype.false = function(text) {
        this.error(`${color.false}${text}`);
      };
      
      console.Console.prototype.danger = function(text) {
        this.error(`${color.dang}${text}`);
      };
      
      
      log.logger("Este es un mensaje de consola");
      log.information("Esta es información de la compilación");
      log.warning("Función de analisis de consola");
      log.false("El estado no esta activo (true)");
      log.danger("Peligro, error en el reactor de código");
