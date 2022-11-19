public class Polymorphism {

    public void PrintInfo(String name){
        System.out.println(name);
    }
    public void PrintInfo(int age){
        System.out.println(age);
    }
    public void PrintInfo(String name, int age){
        System.out.println(name+"  "+age);
    }

    public static void main(String args[]){

        Student s1 = new Student();
        s1.name = "yuvraj";  
        s1.age = 21;
        s1.PrintInfo();

    }
}
