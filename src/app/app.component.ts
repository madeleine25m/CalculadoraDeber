import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadoraDeber';
  Ingreso:any="";
  Resultado:any;
  cadena:any="";
  operacion:any=""; 
  val1:any;
  val2:any;
  
  
    uno(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"1";
    }
  
      dos(){
        this.cadena=this.Ingreso;
        this.Ingreso=this.cadena+"2";
  
    }
    tres(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"3";
     
       }
    
    cuatro(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"4";
       
         }
    
    cinco(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"5";
         
           }
    
     seis(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"6";
          
           }
    
     siete(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"7";
              
             }
    
     ocho(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"8";
               
            }
    
    nueve(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"9";
                  
              }
  
  
    punto(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+".";
                                     
          }          
                   
    cero(){
      this.cadena=this.Ingreso;
      this.Ingreso=this.cadena+"0";
                                   
                   
            }
                     
    limpiar(){
      this.Ingreso="";
      this.Resultado=0;
                      
             }
    
    mas(){  
      this.operacion="+";
      this.cadena=this.Ingreso;
      this.val1=parseFloat(this.cadena);
      this.Ingreso="";
                       
        }
    
    por(){
      this.operacion="*";
      this.cadena=this.Ingreso;
      this.val1=parseFloat(this.cadena);
      this.Ingreso="";
                         
              } 
  
    
   div(){
    this.operacion="/";
    this.cadena=this.Ingreso;
    this.val1=parseFloat(this.cadena);
    this.Ingreso="";
                             
             }
    
    menos(){
      if(this.Ingreso==""){
        this.cadena=this.Ingreso;
        this.Ingreso=this.cadena+"-";
      }else{
           
        this.operacion="-";
        this.cadena=this.Ingreso;
        this.val1=parseFloat(this.cadena);
        this.Ingreso="";
      }
     
                               
               }
    
    raiz(){
      this.operacion="exp";
      this.cadena=this.Ingreso;
      this.val1=parseFloat(this.cadena);
      this.Ingreso="";
      this.Resultado=Math.pow(this.val1,2);
      this.Ingreso=this.Resultado;
  
                                  
            }
     igual(){
      this.cadena=this.Ingreso;
      this.val2=parseFloat(this.cadena);
      if(this.operacion === "+"){
        this.Ingreso="";
        this.Resultado=this.val1+this.val2;
      }
  
      if(this.operacion === "-"){
        this.Ingreso="";
        this.Resultado=this.val1-this.val2;
      }
  
  
      if(this.operacion === "*"){
        this.Ingreso="";
        this.Resultado=this.val1*this.val2;
      }
  
      if(this.operacion === "/"){
        this.Ingreso="";
        this.Resultado=this.val1/this.val2;
      }
  
      if(this.operacion === "+"){
        this.Ingreso="";
        this.Resultado=this.val1+this.val2;
      }
  

  
  
  
      this.Ingreso=this.Resultado;
  
  
  
                                   
            }
  
  
      comprobar(){
       alert("hola");
      }
  
  
  
  }
  




