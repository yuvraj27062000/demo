

class shape{
    public void print(){
        System.out.println("Inherited class by tringle");
    }
    
}
class tringle extends shape{
     tringle(int h, int l){
        System.out.println((h*l)/2);
    }
         
}
//  multiple Inheritance

// class Equilateraltringle extends shape{
//     public void area(int h, int l){
//         System.out.print((h*l)/2);
//     }
       
// }
//  heirachial Inheritance 
class circle extends shape{
    circle(int r){
        System.out.println((3.14)*r*r);
    }
       
}



public class Inheritance {
    public static void main(String args[]){

        circle t1 = new circle(3);
        tringle t2 = new tringle(3,5);
        // System.out.print(t1.color);
        // t1.color = "red";
        t2.print();
        t1.print();
    }
}
