// public class incapsulation{


       
//     private  String name = "yuvraj";
//     static int age = 21;
//     String color = "blue";

//     public static  int printdata(){
//         // System.out.println(name);
//        return age;
//         // System.out.println(color);
//     }

//     public static void main(String args[]){

//         incapsulation in = new incapsulation();
//         System.out.println(in.name);
//         // System.out.println(in.age);
//         System.out.println(in.color);
//         in.age = 22;
//         System.out.print(in.printdata());
//     }

// }


class Student{
    String name;
    int age;


    public void PrintInfo(){
        System.out.print(name+"  ");
        System.out.println(age);
    }


    //  parameterised constructor ---------------
    // Student(String name, int age){
    //     // System.out.println("constructor called");
    //     this.name = name;
    //     this.age = age;
    // }


    //  copy constructor --------------

    Student(Student s2){
        // System.out.println("constructor called");
        this.name = s2.name;
        this.age = s2.age;
    }
    Student(){
        // System.out.println("constructor called");
   
    }
}

class OOPS {
    public static void main(String args[]){
        Student s = new Student();
        s.name = "yuvraj";
        s.age = 21;
        // s.PrintInfo();
        // Student s1 = new Student("yashraj", 20);
        // // s1.name = "yash";
        // // s1.age = 20;
        // s1.PrintInfo();
        Student s2 = new Student(s);
        // s2.name = "bhola";
        // s2.age = 22;
        s2.PrintInfo();

    }
}